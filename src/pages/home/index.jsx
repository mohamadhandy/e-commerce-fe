import Header from "../../components/header";
import Hero from "../../components/hero";
import ListProducts from "../../components/products";
import { Container } from "reactstrap";
import { useState } from "react";
import { useFetchFoods } from "../../hooks/useFetchFoods";

const Index = () => {
  const [value, setValue] = useState('All')
  let foods = useFetchFoods("", value);
  const handleFilter = (e) => {
    let val = e.target.textContent
    setValue(val)
  }
  return (
    <>
      <Header />
      <Hero />
      <Container>
        <div className="buttons d-flex justify-content-center pb-5">
          <button className="btn btn-outline-dark me-2" onClick={(e) => handleFilter(e)}>All</button>
          <button className="btn btn-outline-dark me-2" onClick={(e) => handleFilter(e)}>Vegetables</button>
          <button className="btn btn-outline-dark me-2" onClick={(e) => handleFilter(e)}>Fruits</button>
          <button className="btn btn-outline-dark me-2" onClick={(e) => handleFilter(e)}>Herbs</button>
        </div>
        <ListProducts foods={foods.APIData} loading={foods.loading} />
      </Container>
    </>
  );
};

export default Index;
