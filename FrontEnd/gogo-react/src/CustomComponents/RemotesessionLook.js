import React,{useState,useEffect} from 'react'
import { Colxx, Separator } from '../components/common/CustomBootstrap';
import { Breadcrumb, BreadcrumbItem,Button,Card,CardBody,CardTitle,Row ,FormGroup,Label, Input, Col} from 'reactstrap';
import './Customcss.css';
import Switch from 'rc-switch';
import {iconsmind,simplelineicons} from '../data/icons'
import 'rc-switch/assets/index.css';
import produtcs from '../data/products';

import Editable from './Editable';

function RemotesessionLook(props) {
      const [multiplechapters, setMultiplechapters] = useState(true);
      const [enabletimline,setTimeline] = useState(true);
      const [conclusion, setConclusion] = useState("");
      const [chapername, onChapternameChange] = useState("First Chapter");
      const [lessonname, onLessonnameChange] = useState("");
      const [description, onDescriptionChange] = useState("My Description");
      const [tagline, onTaglineChange] = useState("My Tagline");
      const {uniquesessionid} = props.location.state;
      const [data,setData] = useState(produtcs[uniquesessionid-1]);
      const [sessionMaterial,setSessionMaterial] = useState([{
        name:"Artificial intelligence basics",
        lesson:[{
          name:"xyz",
          video:"",
          assignment:"",
          notes:"",
          thumbnail:"",
          quiz:"",
        }]
      }]);

useEffect(() => {
  //call your data from backend with uniquesessionid and store in data
  //setData(result);
  return () => {
      //do what you want you do when component unmounts

  }
}, [data])

const AddLesson = (props) =>{
const newarray = sessionMaterial;
const newlesson = {
  name:"",
          video:"",
          assignment:"",
          notes:"",
          thumbnail:"",
          quiz:"",
}
newarray[props].lesson.push(newlesson)
setSessionMaterial(newarray,console.log(sessionMaterial))
}

const AddChaper = () =>{
  
}

const Changeattribute = (props,index) =>{
  const newarray = sessionMaterial;
  const named = props.target.name
console.log(newarray[index],newarray[index][named],named,)  
  newarray[index][props.target.name] = props.target.value
  setSessionMaterial(newarray,console.log(sessionMaterial))
    
}

    return (
        <section>
      <Card className="p-4 mb-3">
          <CardBody>
            <Row>
     <Colxx md="9" sm="12">
                <Row>
            <nav>
                <ul className="d-flex">
                    <li style={{display:'flex',alignItems:'center'}}>
    <h3>{data.title}</h3>
                    </li>
                    <li className="marking">
    <span style={{padding:'5px 10px',backgroundColor:'#CFEBFD',borderRadius:'12px'}}>{data.type}</span>
                    </li>
                </ul>
            </nav>
</Row>
                <Row style={{marginBottom:'20px'}}>
            <nav>
                <ul className="d-flex">
                  
                    <li>
    <span>{data.type}</span>
                    </li>
                    <li className="marking">
                        <span>Time</span>
                    </li>
                    
                </ul>
            </nav>
</Row>
</Colxx>
<Colxx md="3" sm="12">
  <Button outline color="secondary" style={{fontSize:'1.3rem'}}>
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
      text={data.description}
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
                    <Button outline color="secondary" style={{width:'max-content',height:'min-content',fontSize:'1.1rem'}}>Edit Profile</Button>

                    </Colxx>
                    
                </Row>
            </nav>


              </CardBody>
              </Card>
 


<Card className="p-4 mb-3">
    <Row>
        <Colxx xxs="12" xs="6">
    <CardTitle>Session Material</CardTitle>
    </Colxx>
    <Colxx xxs="12" xs="6" >
    {/* <FormGroup className="error-l-100">
                  <Label>Multiple Chapters: </Label>
                  <Switch
              className="custom-switch custom-switch-secondary custom-switch-small"
              checked={multiplechapters}
              onChange={(secondary) => setMultiplechapters(secondary)}
            />
                  </FormGroup> */}
                <Row>
                  <Colxx xs="12" sm="4">
                  <FormGroup className="error-l-100">
                  <Label>Enable Timeline: </Label>
                  <Switch
              className="custom-switch custom-switch-secondary custom-switch-small"
              checked={enabletimline}
              onChange={(secondary) => setTimeline(secondary)}
            />
                  </FormGroup>
                  </Colxx>  <Colxx xs="12" sm="8">  <Button outline color="secondary" className="mb-2">
                Preview
              </Button>
              </Colxx> </Row>
    </Colxx>
    </Row>
    <Card className="p-4">

    <CardBody>
      {sessionMaterial.map((item,index)=>{
        return(
          <>
          <Row>
          <Colxx xs="12" md="6">
          <Editable
            text={item.name}
            placeholder="Write a chapter name"
            type="input"
          >
            <Input
              type="text"
              name="name"
              placeholder="Write a chapter name"
              value={item.name}
              onChange={e => Changeattribute(e,index)}
            />
             </Editable>
        
              
          </Colxx>
          <Colxx xs="12" md="6">
            <Label>What Will Students Learn After this Chapter</Label>
              <Input placeholde0r="What Will Students Learn After this Chapter" type="textarea" name="conclusion" onChange={setConclusion}/>
          </Colxx>
      </Row>
      <Card className="p-3 mt-4">
        <CardBody>
  {item.lesson.map((lessonitem,lessonindex)=>{
    return(
      <>
      <Row className="mt-4">
      <Colxx xs="12" md="6">
      {/* <Input value="First Lesson" onChange={onLessonnameChange}/> */}
      
      <Editable
            text={lessonitem.name}
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
              value={lessonitem.name}
              onChange={e => onLessonnameChange(e.target.value)}
            />
           
          </Editable>
      
      </Colxx>
      <Colxx xs="12" md="6">
          
         <Row>
        <Colxx xxs="12" sm="6" lg="3" className="iconcolumn" ><div className={`glyph-icon ${iconsmind[28].icons[8]} sessionlookicon`} />
        <div className="class-name">Video</div>
        </Colxx>
      <Colxx xxs="12" sm="6" lg="3" className="iconcolumn">
      <div className={`glyph-icon ${simplelineicons[151]} mr-2 sessionlookicon`} />
      <div className="class-name">Embedded</div>
      
      
      </Colxx>
      <Colxx xxs="12" sm="6" lg="3" className="iconcolumn">
      
      <div className={`glyph-icon ${simplelineicons[157]} mr-2 sessionlookicon`} />
      <div className="class-name">PDF</div>
      
      </Colxx>
      <Colxx xxs="12" sm="6" lg="3" >
        <div className="iconcolumn">
        <div className={`glyph-icon ${iconsmind[28].icons[7]} sessionlookicon`} />
        <div className="class-name">Live</div>
        </div>
        </Colxx>
      </Row>
      </Colxx>
      
      </Row>
      
      </>
    )
  })}
      <Row className="mt-4">
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
          
          {/* <div className="mind-icons">
                          <div className="glyph" style={{boxShadow:'rgba(149, 157, 165, 0.2) 0px 8px 24px',height:'min-content',width:'min-content'}}>
                    <div className={`glyph-icon ${iconsmind[28].icons[8]}`} />
                    {/* <div className="class-name">{icon}</div> */}
                  {/* </div>
                  
      </div>  */}
      <Row >
        <Colxx xxs="12" sm="6" lg="3" className="iconcolumn" ><div className={`glyph-icon ${iconsmind[28].icons[8]} sessionlookicon`} />
        <div className="class-name">Video</div>
        </Colxx>
      <Colxx xxs="12" sm="6" lg="3" className="iconcolumn">
      <div className={`glyph-icon ${simplelineicons[151]} mr-2 sessionlookicon`} />
      <div className="class-name">Embedded</div>
      
      
      </Colxx>
      <Colxx xxs="12" sm="6" lg="3" className="iconcolumn">
      
      <div className={`glyph-icon ${simplelineicons[157]} mr-2 sessionlookicon`} />
      <div className="class-name">PDF</div>
      
      </Colxx>
      <Colxx xxs="12" sm="6" lg="3" >
        <div className="iconcolumn">
        <div className={`glyph-icon ${iconsmind[28].icons[7]} sessionlookicon`} />
        <div className="class-name">Live</div>
        </div>
        </Colxx>
      </Row>
      </Colxx>
      
      </Row>
      </CardBody>
      <Button mode="filled" color="primary" style={{maxWidth:"200px"}} onClick={()=>AddLesson(index)}>Add lesson</Button>
      </Card>
      </>
       
        )
      })}
<Button mode="filled" color="secondary" style={{maxWidth:"200px"}} className="mt-4">Add Chapter</Button>
</CardBody>
</Card>
</Card>
          
     </section>
    )
}

export default RemotesessionLook;
