import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Destination.css';
import ItalyPic from "../../assets/images/resources/destinations/italy.jpg";

// eslint-disable-next-line react/prop-types
const RestaurantCarousel = ({destinationData}) => {
    const truncateDescription = (description, maxLength) => {
        // Check if the description length exceeds the maxLength
        if (description.length > maxLength) {
            // Truncate the description and append "..."
            return description.substring(0, maxLength) + "...";
        }
        // Return the original description if it's within the maxLength
        return description;
    };

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
        <div className="container">
            <div className="u-title clearfix">
                <h2>Restaurants in {destinationData.name}</h2>
            </div>
            <Slider {...settings}>
                {destinationData.restaurants.length > 0 && destinationData.restaurants.map((restaurant, index) => (
                    <div key={index}>
                        <div className="card m-2" >
                            <img src={restaurant.photo} className="card-img-top" alt={restaurant.name} style={{ height: '200px' }}/>
                            <div className="card-body">
                                <h5 className="card-title">{restaurant.name}</h5>
                                <p className="card-text">
                                    {truncateDescription(restaurant.description, 50)}
                                </p>
                                <a href="#" className="btn btn-primary">
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

export default RestaurantCarousel;
