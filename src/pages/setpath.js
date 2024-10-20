import React from 'react';
function setPath({ country,category }) {
    const searchPath = new URLSearchParams(); 
    searchPath.set("country", country || ""); //sets the value of the parameter 'country'
    searchPath.set("category", category || ""); // sets the value of the parameter 'category'
    return searchPath.toString();
  }
  export default setPath
  