import { User } from "@auth0/auth0-react";
import React from "react";
import { SearchableCity } from ".";

interface ILandingSearchProps {
  user: User;
}

const LandingSearch: React.FunctionComponent<ILandingSearchProps> = ({
  user,
}: ILandingSearchProps) => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col text-center gap-2">
        <span className="text-white font-medium text-2xl">{user.name}</span>
        <a
          className="text-white text-xl hover:underline"
          href={`https://github.com/${user.nickname}`}
          target="_blank"
        >{`https://github.com/${user.nickname}`}</a>
      </div>
      <SearchableCity />
    </div>
  );
};

export default LandingSearch;
