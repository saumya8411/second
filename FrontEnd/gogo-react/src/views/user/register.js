import React, { createRef, useState } from "react";
import {iconsmind,simplelineicons} from '../../data/icons'

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

import IntlMessages from "../../helpers/IntlMessages";
import { Colxx } from "../../components/common/CustomBootstrap";
import { adminRoot } from "../../constants/defaultValues";
import axiosInstance from "../../helpers/axiosInstance";

const initialValues = {
  name: "",
  email: "",
  mobile: "",
  institutename: ""
};

const validation = Yup.object().shape({
  name: Yup.string()
    .min(2, "please enter correct name")
    .max(20, "please enter correct name")
    .required("Name is required"),
  mobile: Yup.number()
    .typeError("Must specify a number")
    .positive("Please enter correct mobile")
    .required("Required")
    .nullable(),
  email: Yup.string()
    .min(7, "Email should be min 7 characters")
    .required("Email is required"),
  institutename: Yup.string()
    .min(2, "please enter correct insitute")
    .max(50, "please enter correct institute")
    .required("insitute name is required")
});
const Register = ({ history }) => {
  
  //make your network request here...if request success make 
  const onSubmit = (values) => {
    console.log(values);

    //Values Should have these parameters
    //customer_id,customer_first_name,customer_last_name,customer_email,customer_password,customer_phone_number
    axiosInstance.post('/users')
                  .then(response => {
                    //For Fail
                    // {
                    //   success:0,
                    //   error:"Email Already Registered"
                    // }

                    //For Success
                    // {
                    //   success:1,
                    //   message:"User Successfully Created"
                    // }

                  })
                  .catch(err => console.log(err))

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
                      Name:
                    </Label> 
                    <Field
                      className="form-control"
                      name="name"
                    /> 
                    {errors.name && touched.name ? (
                      <div className="invalid-feedback d-block">
                        {errors.name}
                      </div>
                    ) : null}
                  </FormGroup> 
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
                      Mobile:
                    </Label> 
                    <Field
                      className="form-control"
                      name="mobile"
                    /> 
                    {errors.mobile && touched.mobile ? (
                      <div className="invalid-feedback d-block">
                        {errors.mobile}
                      </div>
                    ) : null}
                  </FormGroup>
                  <FormGroup className="form-group has-float-label">
                    <Label>
                      Institute Name:
                    </Label> 
                    <Field
                      className="form-control"
                      name="institutename"
                    /> 
                    {errors.institutename && touched.institutename ? (
                      <div className="invalid-feedback d-block">
                        {errors.institutename}
                      </div>
                    ) : null}
                  </FormGroup> 
                   <div className="d-flex justify-content-between align-items-center">
                    <NavLink to="/user/login">
                      Already Have A Account 
                    </NavLink> 
                    <Button color="primary" type="submit">
                    Register
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
const mapStateToProps = () => {};

export default connect(mapStateToProps, {
  registerUserAction: registerUser
})(Register);
