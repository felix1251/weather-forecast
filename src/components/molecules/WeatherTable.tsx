import { IWeather } from "@/interfaces/weather.interface";
import { getFormattedDate } from "@/utils/date";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../atoms";

interface IWeatherTableProps {
  weather: IWeather;
}

const WeatherTable: React.FunctionComponent<IWeatherTableProps> = ({
  weather,
}: IWeatherTableProps) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-10">
      <div className="flex gap-3 justify-center font-medium text-lg text-white">
        <span>City: {weather.name}</span>
        <span>Country: {weather.sys.country}</span>
      </div>
      <div className="relative overflow-x-auto shadow-lg border border-primary/50 rounded-xl">
        <table className="w-full text-left rtl:text-right text-gray-500">
          <thead className="text-primary-light uppercase bg-secondary">
            <tr>
              <th scope="col" className="px-6 py-3">
                Date (mm/dd/yyyy)
              </th>
              <th scope="col" className="px-6 py-3">
                Temp(F)
              </th>
              <th scope="col" className="px-6 py-3 hidden md:inline-block">
                Description
              </th>
              <th scope="col" className="px-6 py-3 hidden md:inline-block">
                Main
              </th>
              <th scope="col" className="px-6 py-3 hidden md:inline-block">
                Pressure
              </th>
              <th scope="col" className="px-6 py-3 hidden lg:inline-block">
                Humidity
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-secondary text-white">
              <td className="px-6 py-4">{getFormattedDate(new Date())}</td>
              <td className="px-6 py-4">{weather.main.temp}</td>
              <td className="px-6 py-4 hidden md:inline-block">
                {weather.weather[0].description}
              </td>
              <td className="px-6 py-4 hidden md:inline-block">
                {weather.weather[0].main}
              </td>
              <td className="px-6 py-4 hidden md:inline-block">
                {weather.main.temp}
              </td>
              <td className="px-6 py-4 hidden lg:inline-block">
                {weather.main.humidity}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-end">
        <Button size="sm" onClick={() => navigate("/")}>
          Back
        </Button>
      </div>
    </div>
  );
};

export default WeatherTable;
