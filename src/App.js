import { useEffect, useState } from "react";
import myBackgroundImg from "./background.jpg";

const apiURL = "https://randomuser.me/api/?page=1&results=1&seed=abc";

function App() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    imageUrl: "",
    gender: "",
    phoneNumber: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(apiURL);
      const data = await response.json();
      console.log(data.results[0]);
      const personDetails = {
        firstName: data.results[0].name.first,
        lastName: data.results[0].name.last,
        imageUrl: data.results[0].picture.large,
        gender: data.results[0].gender,
        phoneNumber: data.results[0].phone,
      };
      setData(personDetails);
    };
    fetchData();
  }, []);

  console.log("personDetails", data);
  const { firstName, lastName, gender, imageUrl, phoneNumber } = data;

  return (
    <div
      className="flex justify-center items-center w-[100%] h-[100vh] bg-cover"
      style={{ backgroundImage: `url(${myBackgroundImg})` }}
    >
      <div className="w-[90vw] h-[90vh] flex flex-col justify-center items-center bg-white bg-opacity-10 rounded-lg gap-10 sm:flex-row">
        <img
          src={imageUrl}
          alt="personImg"
          className="w-[200px] h-[200px] object-cover border-b-gray-600 rounded-md"
        />
        <div className="flex flex-col gap-4 md:gap-8 justify-center items-center md:justify-normal md:items-start">
          <div className="flex flex-col text-xl gap-4 md:text-2xl md:flex-row">
            <h3>FirstName: {firstName}</h3>
            <h3>LastName: {lastName}</h3>
          </div>
          <div className="text-xl flex flex-col gap-4 md:text-2xl md:gap-8  justify-center items-center md:justify-normal md:items-start">
            <h3>Gender: {gender}</h3>
            <h3>Phone Number: {phoneNumber}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
