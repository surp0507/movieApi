import axios from 'axios'
import { setCharacters } from '../actions';

const client=axios.create({
  baseURL:`https://the-one-api.dev/v2`
})

  client.defaults.headers.common['Authorization']='Bearer 2eLk1xX-571Qudxo8MVB'
  export const requestCharacters=()=> async (dispatch)=>{
    const response= await client.get(`/character`);
    dispatch(setCharacters(response.data.docs));
  }