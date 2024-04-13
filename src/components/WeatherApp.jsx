// import SearchBox from "./components/SearchBox";
// import InfoBox from "./components/InfoBox";

import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";


 export default function WeatherApp() {

    const [weatherInfo, setWeatherInfo] = useState({
        city: "Wonderland",
        feelsLike: 24,
        humidity: 12,
        temp: 36.73,
        tempMax: 37.05,
        tempMin: 36.73,
        weather: "haze",
    });


    let updateInfo =(newInfo) => {
        setWeatherInfo(newInfo);
    }
    return(
        <div>
            <h1>Weather app by delta</h1>
            <SearchBox updateInfo = {updateInfo}/>
           <InfoBox info = {weatherInfo}/>     
        </div>
    );
}