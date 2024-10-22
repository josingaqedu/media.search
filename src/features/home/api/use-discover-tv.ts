import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/rpc";

export const useDiscoverTv = () => {
  const query = useQuery({
    queryKey: ["discover", "tv"],
    queryFn: async () => {
      const response = await client.api.discover.tv.$get();
      const data = await response.json();
      return data;
    },
  });

  return query;
};
