import $ from "jquery";

export const isDay = (result) => {
    $(`body`).css({
        "background-color": 1 === result.current.is_day ? "lightblue" : "black",
        "color": 1 === result.current.is_day ? "black" : "white",
    });
}