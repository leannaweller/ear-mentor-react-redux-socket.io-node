import * as actionTypes from '../constants/actionTypes';

export function changeCountry(country) {
  return {
    type: actionTypes.CHANGE_PLAYER_COUNTRY,
    country
  };
}

export function changeName(name) {
  return {
    type: actionTypes.CHANGE_PLAYER_NAME,
    name
  };
}

export function setInstrument(instrument) {
  return {
    type: actionTypes.SET_INSTRUMENT,
    instrument
  };
}

export function toggleMusicalIntervalDirection(direction) {
  return {
    type: actionTypes.TOGGLE_MUSICAL_INTERVAL_DIRECTION,
    direction
  };
}

export function toggleMusicalInterval(interval) {
  return {
    type: actionTypes.TOGGLE_MUSICAL_INTERVAL,
    interval
  };
}

export function selectAllIntervals() {
  return {
    type: actionTypes.SELECT_ALL_INTERVALS
  };
}

export function randomizeIntervals() {
  return {
    type: actionTypes.RANDOMIZE_INTERVALS
  };
}

export function setVolume(volume) {
  return {
    type: actionTypes.SET_VOLUME,
    volume
  };
}

export function setTempo(tempo) {
  return {
    type: actionTypes.SET_TEMPO,
    tempo
  };
}
