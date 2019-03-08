import $ from "jquery";

export const spinner = () => {
    $("#location").empty();
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
};