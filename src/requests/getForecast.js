import axios from "axios";
/* eslint-disable no-console */

const getForecast = (
  searchText,
  setSelectedDate,
  setForecasts,
  setLocation,
  setErrorMessage
) => {
  let endpoint = "https://mcr-codes-weather-app.herokuapp.com/forecast";
  if (searchText) {
    endpoint += `?city=${searchText}`;
  }

  axios
    .get(endpoint)
    .then((response) => {
      setSelectedDate(response.data.forecasts[0].date);
      setForecasts(response.data.forecasts);
      setLocation(response.data.location);
    })
    .catch((error) => {
      console.log(`"here is the error**********" + ${error}`);
      const { status } = error.response;
      if (status === 404) {
        setErrorMessage("Not a valid UK town or city");
        console.error("Location is not valid", error);
      }
      if (status === 500) {
        setErrorMessage("Server error, try again later");
        console.error("Server error", error);
      }
    });
};

export default getForecast;
