import $ from "jquery";

export const getForecast = (position) => {

    let location = {
        lat: position.coords.latitude,
        long: position.coords.longitude,
    }
    let methode = "/forecast.json";
    console.log("hello");

    $.ajax({
        url: `http://api.apixu.com/v1${methode}?key=c0de682c049149da9c9132231190702&q=${location.lat},${location.long}&days=5`,
        success: (result) => {
            displayForecast(result);
        },
        error: (e) => {

        },
    })
};
