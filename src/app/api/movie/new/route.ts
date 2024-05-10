import { prisma } from "../../../../../prisma/client";

export const GET = async () => {
  const movie = await prisma.movie.create({
    data: {
      name: "AEon Flux",
      year: "2005",
      plot: "Cobb steals information from his targets by entering their dreams. He is wanted for his alleged role in his wife's murder and his only chance at redemption is to perform a nearly impossible task.",
      properties: { imdbRating: 5.4, imdbVotes: 30000 },
    },
  });
  return Response.json(movie)
};
