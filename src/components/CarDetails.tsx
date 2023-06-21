"use client";

import React, { Fragment } from "react";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";

import { ICarDetailsProps } from "~/types";

const CarDetails = ({ car, isOpen, closeModal }: ICarDetailsProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" onClose={closeModal} className="relative z-10">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave={"ease-in duration-100"}
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed overflow-y-auto inset-0">
            <div className="flex min-h-full items-center justify-center p-4 text-center ">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave={"ease-in duration-100"}
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className={
                    "relative max-h-[90vh] w-full max-w-lg overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5"
                  }
                >
                  <button
                    type="button"
                    className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
                    onClick={closeModal}
                  >
                    <Image
                      src="/close.svg"
                      alt="close button"
                      className="object-contain"
                      width={20}
                      height={20}
                    />
                  </button>
                  <div className="flex-1 flex flex-col gap-3">
                    <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                      <Image
                        src={"/hero.png"}
                        alt="Car Model"
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-1 relative w-full h-24 rounded-lg bg-primary-blue-100">
                        <Image
                          src={"/hero.png"}
                          alt="Car Model"
                          fill
                          priority
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1 relative w-full h-24 rounded-lg bg-primary-blue-100">
                        <Image
                          src={"/hero.png"}
                          alt="Car Model"
                          fill
                          priority
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1 relative w-full h-24 rounded-lg bg-primary-blue-100">
                        <Image
                          src={"/hero.png"}
                          alt="Car Model"
                          fill
                          priority
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col gap-2">
                    <h2 className="font-semibold text-xl capitalize">
                      {car.make} {car.model}
                    </h2>

                    <div className="mt-3 flex flex-wrap gap-5">
                      {Object.entries(car).map(([carPropKey, carPropValue]) => (
                        <div
                          key={carPropKey + Math.random().toString(12)}
                          className="flex justify-between gap-2 w-full text-right"
                        >
                          <h4 className="text-grey capitalize">
                            {carPropKey.split("_").join(" ")}
                          </h4>{" "}
                          <p className="text-black font-semibold">
                            {carPropValue}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CarDetails;
