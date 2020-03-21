import axios from "axios";

export function getYears() {
  return axios.get("/api/years").catch(function(error) {
    console.log(error);
  });
}

export function getParticipants(year) {
  return axios.get("/api/competition?year=" + year).catch(function(error) {
    console.log(error);
  });
}

export function getWinners() {
  return axios.get("winners").catch(function(error) {
    console.log(error);
  });
}

export async function getImages() {
  console.log("getimages called!!!!!");
  try {
    return axios.get("api/images");
  } catch (error) {
    console.log(error);
  }
}

export function addParticipant(state) {
  console.log("add participant");
  return axios({
    method: "post",
    url: "/api/adscores",
    data: {
      year: state.year,
      place: state.place,
      name: state.name,
      score: state.score
    }
  }).catch(function(error) {
    console.log(error);
  });
}

export function deleteParticipant(participant) {
  return axios
    .delete("/api/participant/" + participant._id)
    .then(function(response) {
      return response.data;
    });
}
