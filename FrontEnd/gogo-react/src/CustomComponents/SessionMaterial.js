import React, { Component } from 'react'
import { Breadcrumb, BreadcrumbItem,Button,Card,CardBody,CardTitle,Row ,FormGroup,Label, Input,CardText, Col} from 'reactstrap';
import Switch from 'rc-switch';
import {iconsmind,simplelineicons} from '../data/icons'
import 'rc-switch/assets/index.css';
import { Colxx, Separator } from '../components/common/CustomBootstrap';
import Editable from './Editable';
import './Customcss.css'
import { Link } from 'react-router-dom';

import {useCounter} from './useCounter'
import Avatar from './avatarnew.png'
import {FaPlayCircle} from 'react-icons/fa'
import {RiAttachmentLine} from 'react-icons/ri'
import {GrDocumentPdf} from 'react-icons/gr'
import {BiBroadcast} from 'react-icons/bi'
//import {ContentEditable} from 'react-contenteditable'






export default class SessionMaterial extends Component {
  
    constructor(props) {
        super(props)
        this.deleteTask = this.deleteTask.bind(this)
        this.state = {
             SessionMaterial:[
               {
                name:"Artificial intelligence basics",
                lesson:[{
                  name:"xyz",
                  video:"",
                  assignment:"",
                  notes:"",
                  thumbnail:"",
                  quiz:"",
                },]
              }],
              data:{
                  name:"Machine Learning",
                  type:"Recorded",
                  date:'12 Nov 2020',
                  time:'12:30',
                  tagline:'Machine Learning is future',
                  description:"Custom Description this is demo data",
                  Trainer:{
                      name:'Vedant',
                    skills:["HTML", "CSS","JAVASCRIPT","ANGULAR","DJANGO",'MYSQL','BOOTSTRAP']
                    
                    },

                
                  
              },
              timeline:false,
conclusion:'',

 html: "<b>Hello <i>World</i></b>"

                          
              
        }


        this.changeChapterAttribute = this.changeChapterAttribute.bind(this);
        this.changeLessonattribute = this.changeLessonattribute.bind(this);
        this.changepageattribute = this.changepageattribute.bind(this);

        this.addLesson = this.addLesson.bind(this);
        this.addChapter = this.addChapter.bind(this);
        
        this.fileUploadButton = this.fileUploadButton.bind(this);

    }
    
    addLesson(props){
        const newarray = this.state.SessionMaterial;
        const lessonlength = newarray[props].lesson.length
        const newlesson = {
          name:`lesson ${lessonlength+1}`,
                  video:"",
                  assignment:"",
                  notes:"",
                  thumbnail:"",
                  quiz:"",
        }
        newarray[props].lesson.push(newlesson)
this.setState({SessionMaterial:newarray},console.log(this.state.SessionMaterial))
    }
    deleteTask(lessonindex){
      console.log(lessonindex)
      let lesson = this.state.SessionMaterial
      lesson.splice(lessonindex,1)
      this.setState({
        lesson
      })
    }
        
        addChapter(){
          const newarray = this.state.SessionMaterial;
          const arraysize  = newarray.length
          const newChapter = {
            name:`chapter ${arraysize+1}`,
            lesson:[{
              name:"lesson 1",
              video:"",
              assignment:"",
              notes:"",
              thumbnail:"",
              quiz:"",
            }]
          }
          newarray.push(newChapter)
          this.setState({SessionMaterial:newarray},console.log(this.state.SessionMaterial))


        }
        removeItem() {
          const lesson = this.state.SessionMaterial;
          lesson.splice(lesson.index, 1);
          this.setState({ lesson:lesson });
        }
        
        changeChapterAttribute(props,index){
          const newarray = this.state.SessionMaterial;
          newarray[index].name = props.target.value
          this.setState({SessionMaterial:newarray},console.log(this.state.SessionMaterial))
            
        }
        changeLessonattribute(props,index,lessonindex){
          
          const newarray = this.state.SessionMaterial;
          const named = props.target.name
        console.log(props.target.value,index,lessonindex)  
          newarray[index].lesson[lessonindex][props.target.name] = props.target.value
          this.setState({SessionMaterial:newarray},console.log(this.state.SessionMaterial))
            
        }
        changepageattribute(props){
          const newarray = this.state.data;
          const named = props.target.name
        console.log(newarray,newarray[named],named)  
          newarray[props.target.name] = props.target.value
          this.setState({data:newarray},console.log(this.state.data))
            
        }
        handleChange(props){
          const newarray = this.state.data;
          const named = props.target.name
        console.log(newarray,newarray[named],named)  
          newarray[props.target.html] = props.target.value
          this.setState({data:newarray},console.log(this.state.data))
        }

        fileUploadButton = (index,lessonindex,id) => {
          document.getElementById('fileButton').click();
          // document.getElementById('fileButton').onchange = () =>{      
          // this.setState({
          //      :document.getElementById('fileButton').value
          //         });
          //     }
          console.log(index,document.getElementById(id).value,document.getElementById(id).name)
          }
         
 

        
        

    render() {
        return (
          <section>
        <Link to="/app/dashboard/default">              
        <div className={`glyph-icon ${iconsmind[2].icons[42]} sessionlookicon`} style={{fontSize:'3rem'}} />
        </Link>
          <Card className="p-4 mb-3">
              <CardBody>
                <Row>
         <Colxx md="9" sm="12">
                    <Row>
                <nav>
                    <ul className="d-flex">
                        <li style={{display:'flex',alignItems:'center'}}>
        <h3 className="font-weight-bold">{this.state.data.name}</h3>
                        </li>
                        <li className="mb-2">
        <span style={{padding:'2px 5px',backgroundColor:'#CFEBFD',borderRadius:'5px', fontSize:'10px',marginBottom:'10px' }}>{this.state.data.type}</span>
                        </li>
                    </ul>
                </nav>
    </Row>
                    <Row style={{marginBottom:'20px'}}>
                <nav>
                    <ul className="d-flex">
                      
                        <li>
        <span>{this.state.data.date}</span>
                        </li>
                        <li className="marking">
        <span>{this.state.data.time}</span>
                        </li>
                        
                    </ul>
                </nav>
    </Row>
    </Colxx>
    <Colxx md="3" sm="12">
      <Button outline color="secondary" style={{borderRadius:"3px", marginTop:"15px", fontSize:"14px"}}>
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
                  <h3 className="font-weight-bold">Tagline</h3>
                  {/* <p>Tagline is here</p> */}
                  <Editable style={{fontSize:'15px'}}
          text={this.state.data.tagline}
          placeholder="Write a good tagline"
          type="input"
        >
          <Input
            type="text"
            name="tagline"
            placeholder="Write a good tagline"
            value={this.state.data.tagline}
            onChange={e => this.changepageattribute(e)}
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
                  <h3 className="font-weight-bold">Description</h3>
                  {/* <p>Description is here</p> */}
                  <Editable style={{fontSize:'15px'}}
          text={this.state.data.description}
          placeholder="Write a good description"
          type="input"
        >
          <Input
            type="text"
            name="description"
            placeholder="Write a good description"
            value={this.state.data.description}
            onChange={e => this.changepageattribute(e)}
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
                  <CardTitle className="font-weight-bold">Trainer Profile</CardTitle>
                  <CardBody>
                  <nav>
                    <Row>
                      
                        <Colxx md="2" sm="12" className="cardseparations text-center font-weight-bold">
                             <h3>{this.state.data.Trainer.name}</h3>
                              <img src={Avatar} alt="..." id="avatar"/>
                              <p>Web developer, IBM, bengaluru</p>
                              <p>2017 to present</p>
                              <Button outline color="secondary" >Edit Profile</Button>
                        </Colxx>
                        <Colxx md="10" sm="12" className="">
                            <h5 className="ml-4">Skills</h5>
                            <ul className="skillslist">
                               
                               {this.state.data.Trainer.skills.map((skill)=>{
                                 return(
                                  <Card body className="design">
                                    <CardTitle tag="h5">{skill}</CardTitle>
                                    <CardText>Advanced with 3 Years Experience</CardText>
                                </Card>
                                 
                                 )
                               })}
                                {/* <li>HTML</li>
                                <li>CSS</li>
                                <li>JAVASCRIPT</li>
                                <li>ANGULAR</li>
                                <li>DEVOPS</li> */}
                            </ul>
                        </Colxx>

                        
                    </Row>
                </nav>
    
    
                  </CardBody>
                  </Card>
     
    

    <Card className="p-4 mb-3">
        <Row>
            <Colxx  >
        <CardTitle className="font-weight-bold">Session Material</CardTitle>
        </Colxx>
        <Colxx  xs="6" >
        {/* <FormGroup className="error-l-100">
                      <Label>Multiple Chapters: </Label>
                      <Switch
                  className="custom-switch custom-switch-secondary custom-switch-small"
                  checked={multiplechapters}
                  onChange={(secondary) => setMultiplechapters(secondary)}
                />
                      </FormGroup> */}
                    <Row>
                      <Colxx  sm="4">
                      <FormGroup className="error-l-100">
                      <Label>Enable Timeline: </Label>
                      <Switch
                  className="custom-switch custom-switch-secondary custom-switch-small"
                  checked={this.state.timeline}
                  onChange={(secondary) => this.setState({timeline:secondary})}
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
          {this.state.SessionMaterial.map((item,index)=>{
            return(
              <>
              <Row className="mt-3">
              <Colxx  md="6">
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
                  onChange={e => this.changeChapterAttribute(e,index)}
                />
                 </Editable>
            
                  
              </Colxx>
              <Colxx md="6">
                <Label>What Will Students Learn After this Chapter</Label>
                  <Input placeholde0r="What Will Students Learn After this Chapter" type="textarea" name="conclusion" onChange={e=>this.setState({conclusion:e.target.value})}/>
              </Colxx>
          </Row>
                    <Editable
                text={item.html}
                placeholder="Write a Lesson name"
                type="input"
              >
                <Input
                  type="text"
                  name="name"
                  placeholder="Write a Lesson name"
                  value={this.html}
                  onChange={e => this.handleChange(e)}
                />
                 </Editable>
                 <Row>
                 <Button mode="filled" className="btn12" color="primary" style={{maxWidth:"200px"}} onClick={()=>this.addLesson(index)}>Add lesson</Button>
              <Button mode="filled" className="btn13" color="secondary" style={{maxWidth:"200px"}} className="ml-4 mt-auto" onClick={()=>this.addChapter()}>Add Chapter</Button>
              </Row>

      {item.lesson.map((lessonitem,lessonindex)=>{
        console.log(lessonitem)
        return(
          <div key={lessonindex}>
          <Row className="mt-4">
          <Colxx  md="4">
          {/* <Input value="First Lesson" onChange={onLessonnameChange}/> */}
          

          </Colxx>
          
          <Colxx  md="8">
              
             <Row className="mt-4 text-center">
             <Card body className="design">
               <CardTitle tag="h5">Get Started</CardTitle>
               <Row>
                 <Col md="3">
                   <FaPlayCircle id="lower-icons"/>
                   <p>Add Video</p>
                 </Col>
                 <Col md="3">
                   <RiAttachmentLine id="lower-icons"/>
                   <p>embeded</p>
           
                </Col>
                <Col md="3">
                  <GrDocumentPdf/>
                  <p>pdf</p>
                </Col>
                <Col md="3">
                  <BiBroadcast id="lower-icons"/>
                  <p>live</p>
                </Col>
                <button onClick={(evt) => {
                  evt.stopPropagation()
                  this.deleteTask(lessonindex)}}>Delete</button>
            </Row>
             </Card>
            
            
          

          
          

          


          </Row>
          </Colxx>
          
          </Row>
          
          </div>
        )
      })}

          

          </>
           
            )
          })}
    
    </CardBody>
    </Card>
    </Card>
  
         
         </section>
    
        )
    }
}


