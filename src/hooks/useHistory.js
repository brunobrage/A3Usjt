import { useQuery } from "@tanstack/react-query";
import api from "../services/api";

export async function postHistory(tema) {
  const { data } = await api.post(`/gerar-historia/${tema}`);

  const history = data
  return history;
}

export function useHistory(tema){
    return useQuery({
        queryKey: ['history'],
        queryFn: () => postHistory(tema),
      });
    }