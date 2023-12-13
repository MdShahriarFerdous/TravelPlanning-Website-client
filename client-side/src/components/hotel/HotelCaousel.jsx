import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../destination/Destination.css';
import {useState} from "react";
import HotelModal from "./HotelModal.jsx";

// eslint-disable-next-line react/prop-types
const HotelCarousel = ({destinationData}) => {

    console.log("destinationData", destinationData)

    const [selectedHotel, setSelectedHotel] = useState(null);

    const handleViewDetails = (place) => {
        setSelectedHotel(place);
    };

    const handleCloseModal = () => {
        setSelectedHotel(null);
    };

    // const truncateDescription = (description, maxLength) => {
    //     // Check if the description length exceeds the maxLength
    //     if (description.length > maxLength) {
    //         // Truncate the description and append "..."
    //         return description.substring(0, maxLength) + "...";
    //     }
    //     // Return the original description if it's within the maxLength
    //     return description;
    // };

    const hotels = [
        { id: 1, name: 'Pan Pacific Sonargaon', ratings: 4.5, thumbnail: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/92583733.jpg?k=f3c24f18283ca132bf9069bd15169a65619c8e334abb7fe40083bedd06215cdd&o=&hp=1" },
        { id: 2, name: 'The Westin Dhaka', title: 'Title 2', ratings: 4.0, thumbnail: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/328036088.jpg?k=f158de1d2ea987474d84c8a76ab8447597de90f9ae02548915db3cca9a4f4f2b&o=&hp=1" },
        { id: 3, name: 'InterContinental Dhaka', title: 'Title 3', ratings: 3.8, thumbnail: "https://digital.ihg.com/is/image/ihg/intercontinental-dhaka-5919572575-4x3" },
        { id: 4, name: 'Radisson Blu Water Garden', title: 'Title 4', ratings: 4.2, thumbnail: "https://2.bp.blogspot.com/-YXkjksMqSQ8/WF0M--mv0ZI/AAAAAAAAByE/2OsVrArVHSoHlZDOuRqUjB32RyY2dIRMgCLcB/w1200-h630-p-k-no-nu/Radisson-Blu-Water-Garden-Hotel-Dhaka-635755839045137437.jpg" },
        { id: 5, name: 'Amari Dhaka', title: 'Title 5', ratings: 4.7, thumbnail: "https://storage.amari.com/property/dhaka/index/intro-3.jpg" },
        // Add more places as needed
    ];

    const settings = {
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (destinationData &&
        <div className="auto-container">
            <div className="u-title clearfix">
                <h2>Hotels in {destinationData.name}</h2>
            </div>
            <Slider {...settings}>
                {destinationData?.hotels?.length > 0 && destinationData?.hotels?.map((hotel, index) => (
                    <div key={index}>
                        <div className="package-block">
                            <div className="inner-box">
                                <div className="image-box">
                                    <div className="image">
                                        <a>
                                            <img
                                                onClick={() => handleViewDetails(hotel)}
                                                src={hotel?.thumbnail}
                                                alt={hotel?.name}
                                                style={{height: '250px'}}
                                            />
                                        </a>
                                    </div>
                                    {/*<div className="b-title top-rated">*/}
                                    {/*    <span>Top Rated</span>*/}
                                    {/*</div>*/}
                                </div>
                                <div className="lower-box">
                                    <div className="location">{hotel?.name}</div>
                                    <h5>
                                        {/*<a href="#">{truncateDescription(hotel?.description, 50)}</a>*/}
                                    </h5>
                                    <div className="bottom-box clearfix">
                                        <div className="rating"><a href="#" className="theme-btn"><i
                                            className="fa-solid fa-star"></i>
                                            <strong>4.8</strong></a>
                                        </div>
                                        <div className="price"><span className="count">3210 Reviews</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
            {selectedHotel && (
                <HotelModal
                    show={!!selectedHotel}
                    onHide={handleCloseModal}
                    hotel={selectedHotel}
                />
            )}
        </div>
    );
};

export default HotelCarousel;
