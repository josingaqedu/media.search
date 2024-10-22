import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/rpc";

export const useFetchMovies = () => {
  const query = useQuery({
    queryKey: ["movies", "discover"],
    queryFn: async () => {
      const response = await client.api.movies.discover.$get();
      const data = await response.json();
      return data;
    },
  });

  return query;
};
