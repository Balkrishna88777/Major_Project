const Listing = require("../models/listing");
const ExpressError = require("../utils/ExpressError");

const geocodeListing = async (listingData) => {
    if (!process.env.MAP_TOKEN || !listingData.location) {
        return undefined;
    }

    const query = encodeURIComponent(`${listingData.location}, ${listingData.country}`);
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=${process.env.MAP_TOKEN}&limit=1`;
    const response = await fetch(url);

    if (!response.ok) {
        return undefined;
    }

    const data = await response.json();
    return data.features?.[0]?.geometry;
};

module.exports.index = async (req,res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", {allListings});
};

module.exports.renderNewForm = (req,res) => {
    res.render("listings/new.ejs");
};

module.exports.showListing = async (req,res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id).populate({path: "reviews", populate: {path: "author",},
    }).populate("owner");
    if(!listing){
        req.flash("error","Listing does not exist");
        return res.redirect("/listings")
    }
    res.render("listings/show.ejs", {listing});
};

module.exports.createListing = async (req, res, next) => {
    let url = req.file.path;
    let filename = req.file.filename;
    if(!req.body.listing) {
        throw new ExpressError(400, "Send valid data for listing");
    }
    const listingData = req.body.listing;
    if (listingData.price != null && listingData.price !== "") {
        listingData.price = Number(listingData.price);
    }
    if (typeof listingData.image === "string") {
        listingData.image = { url: listingData.image };
    }
    const geometry = await geocodeListing(listingData);
    const newListing = new Listing(listingData);
    newListing.owner = req.user._id;
    newListing.image = {url, filename};
    if (geometry) {
        newListing.geometry = geometry;
    }
    await newListing.save();
    req.flash("success","New Listing Created!");
    res.redirect("/listings"); 
   
};

module.exports.editForm = async (req,res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("error","Listing does not exist");
        return res.redirect("/listings")
    }
    req.flash("success","New Edit Successfull!");
    res.render("listings/edit.ejs", { listing });
};

module.exports.updateListing = async (req, res) => {
   
    let {id} = req.params;
    let listing = await Listing.findById(id);
    Object.assign(listing, req.body.listing);
    const geometry = await geocodeListing(listing);
    if (geometry) {
        listing.geometry = geometry;
    }

    if(typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = {url, filename};
    }
    await listing.save();
    req.flash("success","Listing Updated!");
    res.redirect(`/listings/${id}`);
};

module.exports.deleteListing = async (req, res) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  req.flash("success","Listing Deleted!");
  res.redirect("/listings");
};
