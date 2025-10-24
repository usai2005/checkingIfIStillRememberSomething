import Image from "next/image";
import Header from "../components/Header/Header";
import MobileMenu from "@/components/Header/MobileMenu/MobileMenu";

export const metadata = {
  title: "Aggregates",
  description: "HomePage",
};

const HomePage = () => {
  return (
    <div>
      <main>
        <Header />
        <MobileMenu />
      </main>
      <footer></footer>
    </div>
  );
};

export default HomePage;
