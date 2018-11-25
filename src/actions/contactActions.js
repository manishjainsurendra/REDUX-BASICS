import {
  GET_CONTACTS,
  DELETE_CONTACT,
  ADD_CONTACT,
  GET_CONTACT,
  UPDATE_CONTACT
} from "./types";
import axios from "axios";

export const getContacts = () => dispatch => {
  //here redux thunk works
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then(response => dispatch({ type: GET_CONTACTS, payload: response.data }))
    .catch(error => console.log(error));
};

export const deleteContact = id => dispatch => {
  axios
    .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => dispatch({ type: DELETE_CONTACT, payload: id }))
    .catch(error => dispatch({ type: DELETE_CONTACT, payload: id }));
};

export const addContact = contact => dispatch => {
  axios
    .post("https://jsonplaceholder.typicode.com/users", contact)
    .then(response => dispatch({ type: ADD_CONTACT, payload: response.data }))
    .catch(error => console.log(error));
};

export const getContact = id => dispatch => {
  axios
    .get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => dispatch({ type: GET_CONTACT, payload: response.data }))
    .catch(error => console.log(error));
};

export const updateContact = contact => dispatch => {
  axios
    .put(`https://jsonplaceholder.typicode.com/users/${contact.id}`, contact)
    .then(responce =>
      dispatch({ type: UPDATE_CONTACT, payload: responce.data })
    )
    .catch(error => console.log(error));
};
