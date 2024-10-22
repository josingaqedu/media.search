import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/rpc";

export const useDiscoverMovie = () => {
  const query = useQuery({
    queryKey: ["discover", "movie"],
    queryFn: async () => {
      const response = await client.api.discover.movie.$get();
      const data = await response.json();
      return data;
    },
  });

  return query;
};
