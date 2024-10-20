import React from 'react';
function getPath(location) {
    const searchParams = new URLSearchParams(location.search);
    return {
      country: searchParams.get("country") || "", // getting the parameter 'country'
      category:searchParams.get("category") || "", // getting the parameter 'category'
    };
  }
  export default getPath