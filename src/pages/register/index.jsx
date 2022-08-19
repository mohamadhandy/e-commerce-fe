import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  auth,
  registerWithEmailAndPassword,
} from "../../config/firebase/index";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Index = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const [dataRegister, setDataRegister] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await registerWithEmailAndPassword(
        dataRegister.name,
        dataRegister.email,
        dataRegister.password
      );
      alert("User created successfully");
    } catch (e) {
      console.log(e);
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
      <section className="vh-100 pt-4">
        <Container className="container h-100">
          <Row className="row d-flex justify-content-center align-items-center h-100">
            <Col className="col-lg-12 col-xl-11">
              <div className="card text-black">
                <div className="card-body p-md-5">
                  <Row className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>
                      <Form className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="bx bx-user me-3"></i>
                          <div className="form-outline flex-fill mb-0">
                            <Form.Group
                              className="mb-3"
                              controlid="formBasicUsername"
                            >
                              <Form.Label>Username</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Username"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                className="form-control"
                                value={dataRegister.name}
                                onChange={(e) =>
                                  setDataRegister({
                                    ...dataRegister,
                                    name: e.target.value,
                                  })
                                }
                              />
                            </Form.Group>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="bx bx-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <Form.Group
                              className="mb-3"
                              controlId="formBasicEmail"
                            >
                              <Form.Label>Email address</Form.Label>
                              <Form.Control
                                type="email"
                                placeholder="Enter email"
                                className="form-control"
                                value={dataRegister.email}
                                onChange={(e) =>
                                  setDataRegister({
                                    ...dataRegister,
                                    email: e.target.value,
                                  })
                                }
                              />
                            </Form.Group>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="bx bx-log-in-circle fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <Form.Group
                              className="mb-3"
                              controlId="formBasicPassword"
                            >
                              <Form.Label>Password</Form.Label>
                              <Form.Control
                                type="password"
                                placeholder="Password"
                                className="form-control"
                                value={dataRegister.password}
                                onChange={(e) =>
                                  setDataRegister({
                                    ...dataRegister,
                                    password: e.target.value,
                                  })
                                }
                              />
                            </Form.Group>
                          </div>
                        </div>

                        <div className="d-grid gap-2">
                          <Button
                            variant="primary"
                            className="btn btn-primary"
                            type="submit"
                            onClick={(e) => handleSubmit(e)}
                            size="lg"
                          >
                            Register
                          </Button>
                        </div>
                      </Form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <Image
                        src="./images/5334958.jpg"
                        className="img-fluid"
                        alt="Sample"
                      />
                    </div>
                  </Row>
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
