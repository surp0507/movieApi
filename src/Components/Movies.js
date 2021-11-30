import React from 'react'
import { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { requestMovies } from '../thunks/requestMovies'
import { Table,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

  export default function Movies() {
    const movies=useSelector(state=>state.movieReducer.movies)
    const dispatch=useDispatch();

    useEffect(()=>{
      dispatch(requestMovies());
    },[])
    return (
      <div>
        <h2 className="text-center">movies</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>movieId</th>
                <th>movieName</th>
                <th>budgetInMillions</th>
              </tr>
            </thead>
            <tbody>
              {movies.map(item=>(
                <>
                  <tr>
                    <td>{item._id}</td>
                    <td>{item.name}</td>
                    <td>{item.budgetInMillions}</td>
                    <Link to={`/movie/${item._id}/quotes`}>
                      <Button className="btn btn-sm">quotes</Button>
                    </Link>  
                  </tr>
                </>
              ))}
             </tbody>
          </Table>
        </div>
     )
  }
