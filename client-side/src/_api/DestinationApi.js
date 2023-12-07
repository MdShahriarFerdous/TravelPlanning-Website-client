import {makeAxiosRequest} from '../utils/axiosRequest';

export const getTopDestination = async () => {
    return await makeAxiosRequest("get", `/top-destinations`);
}
export const DestinationDetailsById = async (id) => {
    return await makeAxiosRequest("get", `/destination/${id}`);
}
