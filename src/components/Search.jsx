import React from "react";
import "./Search.css"

function Search () {
    return (
        <div>
            <div className="box">
                <div className="title">Znajdź wymarzone <span className="colorFlat">mieszkanie</span> dla siebie</div>
                <div className="boxsearch">
                    <input type="text"
                           placeholder="szukaj" />
                    <button className="btn">Szukaj</button>
                </div>
                

            </div>

        </div>
    )
}

export default Search