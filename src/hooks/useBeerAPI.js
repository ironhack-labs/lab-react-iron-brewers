import axios from "axios";
import { useState } from "react";

export default function useBeerAPI({
  endPoint = "/",
  method = "GET",
  reqBody = null,
}) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleFetch = async () => {
    try {
      const response = await axios.request({
        baseURL: import.meta.env.VITE_API_URL,
        method: method,
        url: endPoint,
        data: reqBody,
      });
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, handleFetch };
}