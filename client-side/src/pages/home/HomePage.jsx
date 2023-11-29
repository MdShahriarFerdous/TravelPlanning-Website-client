import AppLayout from "./../../components/applayout/AppLayout";
import HeroSection from "../../components/herosection/HeroSection";
import TourPackage from "../../components/tourpackage/TourPackage";
import Destination from "../../components/destination/Destination";
import Counter from "../../components/counter/Counter";
import Partners from "../../components/partners/Partners";

const HomePage = () => {
  return (
    <AppLayout>
      <HeroSection />
      <TourPackage />
      <Destination />
      <Counter />
      <Partners />
    </AppLayout>
  );
};

export default HomePage;
