import Mosque from "../../assets/images/resources/destinations/istanbul-masjid.jpg";
import baner from "../../assets/images/resources/featured/banner-2.jpg";

const DestinationDetails = () => {
    return (
        <>
            <div className="destination-single">
                <div className="auto-container">
                    <div className="upper-images">
                        <div className="row clearfix">
                            {/*Image Block*/}
                            <div className="image-col col-lg-8 col-md-12 col-sm-12">
                                {/*Image Block*/}
                                <div className="image-block">
                                    <div className="image">
                                        <img
                                            src={Mosque}
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
                                            src={Mosque}
                                            alt="Istanbul Masjid"
                                        />
                                    </div>
                                </div>
                                {/*Image Block*/}
                                <div className="image-block">
                                    <div className="image">
                                        <img
                                            src={Mosque}
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
                                    <h3>About Istanbul</h3>
                                    <div className="travilo-text">
                                        <p>
                                            Istanbul, the vibrant and historic city straddling the
                                            continents of Europe and Asia, offers an enchanting blend of
                                            cultures, sights, and experiences that captivate every
                                            traveler's heart. As Turkey's cultural and economic hub,
                                            Istanbul seamlessly fuses its rich heritage with modernity,
                                            creating an unforgettable journey for visitors.
                                        </p>
                                        <p>
                                            The city is home to some of the world's most iconic landmarks,
                                            including the awe-inspiring Hagia Sophia, the majestic Blue
                                            Mosque, and the grand Topkapi Palace, each bearing witness to
                                            Istanbul's illustrious past. Wandering through the bustling
                                            streets, you'll find an array of delightful bazaars, where you
                                            can haggle for unique souvenirs, immerse yourself in the
                                            aromatic spices, and savor traditional Turkish delights. As
                                            the sun sets, head to the banks of the Bosphorus strait for a
                                            magical view of Istanbul's skyline, a true testament to its
                                            allure as the crossroads between Europe and Asia.
                                        </p>
                                        <p>
                                            Prepare your taste buds for an unforgettable gastronomic
                                            adventure in Istanbul, where a delightful fusion of flavors
                                            awaits you at every turn. Turkish cuisine, renowned for its
                                            rich and diverse flavors, is showcased in full glory
                                            throughout the city's bustling streets and quaint eateries.
                                            Don't miss the chance to savor an authentic Turkish breakfast,
                                            complete with fresh bread, olives, cheeses, and menemen
                                            (scrambled eggs with tomatoes and peppers). For lunch, indulge
                                            in mouthwatering kebabs, whether it's the succulent doner or
                                            the savory shish kebab.
                                        </p>
                                        <p>
                                            As the evening sets in, find yourself in the heart of
                                            Istanbul's vibrant nightlife, with bustling rooftop bars and
                                            traditional meyhanes (taverns) offering an array of mezes
                                            (appetizers) and raki, Turkey's famous anise-flavored spirit.
                                            Foodies will find themselves in paradise as they explore
                                            Istanbul's diverse culinary scene, with each dish reflecting
                                            the city's rich cultural tapestry.
                                        </p>
                                        <p>
                                            Step back in time as you delve into Istanbul's fascinating
                                            history, with a heritage spanning over 2,600 years. From the
                                            time of the Byzantine Empire to the splendor of the Ottoman
                                            era, Istanbul's landmarks narrate a mesmerizing tale of
                                            triumphs, conquests, and cultural exchanges. The Hagia Sophia,
                                            originally a church and later transformed into a mosque and
                                            now a museum, stands as a symbol of architectural brilliance
                                            and religious significance. Wander through the labyrinthine
                                            streets of the Grand Bazaar, one of the world's oldest and
                                            largest covered markets, where centuries-old craftsmanship and
                                            traditional trades coexist with modern shopping experiences.
                                            And no visit to Istanbul would be complete without crossing
                                            the iconic Galata Bridge, offering a stunning panorama of the
                                            Golden Horn and a glimpse into the city's timeless allure.
                                        </p>
                                        <p>
                                            Whether you're a history enthusiast or simply looking to be
                                            enchanted by the mystique of a bygone era, Istanbul promises
                                            an immersive journey through time like no other.
                                        </p>
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
                                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116833.83187886806!2d90.33728806344861!3d23.780975728279124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1701699136149!5m2!1sen!2sbd"
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
                                    <div className="info-block weather-info">
                                        <div className="inner-box">
                                            <h3>Weather</h3>
                                            <div className="weather">
                                                <ul>
                                                    <li className="clearfix">
                                                        <span className="ttl">Jan - Feb</span>
                                                        <span className="dtl">12o C - 18o C</span>
                                                    </li>
                                                    <li className="clearfix">
                                                        <span className="ttl">Mar - Apr</span>
                                                        <span className="dtl">8o C - 12o C</span>
                                                    </li>
                                                    <li className="clearfix">
                                                        <span className="ttl">May - Jun</span>
                                                        <span className="dtl">4o C - 8o C</span>
                                                    </li>
                                                    <li className="clearfix">
                                                        <span className="ttl">Jul - Aug</span>
                                                        <span className="dtl">12o C - 16o C</span>
                                                    </li>
                                                    <li className="clearfix">
                                                        <span className="ttl">Sep - Oct</span>
                                                        <span className="dtl">15o C - 18o C</span>
                                                    </li>
                                                    <li className="clearfix">
                                                        <span className="ttl">Nov - Dec</span>
                                                        <span className="dtl">22o C - 30o C</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
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