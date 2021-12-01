import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useEffect} from 'react';
import {requestCharacters} from '../thunks/requestChar'
import {Table,Button} from 'react-bootstrap'
import { setCharacterFilter } from '../actions';

  export default function Characters() {
    const {character,filter}=useSelector(state=>state.charReducer.record)
    const dispatch=useDispatch()

    const handleChangeFilter = (event) => {
      const { value, name } = event.target;
      dispatch(setCharacterFilter({ [name]: value }));
    };
  
    
    useEffect(()=>{
      dispatch(requestCharacters(filter));
    },[filter.limit])
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
          <select  name="limit" value={filter.limit} onChange={handleChangeFilter}>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
           </select>
        </div>
    )
}



