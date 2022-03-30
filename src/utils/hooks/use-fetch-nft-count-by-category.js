import { useCallback, useEffect, useState } from "react";

import { useContracts } from "./use-connectors";

const useFetchNftCountByCategory = ({ category }) => {
  const [count, setCount] = useState(0);
  const { contracts } = useContracts();

  const fetchNftCountByCategory = useCallback(async () => {
    if (contracts.nftController) {
      const result = await contracts.nftController.methods.getAskByCategoryLength({ category }).call();
      setCount(result);
    }
  }, [contracts, category]);

  useEffect(() => {
    fetchNftCountByCategory();
  }, [fetchNftCountByCategory]);

  return count;
};

export default useFetchNftCountByCategory;
