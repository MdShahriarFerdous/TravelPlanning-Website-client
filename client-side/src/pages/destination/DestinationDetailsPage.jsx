import AppLayout from "../../components/applayout/AppLayout";
import PlaceCarousel from "../../components/destination/PlaceCarousel.jsx";
import HotelCarousel from "../../components/destination/HotelCaousel.jsx";
import RestaurantCarousel from "../../components/destination/RestaurantCarousel.jsx";
import DestinationDetails from "../../components/destination/DestinationDetails.jsx";



const DestinationDetailsPage = () => {
    return (
        <AppLayout>
            <div className="sidebar-container blog-page">
                <div className="auto-container">
                    <div className="row clearfix">
                        <>
                            {/*Destination Single*/}
                            <DestinationDetails />
                            {/*Place Section*/}
                            <PlaceCarousel />
                            {/*Hotel Section*/}
                            <HotelCarousel />
                            {/*Restaurant Section*/}
                            <RestaurantCarousel />
                        </>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
};

export default DestinationDetailsPage;
