import React from 'react';
function getParams(location) {
    const searchParams = new URLSearchParams(location.search);
    return {
      query: searchParams.get("query") || "" //getting the parameter 'query'
    };
  }
  export default getParams