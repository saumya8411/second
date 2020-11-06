import React, { createRef, useState } from "react";
import {iconsmind,simplelineicons} from '../../data/icons'
import './auth.css'
import {
  Row,
  Card,
  CardTitle,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";
import * as Yup from "yup";
import { Wizard, Steps, Step } from 'react-albus';
import BottomNavigation from '../../components/wizard/BottomNavigation';

import { NavLink, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../redux/actions";
import { Formik, Form, Field } from "formik";
import { AiOutlineApple } from "react-icons/ai";
import IntlMessages from "../../helpers/IntlMessages";
import { Colxx } from "../../components/common/CustomBootstrap";
import { adminRoot } from "../../constants/defaultValues";

const initialValues = {
  customer_first_name: "",
  customer_email: "",
  customer_phone_number: "",
  customer_last_name: "",
  customer_password: "",
  customer_password_confirm: ""
  //institutename: ""
};

const validation = Yup.object().shape({
  customer_first_name: Yup.string()
    .min(2, "please enter correct name")
    .max(20, "please enter correct name")
    .required("Name is required"),
  customer_phone_number: Yup.number()
    .typeError("Must specify a number")
    .positive("Please enter correct mobile")
    .required("Required")
    .nullable(),
  customer_email: Yup.string()
    .min(7, "Email should be min 7 characters")
    .required("Email is required"),
  customer_last_name: Yup.string()
    .min(2, "please enter correct name")
    .max(20, "please enter correct name")
    .required("Name is required"),
  customer_password: Yup.string()
  .min(8, "min 8 characters")
  .max(100, "please enter correct password")
  .required("Name is required"),
  customer_password_confirm: Yup.string()
  .min(8, "min 8 characters")
  .max(100, "please enter correct password")
  .required("Name is required"),
 // institutename: Yup.string()
  //  .min(2, "please enter correct insitute")
  //  .max(50, "please enter correct institute")
  //   .required("insitute name is required")
});
const Register = ({ history }) => {
  
  //make your network request here...if request success make 
  const onSubmit = (values) => {
    console.log(values);
    history.push("/user/domainregistration")
  };

  return (
    <Row className="h-100">
      <Colxx xxs="12" md="10" className="mx-auto my-auto">
        <Card className="auth-card">
          <div className="position-relative image-side ">
            <p className="text-white h2"> Ed - tech startup </p> 
            <p className="white mb-0">
              Please use this form to register. <br />
              If you are a member, please 
              <NavLink to="/user/login" className="black">
                <b> login </b> 
              </NavLink>
            </p> 
          </div> 
          <div className="form-side">
            <NavLink to="/" className="white">
              <span className="logo-single" />
            </NavLink> 
            <CardTitle className="mb-4">
              <IntlMessages id="user.register" />
            </CardTitle> 
                    <Formik
          
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validation}
            >
               
              {({ handleSubmit,
                setFieldValue,
                setFieldTouched,
                values,
                errors,
                touched,
                isSubmitting, }) => (
                <Form
                  className="av-tooltip tooltip-label-bottom"
                  autoComplete="true"
                >
                  <FormGroup className="form-group has-float-label">
                    <Label>
                      Firstname
                    </Label> 
                    <Field
                      className="form-control"
                      name="customer_first_name"
                    /> 
                    {errors.customer_first_name && touched.customer_first_name ? (
                      <div className="invalid-feedback d-block">
                        {errors.customer_first_name}
                      </div>
                    ) : null}
                  </FormGroup>
                  <FormGroup className="form-group has-float-label">
                    <Label>
                      Lastname
                    </Label> 
                    <Field
                      className="form-control"
                      name="customer_last_name"
                    /> 
                    {errors.customer_last_name && touched.customer_last_name ? (
                      <div className="invalid-feedback d-block">
                        {errors.customer_last_name}
                      </div>
                    ) : null}
                  </FormGroup>
                  <FormGroup className="form-group has-float-label">
                    <Label>
                      Email
                    </Label> 
                    <Field
                      className="form-control"
                      name="customer_email"
                    /> 
                    {errors.customer_email && touched.customer_email ? (
                      <div className="invalid-feedback d-block">
                        {errors.customer_email}
                      </div>
                    ) : null}
                  </FormGroup>
                  <FormGroup className="form-group has-float-label">
                    <Label>
                      Mobile
                    </Label> 
                    <Field
                      className="form-control"
                      name="customer_phone_number"
                    /> 
                    {errors.customer_phone_number && touched.customer_phone_number ? (
                      <div className="invalid-feedback d-block">
                        {errors.customer_phone_number}
                      </div>
                    ) : null}
                  </FormGroup>
                  <FormGroup className="form-group has-float-label">
                    <Label>
                      Password
                    </Label> 
                    <Field
                      className="form-control"
                      name="customer_password" type="password"
                    /> 
                    {errors.customer_password && touched.customer_password ? (
                      <div className="invalid-feedback d-block">
                        {errors.customer_password}
                      </div>
                    ) : null}
                  </FormGroup>
                  <FormGroup className="form-group has-float-label">
                    <Label>
                      Confirm Password
                    </Label> 
                    <Field
                      className="form-control"
                      name="customer_password_confirm" type="password"
                    /> 
                    {errors.customer_password_confirm && touched.customer_password_confirm ? (
                      <div className="invalid-feedback d-block">
                        {errors.customer_password_confirm}
                      </div>
                    ) : null}
                  </FormGroup>
                   <div className="d-flex justify-content-between align-items-center">
                    <NavLink to="/user/login">
                      Already Registered? 
                    </NavLink> 
                    <Button color="primary" type="submit" className="register">
                    Next
                  </Button> 
                  </div> 
                </Form>
              )} 
            </Formik>
         
            <Row className="mt-4 d-flex justify-content-center">
        <div style={{width:'90%'}}>   
         <Button outline color="secondary" className="mb-2 d-flex align-items-center p-3 registerug">
         <div className={`glyph-icon ${simplelineicons[176]} mr-2 `} />
<span>Register Using Google</span>
           </Button>
           <Button outline color="secondary" className="mb-2 d-flex align-items-center p-3 registerug">
        <AiOutlineApple className="mr-2 apple" />
<span>Register Using Apple</span>
           </Button>
           </div>      </Row>
            
         </div>
        </Card> 
      </Colxx> 
    </Row>
  );
};
const mapStateToProps = () => {};

export default connect(mapStateToProps, {
  registerUserAction: registerUser
})(Register);
