import React from "react";
import "./Search.css"
import { useState } from "react";

function Search (props) {
   
    const [term, setTerm] = useState("");

    const search = () => {
        props.onSearch(term)
        
    }

    const updateTerm = (e) => {
        setTerm(e.target.value)
    }

    const onKey = (e) => {
        if (e.key === 'Enter') {
           search()
        }
    }

    return (
        <div>
            <div className="box">
                <div className="title">Znajdź wymarzone <span className="colorFlat">mieszkanie</span> dla siebie</div>
                <div className="boxsearch">
                    <input 
                    className="inputsearch" 
                    type="text"      
                    placeholder="szukaj" 
                    value={term}
                    onChange={updateTerm}
                    onKeyDown={onKey}
                           />
                    <button 
                    className="btn"
                    onClick={search}>Szukaj</button>
                </div>
                

            </div>

        </div>
    )
}

export default Search