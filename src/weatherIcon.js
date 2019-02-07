const chooseIcon = () => {
    let weatherImage = "";
    switch (result.current.condition.code) {
        case "1000":
            weatherImage = "assets/animated/day.svg";
            break;
        case "1006":
            weatherImage = "assets/animated/cloudy-day-1.svg";
            break;
        case "1000":
            weatherImage = "assets/animated/day.svg";
            break;
        case "1000":
            weatherImage = "assets/animated/day.svg";
            break;
        case "1000":
            weatherImage = "assets/animated/day.svg";
            break;
        case "1000":
            weatherImage = "assets/animated/day.svg";
            break;
        case "1000":
            weatherImage = "assets/animated/day.svg";
            break;
        case "1000":
            weatherImage = "assets/animated/day.svg";
            break;
    }
}