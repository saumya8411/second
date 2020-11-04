import React,{useRef,useState} from 'react'
import { Row, Card, CardBody, FormGroup, Label, Button } from 'reactstrap';
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
    name:'',
    description:'',
    fee:0,
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
        name:Yup.string().required('Name is required!'),
description:Yup.string().required('Description is required!') ,
fee:Yup.number().required("Fees is required")      
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
                  />
                  </FormGroup>
                <FormGroup className="error-l-100">
                  <Label>Do You Want TimeLine: </Label>
                  <Switch
              className="custom-switch custom-switch-secondary custom-switch-small"
              checked={checkedSecondarySmall}
              onChange={(secondary) => setCheckedSecondarySmall(secondary)}
            />
                  </FormGroup>
                  <FormGroup className="error-l-75">
                  <Label>Number of Days</Label>
                  <Field className="form-control" name="name" 
                  disabled={!checkedSecondarySmall}
                  />
                  {errors.timeline && touched.timeline ? (
                    <div className="invalid-feedback d-block">
                      {errors.timeline}
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
     
           
         )
}


export default OndemandSession