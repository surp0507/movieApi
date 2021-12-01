import axios from 'axios'
import { setCharacters } from '../actions';


const client=axios.create({
  baseURL:`https://the-one-api.dev/v2`
})

  client.defaults.headers.common['Authorization']='Bearer 2eLk1xX-571Qudxo8MVB'
  export const requestCharacters=(filter)=> async (dispatch)=>{
    const params = {
      limit: filter.limit
    };
    const {data:{docs}}= await client.get(`/character`,{params});
    dispatch(setCharacters({character:docs}));
    
  }

