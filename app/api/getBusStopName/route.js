export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const data = await fetch(
    `https://datamall2.mytransport.sg/ltaodataservice/BusStops?BusStopCode=${searchParams.get("busStopCode")}`,
    {
      headers: {
        AccountKey: process.env.API_KEY,
      },
    },
  );

  const busStopName = await data.json();

  try {
    return Response.json({name: busStopName.value[0].Description});
  } catch (error) {
    return "N/A";
  }
}
