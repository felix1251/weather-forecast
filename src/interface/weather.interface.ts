export interface IWeatherMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

export interface IWeatherDetails {
  id: string;
  main: string;
  description: string;
  icon: string;
}

export interface IWeather {
  main: IWeatherMain;
  weather: IWeatherDetails[];
}
