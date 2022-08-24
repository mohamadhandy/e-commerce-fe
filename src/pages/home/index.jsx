import Header from "../../components/header";
import Hero from "../../components/hero";
import ListProducts from "../../components/products";
import { Container, Row, Col } from "reactstrap";
import { useState } from "react";
import { useFetchFoods } from "../../hooks/useFetchFoods";

const Index = () => {
  const [value, setValue] = useState("All");
  let foods = useFetchFoods("", value);
  const handleFilter = (e) => {
    let val = e.target.textContent;
    setValue(val);
  };
  return (
    <>
      <Header />
      <Hero />
      <Container>
        <Row lg={12}>
          <Col md={12} xs={12}>
            <div
              className="section-header mb-5 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ maxWidth: 500 }}
            >
              <h1 className="display-5 mb-3">Our Products</h1>
            </div>
          </Col>
        </Row>
        <div className="buttons d-flex text-start pb-5">
          <button
            className="btn btn-outline-dark me-2"
            onClick={(e) => handleFilter(e)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={(e) => handleFilter(e)}
          >
            Vegetables
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={(e) => handleFilter(e)}
          >
            Fruits
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={(e) => handleFilter(e)}
          >
            Herbs
          </button>
        </div>
        <ListProducts foods={foods.APIData} loading={foods.loading} />
      </Container>
    </>
  );
};

export default Index;
