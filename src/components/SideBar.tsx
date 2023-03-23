import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import Image from "next/image";

const navigation = [
  {
    name: "Home",
    href: "/",
    icon: "/Home.png",
    gradientIcon: "/HomeGradient.png",
    soon: false,
  },
  {
    name: "NFTs",
    href: "/nft",
    icon: "/NFTs.png",
    gradientIcon: "/NFTGradient.png",
    soon: false,
  },
  {
    name: "Stake",
    href: "/stake",
    icon: "/Stake.png",
    gradientIcon: "/StakeGradient.png",
    soon: false,
  },
  {
    name: "Swap",
    href: "/swap",
    icon: "/Swap.png",
    gradientIcon: "/HomeGradient.png",
    soon: true,
  },
  {
    name: "Analytics",
    href: "#",
    gradientIcon: "/HomeGradient.png",
    icon: "/Analytics.png",
    soon: true,
  },
  {
    name: "Discover",
    href: "#",
    icon: "/Discover.png",
    gradientIcon: "/HomeGradient.png",
    soon: true,
  },
];

export default function SideBar() {
  let router = useRouter();

  const whiteText =
    "text-white text-lg hover:bg-gray-50/[.06] hover:rounded-md hover:text-gray-100 flex justify-start items-center my-1";

  const gradientText =
    "text-green-100 hover:bg-gray-50/[.06] hover:rounded-md hover:text-gray-100 flex justify-start items-center ";

  const test =
    "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 flex justify-start items-center";
  // console.log("route", router.pathname);
  return (
    <div className="w-72 border-r border-r-[#2D312F] mt-8">
      {navigation.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className={
            router.asPath === item.href
              ? styles.sideBarTextGradientSB
              : whiteText
          }
        >
          <div className={styles.iconLinearBG}>
            {router.asPath === item.href ? (
              <Image
                src={item.gradientIcon}
                alt="Logo"
                width={30}
                height={30}
                className={styles.sideBarTextGradientIcon}
              />
            ) : (
              <Image
                src={item.icon}
                alt="Logo"
                width={30}
                height={30}
                className={styles.sideBarTextGradientIcon}
              />
            )}
          </div>

          <div className="flex">
            <h1 className={styles.sideBarText}>{item.name}</h1>
            {item.soon && (
              <h1 className={styles.sideBarTextGradientSoon}>Soon™️</h1>
            )}
          </div>
        </a>
      ))}
    </div>
  );
}
