export async function GET() {
  const data = await fetch(
    `https://datamall2.mytransport.sg/ltaodataservice/v3/BusArrival?BusStopCode=53009`,
    {
      headers: {
        AccountKey: process.env.API_KEY,
      },
    },
  );

  const busArrival = await data.json();
  return Response.json(busArrival.Services);
}
