import React, {useState, useEffect} from "react";
import {getElements  } from "../api/elementsApi";
function Element(){
const [elements, setElements] = useState([]);

useEffect(()=>{
getElements().then(_elements => setElements(_elements));
}, []);

return(
    <>
<h2> Elements </h2>
<table className="table">
<thead>
    <tr>
    <th>Name</th>
    <th>Appearence</th>
    <th>Spectral Image</th>
    </tr>
    </thead>
    <tbody>
        {
            elements.map(element =>{
                return(
                    <tr key={element.name}>
                    <td>{element.name}</td>
                    <td>{element.appearance}</td>
                    <td><img src = {element.spectral_img} alt = ""></img></td>
                    </tr>
                )
            })
        }
        </tbody>
</table>
</>

);


}

export default Element;