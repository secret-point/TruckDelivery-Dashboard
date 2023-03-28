export const formatDate = (date) => {
  if (date && date != "Invalid Date") {
    return new Date(date).toISOString().split("T")[0];
  }
  return "";
};
const toRadians = (degree) => {
  return degree * (Math.PI / 180);
}
export const calculateDistance = (lat1, lng1, lat2, lng2) => {
  const radius = 6371; // Earth's radius in km
  const dLat = toRadians(lat2 - lat1);
  const dLng = toRadians(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = radius * c;
  const miles = distance * 0.621371;
  return miles.toFixed(2);
};


export const toFixed = (x, d) => {
  if (!d) return x.toFixed(d); // don't go wrong if no decimal
  return Number(x)
    .toFixed(d)
    .replace(/\.?0+$/, "");
}


export const getAddressFromGoogleApi = (city) => {
  var address = city;
  var geocoder = new google.maps.Geocoder();
 return geocoder.geocode({ address: address }, function (results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      const city = address.split(",")[0];
      const state = address.split(",")[1];
      const lat = results[0].geometry.location.lat();
      const lng = results[0].geometry.location.lng();
      return {city, state, lat, lng};
      // THIS.updateGoogleCityState(city, state, lat, lng, type);
    } else {
      console.log(
        "Geocode was not successful for the following reason: " + status
      );
    }
  });
}