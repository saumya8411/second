import React from 'react';
import { Row,Card,CardImg,CardBody,CardTitle,CardSubtitle,CardText,Button,Col,  UncontrolledDropdown,FormGroup,Input,
  DropdownItem,
  DropdownToggle,
  DropdownMenu, } from 'reactstrap';
import IntlMessages from '../../helpers/IntlMessages';
import GradientWithRadialProgressCard from '../../components/cards/GradientWithRadialProgressCard';
import { Colxx, Separator } from '../../components/common/CustomBootstrap';
import Breadcrumb from '../../containers/navs/Breadcrumb';
import { injectIntl } from 'react-intl';
import './dash.css'
import { FaUsers } from 'react-icons/fa';
import { FaCode } from 'react-icons/fa';
import { FaDatabase } from 'react-icons/fa';
import { FaWifi } from 'react-icons/fa';
import { FaFilter } from 'react-icons/fa';
import { Scrollbars } from 'react-custom-scrollbars';
import { LineChart } from '../../components/charts';

import { lineChartData } from '../../data/charts';


import { CircularProgressbar ,buildStyles} from 'react-circular-progressbar';
import EnhancedTable from '../../CustomComponents/EnhancedTable';



// Radial separators


const BlankPage = ({ intl,match }) => {
  const Enroll_percentage = 66;
  const course_percentage = 9;
  const data_percentage = '14';
  const bandwidth_percentage = 20
const number = 43;
  return (
    <>
 {/*      <Row> 
        <Colxx xs="12">
          <FormGroup className="mb-4 d-flex float-right" id="search">
            <Input type="email" className="d-flex" id="exampleEmail" placeholder="Search anything" />
            <Button id="searchbutton" className="d-flex ml-2">Search</Button>
          </FormGroup>
        </Colxx>
      </Row>*/}
      <Row> 
        <Col md = "3" xs = "12">
      <Card id="card121"> 
        {/* <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */}
        <CardBody>
          {/* <CardTitle tag="h5">Card title</CardTitle> */}
          {/* <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle> */}
          {/* <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText> */}
          <Row>
          <Col md="12">
            <FaUsers id="users"/>
            <h1 id="number" >{number}</h1>
            <CardText id="small">Enrollments till now</CardText>
          </Col>

          </Row>
          {/* <Button>Button</Button> */}
        </CardBody>
      </Card>
      </Col>
      <Col md = "3" xs = "12">
      <Card id="card122">
        {/* <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */}
        <CardBody>
        <Row>
          <Col md="12">
            <FaCode id="users"/>
            <h1 id="number" >11</h1>
            <CardText id="small">Courses uploaded till now</CardText>
          </Col>
          </Row>
        </CardBody>
      </Card>
      </Col>
      <Col md = "3" xs = "12">
      <Card id="card123">
        {/* <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */}
        <CardBody>
        <Row>
          <Col md="7" xs="7">
            <FaDatabase id="users"/>
            <h1 id="number" >14GB</h1>
            <CardText id="small">Storage Used</CardText>
          </Col>
          <Col md="5" xs="5">
          <CircularProgressbar
            value={data_percentage}
            text={`${data_percentage}%`}
            styles={buildStyles({
              textColor: "red",
              pathColor: "#228B22"
            })}
          />
          </Col>
          </Row>
        </CardBody>
      </Card>
      </Col>
      <Col md = "3" xs = "12">
      <Card id="card124">
        <CardBody>
        <Row>
          <Col md="7" xs="7">
            <FaWifi id="users"/>
            <h1 id="number" >10GB</h1>
            <CardText id="small">Bandwidth used</CardText>
          </Col>
          <Col md="5" xs="5">
          <CircularProgressbar
            value={bandwidth_percentage}
            text={`${bandwidth_percentage}%`}
            styles={buildStyles({
              textColor: "#46b5d1",
              pathColor: "#E4495A"
            })}
          />
          </Col>
          </Row>
        </CardBody>
      </Card>
      </Col>
      </Row>
      <Row>
      <Col md="12" xs="12">
      <Scrollbars style={{ width: '100%', height: 500 }}>
      <Card className="mt-4 ccc mb-4" id="cb">
      <CardTitle>
      <Row className="ml-4 mt-4">
      
      <div className="thecard">
        <span id="dot"></span><small className="ml-2">Registrations</small> 
        <span id="dot2"></span><small id="no" className="ml-2" >Enrollments</small>
        <span id="dot3"></span> <small id="no">Revenue</small>
      </div>

      <div className="position-absolute card-top-buttons">
          <DropdownToggle color="" className="btn btn-header-light icon-button mr-4">
            <FaFilter className="mb-1"/>
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              <Row className="ml-1">Last 7 Days</Row>
            </DropdownItem>
            <DropdownItem>
            <Row className="ml-1">Last one month</Row>
            </DropdownItem>
            <DropdownItem>
            <Row className="ml-1">Last three months</Row>
            </DropdownItem>
          </DropdownMenu>

          </div>
        </Row>
        </CardTitle>
      <CardBody > 
        
        
        <div className="dashboard-line-chart">
          <LineChart shadow data={lineChartData} />
        </div>
      </CardBody>
    </Card></Scrollbars>
    </Col>
    </Row>
     {/* <EnhancedTable/>  */}
    </>
  );
};

export default BlankPage;
