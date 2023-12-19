import HotelRoomCategory from "./HotelRoomCategory";
export default function RoomDetails() {
  return (
    <div className="rooms-avail-box">
      <h3>Available Rooms</h3>
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
          {Array.apply(null, { length: 3 }).map((x, i) => (
            <HotelRoomCategory key={i} index={i} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
