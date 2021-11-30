import React from 'react'
import { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { requestQuote } from '../thunks/requestQuote'
import { Table,Button } from 'react-bootstrap'
import { useParams } from 'react-router'

export default function Quotes() {
  const quote=useSelector(state=>state.quoteReducer.quotes)
  const dispatch=useDispatch();
  const {movieid}=useParams()
  
  useEffect(()=>{
    dispatch(requestQuote(movieid))
  },[])
 
  return (
    <div>
      <h2 className="text-center">Quotes</h2> 
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>quoteId</th>
            <th>dialog</th>
            <th>movieid</th>
          </tr>
        </thead>
        <tbody>
          {quote.map(item=>(
            <>
              <tr>
                <td>{item._id}</td>
                <td>{item.dialog}</td>
                <td>{item.movie}</td>
              </tr>
            </>
          ))}
        </tbody>
      </Table>
     </div>
    )
 }
