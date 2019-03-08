import { locationSuccess, buttonForecast } from "./display_icon";
import { spinner } from "./spinner";

const getWeather = (city) => {
    spinner();
    locationSuccess(city);
    buttonForecast();
};

export const enterTown = (event) => {
    if (13 === event.which) {
        event.preventDefault();
        getWeather(event.target.value);
    }
};

export const getCity = (city) => {
    return city;
};