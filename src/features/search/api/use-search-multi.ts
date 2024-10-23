import { useMutation } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";

import { client } from "@/lib/rpc";

type ResponseType = InferResponseType<
  (typeof client.api.search.multi)["$post"]
>;
type RequestType = InferRequestType<(typeof client.api.search.multi)["$post"]>;

export const useSearchMulti = () => {
  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async ({ json }) => {
      const response = await client.api.search.multi["$post"]({
        json: json,
      });

      return response.json();
    },
  });

  return mutation;
};
