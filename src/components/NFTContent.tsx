import Image from "next/image";

const NFTData = [
  {
    name: "Canto Longnecks",
    floorPrice: "3,900",
    estimatedValue: "2,028",
    imageURL: "https://i.imgur.com/DJkYTl2.gif",
  },
  {
    name: "DEAD ENDS",
    floorPrice: "2,300",
    estimatedValue: "1,196",
    imageURL: "https://i.imgur.com/f6Sr2YD.png",
  },
  {
    name: "Shnoises",
    floorPrice: "400",
    estimatedValue: "208",
    imageURL: "https://i.imgur.com/Rmoh5On.png",
  },
  {
    name: "Speranza",
    floorPrice: "277",
    estimatedValue: "144.04",
    imageURL: "https://i.imgur.com/nUtIwEg.jpg",
  },
];
export default function NFTContent() {
  return (
    <div className="w-full p-6 pr-0 mx-10 ">
      <div className="flex flex-row">
        {NFTData.map((nft) => (
          <div
            className="rounded-lg bg-[#2E2E2E] mr-6 w-[200px] "
            key={nft.name}
          >
            <Image
              src={nft.imageURL}
              alt="Pavla Logo"
              width={300}
              height={100}
              className="rounded-t-lg"
            />

            <div className="p-2">
              <p className="font-bold text-xl my-2">{nft.name}</p>
              <div className="flex justify-between my-2">
                <div>
                  <p>Floor Price</p>
                  <div className="flex">
                    <Image
                      src="/Canto.png"
                      alt="Pavla Logo"
                      width={16}
                      height={8}
                      className="mr-1 mt-1"
                    />
                    <p>{nft.floorPrice}</p>
                  </div>
                </div>
                <div>
                  <p>Est. Value</p>
                  <p className="text-right">${nft.estimatedValue}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
