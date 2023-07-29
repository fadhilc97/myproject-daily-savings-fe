import { useQuery } from "react-query";

function useSavings() {
  const savingsQuery = useQuery<IResponse<ISaving[]>>("savings", async () => {
    const res = await fetch("http://localhost:3000/api/v1/savings");
    return res.json();
  });

  return savingsQuery.data?.data || [];
}

export default useSavings;
