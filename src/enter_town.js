import $ from "jquery";
import { isDay } from "./is_day";
import { displayCurrentWeather } from "./display_current_weather";
import { locationSuccess, buttonForecast } from "./display_icon";

export const enterTown = (event) => {
    if (13 === event.which) {
        event.preventDefault();
        getWeather(event.target.value);
    }
}

const getWeather = (city) => {
    $("#current").empty().append(
        $(`<div>`).attr({
            "class": "spinner-border text-dark",
            "role": "status",
        }).append(
            $(`<span>`).attr({
                "class": "sr-only align-middle"
            }).text("Loading...")
        )
    );
    locationSuccess(city);
    buttonForecast();

    // let methode = "/forecast.json";
    // $.ajax({
    //     url: `http://api.apixu.com/v1${methode}?key=c0de682c049149da9c9132231190702&q=${city}`,
    //     success: (result) => {
    //         $("#forecast").empty();
    //         isDay(result);
    //         displayCurrentWeather(result);
    //     },
    //     error: (e) => {

    //     },
    // })
};

export const getCity = (city) => {
    return city;
}