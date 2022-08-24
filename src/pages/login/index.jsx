import Header from "../../components/header";
import { auth, logInWithEmailAndPassword } from "../../config/firebase/index";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container, Row, Col, Button, Input } from "reactstrap";

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
    if (user) {
      swal("success", "Success login", "success")
      navigate("/")
    }
    if (error) swal("error", error, "error");
  }, [loading, user, error, navigate]);
  return (
    <>
      <Header />
      <section className="vh-100">
        <Container className="container py-5 h-100">
          <Row
            lg={12}
            className="justify-content-center align-items-center h-100"
          >
            <Col xs={12} md={5}>
              <div className="card shadow-2-strong section-card-login">
                <div className="card-body p-5 text-center">
                  <h3 className="mb-5">Sign in</h3>

                  <div className="form-outline mb-4">
                    <label>Email address</label>
                    <Input
                      type="email"
                      placeholder="Enter email"
                      className="form-control form-control-lg"
                      onChange={(e) =>
                        setDataLogin({ ...dataLogin, email: e.target.value })
                      }
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <label>Password</label>
                    <Input
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
                  </div>
                  <Button
                    color="warning"
                    type="submit"
                    onClick={(e) => handleSubmit(e, "login")}
                  >
                    Submit
                  </Button>
                  <hr className="my-4" />
                  <Button
                    color="warning"
                    type="submit"
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
