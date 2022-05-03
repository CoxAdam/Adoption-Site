import axios from 'axios';
import authAPI from './authAPI';
import myExports from './rescueGroupAPI';

const apiKey = '373263cb-b1be-481b-86ee-60b90c8efd67'
const url =  'https://api.TheDogAPI.com/v1'

const fetchDogFacts = async () => {
  return await authAPI.tryCatchFetch(() => axios.get(`${url}/breeds`))
}

const dogFactsExports = {fetchDogFacts}
export default dogFactsExports