import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Destination.css';
import ItalyPic from "../../assets/images/resources/destinations/italy.jpg";

const RestaurantCarousel = () => {
    const places = [
        { id: 1, name: 'Place 1', title: 'Title 1', ratings: 4.5, image: ItalyPic },
        { id: 2, name: 'Place 2', title: 'Title 2', ratings: 4.0, image: ItalyPic },
        { id: 3, name: 'Place 3', title: 'Title 3', ratings: 3.8, image: ItalyPic },
        { id: 4, name: 'Place 4', title: 'Title 4', ratings: 4.2, image: ItalyPic },
        { id: 5, name: 'Place 5', title: 'Title 5', ratings: 4.7, image: ItalyPic },
        // Add more places as needed
    ];

    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    };

    return (
        <div className="auto-container">
            <div className="u-title clearfix">
                <h2>Restaurants in Istanbul</h2>
            </div>
            <Slider {...settings}>
                {places.map((place) => (
                    <div key={place.id}>
                        <div className="card m-2" >
                            <img src={ItalyPic} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </p>
                                <a href="#" className="btn btn-primary">
                                    Go somewhere
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
