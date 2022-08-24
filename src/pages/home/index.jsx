import Header from "../../components/header";
import Hero from "../../components/hero";
import ListProducts from "../../components/products";
import { Container } from "reactstrap";

const Index = () => {
  return (
    <>
      <Header />
      <Hero />
      <Container>
        <div className="buttons d-flex justify-content-center pb-5">
          <button className="btn btn-outline-dark me-2">All</button>
          <button className="btn btn-outline-dark me-2">Diet foods</button>
        </div>
        <ListProducts />
      </Container>
    </>
  );
};

export default Index;
