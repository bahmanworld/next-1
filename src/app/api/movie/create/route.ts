import { prisma } from "../../../../../prisma/client";

export const GET = async () => {
  const movie = await prisma.movie.create({
    data: {
      name: "Inception",
      year: "2014",
      plot: "Cobb steals information from his targets by entering their dreams. He is wanted for his alleged role in his wife's murder and his only chance at redemption is to perform a nearly impossible task.",
    },
  });

  console.log(movie);

  return Response.json(movie);
};
