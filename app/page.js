import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BusArrival from "./components/BusArrival";

export default async function Home() {
  const data = await fetch(
    "https://datamall2.mytransport.sg/ltaodataservice/v3/BusArrival?BusStopCode=53009",
    {
      headers: {
        AccountKey: process.env.API_KEY,
      },
    },
  );

  const busArrival = await data.json();

  async function getBusStopName(code) {
    const data = await fetch(
      `https://datamall2.mytransport.sg/ltaodataservice/BusStops?BusStopCode=${code}`,
      {
        headers: {
          AccountKey: process.env.API_KEY,
        },
      },
    );

    const busStop = await data.json();

    try {
      return busStop.value[0].Description;
    } catch (error) {
      return "N/A";
    }
  }

  return (
    <main className="h-screen mx-auto p-4 lg:w-2xl">
      <Navbar />

      <div className="search">
        <div className="flex items-center bg-white rounded-full shadow grow px-5 py-4.5 mt-5 lg:p-5">
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#A7A7A7"
          >
            <path
              d="M17 17L21 21"
              stroke="#A7A7A7"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M3 11C3 15.4183 6.58172 19 11 19C13.213 19 15.2161 18.1015 16.6644 16.6493C18.1077 15.2022 19 13.2053 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11Z"
              stroke="#A7A7A7"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>

          <input type="text" placeholder="Search Bus Stop" className="text-sm w-full ms-2.5 focus:outline-none placeholder:text-grey" />
        </div>
      </div>

      <div className="bus-services">
        <div className="bg-white rounded-3xl shadow pb-5 ps-6 pe-8 pt-0 mt-5">
          {busArrival.Services.map(async (bus) => {
            return (
              <div className="flex pt-6" key={crypto.randomUUID()}>
                <div className="bus-number">
                  <div className="bg-red text-white rounded-lg text-center w-16 p-3">
                    <p>{bus.ServiceNo}</p>
                  </div>
                </div>

                <div className="w-full ms-5">
                  <div className="border-b border-b-grey pb-0.5">
                    <p className="text-xs text-grey">
                      {await getBusStopName(bus.NextBus.OriginCode)} →{" "}
                      {await getBusStopName(bus.NextBus.DestinationCode)}
                    </p>
                  </div>

                  <div className="flex flex-col justify-between w-full lg:flex-row lg:items-center lg:pt-3">
                    <BusArrival
                      estimatedArrival={bus.NextBus.EstimatedArrival}
                      busLoad={bus.NextBus.Load}
                      busType={bus.NextBus.Type}
                      wheelchairAccessible={
                        bus.NextBus.Feature == "WAB" && true
                      }
                    />

                    <BusArrival
                      estimatedArrival={bus.NextBus2.EstimatedArrival}
                      busLoad={bus.NextBus2.Load}
                      busType={bus.NextBus2.Type}
                      wheelchairAccessible={
                        bus.NextBus2.Feature == "WAB" && true
                      }
                    />

                    <BusArrival
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
          })}
        </div>
      </div>

      <div className="legend">
        <div className="bg-white rounded-3xl text-xs shadow p-5 mt-5">
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
