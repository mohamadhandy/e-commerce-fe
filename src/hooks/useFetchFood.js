import { useEffect, useState } from "react";
import axios from "axios";

export const useFetchFood = (id) => {
  const [loading, setLoading] = useState(false);
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    const fetchFood = async () => {
      try {
        const response = await axios.get(
          `https://6302f81dc6dda4f287c08864.mockapi.io/api/v1/Foods/${id}`
        );
        setAPIData(response.data);
        setLoading(true);
      } catch (error) {
        console.log("error", error);
      } finally {
        setLoading(false);
      }
    };
    fetchFood();
  }, []);
  return { APIData, loading };
};
