import axios from 'axios';

export function getYears() {
  return axios.get('http://localhost:3001/api/years');
};

export function getParticipants(year) {
  console.log('getparticipants:' + year);
  return axios.get('http://localhost:3001/api/competition?year=' + year);
}