/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import HotelRoomCategory from "./HotelRoomCategory";
import { hotelCategoriesList } from "../../../backend-services/hotelsApi";
import MiniLoader from "../../screenloader/MiniLoader";
export default function RoomDetails({ hotelId }) {
  const [hotelCategories, setHotelCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const res = await hotelCategoriesList({
        query: {
          hotelId,
        },
      });
      if (res) {
        const { categories } = res || {};
        setIsLoading(false);
        setHotelCategories(categories);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="rooms-avail-box">
      <h3>Available Rooms</h3>
      <div className="art-outer">
        <div className="ar-table">
          <table className="table">
            <thead>
              <tr>
                <th scope="col" className="rt">
                  Room Type
                </th>
                <th scope="col" className="ro">
                  Room Option
                </th>
                <th scope="col" className="fac">
                  Facilites
                </th>
                <th scope="col" className="price">
                  Pricing
                </th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td className="rt" colSpan={4}>
                    <div className="type-block">
                      <MiniLoader />
                    </div>
                  </td>
                </tr>
              ) : (
                <>
                  {hotelCategories && hotelCategories.length > 0 ? (
                    <>
                      {hotelCategories.map((hotelCategory) => (
                        <HotelRoomCategory
                          key={hotelCategory._id}
                          index={hotelCategory._id}
                          hotelCategory={hotelCategory}
                        />
                      ))}
                    </>
                  ) : (
                    <tr>
                      <td className="rt" colSpan={4}>
                        <div className="type-block">
                          <h5>No Room Found for this Hotel</h5>
                        </div>
                      </td>
                    </tr>
                  )}
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
