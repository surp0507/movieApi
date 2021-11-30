import React, { useEffect } from 'react'
import {requestBooks} from '../thunks/requestBooks';
import { useSelector,useDispatch } from 'react-redux';
import {Button,Table} from 'react-bootstrap';

  export default function Books() {
   const books=useSelector(state=>state.bookReducer.books)
   const dispatch=useDispatch();
  
   useEffect(()=>{
     dispatch(requestBooks());
   },[])
   
   return (
     <div>
       <h2>this is books</h2>
         <Table striped bordered hover>
          <thead>
            <tr>
              <th>bookId</th>
              <th>BookName</th>
            </tr>
          </thead>
          <tbody>
            {books.map(item=>(
              <>
                <tr>
                  <td>{item._id}</td>
                  <td>{item.name}</td>
                </tr>
              </>
            ))}
          </tbody>
        </Table>
      </div>
   )
}
