import Link from "next/link";
import Navbar from "./components/navbar";

export default async function Home() {
  // const data = await fetch("https://datamall2.mytransport.sg/ltaodataservice/v3/BusArrival?BusStopCode=77009", {
  //   headers: {
  //     "AccountKey": "hUwkNdiWTAGCca1OQIep3A=="
  //   }
  // })
  // const buses = await data.json()

  // console.log(buses)

  return (
    <main className="h-screen p-4 mx-auto lg:w-2xl">
      <Navbar />

      <div className="mt-5">
        {

        }
      </div>

      <div className="legend mt-5">
        <div className="bg-white rounded-3xl text-xs shadow p-5">
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
                height="26px"
                viewBox="0 -960 960 960"
                width="26px"
                fill="#171717"
              >
                <path d="M423.5-743.5Q400-767 400-800t23.5-56.5Q447-880 480-880t56.5 23.5Q560-833 560-800t-23.5 56.5Q513-720 480-720t-56.5-23.5ZM680-80v-200H480q-33 0-56.5-23.5T400-360v-240q0-33 23.5-56.5T480-680q24 0 41.5 10.5T559-636q55 66 99.5 90.5T760-520v80q-53 0-107-23t-93-55v138h120q33 0 56.5 23.5T760-300v220h-80Zm-280 0q-83 0-141.5-58.5T200-280q0-72 45.5-127T360-476v82q-35 14-57.5 44.5T280-280q0 50 35 85t85 35q39 0 69.5-22.5T514-240h82q-14 69-69 114.5T400-80Z" />
              </svg>

              <p className="pt-1">Wheelchair Accessible</p>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="text-grey text-xs px-5 mt-3">
          <p className="pb-1">
            All data obtained from LTA's{" "}
            <span>
              <Link className="underline" href="https://datamall.lta.gov.sg">
                DataMall API
              </Link>
            </span>
          </p>

          <p>
            Built by{" "}
            <Link className="underline" href="https://github.com/jadenlohh">
              jadenlohh
            </Link>
          </p>
        </div>
      </footer>
    </main>
  );
}
