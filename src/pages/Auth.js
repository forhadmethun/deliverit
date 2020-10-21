import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {userActions} from "../actions";
function Auth() {
  const alert = useSelector(state => state.alert);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [bmdcRegistrationNo, setBmdcRegistrationNo] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [yearOfExperience, setYearOfExperience] = useState('');
  const [degree, setDegree] = useState('');
  const [imagePath, setImagePath] = useState('');


  useEffect(() => {
    dispatch(userActions.logout());
  }, []);

  const doLogin = () => {
    if (email && password) {
      dispatch(userActions.login(email, password));
    }
  };

  const doSignUp = () => {
    // validation
    dispatch(userActions.register(
        {
          name,
          email,
          mobileNo,
          bmdcRegistrationNo,
          password,
          yearOfExperience,
          degree,
          imagePath
        }
    ));
  }

    return (
      <div className="d-flex flex-column flex-root" style={{minHeight : "100%"}}>
        {/*begin::Login*/}
        <div
          className="login login-4 login-signin-on d-flex flex-row-fluid"
          id="kt_login"
        >
          <div
            className="d-flex flex-center flex-row-fluid bgi-size-cover bgi-position-top bgi-no-repeat"
            style={{
              backgroundImage: "url(" + "assets/media/bg/bg-3.jpg" + ")",
            }}
          >
            <div className="login-form text-center p-7 position-relative overflow-hidden">
              {/*begin::Login Header*/}
              <div className="d-flex flex-center mb-15">
                <a href="#">
                  <img
                    src="assets/media/logos/logo-letter-13.png"
                    className="max-h-75px"
                    alt=""
                  />
                </a>
              </div>
              {/*end::Login Header*/}
              {/*begin::Login Sign in form*/}
              <div className="login-signin">
                <div className="mb-20">
                  <h3>Sign In To Admin</h3>
                  <div className="text-muted font-weight-bold">
                    Enter your details to login to your account:
                  </div>
                </div>
                <form className="form" id="kt_login_signin_form">
                  <div className="form-group mb-5">
                    <input
                      className="form-control h-auto form-control-solid py-4 px-8"
                      type="text"
                      placeholder="Email"
                      name="email"
                      autoComplete="off"

                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group mb-5">
                    <input
                      className="form-control h-auto form-control-solid py-4 px-8"
                      type="password"
                      placeholder="Password"
                      name="password"

                      value={password}
                      onChange={e => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="form-group d-flex flex-wrap justify-content-between align-items-center">
                    <div className="checkbox-inline">
                      <label className="checkbox m-0 text-muted">
                        <input type="checkbox" name="remember" />
                        <span></span>Remember me
                      </label>
                    </div>
                    <a
                      /*href="javascript:;"*/
                      id="kt_login_forgot"
                      className="text-muted text-hover-primary"
                    >
                      Forget Password ?
                    </a>
                  </div>
                  <button
                    id="kt_login_signin_submit"
                    className="btn btn-primary font-weight-bold px-9 py-4 my-3 mx-4"

                    onClick={() => doLogin()}
                  >
                    Sign In
                  </button>
                </form>
                <div className="mt-10">
                  <span className="opacity-70 mr-4">
                    Don't have an account yet?
                  </span>
                  <a
                   /* href="javascript:;"*/
                    id="kt_login_signup"
                    className="text-muted text-hover-primary font-weight-bold"
                  >
                    Sign Up!
                  </a>
                </div>
              </div>
              {/*end::Login Sign in form*/}
              {/*begin::Login Sign up form*/}
              <div className="login-signup">
                <div className="mb-20">
                  <h3>Sign Up</h3>
                  <div className="text-muted font-weight-bold">
                    Enter your details to create your account
                  </div>
                </div>
                <form className="form" id="kt_login_signup_form">
                  <div className="form-group mb-5">
                    <input
                      className="form-control h-auto form-control-solid py-4 px-8"
                      type="text"
                      placeholder="Fullname"
                      name="fullname"

                      value={name}
                      onChange={e => setName(e.target.value)}
                    />
                  </div>
                  <div className="form-group mb-5">
                    <input
                      className="form-control h-auto form-control-solid py-4 px-8"
                      type="text"
                      placeholder="Email"
                      name="email"
                      autoComplete="off"

                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group mb-5">
                    <input
                      className="form-control h-auto form-control-solid py-4 px-8"
                      type="password"
                      placeholder="Password"
                      name="password"

                      value={password}
                      onChange={e => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="form-group mb-5">
                    <input
                      className="form-control h-auto form-control-solid py-4 px-8"
                      type="password"
                      placeholder="Confirm Password"
                      name="cpassword"

                      value={rePassword}
                      onChange={e => setRePassword(e.target.value)}
                    />
                  </div>
                  <div className="form-group mb-5">
                    <input
                        className="form-control h-auto form-control-solid py-4 px-8"
                        type="text"
                        placeholder="Mobile No."
                        name="mobile"
                        autoComplete="off"

                        value={mobileNo}
                        onChange={e => setMobileNo(e.target.value)}
                    />
                  </div>
                  <div className="form-group mb-5">
                    <input
                        className="form-control h-auto form-control-solid py-4 px-8"
                        type="text"
                        placeholder="BMDC Registration Number"
                        name="bmdcRegistrationNo"
                        autoComplete="off"

                        value={bmdcRegistrationNo}
                        onChange={e => setBmdcRegistrationNo(e.target.value)}
                    />
                  </div>
                  <div className="form-group mb-5">
                    <input
                        className="form-control h-auto form-control-solid py-4 px-8"
                        type="number"
                        placeholder="Year of Experience."
                        name="yearOfExperience"
                        autoComplete="off"

                        value={yearOfExperience}
                        onChange={e => setYearOfExperience(e.target.value)}
                    />
                  </div>
                  <div className="form-group mb-5">
                    <input
                        className="form-control h-auto form-control-solid py-4 px-8"
                        type="text"
                        placeholder="Degree"
                        name="degree"
                        autoComplete="off"

                        value={degree}
                        onChange={e => setDegree(e.target.value)}
                    />
                  </div>
                  <div className="form-group mb-5 text-left">
                    <div className="checkbox-inline">
                      <label className="checkbox m-0">
                        <input type="checkbox" name="agree" />
                        <span></span>I Agree the
                        <a href="#" className="font-weight-bold ml-1">
                          terms and conditions
                        </a>
                        .
                      </label>
                    </div>
                    <div className="form-text text-muted text-center"></div>
                  </div>
                  <div className="form-group d-flex flex-wrap flex-center mt-10">
                    <button
                      id="kt_login_signup_submit"
                      className="btn btn-primary font-weight-bold px-9 py-4 my-3 mx-2"
                      onClick={() => doSignUp()}
                    >
                      Sign Up
                    </button>
                    <button
                      id="kt_login_signup_cancel"
                      className="btn btn-light-primary font-weight-bold px-9 py-4 my-3 mx-2"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
              {/*end::Login Sign up form*/}
              {/*begin::Login forgot password form*/}
              <div className="login-forgot">
                <div className="mb-20">
                  <h3>Forgotten Password ?</h3>
                  <div className="text-muted font-weight-bold">
                    Enter your email to reset your password
                  </div>
                </div>
                <form className="form" id="kt_login_forgot_form">
                  <div className="form-group mb-10">
                    <input
                      className="form-control form-control-solid h-auto py-4 px-8"
                      type="text"
                      placeholder="Email"
                      name="email"
                      autoComplete="off"
                    />
                  </div>
                  <div className="form-group d-flex flex-wrap flex-center mt-10">
                    <button
                      id="kt_login_forgot_submit"
                      className="btn btn-primary font-weight-bold px-9 py-4 my-3 mx-2"
                    >
                      Request
                    </button>
                    <button
                      id="kt_login_forgot_cancel"
                      className="btn btn-light-primary font-weight-bold px-9 py-4 my-3 mx-2"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
              {/*end::Login forgot password form*/}
            </div>
          </div>
        </div>
        {/*end::Login*/}
      </div>
    );
  }

export default Auth;
