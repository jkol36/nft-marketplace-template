const getNftCategory = async ({ contract, tokenAddr, tokenId }) => {
  if (contract) {
    try {
      const result = await contract.methods.getCategoryOf(tokenAddr, tokenId).call();
      return result;
    } catch (error) {
      console.log('[getNftCategory] error => ', error);
      return '';
    }
  }
};

export default getNftCategory;
