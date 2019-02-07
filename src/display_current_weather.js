import $ from "jquery";
import { enterTown } from "./enter_town";

export const displayCurrentWeather = (result) => {    
    $(`#current`).empty().append(
        $(`<div>`).attr({}).append(
            $(`<img>`).attr({
                "class": "card-img-top",
                "src": result.current.condition.icon,
            })
        ).append(
            $(`<p>`).css("font-size", "20pt").text(`${result.current.temp_c}°C`)
        ).append(
            $(`<div>`).attr({
                "class": "card-body",
            }).append(
                $(`<p>`).css("font-size", "20pt").text(result.location.name).click(
                    () => { transformForm(result.location.name) }
                )

            )
        )
    )
}

const transformForm = (nameTown) => {
    $('.card-body:first:last-child').empty().append(
        $(`<form>`).append(
            $(`<input>`).attr({
                "type": "text",
                "class": "card-text",
                "placeholder": nameTown,
            })
            ).bind("keydown", (event) => 
                enterTown(event)
            ).bind("blur", () => {
                revertForm(nameTown);
            })
        // ).on({
        //     "keydown": (event) => enterTown(event),
        //     "blur": () => revertForm(nameTown),
        // })
    )
};

const revertForm = (nameTown) => {
    $('.card-body:last-child').empty().append(
        $(`<p>`).css("font-size", "20pt").text(nameTown).click(
            () => { transformForm(nameTown) }
        )
    )
}