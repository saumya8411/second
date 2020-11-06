import React, { useState, useEffect } from 'react';
import { Row, Card, CardTitle, Label, FormGroup, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { Formik, Form, Field } from 'formik';
import { NotificationManager } from '../../components/common/react-notifications';
import * as Yup from "yup";
import {iconsmind,simplelineicons} from '../../data/icons'

import { loginUser } from '../../redux/actions';
import { Colxx } from '../../components/common/CustomBootstrap';
import IntlMessages from '../../helpers/IntlMessages';
import { adminRoot } from '../../constants/defaultValues';
import axiosInstance from '../../helpers/axiosInstance';

const validatePassword = (value) => {
  let error;
  if (!value) {
    error = 'Please enter your password';
  } else if (value.length < 4) {
    error = 'Value must be longer than 3 characters';
  }
  return error;
};

const validateEmail = (value) => {
  let error;
  if (!value) {
    error = 'Please enter your email address';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Invalid email address';
  }
  return error;
};
const initialvalue = {
  email: "",
  password: ""
};

const validation = Yup.object().shape({
  password: Yup.string()
      .min(8, "Password should have min 8 characters")
      .required("Password is required"),
      email:Yup.string()
      .min(6, "Email should have min 7 characters")
      .required("Email is required"),
});
const Login = ({ history, loading, error, loginUserAction }) => {
  // const [email] = useState('demo@gogo.com');
  // const [password] = useState('gogo123');
  useEffect(() => {
    if (error) {
      NotificationManager.warning(error, 'Login Error', 3000, null, null, '');
    }
  }, [error]);

  //put your network request here
  const onUserLogin = (values) => {
    if (!loading) {
      console.log(values)

      //Values should have customer_email , customer_password parameter  
      //according to Database
      axiosInstance.post('/users/login' , {
        body : values
      })
      .then(response => {
        //Response will be of format
        //For Fail
        // {
        //   success:0,
        //   error:"Incorrect Email or Password",
        // }

        //For Success
        // {
        //   success:1,
        //   message:"Login Successful",
        //   user:result[0],
        //   token:jwtToken
        // }

      })
      .catch(err => {
        console.log(err);
      })


      history.push(adminRoot)
    }
  };

  // const onUserLogin = (values, { setSubmitting }) => {
  //   const payload = {
  //     ...values,
  //     reactSelect: values.reactSelect.map((t) => t.value),
  //   };
  //   setTimeout(() => {
  //     console.log(JSON.stringify(payload, null, 2));
  //     setSubmitting(false);
  //   }, 1000);
  // };
  // const initialValues = { email, password };
  console.log(loginUserAction)

  return (
    <Row className="h-100">
      <Colxx xxs="12" md="10" className="mx-auto my-auto">
        <Card className="auth-card">
          <div className="position-relative image-side ">
            <p className="text-white h2">Ed-tech Startup</p>
            <p className="white mb-0">
              Please use your credentials to login.
              <br />
              If you are not a member, please{' '}
              <NavLink to="/user/register" className="black">
                <b>register</b>
              </NavLink>
              .
            </p>
          </div>
          <div className="form-side">
            <NavLink to="/" className="white">
              <span className="logo-single" />
            </NavLink>
            <CardTitle className="mb-4">
              <IntlMessages id="user.login-title" />
            </CardTitle>

            <Formik initialValues={initialvalue} onSubmit={onUserLogin} validationSchema={validation}>
              {({ handleSubmit,
                setFieldValue,
                setFieldTouched,
                values,
                errors,
                touched,
                isSubmitting }) => (
                <Form className="av-tooltip tooltip-label-bottom">
                  <FormGroup className="form-group has-float-label">
                    <Label>
                    Email:
                    </Label>
                    <Field
                      className="form-control"
                      name="email"
                      
                    />
                    {errors.email && touched.email ? (
                    <div className="invalid-feedback d-block">
                      {errors.email}
                    </div>
                  ) : null}
                  </FormGroup>
                  <FormGroup className="form-group has-float-label">
                    <Label>
                      Password
                    </Label>
                    <Field
                      className="form-control"
                      type="password"
                      name="password"
                    
                    />
                    {errors.password && touched.password && (
                      <div className="invalid-feedback d-block">
                        {errors.password}
                      </div>
                    )}
                  </FormGroup>
                  <div className="d-flex justify-content-between align-items-center">
                    <NavLink to="/user/forgot-password">
                      <IntlMessages id="user.forgot-password-question" />
                    </NavLink>
                    <Button
                      color="primary"
                      type='submit'
                      // onClick={onUserLogin}
                      className={`btn-shadow btn-multiple-state ${
                        isSubmitting ? 'show-spinner' : ''
                      }`}
                      size="lg"
                    >
                      <span className="spinner d-inline-block">
                        <span className="bounce1" />
                        <span className="bounce2" />
                        <span className="bounce3" />
                      </span>
                      <span className="label">
                      Login
                      </span>
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
         <Row className="mt-4 d-flex justify-content-center">
        <div style={{width:'90%'}}>   
         <Button outline color="secondary" className="mb-2 d-flex align-items-center p-3">
         <div className={`glyph-icon ${simplelineicons[176]} mr-2 `} />
<span>Google</span>
           </Button>
           </div>      </Row>
          </div>
        </Card>
      </Colxx>
    </Row>
  );
};
const mapStateToProps = ({ authUser }) => {
  const { loading, error } = authUser;
  return { loading, error };
};

export default connect(mapStateToProps, {
  loginUserAction: loginUser,
})(Login);
