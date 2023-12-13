import {makeAxiosRequest} from '../utils/axiosRequest';

export const getAllLocation = async () => {
    return await makeAxiosRequest("get", `/locations`);
}
