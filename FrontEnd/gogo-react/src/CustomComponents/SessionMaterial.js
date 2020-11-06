import React, { Component } from 'react'
import { Breadcrumb, BreadcrumbItem,Button,Card,CardBody,CardTitle,Row ,FormGroup,Label, Input, Col} from 'reactstrap';
import Switch from 'rc-switch';
import {iconsmind,simplelineicons} from '../data/icons'
import 'rc-switch/assets/index.css';
import { Colxx, Separator } from '../components/common/CustomBootstrap';
import Editable from './Editable';
import './Customcss.css'
import { Link } from 'react-router-dom';

export default class SessionMaterial extends Component {
    constructor(props) {
        super(props)
    
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
                }]
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
                    skills:["HTML","CSS","JAVASCRIPT","ANGULAR","DJANGO"]
                    },
                
                  
              },
              timeline:false,
conclusion:''
        };

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
        <h3>{this.state.data.name}</h3>
                        </li>
                        <li className="marking">
        <span style={{padding:'5px 10px',backgroundColor:'#CFEBFD',borderRadius:'12px'}}>{this.state.data.type}</span>
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
                  <h3>Description</h3>
                  {/* <p>Description is here</p> */}
                  <Editable
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
                  <CardTitle>Trainer Profile</CardTitle>
                  <CardBody>
                  <nav>
                    <Row>
                      
                        <Colxx md="4" sm="12" className="cardseparations">
                             <h5>{this.state.data.Trainer.name}</h5>
                        </Colxx>
                        <Colxx md="4" sm="12" className="marking cardseparations">
                            <h5>Skils</h5>
                            <ul className="skillslist">
                               
                               {this.state.data.Trainer.skills.map(skill=>{
                                 return(
                                 <li>{skill}</li>
                                 )
                               })}
                                {/* <li>HTML</li>
                                <li>CSS</li>
                                <li>JAVASCRIPT</li>
                                <li>ANGULAR</li>
                                <li>DEVOPS</li> */}
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
                  onChange={e => this.changeChapterAttribute(e,index)}
                />
                 </Editable>
            
                  
              </Colxx>
              <Colxx xs="12" md="6">
                <Label>What Will Students Learn After this Chapter</Label>
                  <Input placeholde0r="What Will Students Learn After this Chapter" type="textarea" name="conclusion" onChange={e=>this.setState({conclusion:e.target.value})}/>
              </Colxx>
          </Row>
          <Card className="p-3 mt-4">
            <CardBody>
      {item.lesson.map((lessonitem,lessonindex)=>{
        console.log(lessonitem)
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
                  onChange={e => this.changeLessonattribute(e,index,lessonindex)}
                />
               
              </Editable>
          
          </Colxx>
          <Colxx xs="12" md="6">
              
             <Row>
            <Colxx xxs="12" sm="6" lg="3" className="iconcolumn" ><div className={`glyph-icon ${iconsmind[28].icons[8]} sessionlookicon`} />
            <Input id="fileButton" type="file" hidden name="video"/>
            <div className="class-name" name="video" onClick={()=>this.fileUploadButton(index,lessonindex,"fileButton")}>Video</div>
            </Colxx>
          <Colxx xxs="12" sm="6" lg="3" className="iconcolumn">
          <div className={`glyph-icon ${simplelineicons[151]} mr-2 sessionlookicon`} />
          <div className="class-name" >Embedded</div>
          
          
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
          </CardBody>
          <Button mode="filled" color="primary" style={{maxWidth:"200px"}} onClick={()=>this.addLesson(index)}>Add lesson</Button>
          </Card>
          </>
           
            )
          })}
    <Button mode="filled" color="secondary" style={{maxWidth:"200px"}} className="mt-4" onClick={()=>this.addChapter()}>Add Chapter</Button>
    </CardBody>
    </Card>
    </Card>
              
         </section>
    
        )
    }
}


