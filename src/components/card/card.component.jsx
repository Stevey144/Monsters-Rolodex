import { Component } from "react";
import './card.styles.css';
const Card = ({monster}) =>{
const {id, name, email} =  monster  
// line five is what we call destructuring of array
//if u pass an incorrect prop, your app wont work!! eg 
//this.props.monsters(is wrong because we expect a monster with letter s)
//pay attention while passing props
    return (
                <div className='card-container' key={id}>
                <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`monster ${name}`} />
                <h2>{name}</h2>
                <p>{email}</p>
                </div>
            )
    }
    
export default Card