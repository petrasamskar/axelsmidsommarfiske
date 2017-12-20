import axios from 'axios';

//todo fixa så man kan ha relativa urlar
export function getYears() {
  return axios.get('http://localhost:3001/api/years')
  .catch(function (error) {
    console.log(error);
  });;
};

export function getParticipants(year) {
  console.log('getparticipants:' + year);
  return axios.get('http://localhost:3001/api/competition?year=' + year)
  .catch(function (error) {
    console.log(error);
  });;
}

export function getWinners() {
  return axios.get('http://localhost:3001/api/winners')
  .catch(function (error) {
    console.log(error);
  });

}

export function getImages() {
  console.log('getimages');
  return axios.get('http://localhost:3001/api/images')
  .catch(function (error) {
    console.log(error);
  });
}

export function addParticipant(state) {
  console.log('add participant');
  return axios({
    method: 'post',
    url: 'http://localhost:3001/api/adscores',
    data: {
      year: state.year,
      place: state.place,
      name: state.name,
      score: state.score
    }
    
  })
  .catch(function (error) {
    console.log(error);
  });
}





