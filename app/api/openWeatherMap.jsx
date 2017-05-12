import axios from 'axios';

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=3d7836c02d4c2acb47f56ac9778a3688';


export default {
  getTemp : (location) => {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}&units=metric`;

    return axios.get(requestUrl).then((res)=>{
      if(res.data.cod && res.data.message){
        throw new Error(res.data.message);
      }else{
        return res.data.main.temp;
      }
    },(res)=>{
      throw new Error(res.data.message);
    });
  }
}
