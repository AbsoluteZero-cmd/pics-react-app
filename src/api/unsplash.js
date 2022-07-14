import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID QFCe_Ofm2z5Q8Nira2AoZOFAvQoIOWF1K3pXpTvHXek',
    },
});
