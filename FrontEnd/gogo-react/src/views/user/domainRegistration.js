import React from 'react'
import * as Yup from "yup";
import { Formik, Form, Field} from "formik";
import {FormGroup,Button,Label,Card,Row,CardTitle } from 'reactstrap'
import { NavLink, Redirect } from "react-router-dom";
import { Colxx } from "../../components/common/CustomBootstrap";

const initialValues = {
    name: "",
    subdomain: "",
  };


  const validation = Yup.object().shape({
    name: Yup.string()
      .min(2, "please enter correct name")
      .max(20, "please enter correct name")
      .required("Website Name is required"),
     subdomain: Yup.string()
      .min(2, "Subdomain should be min 2 characters")
      .required("Subdomain is required"),
    
  });

function DomainRegistration({history}) {

    const onSubmit = (values) => {
        console.log(values);
history.push("/app")
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
              Register Your Domain
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
                isSubmitting }) => (
                <Form
                  className="av-tooltip tooltip-label-bottom"
                  autoComplete="true"
                >
                  <FormGroup className="form-group has-float-label">
                    <Label>
                      Website Name:
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
                      SubDomain:
                    </Label> 
                    <Field
                      className="form-control"
                      name="subdomain"
                    /> 
                    {errors.subdomain && touched.subdomain ? (
                      <div className="invalid-feedback d-block">
                        {errors.subdomain}
                      </div>
                    ) : null}
                  </FormGroup>
                    <Button color="primary" type="submit">
                    Complete Registration
                  </Button> 
                  
                </Form>
              )} 
              
            </Formik>
        </div>
        </Card>
        </Colxx>
        </Row>
    
    
    )
}

export default DomainRegistration;
     