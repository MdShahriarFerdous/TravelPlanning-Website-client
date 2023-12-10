import AppLayout from "../../components/applayout/AppLayout";
import PlaceCarousel from "../../components/destination/PlaceCarousel.jsx";
import HotelCarousel from "../../components/destination/HotelCaousel.jsx";
import RestaurantCarousel from "../../components/destination/RestaurantCarousel.jsx";
import DestinationDetails from "../../components/destination/DestinationDetails.jsx";

import {DestinationDetailsById} from "../../_api/DestinationApi.js";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import MiniLoader from "../../components/screenloader/MiniLoader.jsx";
import './destinationPage.css'

const DestinationDetailsPage = () => {

    const {id} = useParams(); // This will give you the ID from the URL

    const [destinationData, setDestinationData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const fetchDestinationData = async () => {
        try {
            setIsLoading(true);
            const response = await DestinationDetailsById(id);
            setDestinationData(response.data);
            setIsLoading(false);
        } catch (error) {
            console.error("Error fetching destination data:", error);
        }
    };

    useEffect(() => {
        fetchDestinationData();
    }, [id]); // Add id as a dependency to re-run the effect when id changes

    return (
        <AppLayout>
            <div className="sidebar-container blog-page destination">
                <div className="auto-container">
                    <div className="row clearfix">
                        <>
                            {isLoading ? (
                                    <MiniLoader/>
                                ) :
                                <>
                                    {/*Destination Single*/}
                                    <DestinationDetails destinationData={destinationData} />
                                    {/*Place Section*/}
                                    <PlaceCarousel destinationData={destinationData} />
                                    {/*Hotel Section*/}
                                    <HotelCarousel destinationData={destinationData} />
                                    {/*Restaurant Section*/}
                                    <RestaurantCarousel destinationData={destinationData} />
                                </>
                            }
                        </>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
};

export default DestinationDetailsPage;
