import $ from "jquery";
import { spinner } from "../spinner";

export const locationSuccess = (position) => {
    spinner();
    let methode = "/current.json";
    $.ajax({
        url: `http://api.apixu.com/v1${methode}?key=c0de682c049149da9c9132231190702&q=${position.coords.latitude},${position.coords.longitude}`,
        success: (result) => {
            displayWeather(result);
        },
        error: (e) => {
        },
    })
};

export const locationError = (PositionError) => {
    console.log("Error");
    displayIcon("location_off");

    $(`#location`).append(
        $(`<button>`).text("Réessayer").attr({
            "class": "btn btn-danger btn-lg",
        })
    );
    $(`.btn`).click(() => navigator.geolocation.getCurrentPosition(previsions, locationError))
};