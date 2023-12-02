import {makeAxiosRequest} from '../utils/axiosRequest';

export const getAllDestination = async () => {
    return await makeAxiosRequest("get", `/destinations`);
}
