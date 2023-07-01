import classes from "./home.module.css";
import data from "@/components/tasks/Distance";

const Home = () => {
  const capitalizedName = (str) => {
    let correct = str.slice(0, 1).toUpperCase() + str.slice(1);
    return correct;
  };

  return (
    <div className={classes.content}>
      <h1>Tasks to solve</h1>
      <h2> Two users living furthers away form each other</h2>
      <p>
        Highest distance: {data.distance} kilometers between:{" "}
        {capitalizedName(data.person_1.firstname)}{" "}
        {capitalizedName(data.person_1.lastname)} and{" "}
        {capitalizedName(data.person_2.firstname)}{" "}
        {capitalizedName(data.person_2.lastname)}{" "}
      </p>
    </div>
  );
};
export default Home;
