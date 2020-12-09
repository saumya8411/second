import React,{useRef,useState} from 'react'
import { Row,Col, Card, CardBody, FormGroup, Label, Button,Input} from 'reactstrap';
/* import { Formik, Form, Field } from 'formik'; */
import {FormikReactSelect } from '../containers/form-validations/FormikFields';
import { Colxx } from '../components/common/CustomBootstrap';
import * as Yup from 'yup';
import Switch from 'rc-switch';
import 'rc-switch/assets/index.css';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import axios from 'axios'
import { colourOptions } from '../data/data2';
/* const initialValues = {
    trainer: [{ value: 'you', label: 'you' }],
    session_name:'',
    session_description:'',
    session_fee:0,
    session_occurance:'',
    session_duration:'',
    session_associated_course:'',
    enabled_registration:false,
    time:'',
    fee_select:''
  } */
/* const CreatesessionSchema = Yup.object().shape({   
        session_name:Yup.string().required('Session name is required!'),
        session_description:Yup.string().required('Session description is required!') ,
        session_fee:Yup.number().required("Fees is required"),
        session_duration:Yup.number()
        .required("Session Duration is required")
        .max(999, 'Too Long! Must be under 999'),
        fee_select:Yup.string().required('Session description is required!') ,
       // session_occurance:Yup.string().required('Session occurance is required!') ,
        //time:Yup.string().required('Session time is required!') ,
        session_associated_course:Yup.string().required('Session associated course is required!') ,

    
     }); */
      
     const course = [
       {value : 'Option1', label: 'Option1'},
       {value : 'Option2', label: 'Option2'},
       {value : 'Option3', label: 'Option3'},
       {value : 'Option4', label: 'Option4'},
       {value : 'Option5', label: 'Option5'}
     ]
     const dur = [
      {value : 'Option1', label: 'Option1'},
      {value : 'Option2', label: 'Option2'},
      {value : 'Option3', label: 'Option3'},
      {value : 'Option4', label: 'Option4'},
      {value : 'Option5', label: 'Option5'}
    ]
    const fee =[
      { value: 'free', label: 'Free for Course Enrolled Students' },
      { value: 'cost', label: 'Paid for Course Enrolled Students' },
    ]
    const fee2 =[
      { value: 'free', label: '' },
      { value: 'cost', label: '' },
      { value: 'cost2', label: '' },
    ]


     const options = [
        { value: 'once', label: 'Only Once' },
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
    let date = ''
    const [startDateRange, setStartDateRange] = useState('');
    const [time, setTime] = useState("");
    const [days, setDays] = useState(0)
    const [endDateRange, setEndDateRange] = useState('')
    const [duration, setDuration] = useState('');
    const [check, setcheck] = useState(false)
    let [state, setstate] = useState('')
    let [fees, setfees] = useState('')
    let [course, setCourse] = useState([])
    let [defval, setdefval] = useState(false)
    let [occurance, setOccurance] = useState('')
    let [session_name, setSession_name] = useState('')
    let [description, setDescription] = useState('')
    let [trainer, setTrainer] = useState('')
    const checkempty = () => {
      if(!course){
        setdefval(!defval)
      }
    }
    const checkdate = () => {
      if(occurance == 'Daily'){
        date = startDateRange + 7 ;
      }
    }
    

    const checkinp = () => {
      setcheck(!check)
    } 
    const selectcheck = (e) => {
      setstate(state = e.target.value)
    }
    const selectcheck2 = (e) => {
      setfees(fees = e.target.value)
    }
    // const consolelog = (e) =>{
//   console.log(e.target.value)
// }
const calculateDate = (endDateRange,startDateRange) => {
  days = setDays(endDateRange - startDateRange)
}

    const onSubmit = () => {
  /*          axios.post('http://localhost:5000/users' , {
      
    })
    .then(response => {
      console.log(response)
    })
    .catch(err => console.log(err)) */
  console.log(session_name,description,trainer,fees,duration,time,state,startDateRange)

        
      };
    
    return(
        <>

                <FormGroup className="error-l-75">
                  <Label>Session Name</Label>
                  <Input className="form-control" name="session_name" onChange={(e) => setSession_name(e.target.value)} required/>
                  
{/*                     <div className="invalid-feedback d-block" style={{marginTop: '40px', marginLeft: '380px'}}>
                      {errors.session_name}
                    </div> */}
                
                </FormGroup>
                <FormGroup>
                  <Label>Description</Label>
                  {/* <Field 
                    className="form-control"
                    name="session_description"
                    component="textarea"
                  /> */}
                  <Input type="textarea"  name="description" onChange={(e) => setDescription(e.target.value)} />
                  {/* {errors.session_description && touched.session_description ? (
                    <div className="invalid-feedback d-block" style={{marginTop: '40px', marginLeft: '410px'}}>
                      {errors.session_description}
                    </div>
                  ) : null} */}
                </FormGroup>

                <FormGroup className="error-l-100">
                  <Label>Trainer </Label>
                  <Input type="select" name="occurance" onChange={(e) => setTrainer(e.target.value)} id="exampleSelect">
                  <option>You</option>
                </Input> 
                  {/* {errors.trainer && touched.trainer ? (
                    <div className="invalid-feedback d-block">
                      {errors.trainer}
                    </div>
                  ) : null} */}
                </FormGroup>  
                <FormGroup className="error-l-100">
                  <Label>Occurance </Label>
{/*                 <FormikReactSelect
                    name="occurance"
                    id="occur"
                    value={values.session_occurance}
                    
                    options={occurance}
                    onChange={(e) => setOccurance(e)}
                    onBlur={setFieldTouched}
                  /> */} {/* {occurance} {date} */}
                   <Input type="select" name="occurance" onChange={(e) => setOccurance(e.target.value)} id="exampleSelect">
                  <option>Once</option>
                  <option>Daily</option>
                  <option>Weekly</option>
                  <option>Monthly</option>
                  <option>Yearly</option>
                </Input> 
                  {/* {errors.session_occurance && touched.session_occurance ? (
                    <div className="invalid-feedback d-block" style={{marginTop: '50px', marginLeft: '355px'}}>
                      {errors.session_occurance}
                    </div>
                  ) : null} */}
                </FormGroup>
                
             <Row >
                {/* {startDateRange}  */}
                 <Colxx xxs="6">
                 <FormGroup className="error-l-100">
                  <Label>Start Date </Label>
                  {/* <DatePicker
                  selected={startDateRange}
                  selectsStart
                  startDate={startDateRange}
                  onChange={(e) => setStartDateRange(e.target.value)}
                  name="session_start_date"
                  placeholderText={['form-components.start']}
                /> */}
                <Input
                  type="date"
                  name="date"
                  id="exampleDate"
                  onChange={(e) => setStartDateRange(e.target.value)}
                  placeholder="date"
                />
              
                  
                {/* </FormGroup> 
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
                /> */}
              
                  
                </FormGroup> 
               
                 </Colxx>
                 </Row>   
                 <Row>
                   <Colxx xxs="6">
                   <FormGroup className="error-l-100">
                      <Label for="duration">Duration(in minutes)</Label>
                     {/*  <Field name="session_duration" id="duration" value={values.session_dur} onChange={setFieldValue}
                    onBlur={setFieldTouched} /> */}
                    <Input className="form-control" name="session_duration" onChange={(e) => setDuration(e.target.value)} />
                    {/* {errors.session_duration && touched.session_duration ? (
                    <div className="invalid-feedback d-block" style={{marginTop: '45px', marginLeft: '115px'}}>
                      {errors.session_duration}
                    </div>
                  ) : null} */}
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

{/* {errors.time && touched.time ? (
                    <div className="invalid-feedback d-block" style={{marginTop: '50px', marginLeft: '115px'}}>
                      {errors.time}
                    </div>
                  ) : null} */}
                </FormGroup>
                </Colxx> 
                  </Row>
                  <Row>
                  <FormGroup check>
                  <Label check>
                    
                   Enable Registration for this Session
                    <Input type="checkbox" style={{marginLeft:'90px'}} onChange={checkinp} />{' '} 
                  </Label>
                </FormGroup>  
                </Row>
                <br/>
                <FormGroup className="error-l-100">
                  <Label>Associated with any Course </Label>
                  {/* <FormikReactSelect
                    name="session_correspondance"
                    id="session_associated_course"
                    value={values.session_associated_course}
                    
                    options={course}
                    onChange={setFieldValue}
                    onBlur={setFieldTouched}
                  /> */}<Select
                      /* defaultValue={[colourOptions[2], colourOptions[3]]} */
                      isMulti
                      name="session_associated_course"
                      options={colourOptions}
                      defaultValue={colourOptions[0]}
                      className="basic-multi-select"
                      classNamePrefix="select"
                      onChange={(e) => setCourse(e)}
                      /*  onBlur={setFieldTouched}  */
                    />
                    
                    
                    {defval ? <> <div className="invalid-feedback d-block" style={{marginTop: '45px', marginLeft: '345px', width:'250px'}}>please Dont leave this field empty</div> </> : null}
                </FormGroup>
                {check ? <> {/* <FormGroup className="error-l-100"> */}
                  {/* <Label>Associated with any Course </Label> */}
{/*                   <FormikReactSelect
                    name="session_correspondance"
                    id="session_associated_course"
                    value={values.session_associated_course}
                    
                    options={course}
                    onChange={setFieldValue}
                    onBlur={setFieldTouched}
                  /> */}{/* <Select */}
                      {/*  defaultValue={} */} 
                      {/* isMulti
                      name="session_associated_course"
                      options={colourOptions}
                      value={values.session_associated_course}
                      className="basic-multi-select"
                      classNamePrefix="select"
                      onChange={setFieldValue}
                      onBlur={setFieldTouched}
                    />
                    
                  {errors.session_associated_course && touched.session_associated_course ? (
                    <div className="invalid-feedback d-block">
                      {errors.session_associated_course}
                    </div>
                  ) : null}
                </FormGroup> */}
                <Row> 
                
                  <Col md={6}>
                    
                <FormGroup className="error-l-100">
                  <Label>Select fees </Label>
{/*                   <FormikReactSelect
                    name="select"
                    id="occur"
                    
                    
                    options={fee2}
                    onChange={(e) => selectcheck(e)}
                    onBlur={setFieldTouched}
                  /> */}<Input type="select" name="select" onChange={(e) => selectcheck(e)} id="exampleSelect">
                  <option>Choose Something</option>
                  <option>Free for new Registrants + Free for Course Enrolled Students.</option>
                  <option>Paid for new Registrants + Free for Course Enrolled Students.</option>
                  <option>Paid for new Registrants + Paid for Course Enrolled Students.</option>
                </Input>
                  
                  {/* {errors.session_fee && touched.session_fee ? (
                    <div className="invalid-feedback d-block" style={{marginTop: '50px', marginLeft: '155px'}}>
                      {errors.session_fee}
                    </div>
                  ) : null} */}
                </FormGroup></Col><Col md={6}>
                <FormGroup className="error-l-75">
        <Label>Fees</Label>
        {state == 'Free for new Registrants + Free for Course Enrolled Students.' ? <><Input disabled/> </> : <><Input className="form-control" name="session_fee" 
        
        /></>} 
    {/*  {errors.session_fee && touched.session_fee ? (
          <div className="invalid-feedback d-block">
            {errors.session_fee}
          </div>
        ) : null}  */}
      </FormGroup>
   
                </Col>
                </Row> </> : <>
                
                <Row> 
                  <Col md={6}>
                <FormGroup className="error-l-100">
                  <Label>Select fees </Label>
                   {/* <FormikReactSelect
                    name="fee_select"
                    id="occur"
                    value={values.fee_select}
                    
                    options={fee}
                    onChange={setFieldValue,selectcheck}
                    onBlur={setFieldTouched}
                  />  */}
                <Input type="select" name="select" onChange={(e) => selectcheck2(e)} id="exampleSelect">
                  <option>Choose Something</option>
                  <option>Free for Course Enrolled Students</option>
                  <option>Paid for Course Enrolled Students</option>
                </Input>
                  
                 {/*  {errors.session_occurance && touched.session_occurance ? (
                    <div className="invalid-feedback d-block" style={{marginTop: '50px', marginLeft: '355px'}}>
                      {errors.session_occurance}
                    </div>
                  ) : null} */}
                </FormGroup></Col><Col md={6}>
                <FormGroup className="error-l-75">
        <Label>Fees</Label>
        {fees == 'Free for Course Enrolled Students' ? <Input disabled/> : <Input className="form-control" name="session_fee" />}
        
{/*      {errors.session_fee && touched.session_fee ? (
          <div className="invalid-feedback d-block">
            {errors.session_fee}
          </div>
        ) : null}  */}
      </FormGroup>
   
                </Col>
                </Row>
                </>}
                
                
               
                


                {/* <FormGroup className="error-l-100">
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
                </FormGroup> */}
                <Button color="primary" type="submit" onClick={onSubmit} /* onClick={checkempty} */>
                  Submit
                </Button>
            
                

{/* {console.log(initialValues.fee_select)} */}
        </>
    )
}


export default RemoteSession;