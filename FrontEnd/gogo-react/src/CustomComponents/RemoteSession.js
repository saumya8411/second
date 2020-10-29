import React,{useRef,useState} from 'react'
import { Row, Card, CardBody, FormGroup, Label, Button } from 'reactstrap';
import { Formik, Form, Field } from 'formik';
import {FormikReactSelect } from '../containers/form-validations/FormikFields';
import { Colxx } from '../components/common/CustomBootstrap';
import * as Yup from 'yup';
import Switch from 'rc-switch';
import 'rc-switch/assets/index.css';
import DatePicker from 'react-datepicker';

const initialValues = {
    trainer: [{ value: 'you', label: 'you' }],
    name:'',
    description:'',
    fee:0,
    occur:'',
  }
const CreatesessionSchema = Yup.object().shape({   
        occur: Yup.array()
          .min(1, 'select this')
          .of(
            Yup.object().shape({
              label: Yup.string().required(),
              value: Yup.string().required(),
            })
          ),
          correspondance: Yup.array()
          .min(1, 'select this')
          .of(
            Yup.object().shape({
              label: Yup.string().required(),
              value: Yup.string().required(),
            })
          ),
        name:Yup.string().required('Name is required!'),
description:Yup.string().required('Description is required!') ,
fee:Yup.number().required("Fees is required"),
    
     });


     const options = [
        { value: 'daily', label: 'Daily' },
        { value: 'weekly', label: 'Weekly' },
        { value: 'monthly', label: 'Monthly' },
        { value: 'yearly', label: 'Yearly' }
        ];

        const correspondanceoption = [
            { value: 'independent', label: 'independent' },
            { value: 'uploaded', label: 'uploaded' },
            ];
    

const RemoteSession = () =>{
    const [startDateRange, setStartDateRange] = useState(new Date());
    const [endDateRange, setEndDateRange] = useState(new Date());

    const onSubmit = (values, { setSubmitting }) => {
        const payload = {
          ...values,
          reactSelect: values.reactSelect.map((t) => t.value),
        };
        setTimeout(() => {
          console.log(JSON.stringify(payload, null, 2));
          setSubmitting(false);
        }, 1000);
      };
    
    return(
        <>
        <Formik
              initialValues={initialValues}
              validationSchema={CreatesessionSchema}
              onSubmit={onSubmit}
            >
 {({
                handleSubmit,
                setFieldValue,
                setFieldTouched,
                values,
                errors,
                touched,
                isSubmitting,
              }) => (
                <Form className="av-tooltip tooltip-label-right">
                <FormGroup className="error-l-75">
                  <Label>Session Name</Label>
                  <Field className="form-control" name="name" />
                  {errors.name && touched.name ? (
                    <div className="invalid-feedback d-block">
                      {errors.name}
                    </div>
                  ) : null}
                </FormGroup>
                <FormGroup>
                  <Label>Description</Label>
                  <Field
                    className="form-control"
                    name="description"
                    component="textarea"
                  />
                  {errors.description && touched.description ? (
                    <div className="invalid-feedback d-block">
                      {errors.description}
                    </div>
                  ) : null}
                </FormGroup>
                
                <FormGroup className="error-l-100">
                  <Label>Occur </Label>
                  <FormikReactSelect
                    name="occur"
                    id="occur"
                    value={values.occur}
                    
                    options={options}
                    onChange={setFieldValue}
                    onBlur={setFieldTouched}
                  />
                  {errors.occur && touched.occur ? (
                    <div className="invalid-feedback d-block">
                      {errors.occur}
                    </div>
                  ) : null}
                </FormGroup>
                
             <Row >
                 <Colxx xxs="6">
                 <FormGroup className="error-l-100">
                  <Label>Start Date </Label>
                  <DatePicker
                  selected={startDateRange}
                  selectsStart
                  startDate={startDateRange}
                  onChange={setStartDateRange}
                  placeholderText={['form-components.start']}
                />
              
                  
                </FormGroup> 
                 </Colxx>
                 <Colxx xxs="6">
                 <FormGroup className="error-l-100">
                  <Label>End Date </Label>
                  <DatePicker
                  selected={endDateRange}
                  selectsEnd
                  startDate={endDateRange}
                  onChange={setEndDateRange}
                  placeholderText={['form-components.start']}
                />
              
                  
                </FormGroup>
                 </Colxx>
                 </Row>   
                 <FormGroup className="error-l-100">
                  <Label>Correspondance </Label>
                  <FormikReactSelect
                    name="correspondance"
                    id="correspondance"
                    value={values.correspondance}
                    
                    options={correspondanceoption}
                    onChange={setFieldValue}
                    onBlur={setFieldTouched}
                  />
                  {errors.correspondance && touched.correspondance ? (
                    <div className="invalid-feedback d-block">
                      {errors.correspondance}
                    </div>
                  ) : null}
                </FormGroup>
                     
                <FormGroup className="error-l-75">
                  <Label>Fees</Label>
                  <Field className="form-control" name="fee" 
                  
                  />
                  {errors.fee && touched.fee ? (
                    <div className="invalid-feedback d-block">
                      {errors.fee}
                    </div>
                  ) : null}
                </FormGroup>
                <Button color="primary" type="submit">
                  Submit
                </Button>
            
                
</Form>
              )}
</Formik>
        </>
    )
}


export default RemoteSession;