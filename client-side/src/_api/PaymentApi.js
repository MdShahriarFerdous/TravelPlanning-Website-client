import {makeAxiosRequest} from '../utils/axiosRequest';

export const makePayment = async (value) => {
    return await makeAxiosRequest("post", `/payment`, value);
}
