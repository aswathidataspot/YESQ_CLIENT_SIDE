import React, { useState } from 'react'
import '../Css/login.css'
import Landing from '../Images/landing.svg'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
export default function Login() {
    const [error, setError] = useState(null)
    const errordiv = error ? <div className="login-errormsg">{error}</div> : '';
    const history = useHistory();
    const phoneRegex = RegExp(
        /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    );
    const formik = useFormik
        ({
            initialValues:
            {
                mobile: "",
                password: ""

            },
            validationSchema: Yup.object
                ({
                    mobile: Yup.string()
                        .matches(phoneRegex, "Incorrect mobile number")
                        
                        .required("Enter your mobile number"),
                    password: Yup.string()

                        .required("Enter your password!")


                }),
            onSubmit: (values, onSubmitprops) => {
                setError(null)
                let mobTrim = values.mobile.trim()
                let pswdTrim = values.password.trim()
                const trimValues = { mobile: mobTrim, password: pswdTrim }

                axios.post("/signin", trimValues).then(response => {
                    console.log(response)

                    onSubmitprops.resetForm()
                    history.push
                        ({
                            pathname: '/home',
                            state: { detail: { mobile: response.data, password: response.config.url } }



                        });
                })
                    .catch((err) => {
                        setError(err.response.data);

                    })
            }
        });
    return (
        <div className='white'>
            <div className="container">
                <div className="row d-flex align-items-center vh-100">
                    <div className="col-md-6 card-new">
                        <div className="card1 pb-5">
                            <div className="row px-3  mt-4 mb-5 border-line">
                                <img src={Landing} alt='logo' />
                            </div>
                        </div>

                    </div>
                    <div className="col-md-5 m-auto">
                        <div id="login">
                            <aside>
                                <div className="text-center">
                                    <h3>SIGN IN</h3>
                                    {errordiv}
                                </div>

                                <form className="signInForm" onSubmit={formik.handleSubmit} autoComplete="off">
                                    <div className="form-group">
                                        <label htmlFor="" className="input-label">Mobile Number</label>
                                        <input
                                            type="text"
                                            className="form-control signInMobile"
                                            name="mobile"
                                            id="mobile"
                                            value={formik.values.mobile}
                                            onChange={formik.handleChange}
											onKeyDown={e => /[\+\-\.\,]$/.test(e.key) && e.preventDefault()}
                                            onBlur={formik.handleBlur} /> {formik.touched.mobile && formik.errors.mobile && (<div className="errorMessage">{formik.errors.mobile}</div>)}

                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="" className="input-label">Password</label>
                                        <input
                                            type="password"
                                            className="form-control signInPassword"
                                            name="password"
                                            id="password"
                                            value={formik.values.password}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur} />
                                        {formik.touched.password && formik.errors.password && (<div className="errorMessage">{formik.errors.password}</div>)}

                                    </div>
                                    <div className="clearfix add_bottom_10">
                                        <div className="float-right mt-1">
                                            <p><Link to='/Forgot' className='forgotpswd-link'>Forgot password?</Link></p>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn_1 rounded full-width">SIGN IN</button>
                                    <div className="text-center add_top_10">
                                        <p>You don't have an account?<span className='signup-link'><Link className='signup-link-clr' to='/'>Sign up!</Link></span> </p>
                                    </div>
                                </form>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
