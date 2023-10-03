import { useQueries } from "react-query";
import useAxiosPrivate from "../useAxiosPrivate";
import { AxiosResponse } from "axios";

function useSavings() {
  const axiosPrivate = useAxiosPrivate();

  async function getSavings(): Promise<AxiosResponse<IResponse<ISaving[]>>> {
    const res = await axiosPrivate.get("/api/v1/savings");
    return res;
  }

  async function getSavingsTotal(): Promise<
    AxiosResponse<IResponse<ISavingTotal>>
  > {
    const res = await axiosPrivate.get("/api/v1/savings/total");
    return res;
  }

  const savingsQueries = useQueries([
    { queryKey: ["savings"], queryFn: getSavings },
    { queryKey: ["savingsTotal"], queryFn: getSavingsTotal },
  ]);

  const savingsQuery = savingsQueries[0];
  const savingsTotalQuery = savingsQueries[1];

  return {
    savings: savingsQuery.data?.data.data || [],
    savingsTotal: savingsTotalQuery.data?.data?.data?.total || 0,
  };
}

export default useSavings;
