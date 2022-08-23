import Header from "../../components/header";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";
import { useLocation } from "react-router";
import { useFetchFoods } from "../../hooks/useFetchFoods";


const Index = () => {
  const location = useLocation();
  const idLocation = location.pathname.split("/products/")[1];
  const data = useFetchFoods(idLocation);
  const food = data.APIData

  return (
    <>
      <Header />
      <Row lg={12} className="justify-content-center pt-4">
        <Col md={12} xs={12} className="pb-5 text-center">
          <h1>{food.name}</h1>
        </Col>
        <Col md={6} xs={12} className="text-center">
          <img
            src={`/${food.url}`}
            alt={`Product ${food.name}`}
            height={400}
            width={400}
          />
        </Col>
        <Col md={6} xs={12} className="text-center">
          <h4 className="text-uppercase text-black-50">Rp. {food.price}</h4>
          <h1 className="display-5">{food.name}</h1>
          <p className="lead">{food.description}</p>
          <Link to="/cart">
            <span className="btn btn-warning me-1">Add to Cart</span>
          </Link>
        </Col>
      </Row>
    </>
  );
};

export default Index;
