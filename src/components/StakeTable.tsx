const validator = [
  {
    name: "defipulse",
    totalStake: "30,400,011",
    commission: "5",
    slashes: "0",
  },
  {
    name: "valislabs",
    totalStake: "25,901,154.22",
    commission: "5",
    slashes: "0",
  },
  {
    name: "KAISEN",
    totalStake: "21,333,159",
    commission: "5",
    slashes: "0",
  },
  {
    name: "19A4E94EB4EE",
    totalStake: "17,888,121.66",
    commission: "10",
    slashes: "1",
  },
  {
    name: "FC227AF10FDC",
    totalStake: "16,984,654",
    commission: "10",
    slashes: "0",
  },
  {
    name: "CF70C6571CF8",
    totalStake: "16,842,020.33",
    commission: "10",
    slashes: "0",
  },
  {
    name: "F892B0F87E63",
    totalStake: "16,444,444",
    commission: "10",
    slashes: "0",
  },
  // {
  //   name: "Athens-1",
  //   totalStake: "15,107,420.69",
  //   commission: "10",
  //   slashes: "0",
  // },
  // {
  //   name: "Plex",
  //   totalStake: "15,101,069",
  //   commission: "10",
  //   slashes: "0",
  // },
  // {
  //   name: "Four Moons",
  //   totalStake: "11,407,191",
  //   commission: "5",
  //   slashes: "0",
  // },
];

export default function StakeTable() {
  return (
    <div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-md font-semibold text-white-900 sm:pl-6"
                    >
                      Rank
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-md font-semibold text-white-90"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-md font-semibold text-white-900"
                    >
                      Total Stake
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-md font-semibold text-white-900"
                    >
                      Commision
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-md font-semibold text-white-900"
                    >
                      Slashes
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-md font-semibold text-white-900"
                    ></th>
                  </tr>
                </thead>
                <tbody className=" divide-gray-200">
                  {validator.map((validator, index) => (
                    <tr key={validator.name}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-md font-medium text-white-900 sm:pl-6">
                        {index}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-md text-white-500">
                        {validator.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-md text-white-500">
                        {validator.totalStake}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-md text-white-500">
                        {validator.commission}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-smdm text-white-500">
                        {validator.slashes}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-md text-white-500">
                        <button
                          type="button"
                          className="inline-flex items-center justify-center rounded-lg border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:w-auto"
                        >
                          Stake
                        </button>
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
