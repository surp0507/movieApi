import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useEffect} from 'react';
import {requestCharacters} from '../thunks/requestChar'
import {Table,Button} from 'react-bootstrap'

  export default function Characters() {
    const character=useSelector(state=>state.charReducer.character)
    const dispatch=useDispatch()
    
    useEffect(()=>{
      dispatch(requestCharacters());
    },[])
    return (
      <div>
        <h2>this is character</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>characterId</th>
                <th>characterRace</th>
                <th>characterGender</th>
              </tr>
            </thead>
            <tbody>
              {character.map(item=>(
                <>
                  <tr>
                    <td>{item._id}</td>
                    <td>{item.race}</td>
                    <td>{item.gender}</td>
                  </tr>
                </>
              ))}
           </tbody>
          </Table>
       </div>
    )
}



