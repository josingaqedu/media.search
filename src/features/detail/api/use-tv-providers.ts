import { useMutation } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";

import { client } from "@/lib/rpc";

type ResponseType = InferResponseType<
  (typeof client.api.detail.tv.providers)["$post"]
>;
type RequestType = InferRequestType<
  (typeof client.api.detail.tv.providers)["$post"]
>;

export const useTvProviders = () => {
  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async ({ json }) => {
      const response = await client.api.detail.tv.providers["$post"]({
        json: json,
      });

      return response.json();
    },
  });

  return mutation;
};
