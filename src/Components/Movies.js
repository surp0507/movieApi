import React from 'react'
import { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { requestMovies } from '../thunks/requestMovies'
import { Table,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { setMovieFilter } from '../actions'

  export default function Movies() {
    const {movies,filter}=useSelector(state=>state.movieReducer.record)
   
    const dispatch=useDispatch();

    const handleChangeFilter = (event) => {
      const { value, name } = event.target;
      dispatch(setMovieFilter({ [name]: value }));
    };

    useEffect(()=>{
      dispatch(requestMovies(filter));
    },[])
    return (
      <div>
        <h2 className="text-center">movies</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>movieId</th>
                <th>movieName</th>
                <th>runtimeInMinutes</th>
                <th>budgetInMillions</th>
              </tr>
            </thead>
            <tbody>
              {movies.map(item=>(
                <>
                  <tr>
                    <td>{item._id}</td>
                    <td>{item.name}</td>
                    <td>{item.runtimeInMinutes}</td>
                    <td>{item.budgetInMillions}</td>
                    <Link to={`/movie/${item._id}/quotes`}>
                      <Button className="btn btn-sm">quotes</Button>
                    </Link>  
                  </tr>
                </>
              ))}
             </tbody>
          </Table>
          <select  name="limit" value={filter.limit} onChange={handleChangeFilter}>
           <option value={100}>100</option>
           <option value={200}>200</option>
           <option value={300}>300</option>
           <option value={400}>400</option>
           <option value={500}>500</option>
          </select>
       </div>
     )
  }
