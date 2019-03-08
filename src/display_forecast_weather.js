import $ from "jquery";

export const displayForecastWeather = (result) => {
    $("#button").empty();
    result.forecast.forecastday.forEach((value) => {
        $("#forecast").append(
            $("<div>").attr({
                "class": "card",
            }).append(
                $("<img>").attr({
                    "class": "card-img-top",
                    "src": value.day.condition.icon,
                })
            ).append(
                $("<p>").css({
                    "font-size": "20pt",
                    "color": "black",
                }).text(`Min : ${value.day.mintemp_c}°C`).attr({
                    "class": "text-center",
                })
            ).append(
                $("<p>").css({
                    "font-size": "20pt",
                    "color": "black",
                }).text(`Max : ${value.day.maxtemp_c}°C`).attr({
                    "class": "text-center",
                })
            ).append(
                $("<div>").attr({
                    "class": "card-body",
                }).append(
                    $("<p>").css({
                        "font-size": "20pt",
                        "color": "black",
                    }).text(value.date)
                )
            )
        );
    });
};