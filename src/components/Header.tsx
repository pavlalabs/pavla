import Head from "next/head";
import { Web3Button } from "@web3modal/react";
import { useWeb3ModalTheme } from "@web3modal/react";
import Image from "next/image";
import { useWeb3Modal } from "@web3modal/react";
import { useAccount, useDisconnect } from "wagmi";
import { useState } from "react";
import styles from "@/styles/Home.module.css";
import { formatTwoDecimals } from "@/utils/MathUtils";

interface HeaderProps {
  coingeckoData?: any;
}

export default function Header({ coingeckoData }: HeaderProps) {
  const { setTheme } = useWeb3ModalTheme();
  setTheme({
    themeMode: "dark",
    themeColor: "green",
    themeBackground: "gradient",
  });

  const [loading, setLoading] = useState(false);
  const { open } = useWeb3Modal();
  const { isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const label = isConnected ? "Disconnect" : "Connect Custom";

  async function onOpen() {
    setLoading(true);
    await open();
    setLoading(false);
  }

  function onClick() {
    if (isConnected) {
      disconnect();
    } else {
      onOpen();
    }
  }

  return (
    <>
      <Head>
        <title>Pavla</title>
        <meta name="description" content="Canto Portfolio Tracker" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-row min-w-full justify-between ">
        <Image src="/Logo.png" alt="Pavla Logo" width={50} height={50} />
        <div className="flex w-3/4 justify-center items-center overflow-hidden border-t border-b border-t-[#2D312F] border-b-[#2D312F] background-black ">
          {coingeckoData?.map((data: any, index: number) => (
            <div key={index} className={styles.scrollingTextItem}>
              <div className="flex">
                <div className="flex justify-center items-start">
                  <Image
                    src={data.image}
                    alt={data.name}
                    width={25}
                    height={25}
                    style={{
                      width: "25px",
                      height: "25px",
                      borderRadius: "50%",
                      marginRight: "10px",
                    }}
                    // className="mr-2"
                  />
                  <p>{data.name}</p>
                </div>
                <p className="mx-4">${formatTwoDecimals(data.price)}</p>
                <p
                  className={
                    data.change > 0 ? "text-[#E0FF84]" : "text-[#ED0051]"
                  }
                >
                  {data.change > 0 ? "+" : "-"}
                  {formatTwoDecimals(data.change)}%
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-white">
          <Web3Button />
        </div>
      </div>
    </>
  );
}
