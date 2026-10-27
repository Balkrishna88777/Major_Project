const mongoose = require("mongoose");
const Listing = require("./models/listing");
require("dotenv").config();

const sampleListings = [
    {
        title: "Cozy Beachfront Cottage",
        description: "Wake up to the sound of waves in this charming beachfront cottage in Goa.",
        image: {
            filename: "beach-cottage",
            url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2"
        },
        price: 3500,
        location: "Goa",
        country: "India"
    },
    {
        title: "Himalayan Mountain Retreat",
        description: "Enjoy breathtaking mountain views from this peaceful retreat in Manali.",
        image: {
            filename: "mountain-retreat",
            url: "https://images.unsplash.com/photo-1518732714860-b62714ce0c59"
        },
        price: 4200,
        location: "Manali",
        country: "India"
    },
    {
        title: "Luxury Apartment in the City",
        description: "A stylish city apartment perfect for exploring Mumbai.",
        image: {
            filename: "city-apartment",
            url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
        },
        price: 5000,
        location: "Mumbai",
        country: "India"
    },
    {
        title: "Peaceful Riverside Cottage",
        description: "Relax beside the river and enjoy the natural beauty of Rishikesh.",
        image: {
            filename: "riverside-cottage",
            url: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8"
        },
        price: 2800,
        location: "Rishikesh",
        country: "India"
    },
    {
        title: "Royal Heritage Haveli",
        description: "Experience traditional Rajasthani architecture in this beautiful heritage stay.",
        image: {
            filename: "heritage-haveli",
            url: "https://images.unsplash.com/photo-1602216056096-3b40cc0efc18"
        },
        price: 4500,
        location: "Jaipur",
        country: "India"
    },
    {
        title: "Serene Tea Garden Bungalow",
        description: "Escape to the hills and enjoy peaceful tea garden views in Darjeeling.",
        image: {
            filename: "tea-garden-bungalow",
            url: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8"
        },
        price: 3000,
        location: "Darjeeling",
        country: "India"
    },
    {
        title: "Tropical Paradise Villa",
        description: "Stay in a tropical villa surrounded by lush greenery in Bali.",
        image: {
            filename: "tropical-villa",
            url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811"
        },
        price: 6500,
        location: "Bali",
        country: "Indonesia"
    },
    {
        title: "Modern Glass Cabin",
        description: "A contemporary cabin surrounded by the beautiful hills of Shillong.",
        image: {
            filename: "glass-cabin",
            url: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8"
        },
        price: 3800,
        location: "Shillong",
        country: "India"
    },
    {
        title: "Ocean View Luxury Villa",
        description: "Enjoy a luxurious coastal escape with stunning sea views in Alibaug.",
        image: {
            filename: "ocean-view-villa",
            url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811"
        },
        price: 8000,
        location: "Alibaug",
        country: "India"
    },
    {
        title: "Snow-Capped Mountain Chalet",
        description: "Experience a peaceful mountain getaway in the scenic region of Gulmarg.",
        image: {
            filename: "mountain-chalet",
            url: "https://images.unsplash.com/photo-1518732714860-b62714ce0c59"
        },
        price: 5500,
        location: "Gulmarg",
        country: "India"
    }
];

async function seedDB() {
    try {
        await mongoose.connect(process.env.ATLASDB_URL);
        console.log("Connected to MongoDB Atlas");

        await Listing.deleteMany({});
        await Listing.insertMany(sampleListings);

        console.log("10 sample listings inserted successfully!");
    } catch (error) {
        console.error("Seeding failed:", error.message);
    } finally {
        await mongoose.disconnect();
    }
}

seedDB();