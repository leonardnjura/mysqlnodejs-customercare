import { GET_PERSONNELS, ADD_PERSONNEL, DELETE_PERSONNEL } from './types';

export const getPersonnels = () => {
  return {
    type: GET_PERSONNELS
  };
};

export const deletePersonnel = id => {
  return {
    type: DELETE_PERSONNEL,
    payload: id
  };
};

export const addPersonnel = personnel => {
  return {
    type: ADD_PERSONNEL,
    payload: personnel
  };
};
