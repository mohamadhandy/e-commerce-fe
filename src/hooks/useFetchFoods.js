import { useEffect, useState } from "react";
import axios from "axios";

export const useFetchFoods = () => {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    const fetchFoods = async () => {
      const response = await axios.get(`https://6302f81dc6dda4f287c08864.mockapi.io/api/v1/Foods`)
      setAPIData(response.data)
    }
    fetchFoods()
  }, []);
  return { APIData }
};
