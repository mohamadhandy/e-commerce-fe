import Header from "../../components/header";
import { auth, logInWithEmailAndPassword } from "../../config/firebase/index";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Index = () => {
  const [dataLogin, setDataLogin] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  const handleSubmit = async (e, params) => {
    e.preventDefault();
    if (params === "login") {
      await logInWithEmailAndPassword(dataLogin.email, dataLogin.password);
    }
  };
  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) navigate("/");
    if (error) alert(error);
  }, [loading, user, error, navigate]);
  return (
    <>
      <Header />
      <section className="vh-100">
        <Container className="container py-5 h-100">
          <Row className="row d-flex justify-content-center align-items-center h-100">
            <Col className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card shadow-2-strong section-card-login">
                <div className="card-body p-5 text-center">
                  <h3 className="mb-5">Sign in</h3>

                  <div className="form-outline mb-4">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        className="form-control form-control-lg"
                        onChange={(e) =>
                          setDataLogin({ ...dataLogin, email: e.target.value })
                        }
                      />
                    </Form.Group>
                  </div>

                  <div className="form-outline mb-4">
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        className="form-control form-control-lg"
                        onChange={(e) =>
                          setDataLogin({
                            ...dataLogin,
                            password: e.target.value,
                          })
                        }
                      />
                    </Form.Group>
                  </div>
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={(e) => handleSubmit(e, "login")}
                  >
                    Submit
                  </Button>
                  <hr className="my-4" />
                  <Button
                    variant="primary"
                    type="submit"
                    size="lg"
                    onClick={(e) => handleSubmit(e, "login")}
                  >
                    <i className="bx bxl-google"></i> Sign in with google
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Index;
