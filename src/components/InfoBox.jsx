import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox ({ info }) {

    const INIT_URL = "https://images.unsplash.com/photo-1561470508-fd4df1ed90b2?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const HOT_URL = "https://img.freepik.com/free-vector/flat-summer-heat-illustration-with-woman-sweating-sun_23-2149433188.jpg?size=626&ext=jpg&ga=GA1.1.1204852086.1712037288&semt=ais";
    const COLD_URL = "https://t3.ftcdn.net/jpg/02/23/17/06/240_F_223170686_MRYTjMlAXLPTsxUKxtYh0ZIzeblktaA5.jpg";
    const RAIN_URL = "https://t4.ftcdn.net/jpg/03/66/90/39/240_F_366903907_RzCXMYTOdWnfEmm8wZ3fKnfEOLE2Qhmh.jpg";

    // let info = {
    //     city: "Delhi",
    //     feelsLike: 24,
    //     humidity: 12,
    //     temp: 36.73,
    //     tempMax: 37.05,
    //     tempMin: 36.73,
    //     weather: "haze",
    // }
    return(
        <div className="infobox">
   
          <div className="cardContainer">
          <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80
           ? RAIN_URL
           : info.temp > 15
           ? HOT_URL
           : COLD_URL
          }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {
          info.humidity > 80
           ? <ThunderstormIcon/>
           : info.temp > 15
           ? <WbSunnyIcon/>
           : <AcUnitIcon/>
          }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
         <p>temperature = {info.temp}&deg;C </p>
         <p>Humidity = {info.humidity} </p>
         <p>Min Temp = {info.tempMin}&deg;C </p>
         <p>Max Temp = {info.tempMax}&deg;C </p>
         <p>The Weather can be  describe as <i>{info.weather}</i> and feels like= {info.feelsLike}&deg;C </p>
        

        
        </Typography>
      </CardContent>
     
    </Card>
    </div>
        </div>
    );
}