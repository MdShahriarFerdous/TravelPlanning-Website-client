import {makeAxiosRequest} from '../utils/axiosRequest';

export const getTopDestination = async () => {
    return await makeAxiosRequest("get", `/top-destinations`);
}
