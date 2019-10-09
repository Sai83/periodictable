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
                    <td><img alt="" src={element.spectral_img}></img></td>
                    
                    </tr>
                );

            })
            
        }
        </tbody>
</table>

</>


);

function getImageBase64(src){
    var canvas = document.createElement("canvas");
    var img = document.createElement("img");
    img.src = src;
    //canvas.width = img.width;
    //canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    var dataURL = canvas.toDataURL("image/jpg");
      dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
     return img.src = dataURL; 
                
}
}

export default Element;