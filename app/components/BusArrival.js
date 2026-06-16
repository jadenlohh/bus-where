export default function BusArrival({ estimatedArrival, busLoad, busType }) {
  function getBusArrivalTime(arrival) {
    if (arrival === "") return "N/A";

    const arrivalTime = new Date(arrival.slice(0, -6));
    const currentTime = new Date();

    const timeDiff = (arrivalTime - currentTime) / 1000; // Time difference in seconds

    if (timeDiff < 60) {
      return "Arr";
    } else {
      return Math.floor(timeDiff / 60);
    }
  }

  function getBusType(type) {
    switch (type) {
      case "SD":
        return "Single Decker";
      case "DD":
        return "Double Decker";
      case "BD":
        return "Bendy";
    }
  }

  return (
    <div className="arrival-time flex-1 pt-4.5 lg:pt-2">
      <div className="flex">
        {busLoad === "SEA" && (
          <div className="border-2 border-green-600 rounded-full me-2.5"></div>
        )}

        {busLoad === "SDA" && (
          <div className="border-2 border-yellow-600 rounded-full me-2.5"></div>
        )}

        {busLoad === "LSD" && (
          <div className="border-2 border-red-600 rounded-full me-2.5"></div>
        )}

        <h1 className="text-2xl font-semibold">
          {getBusArrivalTime(estimatedArrival)}

          {getBusArrivalTime(estimatedArrival) !== "Arr" &&
            getBusArrivalTime(estimatedArrival) !== "N/A" && (
              <span className="text-sm font-normal"> min</span>
            )}
        </h1>
      </div>

      <p className="text-xs text-grey pt-0.5">
        {estimatedArrival !== "" && estimatedArrival.slice(0, -6).split("T")[1] + " • " + getBusType(busType)}
      </p>
    </div>
  );
}
