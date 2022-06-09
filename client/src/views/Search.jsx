import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonNAME } from "../store/action";

export default function Search({page}) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();    
    setName(e.target.value.toLowerCase());
     page(1)    
  };

  const onSearch = (e) => {
    e.preventDefault();    
    dispatch(getPokemonNAME(name))
    
    setName("")
  };

//   function handleInputChange(e){
//     e.preventDefault();
//     setName(e.target.value)
//     //console.log(name)
// }

// function handleSubmit(e){
//     e.preventDefault();
//     dispatch(searchRecipesByName(name))
//     .then(()=>{ returnToFirstPage()})
//     setName('')
    
// }

  return (
    <div>
      <form>
        <input
          type="search"
          placeholder="Buscar un Pokemon"
          onChange={(e) => handleInputChange(e)}
        />
        <button
          type="submit"
          onClick={(e) => {
            onSearch(e);
          }}
        >
          Buscar
        </button>
      </form>
    </div>
  );
}

// import React from 'react';
// import { useState } from 'react';
// import { useDispatch} from 'react-redux';
// import {searchRecipesByName} from '../actions';
// import './SearchBar.css';

// export default function SearchBar({returnToFirstPage}){

//     const dispatch = useDispatch()

//     const [name,setName] = useState('')


// function handleInputChange(e){
//     e.preventDefault();
//     setName(e.target.value)
//     //console.log(name)
// }

// function handleSubmit(e){
//     e.preventDefault();
//     dispatch(searchRecipesB
