import React, {useState, useEffect} from 'react';
import { Receipes } from '../Display/Receipes';
import './style.css';

export const InputField = () => {

    const [items, setItems] =  useState([]);
    const [value, setValue] = useState('');
    const [query, setQuery] = useState('chicken');

    useEffect(() => {
        const fetchResult = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=42915872&app_key=12618b908e93e2ca82dfa85fc85f1102`);
        const result = await response.json();
        setItems(result.hits);
    }
    fetchResult();
    },[query]);

    
    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setQuery(value);
        setValue('');
    }

    return (
        <div>
            <form className="search-form" onSubmit={handleSubmit}>
                <input type="text" placeholder="Search Receipe" value={value} onChange={handleChange} className="inp-field" autoFocus />
                <button className="btn btn-outline-primary ml-2">Search</button>
            </form>
            <div className="list-receipes">
                {
                    items.map((item, index) =>
                        <Receipes key={index} title={item.recipe.label} image={item.recipe.image} calories={item.recipe.calories} ingredients={item.recipe.ingredients} />
                    )
                } 
            </div>  
        </div>
    )
}
