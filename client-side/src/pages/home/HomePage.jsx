import AppLayout from "./../../components/applayout/AppLayout";
import HeroSection from "../../components/herosection/HeroSection";
import TourPackage from "../../components/tourpackage/TourPackage";
import Destination from "../../components/destination/Destination";
import Counter from "../../components/counter/Counter";
import Partners from "../../components/partners/Partners";
import TourTypes from "../../components/tourtypes/TourTypes";
import Testimonial from "../../components/testimonial/Testimonial";

const HomePage = () => {
	return (
		<AppLayout>
			<HeroSection />
			<TourPackage />
			<Destination />
			<TourTypes />
			<Counter />
			<Testimonial />
			<Partners />
		</AppLayout>
	);
};

export default HomePage;
