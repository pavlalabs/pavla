import { cantoProvider } from "@/pages/_app";
import { ethers } from "ethers";
import { useCallback, useEffect, useState } from "react";
import { useAccount } from "wagmi";
import Image from "next/image";

import BalanceTable from "./BalanceTable";
import PortfolioBalance from "./PortfolioBalance";

import { formatedBalance } from "@/utils/EthersUtils";

import CINU_ABI from "@/abis/CINU_ABI.json";
import NOTE_ABI from "@/abis/NOTE_ABI.json";
import styles from "@/styles/Home.module.css";

interface BalanceProps {
  coingeckoData: any;
}

export default function Balance({ coingeckoData }: BalanceProps) {
  const { address, isDisconnected } = useAccount();
  const [balance, setBalance] = useState("");
  const [aggregateBalance, setAggregateBalance] = useState();
  const [portfolioBalance, setPortfolioBalance] = useState();

  // console.log("coingeckoData", coingeckoData);

  const getBalance = useCallback(async () => {
    const balance = await cantoProvider.getBalance(address);
    const balanceInEth = ethers.utils.formatEther(balance);
    setBalance(balanceInEth.toString());
  }, [address]);

  // const calculatePortfolioBalance = useCallback(() => {

  // }, [aggregateBalance])

  const checkCINUBalance = useCallback(async () => {
    let tempPortfolioBalance;
    // Get CUINU balance;
    let aggBalance = [];
    const tempbalance = await cantoProvider.getBalance(address);
    const balanceInEth = ethers.utils.formatEther(tempbalance);
    aggBalance.push({
      name: "CANTO",
      image: "/Canto.png",
      amount: balanceInEth,
      price: coingeckoData[0]?.price,
      change: coingeckoData[0]?.change,
    });

    const CINUcontractAddress = "0x7264610A66EcA758A8ce95CF11Ff5741E1fd0455";
    const cinuABI = CINU_ABI;
    const CINUcontract = new ethers.Contract(
      CINUcontractAddress,
      cinuABI,
      cantoProvider
    );
    const cinuBalance = await CINUcontract.balanceOf(address);
    // console.log("CINU:", formatedBalance(cinuBalance));
    if (cinuBalance > 0) {
      aggBalance.push({
        name: "CINU",
        image: "/Shib.png",
        amount: formatedBalance(cinuBalance),
        price: coingeckoData[1]?.price,
        change: coingeckoData[1]?.change,
      });
    }
    // Get Note balance;
    const NOTEcontractAddress = "0x4e71A2E537B7f9D9413D3991D37958c0b5e1e503";
    const noteABI = NOTE_ABI;
    const noteContract = new ethers.Contract(
      NOTEcontractAddress,
      noteABI,
      cantoProvider
    );
    const noteBalance = await noteContract.balanceOf(address);
    // console.log("NOTE:", formatedBalance(noteBalance));
    if (noteBalance > 0) {
      aggBalance.push({
        name: "NOTE",
        image: "/note.svg",
        amount: formatedBalance(noteBalance),
        price: coingeckoData[2]?.price,
        change: coingeckoData[2]?.change,
      });
    }

    //@ts-ignore
    tempPortfolioBalance =
      //@ts-ignore
      coingeckoData[0]?.price * balanceInEth +
      //@ts-ignore
      formatedBalance(cinuBalance) * coingeckoData[1]?.price +
      //@ts-ignore
      formatedBalance(noteBalance) * coingeckoData[2]?.price;

    //@ts-ignore
    setPortfolioBalance(tempPortfolioBalance);

    // Get ATOM balance;
    //@ts-ignore
    setAggregateBalance([...aggBalance]);
    // Get USDC balance;
  }, [address, coingeckoData]);

  useEffect(() => {
    if (address) {
      Promise.all([getBalance(), checkCINUBalance()]);
      // getBalance();
      // checkCINUBalance();
    }
    if (isDisconnected) {
      setBalance("");
    }
  }, [
    address,
    checkCINUBalance,
    getBalance,
    isDisconnected,
    coingeckoData,
    portfolioBalance,
  ]);

  // ToDo list:
  // 1. Add a loading state
  // 2. Set canto as deafult
  // 3. Parse through the other tokens that they have. (Canto + USDC + USDT + ATOM + USDC )
  // 4. Need Coingecko / Coinmarketcap API

  return (
    <>
      <div className="w-full p-4 pr-0 ">
        {address && <PortfolioBalance balance={portfolioBalance} />}
        {!address && (
          <div className="flex flex-col justify-center items-center">
            <Image src="/Logo.png" alt="Pavla Logo" width={125} height={125} />
            <Image
              src="/PavlaText.png"
              className="my-6"
              alt="Coin"
              width={143}
              height={46}
            />

            <p className="text-4xl font-bold">
              Your <span className={styles.sideBarTextGradient}>home</span> in
              CANTO
            </p>
            <div className="flex flex-row pt-6">
              <div className="mr-10 h-64 w-64 flex justify-center items-center flex-col">
                <Image src="/CoinPixel.png" alt="Coin" width={40} height={40} />
                <p className="text-xl mt-8 font-bold text-center h-18 ">
                  Your portfolio
                </p>
                <p className="text-md mt-4 text-center">
                  View, track prices and trends of all your Canto tokens.
                </p>
              </div>
              <div className="mr-10 h-64 w-64 flex justify-center items-center flex-col ">
                <Image src="/NFTPixel.png" alt="NFT" width={40} height={40} />
                <p className="text-xl mt-8 font-bold text-center h-18 ">
                  Collect NFTs
                </p>
                <p className="text-md mt-4 text-center">
                  View and buy your NFTs across all NFT marketplaces in Canto.
                </p>
              </div>
              <div className="w-64 h-64 flex justify-center items-center flex-col ">
                <Image src="/Canto.png" alt="Canto" width={40} height={40} />
                <p className="text-xl mt-8 font-bold text-center h-18 ">
                  Discover CANTO
                </p>
                <p className="text-md mt-4 text-center">
                  Get the real alpha with news, on-chain activity to see whats
                  hot in Canto.
                </p>
              </div>
            </div>
          </div>
        )}
        {address && (
          <BalanceTable balance={balance} aggregateBalance={aggregateBalance} />
        )}
      </div>
    </>
  );
}
