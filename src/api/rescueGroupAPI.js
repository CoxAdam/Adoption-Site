import axios from 'axios';


const fetchBreeds = async () => {
  try{
    const data =  await axios.get('http://localhost:8000/rescueGroupAPI/petlist/');
    return data
  }
  catch (e){
    console.error('fetchBreeds error', e)
    return null
  }
}

const myExports = {fetchBreeds}
export default myExports