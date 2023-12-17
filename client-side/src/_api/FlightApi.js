import {makeAxiosRequest} from '../utils/axiosRequest';

export const getFilterFlight = async (value) => {
    return await makeAxiosRequest("post", `/flight-search`, value);
}
export const getFlightById = async (id, travelers) => {
    return await makeAxiosRequest("get", `/flight/${id}/${travelers}`);
}
