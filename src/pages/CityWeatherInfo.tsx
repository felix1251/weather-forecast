import { LoadingIndicator } from "@/components/atoms";
import { IWeather } from "@/interfaces/weather.interface";
import { CityNotFound, WeatherTable } from "@/molecules";
import { axiosFetcher } from "@/utils/api";
import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";

const WheatherInfo: React.FunctionComponent = () => {
  const params = useParams();

  const {
    error,
    data: weather,
    isLoading,
  } = useSWR<IWeather>(
    `http://api.openweathermap.org/data/2.5/weather?q=${params.city},${
      params.country
    }&appid&appid=${import.meta.env.VITE_WEATHER_API_KEY}`,
    axiosFetcher
  );

  if (error) {
    return <CityNotFound />;
  }

  return (
    <div className="grid place-items-center w-full h-full">
      {!isLoading && weather ? (
        <WeatherTable weather={weather} />
      ) : (
        <LoadingIndicator />
      )}
    </div>
  );
};

export default WheatherInfo;
