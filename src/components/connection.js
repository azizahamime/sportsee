import { useEffect, useState } from "react";
import axios from "axios";

const url = '/api/users';
export default function Connection() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(url)
      .then((response) => setData(response.data))
      .catch((error) => {
        console.log(error);
        setError(error);
      })
      .finally(() => setIsLoading(false))

  }, [])

  return { error, isLoading, data }

}