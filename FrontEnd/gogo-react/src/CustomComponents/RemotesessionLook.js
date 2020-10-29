import React,{useState} from 'react'
import { Colxx, Separator } from '../components/common/CustomBootstrap';
import { Breadcrumb, BreadcrumbItem,Button,Card,CardBody,CardTitle,Row ,FormGroup,Label, Input, Col} from 'reactstrap';
import './Customcss.css';
import Switch from 'rc-switch';
import {iconsmind} from '../data/icons'
import 'rc-switch/assets/index.css';
import Editable from './Editable'
const IconGroup = ({ iconSet }) => {
    return (
      <div className="mb-5">
        {iconSet.icons.map((icon, index) => {
          return (
            <div className="glyph" key={index}>
              <div className={`glyph-icon ${icon}`} />
              {/* <div className="class-name">{icon}</div> */}
            </div>
          );
        })}
        <div className="clearfix" />
      </div>
    );
  };
  

function RemotesessionLook() {
      const [multiplechapters, setMultiplechapters] = useState(true);
      const [multiplethumbnails, setMultiplethumbnails] = useState(true);
      const [conclusion, setConclusion] = useState("");
      const [chapername, onChapternameChange] = useState("First Chapter");
      const [lessonname, onLessonnameChange] = useState("");
      const [description, onDescriptionChange] = useState("My Description");
      const [tagline, onTaglineChange] = useState("My Tagline");

       
    return (
        <section>
      <Card className="p-4 mb-3">
          <CardBody>
            <Row>
     <Colxx md="9" sm="12">
                <Row >
            <nav>
                <ul className="d-flex">
                    <li>
                         <h3>Session Name</h3>
                    </li>
                    <li className="marking">
                        <span style={{padding:'5px 10px',backgroundColor:'#CFEBFD',borderRadius:'12px'}}>Session Type</span>
                    </li>
                </ul>
            </nav>
</Row>
                <Row style={{marginBottom:'20px'}}>
            <nav>
                <ul className="d-flex">
                  
                    <li>
                         <span>Date</span>
                    </li>
                    <li className="marking">
                        <span>Time</span>
                    </li>
                    
                </ul>
            </nav>
</Row>
</Colxx>
<Colxx md="3" sm="12">
  <Button outline color="secondary">
    Launch
  </Button>
</Colxx>
</Row>
</CardBody>
</Card>
<Card className="p-4 mb-3">
          <CardBody>
          <Row>
     <Colxx sm="12">
     <Row style={{marginBottom:'20px'}}>
          <Colxx xxs='12' md="4">
              <h3>Tagline</h3>
              {/* <p>Tagline is here</p> */}
              <Editable
      text={tagline}
      placeholder="Write a good tagline"
      type="input"
    >
      <Input
        type="text"
        name="tagline"
        placeholder="Write a good tagline"
        value={tagline}
        onChange={e => onTaglineChange(e.target.value)}
      />
      {/* <Input 
       name="task"
       placeholder="Write a task name"
    //    value={chapername}
      onChange={onChapternameChange}/> */}
    </Editable>
  
          </Colxx>
          
</Row>   
</Colxx>
</Row>

            <Row>
     <Colxx sm="12">
     <Row style={{marginBottom:'20px'}}>
          <Colxx xxs='12' md="4">
              <h3>Description</h3>
              {/* <p>Description is here</p> */}
              <Editable
      text={description}
      placeholder="Write a good description"
      type="input"
    >
      <Input
        type="text"
        name="description"
        placeholder="Write a good description"
        value={description}
        onChange={e => onDescriptionChange(e.target.value)}
      />
      {/* <Input 
       name="task"
       placeholder="Write a task name"
    //    value={chapername}
      onChange={onChapternameChange}/> */}
    </Editable>
  
          </Colxx>
          
</Row>   
</Colxx>
</Row>
</CardBody>
</Card>
<Card className="p-4 mb-3">
              <CardTitle>Trainer Profile</CardTitle>
              <CardBody>
              <nav>
                <Row>
                  
                    <Colxx md="4" sm="12" className="cardseparations">
                         <h5>Trainers Name</h5>
                    </Colxx>
                    <Colxx md="4" sm="12" className="marking cardseparations">
                        <h5>Skils</h5>
                        <ul className="skillslist">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JAVASCRIPT</li>
                            <li>ANGULAR</li>
                            <li>DEVOPS</li>
                        </ul>
                    </Colxx>
                    <Colxx md="4" sm="12" className="marking cardseparations">
                        <h5>Edit Profile</h5>
                    </Colxx>
                    
                </Row>
            </nav>


              </CardBody>
              </Card>
<Card className="p-4 mb-3">
          <CardBody>
            <Row>
     <Colxx md="6" sm="12">
     <Row style={{marginBottom:'20px'}}>
          <Colxx xxs='12' md="4">
              <h3>List Of Occurance</h3>
              <p>Occurance is here</p>
          </Colxx>
          
</Row> 
</Colxx>  
          
</Row>  
</CardBody>
</Card> 


<Row style={{marginBottom:'20px'}}>
          <Colxx xxs='12' md="4">
              <h3>Modules</h3>
              <p>Modules is here</p>
          </Colxx>
          
</Row>   

<Card className="p-4 mb-3">
    <Row>
        <Colxx xs="12" sm="6">
    <CardTitle>Session Material</CardTitle>
    </Colxx>
    <Colxx xs="12" sm="6" >
        <div className="d-flex justify-content-around" style={{maxWidth:'400px'}}>
    <FormGroup className="error-l-100">
                  <Label>Multiple Chapters: </Label>
                  <Switch
              className="custom-switch custom-switch-secondary custom-switch-small"
              checked={multiplechapters}
              onChange={(secondary) => setMultiplechapters(secondary)}
            />
                  </FormGroup>
                  <FormGroup className="error-l-100">
                  <Label>Multiple Thumbnails: </Label>
                  <Switch
              className="custom-switch custom-switch-secondary custom-switch-small"
              checked={multiplethumbnails}
              onChange={(secondary) => setMultiplethumbnails(secondary)}
            />
                  </FormGroup>
                  <Button outline color="secondary" className="mb-2">
                Preview
              </Button>
                  </div>
    </Colxx>
    </Row>
   
    <CardBody>
<Card className="p-4">
<Row>
    <Colxx xs="12" md="6">
    <Editable
      text={chapername}
      placeholder="Write a chapter name"
      type="input"
    >
      <Input
        type="text"
        name="chapter"
        placeholder="Write a chapter name"
        value={chapername}
        onChange={e => onChapternameChange(e.target.value)}
      />
      {/* <Input 
       name="task"
       placeholder="Write a task name"
    //    value={chapername}
      onChange={onChapternameChange}/> */}
    </Editable>
  
        
    </Colxx>
    <Colxx xs="12" md="6">
        <Input placeholde0r="What Will Students Learn After this Chapter" type="textarea" name="conclusion" onChange={setConclusion}/>
    </Colxx>
</Row>
<Row>
<Colxx xs="12" md="6">
{/* <Input value="First Lesson" onChange={onLessonnameChange}/> */}

<Editable
      text={lessonname}
      placeholder="Write a lesson name"
      type="input"
    >
      {/* <input
        type="text"
        name="task"
        placeholder="Write a task name"
        value={conclusion}
        onChange={e => setConclusion(e.target.value)}
      /> */}
      <Input
        type="text"
        name="lesson"
        placeholder="Write a Lesson name"
        value={lessonname}
        onChange={e => onLessonnameChange(e.target.value)}
      />
     
    </Editable>

</Colxx>
<Colxx xs="12" md="6">
    
    <div className="mind-icons">
                    <div className="glyph" style={{boxShadow:'rgba(149, 157, 165, 0.2) 0px 8px 24px',height:'min-content',width:'min-content'}}>
              <div className={`glyph-icon ${iconsmind[28].icons[8]}`} />
              {/* <div className="class-name">{icon}</div> */}
            </div>
            
</div>
    

</Colxx>

</Row>
</Card>
    </CardBody>
</Card>
          
     </section>
    )
}

export default RemotesessionLook;
