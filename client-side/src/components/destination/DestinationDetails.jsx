
// eslint-disable-next-line react/prop-types
import {useState} from "react";

const DestinationDetails = ({destinationData}) => {
    const [showFullDescription, setShowFullDescription] = useState(false);

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    const getDescriptionToShow = () => {
        if (showFullDescription) {
            return destinationData.description;
        }
        // Show only the first two sentences when not in full description mode
        const sentences = destinationData.description.split('. ');
        return sentences.slice(0, 3).join('. ') + (sentences.length > 3 ? '...' : '');
    };

    return (destinationData &&
        <>
            <div className="destination-single">
                <div className="auto-container">
                    <div className="title-box">
                        <div className="subtitle">Discover</div>
                        <h2>
                            <span className="destination-heading">{destinationData.name}</span>
                        </h2>
                    </div>
                    <div className="upper-images">
                        <div className="row clearfix">
                            {/*Image Block*/}
                            <div className="image-col col-lg-8 col-md-12 col-sm-12">
                                {/*Image Block*/}
                                <div className="image-block">
                                    <div className="image">
                                        <img
                                            src={destinationData['photo'][0]}
                                            alt="Istanbul Masjid"
                                        />
                                    </div>
                                </div>
                            </div>
                            {/*Image Block*/}
                            <div className="image-col col-lg-4 col-md-12 col-sm-12">
                                {/*Image Block*/}
                                <div className="image-block">
                                    <div className="image">
                                        <img
                                            src={destinationData['photo'][1]}
                                            alt="Istanbul Masjid"
                                        />
                                    </div>
                                </div>
                                {/*Image Block*/}
                                <div className="image-block">
                                    <div className="image">
                                        <img
                                            src={destinationData['photo'][2]}
                                            alt="Istanbul Masjid"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lower-content">
                        <div className="row clearfix">
                            <div className="content-col col-lg-8 col-md-12 col-sm-12">
                                <div className="inner">
                                    <h3>About {destinationData['name']}</h3>
                                    <div className="travilo-text">
                                        <p>{getDescriptionToShow()}</p>
                                        {destinationData.description.length > 150 && (
                                            <button className="btn btn-link" onClick={toggleDescription}>
                                                {showFullDescription ? 'Show Less' : 'See More'}
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="info-col col-lg-4 col-md-12 col-sm-12">
                                <div className="inner">
                                    {/*Block*/}
                                    <div className="info-block loc-map">
                                        <div className="inner-box">
                                            <h3>City Map</h3>
                                            <div className="map-box">
                                                <iframe
                                                    src={destinationData['map']}
                                                    width={600}
                                                    height={450}
                                                    style={{border: 0}}
                                                    allowFullScreen=""
                                                    loading="lazy"
                                                    referrerPolicy="no-referrer-when-downgrade"
                                                />

                                            </div>
                                        </div>
                                    </div>
                                    {/*Block*/}
                                    {/*<div className="info-block weather-info">*/}
                                    {/*    <div className="inner-box">*/}
                                    {/*        <h3>Weather</h3>*/}
                                    {/*        <div className="weather">*/}
                                    {/*            <ul>*/}
                                    {/*                <li className="clearfix">*/}
                                    {/*                    <span className="ttl">Jan - Feb</span>*/}
                                    {/*                    <span className="dtl">12o C - 18o C</span>*/}
                                    {/*                </li>*/}
                                    {/*                <li className="clearfix">*/}
                                    {/*                    <span className="ttl">Mar - Apr</span>*/}
                                    {/*                    <span className="dtl">8o C - 12o C</span>*/}
                                    {/*                </li>*/}
                                    {/*                <li className="clearfix">*/}
                                    {/*                    <span className="ttl">May - Jun</span>*/}
                                    {/*                    <span className="dtl">4o C - 8o C</span>*/}
                                    {/*                </li>*/}
                                    {/*                <li className="clearfix">*/}
                                    {/*                    <span className="ttl">Jul - Aug</span>*/}
                                    {/*                    <span className="dtl">12o C - 16o C</span>*/}
                                    {/*                </li>*/}
                                    {/*                <li className="clearfix">*/}
                                    {/*                    <span className="ttl">Sep - Oct</span>*/}
                                    {/*                    <span className="dtl">15o C - 18o C</span>*/}
                                    {/*                </li>*/}
                                    {/*                <li className="clearfix">*/}
                                    {/*                    <span className="ttl">Nov - Dec</span>*/}
                                    {/*                    <span className="dtl">22o C - 30o C</span>*/}
                                    {/*                </li>*/}
                                    {/*            </ul>*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DestinationDetails;