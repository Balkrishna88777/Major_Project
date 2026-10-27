if (window.mapToken && window.listingLocation) {
  mapboxgl.accessToken = window.mapToken;

  const renderMap = (coordinates) => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v12",
      center: coordinates,
      zoom: 9,
    });

    const marker = document.createElement("div");
    marker.className = "airbnb-marker";
    marker.setAttribute("aria-label", window.listingLocation);

    new mapboxgl.Marker(marker)
      .setLngLat(coordinates)
      .setPopup(
        new mapboxgl.Popup({ offset: 30, closeButton: false }).setHTML(
          `<strong>${window.listingLocation}</strong>`
        )
      )
      .addTo(map);
  };

  const savedCoordinates = window.listingGeometry?.coordinates;

  if (savedCoordinates?.length === 2) {
    renderMap(savedCoordinates);
  } else {
    const query = encodeURIComponent(window.listingLocation);
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=${window.mapToken}&limit=1`)
      .then((response) => response.json())
      .then((data) => {
        const coordinates = data.features?.[0]?.geometry?.coordinates;
        if (coordinates?.length === 2) {
          renderMap(coordinates);
        }
      });
  }
}
