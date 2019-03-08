import $ from "jquery";
import { spinner } from "./spinner";
import { displayCurrentWeather } from "./display_current_weather";
import { displayForecastWeather } from "./display_forecast_weather";
import { isDay } from "./is_day";

let weather = {};

export const buttonForecast = () => {
    $("#button").append(
        $("<button>").text("Météo pour la semaine").attr({
            "class": "btn btn-warning",
        }).bind("click", () => {
            displayForecastWeather(weather);
        })
    );
};

const locationError = (PositionError) => {
    displayIcon("location_off");

    $("#location").append(
        $("<button>").text("Réessayer").attr({
            "class": "btn btn-danger btn-lg",
        }).click(() => navigator.geolocation.getCurrentPosition(locationSuccess, locationError))
    );
};

export const locationSuccess = (position) => {
    spinner();
    let methode = "/forecast.json";
    let city = "object" !== typeof position ? position: `${position.coords.latitude},${position.coords.longitude}`;

    $.ajax({
        url: `http://api.apixu.com/v1${methode}?key=c0de682c049149da9c9132231190702&q=${city}&days=5`,
        success: (result) => {
            isDay(result);
            displayCurrentWeather(result);
            weather = result;
            $("#forecast").empty();
        },
        error: (e) => {
        },
    });
};

export const displayIcon = (icon) => {
    $("#location").empty().append(
        $("<span>").attr({
            "id": icon,
            "class": "material-icons align-middle",
        }).text(
            icon
        ).css({
            "position": "center"
        }).click(() => {
            navigator.geolocation.getCurrentPosition(locationSuccess, locationError);
            buttonForecast();
        })
    );
};

