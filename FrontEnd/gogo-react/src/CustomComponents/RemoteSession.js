import React,{useRef,useState} from 'react'
import { Row, Card, CardBody, FormGroup, Label, Button,Input} from 'reactstrap';
import { Formik, Form, Field } from 'formik';
import {FormikReactSelect } from '../containers/form-validations/FormikFields';
import { Colxx } from '../components/common/CustomBootstrap';
import * as Yup from 'yup';
import Switch from 'rc-switch';
import 'rc-switch/assets/index.css';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

import DatePicker from 'react-datepicker';

const initialValues = {
    trainer: [{ value: 'you', label: 'you' }],
    session_name:'',
    session_description:'',
    session_fee:0,
    session_occurance:'',
    session_duration:'',
    session_associated_course:''
  }
const CreatesessionSchema = Yup.object().shape({   
        session_name:Yup.string().required('Name is required!'),
session_description:Yup.string().required('Description is required!') ,
session_fee:Yup.number().required("Fees is required"),
    
     });
     const course = [
       {value : 'option1', label: 'Option1'},
       {value : 'Option2', label: 'Option2'},
       {value : 'Option3', label: 'Option3'},
       {value : 'Option4', label: 'Option4'},
       {value : 'Option5', label: 'Option5'}
     ]
     const dur = [
      {value : 1, label: 'Option1'},
      {value : 'Option2', label: 'Option2'},
      {value : 'Option3', label: 'Option3'},
      {value : 'Option4', label: 'Option4'},
      {value : 'Option5', label: 'Option5'}
    ]


     const options = [
        { value: 'daily', label: 'Daily' },
        { value: 'weekly', label: 'Weekly' },
        { value: 'monthly', label: 'Monthly' },
        { value: 'yearly', label: 'Yearly' }
        ];

        const traineroptions = [
          { value: 'you', label: 'You' },

          ];
  

        const correspondanceoption = [
            { value: 'independent', label: 'independent' },
            { value: 'uploaded', label: 'uploaded' },
            ];
    

const RemoteSession = () =>{
    const [startDateRange, setStartDateRange] = useState(new Date());
    const [time, setTime] = useState("");
    const [days, setDays] = useState(0)
    const [endDateRange, setEndDateRange] = useState(new Date())
    const [duration, setDuration] = useState("");

    // const consolelog = (e) =>{
//   console.log(e.target.value)
// }
const calculateDate = (endDateRange,startDateRange) => {
  days = setDays(endDateRange - startDateRange)
}

    const onSubmit = (values, { setSubmitting }) => {
        const payload = {
          //...values,
        //  reactSelect: values.reactSelect.map((t) => t.value),
          
        };

        axios.post('http://localhost:5000/sessions/createLiveSession', {
          values
        })
        .then(response => {
          console.log(response);
        })
        .catch(err => console.log(err))
        


        setTimeout(() => {
          console.log(JSON.stringify(payload, null, 2));
          setSubmitting(false);
        }, 1000);
        console.log(values)
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
                  <Field className="form-control" name="session_name" />
                  {errors.session_name && touched.session_name ? (
                    <div className="invalid-feedback d-block">
                      {errors.session_name}
                    </div>
                  ) : null}
                </FormGroup>
                <FormGroup>
                  <Label>Description</Label>
                  <Field
                    className="form-control"
                    name="session_description"
                    component="textarea"
                  />
                  {errors.session_description && touched.session_description ? (
                    <div className="invalid-feedback d-block">
                      {errors.session_description}
                    </div>
                  ) : null}
                </FormGroup>

                <FormGroup className="error-l-100">
                  <Label>Trainer </Label>
                  <FormikReactSelect
                    name="trainer"
                    id="trainer"
                    value={values.trainer}
                    
                    options={traineroptions}
                    onChange={setFieldValue}
                    onBlur={setFieldTouched}
                  />
                  {errors.trainer && touched.trainer ? (
                    <div className="invalid-feedback d-block">
                      {errors.trainer}
                    </div>
                  ) : null}
                </FormGroup>  
                <FormGroup className="error-l-100">
                  <Label>Occur </Label>
                  <FormikReactSelect
                    name="session_occurance"
                    id="occur"
                    value={values.session_occurance}
                    
                    options={options}
                    onChange={setFieldValue}
                    onBlur={setFieldTouched}
                  />
                  {errors.session_occurance && touched.session_occurance ? (
                    <div className="invalid-feedback d-block">
                      {errors.session_occurance}
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
                  name="session_start_date"
                  placeholderText={['form-components.start']}
                />
              
                  
                </FormGroup> 
                 </Colxx>
                 <Colxx xxs="6">
                 <FormGroup className="error-l-100">
                  <Label>End Date </Label>
                  <DatePicker
                  selected={endDateRange}
                  selectsStart
                  startDate={endDateRange}
                  onChange={setEndDateRange}
                  name="session_end_date"
                  placeholderText={['form-components.start']}
                />
              
                  
                </FormGroup> 
               
                 </Colxx>
                 </Row>   
                 <Row>
                   <Colxx xxs="6">
                   <FormGroup className="error-l-100">
                      <Label for="duration">Duration</Label>
                      <FormikReactSelect type="select" name="session_duration" id="duration" value={values.session_dur} options={dur}  onChange={setFieldValue}
                    onBlur={setFieldTouched}  multiple />
                    </FormGroup>

                </Colxx>
                <Colxx xxs="6"> 
                <FormGroup className="error-l-100">
                  <Label>Time </Label>
                  <Input
          type="time"
          name="time"
          id="time"
          value={time}
          placeholder="Time to start from"
          onChange={e=>setTime(e.target.value)}
        />
              
                  
                </FormGroup>
                </Colxx> 
                  </Row>
                               
                <FormGroup className="error-l-75">
                  <Label>Fees</Label>
                  <Field className="form-control" name="session_fee" 
                  
                  />
                  {errors.session_fee && touched.session_fee ? (
                    <div className="invalid-feedback d-block">
                      {errors.session_fee}
                    </div>
                  ) : null}
                </FormGroup>
                <FormGroup className="error-l-100">
                  <Label>Associated with any Course </Label>
                  <FormikReactSelect
                    name="session_correspondance_id"
                    id="session_associated_course"
                    value={values.session_associated_course}
                    
                    options={course}
                    onChange={setFieldValue}
                    onBlur={setFieldTouched}
                  />
                  {errors.session_associated_course && touched.session_associated_course ? (
                    <div className="invalid-feedback d-block">
                      {errors.session_associated_course}
                    </div>
                  ) : null}
                </FormGroup>
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