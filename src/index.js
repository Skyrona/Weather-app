import $ from "jquery";
import { displayIcon, buttonForecast} from "./display_icon";
// import { buttonForecast } from "./button_forecast";

let icon = "location_on";

$(`#title`).append(
    $(`<h1>`).text("Quel temps fait-il chez vous ?").attr("class", "marginTop2")
);


displayIcon(icon);
// buttonForecast();
