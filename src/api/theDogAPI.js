import axios from 'axios';
import myExports from './rescueGroupAPI';

const apiKey = '373263cb-b1be-481b-86ee-60b90c8efd67'
const url =  'https://api.thedogapi.com/v1'

const fetchDogFacts = async () => {
  try{
    const data =  await axios.get(`${url}/images/search`, {
      headers:{
        'x-api-key': apiKey,
      },
      params:{
        'limit': 6
      }
    });
    return data
  }
  catch (e){
    console.error('fetchDogFacts error', e)
    return null
  }
}

const dogFactsExports = {fetchDogFacts}
export default dogFactsExports