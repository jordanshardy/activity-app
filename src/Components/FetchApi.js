import React, { useEffect } from "react";

useEffect(() => {
  fetch("https://www.boredapi.com/api/activity")
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw response;
    })
    .then((data) => {
      setData(data);
    })
    .catch((error) => {
      console.error("Error fetching data: ", error);
      setError(error);
    })
    .finally(() => {
      setLoading(false);
    });
}, []);

export default FetchApi;
