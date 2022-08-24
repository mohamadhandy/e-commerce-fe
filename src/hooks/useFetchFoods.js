import { useEffect, useState } from "react";
import axios from "axios";
import swal from "sweetalert";

export const useFetchFoods = (id, category) => {
  const [loading, setLoading] = useState(false);
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    const fetchFoods = async () => {
      try {
        let response;
        if (id) {
          response = await axios.get(
            `https://6302f81dc6dda4f287c08864.mockapi.io/api/v1/Foods/${id}`
          );
        } else {
          if (category !== 'All') {
            response = await axios.get(
              `https://6302f81dc6dda4f287c08864.mockapi.io/api/v1/Foods?filter=${category}`
            );
          } else {
            response = await axios.get(
              `https://6302f81dc6dda4f287c08864.mockapi.io/api/v1/Foods`
            );
          }
        }
        setAPIData(response.data);
        setLoading(true);
      } catch (error) {
        swal("error", error, "error");
      } finally {
        setLoading(false);
      }
    };
    fetchFoods();
  }, [category, id]);
  return { APIData, loading };
};
