"use client";

import React, { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ICustomFilter } from "~/types";
import { updateSearchParams } from "~/utils";

const CustomFilter = ({ options, title }: ICustomFilter) => {
  const [selected, setSelected] = useState(options[0].value);
  const router = useRouter();

  const handleUpdateParams = (value: string) => {
    const newURLPathname = updateSearchParams(title, value);
    router.push(newURLPathname);
  };

  return (
    <div>
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e);
          handleUpdateParams(e);
        }}
      >
        <div className="relative z-10 w-fit">
          <Listbox.Button className={"custom-filter__btn"}>
            <span className="block truncate">
              {selected === "" ? options[0].title : selected}
            </span>
            <Image
              src="/chevron-up-down.svg"
              width={20}
              height={20}
              className="ml-4 object-contain"
              alt="filter arrows"
            />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave={"transition ease-in duration-100"}
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className={"custom-filter__options"}>
              {options.map(({ title, value }) => (
                <Listbox.Option
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 px-4 ${
                      active ? "bg-primary-blue text-white" : "text-black"
                    }`
                  }
                  key={title}
                  value={value}
                >
                  {({ selected: isSelected }) => (
                    <span
                      className={`block truncate ${
                        isSelected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {title}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default CustomFilter;
