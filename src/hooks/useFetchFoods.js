import { useEffect, useState } from "react";
import axios from "axios";

export const useFetchFoods = () => {
  // const [isLoading, setIsLoading] = useState(false);
  const [APIData, setAPIData] = useState([]);

  // const getProducts = async () => {
  //   try {
  //     setIsLoading(true);
  //     const res = await axios.get(`https://6302f81dc6dda4f287c08864.mockapi.io/api/v1/Foods`)
  //     console.log("response", response)
  //     setAPIData(res.data);
  //   } catch (err) {
  //     console.log(err);
  //   } finally {
  //     setIsLoading(false);
  //   }
  //   return [isLoading, APIData]
  // }

  useEffect(() => {
    axios
      .get(`https://6302f81dc6dda4f287c08864.mockapi.io/api/v1/Foods`)
      .then((response) => {
        console.log("respo", response)
        setAPIData(response.data);
      });
  }, []);
  return { APIData }
};
