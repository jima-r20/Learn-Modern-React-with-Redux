import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 8U_2et1eRqFZ12yvlKF7tsTMIl-_TioGmlF6zizJcUI',
  },
});
