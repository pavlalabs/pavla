import { formatTwoDecimals } from "@/utils/MathUtils";
import balanceContainer from "../../public/Balance.png";

interface PortfolioBalanceProps {
  balance: any;
}

//ToDo: Fix the centering of image, hardcode the ml-16 atm
export default function PortfolioBalance({ balance }: PortfolioBalanceProps) {
  if (!balance) return null;

  return (
    // <div className="flex justify-end ">
    <div className="flex justify-start ">
      <div
        style={{
          backgroundImage: `url(${balanceContainer.src})`,
          width: "350px",
          height: "132px",
          backgroundSize: "cover",
          display: "flex",
        }}
      >
        <div className="flex flex-col text-black justify-center items-center ml-8">
          <h1 className={balance ? "text-4xl font-bold" : "text-2xl"}>
            {balance
              ? " $" + formatTwoDecimals(balance) + " USD"
              : "Connect Wallet"}
          </h1>
          {balance && <h1 className="mt-2">Portfolio Balance</h1>}
        </div>
      </div>
    </div>
  );
}
