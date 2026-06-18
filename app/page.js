"use client";

import useSWR from "swr";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NextArrivalTiming from "./components/NextArrivalTiming";
import SearchBar from "./components/SearchBar";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function Home() {
  const searchParams = useSearchParams();
  const busStopCode = searchParams.get("busStop") || "75009"
  
  const {
    data: busArrivalData,
    error,
    isLoading,
  } = useSWR(`/api/getBusArrival?busStopCode=${busStopCode}`, fetcher);

  if (error) return <div>An error occured</div>;

  return (
    <main className="h-screen mx-auto p-4 lg:w-2xl">
      <Navbar />

      <SearchBar initialValue={busStopCode} />

      <div className="bus-arrival-timings">
        <div className="bg-white rounded-3xl shadow pb-5 ps-6 pe-8 pt-0 mt-5">
          {isLoading ? (
            <div className="my-auto w-full py-30">
              <div className="flex place-content-center w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  fill="#171717"
                  viewBox="0 0 256 256"
                  className="animate-spin"
                >
                  <path d="M232,128a104,104,0,0,1-208,0c0-41,23.81-78.36,60.66-95.27a8,8,0,0,1,6.68,14.54C60.15,61.59,40,93.27,40,128a88,88,0,0,0,176,0c0-34.73-20.15-66.41-51.34-80.73a8,8,0,0,1,6.68-14.54C208.19,49.64,232,87,232,128Z"></path>
                </svg>
              </div>
            </div>
          ) : busArrivalData.length === 0 ? (
            <div className="my-auto w-full py-30">
              <div className="flex place-content-center text-sm w-full">
                <p>No bus stop found</p>
              </div>
            </div>
          ) : (
            busArrivalData.map((bus) => {
              return (
                <div className="flex pt-6" key={bus.ServiceNo}>
                  <div className="bus-number">
                    <div className="bg-red text-white rounded-lg text-center w-16 p-3">
                      <p>{bus.ServiceNo}</p>
                    </div>
                  </div>

                  <div className="w-full ms-5">
                    {/* <div className="border-b border-b-grey pb-0.5">
                    <p className="text-xs text-grey">
                      {useBusStopName(bus.NextBus.OriginCode)} →{" "}
                      {useBusStopName(bus.NextBus.DestinationCode)}
                    </p>
                  </div> */}

                    <div className="flex flex-col justify-between w-full lg:flex-row lg:items-center lg:pt-3">
                      <NextArrivalTiming
                        estimatedArrival={bus.NextBus.EstimatedArrival}
                        busLoad={bus.NextBus.Load}
                        busType={bus.NextBus.Type}
                        wheelchairAccessible={
                          bus.NextBus.Feature == "WAB" && true
                        }
                      />

                      <NextArrivalTiming
                        estimatedArrival={bus.NextBus2.EstimatedArrival}
                        busLoad={bus.NextBus2.Load}
                        busType={bus.NextBus2.Type}
                        wheelchairAccessible={
                          bus.NextBus2.Feature == "WAB" && true
                        }
                      />

                      <NextArrivalTiming
                        estimatedArrival={bus.NextBus3.EstimatedArrival}
                        busLoad={bus.NextBus3.Load}
                        busType={bus.NextBus3.Type}
                        wheelchairAccessible={
                          bus.NextBus3.Feature == "WAB" && true
                        }
                      />
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      <div className="legend">
        <div className="bg-white rounded-3xl text-xs shadow py-5 px-6 mt-5">
          <p>LEGEND</p>

          <div className="flex flex-wrap justify-between items-center">
            <div className="pt-5 lg:pt-3">
              <div className="border-2 border-green-600 rounded-full w-8"></div>
              <p className="pt-1">Seats Available</p>
            </div>

            <div className="pt-5 lg:pt-3">
              <div className="border-2 border-yellow-600 rounded-full w-8"></div>
              <p className="pt-1">Standing Available</p>
            </div>

            <div className="pt-5 lg:pt-3">
              <div className="border-2 border-red-600 rounded-full w-8"></div>
              <p className="pt-1">Limited Standing</p>
            </div>

            <div className="pt-5 lg:pt-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="#171717"
                viewBox="0 0 256 256"
              >
                <path d="M255.59,189.47a8,8,0,0,0-10.12-5.06l-17.42,5.81-28.9-57.8A8,8,0,0,0,192,128H112V104h56a8,8,0,0,0,0-16H112V79a32,32,0,1,0-16,0V89.81A72,72,0,0,0,112,232c33.52,0,63.69-22.71,71.75-54a8,8,0,1,0-15.5-4C162.09,198,137.91,216,112,216A56,56,0,0,1,96,106.34V136a8,8,0,0,0,8,8h83.05l29.79,59.58a8,8,0,0,0,9.69,4l24-8A8,8,0,0,0,255.59,189.47ZM88,48a16,16,0,1,1,16,16A16,16,0,0,1,88,48Z"></path>
              </svg>

              <p className="pt-1">Wheelchair Accessible</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
