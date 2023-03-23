import Header from "./Header";
import SideBar from "./SideBar";
import BG from "../../public/BG.png";
import styles from "@/styles/Home.module.css";

interface LayoutProps {
  children: React.ReactNode;
  coingeckoData: any;
}
export const Layout = ({ children, coingeckoData }: LayoutProps) => {
  return (
    <div>
      <main
        className={styles.main}
        style={{
          backgroundImage: `url(${BG.src})`,
          backgroundSize: "cover",
          height: "100%",
        }}
      >
        <Header coingeckoData={coingeckoData} />
        <div className={"flex min-w-full h-[70vh]"}>
          <SideBar />
          {children}
        </div>
      </main>
    </div>
  );
};
