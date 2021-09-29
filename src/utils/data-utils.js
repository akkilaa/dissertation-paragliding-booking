import moment from "moment";

export const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

export const writeHistoryToLocalStorage = (flightDetails) => {
  let newHistory = [];

  newHistory = JSON.parse(localStorage.getItem("flightsHistory"));

  if (newHistory) {
    newHistory.push({ ...flightDetails, checkoutTime: moment().toString() });
  } else {
    newHistory = [{ ...flightDetails, checkoutTime: moment().toString() }];
  }
  localStorage.setItem("flightsHistory", JSON.stringify(newHistory));
};

export default { getRandomInt, writeHistoryToLocalStorage };
