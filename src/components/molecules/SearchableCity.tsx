import { Button } from "@/atoms";
import { ICity } from "@/interface/city.interface";
import { Combobox, Transition } from "@headlessui/react";
import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchableCity: React.FunctionComponent = () => {
  const [selected, setSelected] = useState<ICity | object>({});
  const [cityQuery, setCityQuery] = useState<string>("");
  const [cityList, setCityList] = useState<ICity[]>([]);

  const alreadySelected = Object.keys(selected).length > 0;

  useEffect(() => {
    const findCity = async () => {
      try {
        const res = await axios.get(
          `http://api.openweathermap.org/geo/1.0/direct?q=${cityQuery}&limit=5&appid=c3e1728796506de352898f27d045bd32`
        );
        setCityList(res.data);
      } catch (error) {
        alert("somthing is wrong");
      }
    };

    if (cityQuery) findCity();
  }, [cityQuery]);

  const updateCityQuery = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    if (event.target.value) {
      setCityQuery(event.target.value);
      return;
    }
    setCityList([]);
  };

  return (
    <div className="flex flex-col gap-10 items-center">
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <div className="relative w-full">
            <Combobox.Input
              className="w-full sm:w-96 text-lg text-white rounded-full focus:ring-0 focus:outline-none border-none bg-secondary-light py-3.5 pl-12 pr-10 leading-5"
              displayValue={(city: ICity) => city.name}
              onChange={updateCityQuery}
            />
            <FaSearch className="text-2xl absolute top-3 left-3.5 text-secondary" />
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setCityQuery("")}
          >
            <Combobox.Options className="absolute mt-2 max-h-60 w-full overflow-auto rounded-lg bg-secondary-light py-1 text-[16px] shadow-lg ring-1 ring-black/5 focus:outline-none">
              {cityList.length === 0 && cityQuery !== "" ? (
                <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                cityList.map((city: ICity, idx: number) => (
                  <Combobox.Option
                    key={idx}
                    className={({ active }) =>
                      `relative cursor-default select-none py-1 px-5 ${
                        active
                          ? "text-orange-300 bg-secondary/50"
                          : "text-white"
                      }`
                    }
                    value={city}
                  >
                    {({ selected }) => (
                      <>
                        <div className="flex gap-2">
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {city.name}
                          </span>
                          <span>({city.country})</span>
                        </div>
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
      {alreadySelected && (
        <div className="text-lg">
          <div className="text-white">
            <span className="font-semibold text-primary-light">Selected:</span>{" "}
            {selected.name} ({selected.country})
          </div>
        </div>
      )}
      <Button disabled={!alreadySelected}>Display Weather</Button>
    </div>
  );
};

export default SearchableCity;
