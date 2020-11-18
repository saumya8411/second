import React,{useRef,useState} from 'react'
import { Row, Card, CardBody, FormGroup, Label, Button,Input } from 'reactstrap';
import { Formik, Form, Field } from 'formik';
import {FormikReactSelect } from '../containers/form-validations/FormikFields';
import { Colxx } from '../components/common/CustomBootstrap';
import * as Yup from 'yup';
import Switch from 'rc-switch';
import 'rc-switch/assets/index.css';
import RemoteSession from './RemoteSession';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';

const initialValues = {
    trainer: [{ value: 'you', label: 'you' }],
    session_name:'',
    session_description:'',
    session_fee:0,
    timeline:'',
  }
const CreatesessionSchema = Yup.object().shape({   
        trainer: Yup.array()
          .min(1, 'select this')
          .of(
            Yup.object().shape({
              label: Yup.string().required(),
              value: Yup.string().required(),
            })
          ),
session_duration:Yup.string().required('Duration of course is required!'),
session_description:Yup.string().required('Description is required!') ,
session_fee:Yup.number().required("Fees is required")      
     });

const options = [
        { value: 'you', label: 'You' },
        ];

const OndemandSession = (props) =>{
  
  const [checkedSecondarySmall, setCheckedSecondarySmall] = useState(true);
  const [tagsLO, setTagsLO] = useState([]);

    const onSubmit = (values, { setSubmitting }) => {
        const payload = {
          ...values,
          reactSelect: values.reactSelect.map((t) => t.value),
        };
        setTimeout(() => {
          console.log(JSON.stringify(payload, null, 2));
          //here makerequest fr your session creation
          setSubmitting(false);
        }, 1000);
      };
    
    return(
        
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
                    
                    options={options}
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
<Label>Seo Tags:</Label>
                <TagsInput
                    value={tagsLO}
                    onChange={(val) => setTagsLO(val)}
                    inputProps={{ placeholder: '' }}
                    name="session_tags"
                  />
                  </FormGroup>

                  <FormGroup className="error-l-75">
                  <Label>Duration of Course(in days)
                    
                  </Label>
                  <Field className="form-control" name="session_duration" 
                  disabled={!checkedSecondarySmall}
                  />
                  {errors.session_duration && touched.session_duration ? (
                    <div className="invalid-feedback d-block">
                      {errors.session_duration}
                    </div>
                  ) : null}
                </FormGroup>
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

               
                <Button color="primary" type="submit">
                  Submit
                </Button>
              </Form>
            
                 )}
                    
                </Formik>
     
           
         )
}


export default OndemandSession