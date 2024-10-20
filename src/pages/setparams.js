import React from 'react';
function setParams({ query }) {
    const searchParams = new URLSearchParams(); 
    searchParams.set("query", query || ""); //sets the value of the parameter 'query'
    return searchParams.toString();
  }
  export default setParams