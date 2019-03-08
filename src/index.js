import $ from "jquery";
import { displayIcon} from "./display_icon";

$("#title").append(
    $("<h1>").text("Quel temps fait-il chez vous ?").attr("class", "marginTop2")
);

displayIcon("location_on");