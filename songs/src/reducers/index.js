import { selectSong } from '../actions';

const songsReducer = () => {
  return [
    { title: 'music1', duration: '5:15' },
    { title: 'music2', duration: '4:20' },
    { title: 'music3', duration: '3:54' },
    { title: 'music4', duration: '2:22' },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectSong;
};
