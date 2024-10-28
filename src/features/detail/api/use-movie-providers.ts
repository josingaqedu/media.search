import { useMutation } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";

import { client } from "@/lib/rpc";

type ResponseType = InferResponseType<
  (typeof client.api.detail.movie.providers)["$post"]
>;
type RequestType = InferRequestType<
  (typeof client.api.detail.movie.providers)["$post"]
>;

export const useMovieProviders = () => {
  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async ({ json }) => {
      const response = await client.api.detail.movie.providers["$post"]({
        json: json,
      });

      return response.json();
    },
  });

  return mutation;
};
