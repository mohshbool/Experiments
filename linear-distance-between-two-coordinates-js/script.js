function degreesToRadians(degrees) {
  return degrees * Math.PI / 180;
}

function distanceInKmBetweenEarthCoordinates(lat1, lon1, lat2, lon2) {
  const EARTH_RADIUS_IN_KM = 6371;

  let dLat = degreesToRadians(lat2-lat1);
  let dLon = degreesToRadians(lon2-lon1);

  lat1 = degreesToRadians(lat1);
  lat2 = degreesToRadians(lat2);

  let a = Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
  
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  
  return earthRadiusKm * c;
}
