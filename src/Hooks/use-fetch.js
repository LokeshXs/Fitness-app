import { useEffect, useState } from "react";



const useFetch = (url, options = {}) => {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [hasError, setHasError] = useState(null);
  const [fetchedData, setFetchedData] = useState([]);
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsDataLoaded(false);
        setHasError(null);

        const res = await fetch(url, options);

        if (!res.ok) {
          throw new Error("Not able to  fetch the data");
        }

        const data = await res.json(); //converting data to jsonform
        // console.log(data);
        // dispatch(updateBodyPartsList(data));
        setFetchedData(data);
        setIsDataLoaded(true);
      } catch (error) {
        setHasError(error);
      }
    };

    fetchData();
  }, []);

  return {
    fetchedData: fetchedData,
    dataLoadingStatus: isDataLoaded,
    error: hasError,
  };
};

export default useFetch;
