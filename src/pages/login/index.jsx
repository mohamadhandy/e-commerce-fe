import Header from "components/header";
import { auth, logInWithEmailAndPassword } from "config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

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
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card shadow-2-strong section-card-login">
                <div className="card-body p-5 text-center">
                  <h3 className="mb-5">Sign in</h3>

                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="typeEmailX-2"
                      className="form-control form-control-lg"
                      onChange={e =>
                        setDataLogin({ ...dataLogin, email: e.target.value })
                      }
                    />
                    <label className="form-label" htmlFor="typeEmailX-2">
                      Email
                    </label>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="typePasswordX-2"
                      className="form-control form-control-lg"
                      onChange={e =>
                        setDataLogin({ ...dataLogin, password: e.target.value })
                      }
                    />
                    <label className="form-label" htmlFor="typePasswordX-2">
                      Password
                    </label>
                  </div>

                  <button
                    className="btn btn-primary btn-lg btn-block"
                    type="submit"
                    onClick={(e) => handleSubmit(e, 'login')}
                  >
                    Login
                  </button>

                  <hr className="my-4" />

                  <button
                    className="btn btn-lg btn-block btn-primary login-button"
                    type="submit"
                  >
                    <i className='bx bxl-google'></i> Sign in with google
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
