import AppLayout from "./../../components/applayout/AppLayout";
import HeroSection from "../../components/herosection/HeroSection";
import TourPackage from "../../components/tourpackage/TourPackage";
import Destination from "../../components/destination/Destination";
import Counter from "../../components/counter/Counter";

const HomePage = () => {
  return (
    <AppLayout>
      <HeroSection />
      <TourPackage />
      <Destination />
      <Counter />
    </AppLayout>
  );
};

export default HomePage;
