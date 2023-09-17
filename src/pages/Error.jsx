import  { useEffect, useState } from 'react';
import { useRouteError } from 'react-router-dom';
import ErrorContainer from '../container/ErrorContainer/ErrorContainer';

const Error = () => {

  const [errorCode, setErrorCode] = useState(404);
  const [errorMessage, setErrorMessage] = useState("Could not find the page")
  const error = useRouteError();

 

  useEffect(() => {
    if (error.status !== 404) {
      const errorResponse = error.clone();
      setErrorCode(error.status);

      errorResponse.text().then((text) => {
        const errorObj = JSON.parse(text);
        setErrorMessage(errorObj.message);

      })
    }
  }, [])


  return (
    <ErrorContainer message={errorMessage} status={errorCode} />
  )
}

export default Error