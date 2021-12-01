import axios from 'axios'
import { setMovies } from '../actions';
import { setMovieFilter } from '../actions';

const client=axios.create({
  baseURL:`https://the-one-api.dev/v2`
})

  client.defaults.headers.common['Authorization']='Bearer 2eLk1xX-571Qudxo8MVB'
  export const requestMovies=(filter)=> async (dispatch)=>{
    const params={
      limitS:filter.limit
    
    }
    const {data:{docs,...filters}}= await client.get(`/movie?budgetInMillions<${params.limitS}`,);
    dispatch(setMovies({movies:docs}));

  
  }
