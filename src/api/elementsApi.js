import {handleResponse, handleError  } from "./apiUtils.js";
const baseUrl = process.env.REACT_APP_API_URL + "/elements";

export function getElements(){
    return fetch(baseUrl,{
        headers:{
            'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'https://en.wikipedia.org/wiki/File'
    
        
        }

    }).then(handleResponse).catch(handleError);
}