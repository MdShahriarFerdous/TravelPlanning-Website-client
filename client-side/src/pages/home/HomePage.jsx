import AppLayout from "./../../components/applayout/AppLayout";
import HeroSection from "../../components/herosection/HeroSection";
import TourPackage from "../../components/tourpackage/TourPackage";
import Destination from "../../components/destination/Destination";

const HomePage = () => {
	return (
		<AppLayout>
			<HeroSection />
			<TourPackage />
			<Destination />
		</AppLayout>
	);
};

export default HomePage;
