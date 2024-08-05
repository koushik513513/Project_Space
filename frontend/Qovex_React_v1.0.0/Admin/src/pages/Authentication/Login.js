// // import PropTypes from 'prop-types'
// // import React, { useEffect } from "react"

// // import { Row, Col, Alert, Container } from "reactstrap"

// // // Redux
// // import { connect } from "react-redux"
// // import { withRouter, Link } from "react-router-dom"

// // // availity-reactstrap-validation
// // import { AvForm, AvField } from "availity-reactstrap-validation"

// // // actions
// // import { loginUser, apiError, socialLogin } from "../../store/actions"

// // // import images
// // import logo from "../../assets/images/logo-sm-dark.png"

// // const Login = (props) => {
// //   useEffect(() => {
// //     document.body.className = "authentication-bg";
// //     // remove classname when component will unmount
// //     return function cleanup() {
// //       document.body.className = "";
// //     };
// //   });

// //   // handleValidSubmit
// //   const handleValidSubmit = (event, values) => {
// //     props.loginUser(values, props.history)
// //   }

// //   return (
// //     <React.Fragment>
// //       <div className="home-btn d-none d-sm-block">
// //         <Link to="/" className="text-dark">
// //           <i className="fas fa-home h2" />
// //         </Link>
// //       </div>
// //       <div className="account-pages my-5 pt-sm-5">
// //         <Container>
// //           <Row className="justify-content-center">
// //             <Col md={8} lg={6} xl={5}>
// //               <div className="card overflow-hidden">
// //                 <div className="bg-login text-center">
// //                   <div className="bg-login-overlay"></div>
// //                   <div className="position-relative">
// //                     <h5 className="text-white font-size-20">Welcome Back !</h5>
// //                     <p className="text-white-50 mb-0">Sign in to continue to Qovex.</p>
// //                     <Link to="/" className="logo logo-admin mt-4">
// //                       <img src={logo} alt="" height="30" />
// //                     </Link>
// //                   </div>
// //                 </div>
// //                 <div className="card-body pt-5">
// //                   <div className="p-2">
// //                     <AvForm
// //                       className="form-horizontal"
// //                       onValidSubmit={(e, v) => {
// //                         handleValidSubmit(e, v)
// //                       }}
// //                     >
// //                       {props.error && typeof props.error === "string" ? (
// //                         <Alert color="danger">{props.error}</Alert>
// //                       ) : null}

// //                       <div className="mb-3">
// //                         <AvField
// //                           name="email"
// //                           label="Email"
// //                           value="admin@themesbrand.com"
// //                           className="form-control"
// //                           placeholder="Enter email"
// //                           type="email"
// //                           required
// //                         />
// //                       </div>

// //                       <div className="mb-3">
// //                         <AvField
// //                           name="password"
// //                           label="Password"
// //                           value="123456"
// //                           type="password"
// //                           required
// //                           placeholder="Enter Password"
// //                         />
// //                       </div>

// //                       <div className="form-check">
// //                         <input
// //                           type="checkbox"
// //                           className="form-check-input"
// //                           id="customControlInline"
// //                         />
// //                         <label
// //                           className="form-check-label"
// //                           htmlFor="customControlInline"
// //                         >
// //                           Remember me
// //                         </label>
// //                       </div>

// //                       <div className="mt-3">
// //                         <button
// //                           className="btn btn-primary w-100 waves-effect waves-light"
// //                           type="submit"
// //                         >
// //                           Log In
// //                         </button>
// //                       </div>

// //                       <div className="mt-4 text-center">
// //                         <Link to="/forgot-password" className="text-muted"><i
// //                           className="mdi mdi-lock me-1"></i> Forgot your password?</Link>
// //                       </div>
// //                     </AvForm>

// //                   </div>
// //                 </div>
// //               </div>
// //               <div className="mt-5 text-center">
// //                 <p>Don't have an account ? <Link to="/register"
// //                   className="fw-medium text-primary"> Signup now </Link> </p>
// //                 <p>© {new Date().getFullYear()} Qovex. Crafted with <i
// //                   className="mdi mdi-heart text-danger"></i> by Themesbrand
// //                         </p>
// //               </div>
// //             </Col>
// //           </Row>

// //         </Container>
// //       </div>
// //     </React.Fragment>
// //   )
// // }

// // const mapStateToProps = state => {
// //   const { error } = state.Login
// //   return { error }
// // }

// // export default withRouter(
// //   connect(mapStateToProps, { loginUser, apiError, socialLogin })(Login)
// // )

// // Login.propTypes = {
// //   error: PropTypes.any,
// //   history: PropTypes.object,
// //   loginUser: PropTypes.func,
// //   socialLogin: PropTypes.func
// // }





// // code taken form pervious


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate } from 'react-router-dom';
// import './rl.css'; // Import your CSS file

// function Login() {
//   let navigate = useNavigate();
//   const [formdata, setFormdata] = useState({
//     Email: '',
//     Password: '',
//   });

//   const handleChange = (e) => {
//     setFormdata({
//       ...formdata,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formdata);

//     // Assuming your login endpoint is '/getsignindata', adjust it as needed
//     axios.post('http://localhost:5000/signin', formdata)
//       .then((res) => {
//         console.log(res.data);

//         toast.success("Login Successful");
//         navigate('/');
//       })
//       .catch((error) => {
//         console.error('Error:', error.message);
//         toast.error("Login Failed");
//       });
//   };

//   return (
//     <div id='login-container'>
//       <form className='login-form'>
//         <h3 id='login-heading'>Login</h3>
//         <label>Username:</label>
//         <br />
//         <input
//           type="text"
//           name="Email"
//           placeholder="Koushik@gmail.com"
//           value={formdata.username}
//           onChange={handleChange}
//         />
//         <br />
//         <label>Password:</label><br />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formdata.Password}
//           onChange={handleChange}
//         />
//         <br /><br />
//         <input type="submit" id='login-submit' value='Sign In' onClick={handleSubmit} />
//         <ToastContainer />
//         <p>
//         Don't have an account? <Link to="/register">Register</Link>
//       </p>
//       </form>
//     </div>
//   );
// }

// export default Login;