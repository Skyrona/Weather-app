import $ from "jquery";
import { locationSuccess, buttonForecast } from "./display_icon";

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
};

export const enterTown = (event) => {
    if (13 === event.which) {
        event.preventDefault();
        getWeather(event.target.value);
    }
}

export const getCity = (city) => {
    return city;
}