import React,{useState} from 'react'
import { Row, Card, CardBody, FormGroup, Label, Button,Input, Col, Collapse } from 'reactstrap';
const quiz = [
    {
      id: 1,
      Que: 'Hello i am question 1',
      option1: 'Hello i am option 1',
      option2: 'Hello i am option 2',
      option3: 'Hello i am option 3',
      option4: 'Hello i am option 4',
      badge: 'NEW',
    },
    {
      id: 2,
      Que: 'Hello i am question 2',
      option1: 'Hello i am option 1',
      option2: 'Hello i am option 2',
      option3: 'Hello i am option 3',
      option4: 'Hello i am option 4',
    },
    {
      id: 3,
      Que: 'Hello i am question 3',
      option1: 'Hello i am option 1',
      option2: 'Hello i am option 2',
      option3: 'Hello i am option 3',
      option4: 'Hello i am option 4',
      badge: 'TRENDING',
    },
    {
      id: 4,
      Que: 'Hello i am question 4',
      option1: 'Hello i am option 1',
      option2: 'Hello i am option 2',
      option3: 'Hello i am option 3',
      option4: 'Hello i am option 4',
    },
    {
      id: 5,
      Que: 'Hello i am question 1',
      option1: 'Hello i am option 1',
      option2: 'Hello i am option 2',
      option3: 'Hello i am option 3',
      option4: 'Hello i am option 4',
    },
  ];
  
function Preview() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <h5 className="mb-3">Quiz questions</h5>
           {quiz.map(col => <>
                <Card>
                    <CardBody>
                        <b>Q. {col.Que}</b>
                        <p className="mt-4" style={{fontSize:'17px'}}><b>Option:</b> {col.option1}</p>
                        <p className="mt-4" style={{fontSize:'17px'}}><b>Option:</b> {col.option2}</p>
                        <p className="mt-4" style={{fontSize:'17px'}}><b>Option:</b> {col.option3}</p>
                        <p className="mt-4" style={{fontSize:'17px'}}><b>Option:</b> {col.option4}</p>
                    </CardBody>
                </Card> <br/> </> )}<br/>
        </div>
    )
}

export default Preview
