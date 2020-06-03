import axios from 'axios';

const KEY = 'AIzaSyAjOp13uOfnnFtcipJqOfQptKGtAdfTuZ4';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxReuslts: 5,
    key: KEY, // key: `${KEY}`
  },
});
