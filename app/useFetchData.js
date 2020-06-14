import {useState, useEffect} from 'react';

function useFetchData(action) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        const actionData = await action();
        setData(actionData);
        setIsLoaded(true);
      } catch (e) {
        setIsLoaded(true);
        setError(e);
      }
    }
    loadData();
  }, [action]);

  return [data, isLoaded, error];
}

export default useFetchData;
