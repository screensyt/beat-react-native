import React from 'react';

import useFetchData from './useFetchData';
import Error from './components/Error';
import Loading from './components/Loading';

function FetchData({action, children}) {
  const [data, isLoaded, error] = useFetchData(action);

  if (error) {
    return <Error error={error} />;
  }

  if (!isLoaded) {
    return <Loading />;
  }

  if (!data) {
    return null;
  }

  return children(data);
}

export default FetchData;
