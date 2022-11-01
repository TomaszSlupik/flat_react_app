import React from 'react'
import './Main.css'

function Main (props) {
    return (
        <div>  
                    <div className="flats">
                        <div className="flatsphoto"><img src={process.env.PUBLIC_URL + props.picture} alt="zdjęcia mieszkań" /></div>
                        <div className="flatunder">
                            <div className="nameflat">Dzielnica: <span>{props.name_flat}</span></div>
                            <div className="nameflat">Powierzchnia: <span>{props.area}</span></div>
                            <div className="nameflat">Cena: <span>{props.price}</span></div>
                            <div className="nameflat">Liczba pokoi: <span>{props.number}</span></div>
                        </div>
                    </div>         
   
        </div>
    )   
}

export default Main