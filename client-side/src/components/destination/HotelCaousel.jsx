import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Destination.css';
import ItalyPic from "../../assets/images/resources/destinations/italy.jpg";

// eslint-disable-next-line react/prop-types
const HotelCarousel = ({destinationData}) => {
    const hotels = [
        { id: 1, name: 'Pan Pacific Sonargaon', ratings: 4.5, image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/92583733.jpg?k=f3c24f18283ca132bf9069bd15169a65619c8e334abb7fe40083bedd06215cdd&o=&hp=1" },
        { id: 2, name: 'The Westin Dhaka', title: 'Title 2', ratings: 4.0, image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/328036088.jpg?k=f158de1d2ea987474d84c8a76ab8447597de90f9ae02548915db3cca9a4f4f2b&o=&hp=1" },
        { id: 3, name: 'InterContinental Dhaka', title: 'Title 3', ratings: 3.8, image: "https://digital.ihg.com/is/image/ihg/intercontinental-dhaka-5919572575-4x3" },
        { id: 4, name: 'Radisson Blu Water Garden', title: 'Title 4', ratings: 4.2, image: "https://2.bp.blogspot.com/-YXkjksMqSQ8/WF0M--mv0ZI/AAAAAAAAByE/2OsVrArVHSoHlZDOuRqUjB32RyY2dIRMgCLcB/w1200-h630-p-k-no-nu/Radisson-Blu-Water-Garden-Hotel-Dhaka-635755839045137437.jpg" },
        { id: 5, name: 'Amari Dhaka', title: 'Title 5', ratings: 4.7, image: "https://storage.amari.com/property/dhaka/index/intro-3.jpg" },
        // Add more places as needed
    ];

    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
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
                {hotels.length > 0 && hotels.map((place, index) => (
                    <div key={index}>
                        <div className="card m-2" >
                            <img src={place.image} className="card-img-top" alt={place.name} style={{ height: '200px' }} />
                            <div className="card-body">
                                <h5 className="card-title">{place.name}</h5>
                                <p className="rating"><a href="#" className="theme-btn"><i
                                    className="fa-solid fa-star"></i>
                                    <strong>{place.ratings}</strong> &ensp; <span className="count">4544 Reviews</span></a>
                                </p>
                                <a href="#" className="btn btn-sm btn-primary">
                                    View Details
                                </a>
                            </div>
                        </div>

                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default HotelCarousel;
