import { IWeather } from "@/interfaces/weather.interface";
import { CityNotFound, WeatherTable } from "@/molecules";
import { axiosFetcher } from "@/utils/api";
import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import useSWR from "swr";

const WheatherInfo: React.FunctionComponent = () => {
  const params = useParams();
  const [searchParams] = useSearchParams();

  const {
    error,
    data: weather,
    isLoading,
  } = useSWR<IWeather>(
    `http://api.openweathermap.org/data/2.5/weather?q=${
      params.city
    },${searchParams.get("ct")}&appid&appid=${
      import.meta.env.VITE_WEATHER_API_KEY
    }`,
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
        <div>loading...</div>
      )}
    </div>
  );
};

export default WheatherInfo;
