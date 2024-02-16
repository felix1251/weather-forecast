import { IWeather } from "@/interface/weather.interface";
import { axiosFetcher } from "@/utils/api";
import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import useSWR from "swr";

const WheatherInfo: React.FunctionComponent = () => {
  const params = useParams();
  const [searchParams] = useSearchParams();

  const { error, data, isLoading } = useSWR<IWeather[]>(
    `http://api.openweathermap.org/data/2.5/weather?q=${
      params.city
    },${searchParams.get("ct")}&appid&appid=${
      import.meta.env.VITE_WEATHER_API_KEY
    }`,
    axiosFetcher
  );

  console.log(data, error);

  return <>{isLoading && <div>loading...</div>}</>;
};

export default WheatherInfo;
