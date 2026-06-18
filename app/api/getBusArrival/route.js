export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const data = await fetch(
    `https://datamall2.mytransport.sg/ltaodataservice/v3/BusArrival?BusStopCode=${searchParams.get("busStopCode")}`,
    {
      headers: {
        AccountKey: process.env.API_KEY,
      },
    },
  );

  const busArrival = await data.json();
  return Response.json(busArrival.Services);
}
