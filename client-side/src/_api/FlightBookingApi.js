import {makeAxiosRequest} from '../utils/axiosRequest';

export const BookingFlight = async (value) => {
    return await makeAxiosRequest("post", `/flight-booking`, value);
}
