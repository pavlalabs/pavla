import { ethers } from "ethers";

export const formatedBalance = (address: string) => {
  const balance = ethers.utils.formatEther(address);
  return balance;
};
