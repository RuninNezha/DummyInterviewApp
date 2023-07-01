import Map from "@/components/Map";
import classes from "./UserData.module.css";

const UserData = (user) => {
  const actualUser = user.userId;
  const { lat, long } = actualUser.address.geolocation;
  const coords = [lat, long];

  return (
    <form>
      <div className={classes.data}>
        <p>Email: {actualUser.email}</p>
        <p>City: {actualUser.address.city}</p>
        <p>Username: {actualUser.username}</p>
        <p>Street: {actualUser.address.street}</p>
        <p>Password: {actualUser.password}</p>
        <p>Number: {actualUser.address.number}</p>
        <p>Phone: {actualUser.phone}</p>
        <p>Zipcode: {actualUser.address.zipcode}</p>
      </div>
      <Map coords={coords} />
    </form>
  );
};

export default UserData;
