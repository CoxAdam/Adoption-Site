import axios from 'axios';
import authAPI from './authAPI';

const url = "http://localhost:8000/rescueGroupAPI"


const fetchAdoptees = async () => {
  return await authAPI.tryCatchFetch(() => axios.get(`${url}/adoptees/`, authAPI.getCsrtConfig()))
}

const fetchAnimals = async (species, limit, postal_code) => {
  return await authAPI.tryCatchFetch(() => axios.get(`${url}/animal/${species}/${limit}/${postal_code}/`, authAPI.getCsrtConfig()))
}

const fetchDoggo = async (doggo_id) => {
  return await authAPI.tryCatchFetch(() => axios.get(`${url}/doggo/${doggo_id}/`, authAPI.getCsrtConfig()))
}

const fetchOrg = async (org_id) => {
  return await authAPI.tryCatchFetch(() => axios.get(`${url}/orgs/${org_id}`, authAPI.getCsrtConfig()))
}

const fetchAnimalList = async () => {
  return await authAPI.tryCatchFetch(() => axios.get(`${url}/animal_list/`, authAPI.getCsrtConfig()))
}

const fetchTest = async () => {
  return await authAPI.tryCatchFetch(() => axios.get(`${url}/test/`, authAPI.getCsrtConfig()))
}

const fetchBookmarks = async (username) => {
  return await authAPI.tryCatchFetch(() => axios.get(`${url}/bookmark_data/${username}/`, authAPI.getCsrtConfig()))
}

const myExports = {fetchAdoptees, fetchDoggo, fetchAnimals, fetchTest, fetchOrg, fetchAnimalList, fetchBookmarks}
export default myExports