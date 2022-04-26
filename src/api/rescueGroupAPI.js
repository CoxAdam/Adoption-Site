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
  return await authAPI.tryCatchFetch(() => axios.post(`${url}/doggo/${doggo_id}/`, authAPI.getCsrtConfig()))
}

const myExports = {fetchAdoptees, fetchDoggo, fetchAnimals}
export default myExports