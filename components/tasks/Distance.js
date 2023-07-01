import { usersData } from "@/data/Users-data";

function getDistanceBetweenPoints(
  latitude1,
  longitude1,
  latitude2,
  longitude2,
  unit = "miles"
) {
  let theta = longitude1 - longitude2;
  let distance =
    60 *
    1.1515 *
    (180 / Math.PI) *
    Math.acos(
      Math.sin(latitude1 * (Math.PI / 180)) *
        Math.sin(latitude2 * (Math.PI / 180)) +
        Math.cos(latitude1 * (Math.PI / 180)) *
          Math.cos(latitude2 * (Math.PI / 180)) *
          Math.cos(theta * (Math.PI / 180))
    );
  if (unit == "miles") {
    return Math.round(distance, 2);
  } else if (unit == "kilometers") {
    return Math.round(distance * 1.609344, 2);
  }
}

let result = [];
let allCords = [];
usersData.map((item) => allCords.push(item.address.geolocation));

let maxLenght = 0;
for (let i = 0; i < allCords.length; i++) {
  for (let j = 0; j < allCords.length; j++) {
    let distance = getDistanceBetweenPoints(
      allCords[i].lat,
      allCords[i].long,
      allCords[j].lat,
      allCords[j].long
    );
    if (distance > maxLenght) {
      result = [];
      result.push(distance, i, j);
      maxLenght = distance;
    }
  }
}
console.log(result[0], usersData[result[1]].name, usersData[result[2]].name);

const data = {
  distance: result[0],
  person_1: usersData[result[1]].name,
  person_2: usersData[result[2]].name,
};

export default data;
