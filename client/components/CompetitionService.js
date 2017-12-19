import axios from 'axios';

//todo fixa så man kan ha relativa urlar
export function getYears() {
  return axios.get('http://localhost:3001/api/years');
};

export function getParticipants(year) {
  console.log('getparticipants:' + year);
  return axios.get('http://localhost:3001/api/competition?year=' + year);
}

export function getWinners() {
  console.log('getwinners');
  return axios.get('http://localhost:3001/api/winners');

}

export function getImages() {
  console.log('getimages');
  return axios.get('http://localhost:3001/api/images');
}