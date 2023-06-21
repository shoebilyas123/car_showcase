"use client";
import { useRouter } from "next/navigation";

import React from "react";
import CustomButton from "./CustomButton";
import { updateSearchParams } from "~/utils";

interface IShowMoreProps {
  isNext: boolean;
  pageNumber: number;
  setLimit: (limit: number) => void;
}

const ShowMore = ({ isNext, pageNumber, setLimit }: IShowMoreProps) => {
  const router = useRouter();

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    setLimit(newLimit);

    const newPath = updateSearchParams("limit", `${newLimit}`);
    router.push(newPath);
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          title="Show More"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
