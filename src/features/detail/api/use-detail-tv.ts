import { useMutation } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";

import { client } from "@/lib/rpc";

type ResponseType = InferResponseType<(typeof client.api.detail.tv)["$post"]>;
type RequestType = InferRequestType<(typeof client.api.detail.tv)["$post"]>;

export const useDetailTv = () => {
  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async ({ json }) => {
      const response = await client.api.detail.tv["$post"]({
        json: json,
      });

      return response.json();
    },
  });

  return mutation;
};
