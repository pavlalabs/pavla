import { calculateHoldings, formatTwoDecimals } from "@/utils/MathUtils";
import Image from "next/image";
interface BalanceTableProps {
  balance: string;
  aggregateBalance: any;
}

export default function BalanceTable({
  balance,
  aggregateBalance,
}: BalanceTableProps) {
  if (!balance) return null;

  return (
    <div className="px-8">
      <div className="mt-10 flex flex-col px-10 border border-[#57575766] rounded-xl py-10">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-[#575757]">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white-900 sm:pl-6 text-lg	"
                    >
                      Wallet
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-white-90 text-lg	"
                    >
                      Amount
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-white-900 text-lg	"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-white-900 text-lg	"
                    >
                      USD Value
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-white-900 text-lg	"
                    >
                      Change (24h)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {aggregateBalance?.map((token: any) => (
                    <tr key={token.name}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 font-medium text-white-900 sm:pl-6 text-md flex	 ">
                        <Image
                          src={token.image}
                          alt={token.name}
                          width={30}
                          height={30}
                          className="mr-2"
                        />
                        {token.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-md text-white-500 	">
                        {formatTwoDecimals(token.amount)}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-md text-white-500 ">
                        {formatTwoDecimals(token.price)}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-md text-white-500 	">
                        ${calculateHoldings(token.amount, token.price)}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-md text-white-500 	">
                        <p
                          className={
                            token.change > 0
                              ? "text-[#E0FF84]"
                              : "text-[#ED0051]"
                          }
                        >
                          {formatTwoDecimals(token.change)}%
                        </p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
