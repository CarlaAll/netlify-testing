import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    return alert(
      `The Weather in ${response.data.name} is ${Math.round(
        response.data.main.temp
      )}°C.`
    );
  }

  const apiKey = "0b04f7882b2a886e7942aa9e854e4071";
  const units = "metric";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(handleResponse);
  return <h2>The Weather App is coming soon...</h2>;
}
