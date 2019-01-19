import { GET_CONTACTS } from "./types";

export const getContacts = () => dispatch => {
  dispatch({
    type: GET_CONTACTS
  });
};
