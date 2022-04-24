import axios from 'axios';

const url = "http://localhost:8000/rescueGroupAPI"


const fetchAdoptees = async () => {
  try{
    const data =  await axios.get(`${url}/adoptees/`);
    return data.data
  }
  catch (e){
    console.error('fetchAdoptees error', e)
    return null
  }
}

const fetchDoggo = async (doggo_id) => {
  try{
    const data =  await axios.get(`${url}/doggo/${doggo_id}/`);
    return data.data
  }
  catch (e){
    console.error('fetchDoggo error', e)
    return null
  }
}

const myExports = {fetchAdoptees, fetchDoggo}
export default myExports