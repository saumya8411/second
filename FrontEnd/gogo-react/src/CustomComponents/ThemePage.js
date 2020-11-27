import React, { useState, useEffect } from 'react';
import {
  Card,
  Row,
  Input,
  CardTitle,Modal, ModalHeader, ModalBody, ModalFooter,
  CardBody,
  CardHeader,
  Nav,
  NavItem,
  TabContent,
  Button,Form,
  Label,
  FormGroup,
  TabPane,Col,
  CardImg,CardText
} from 'reactstrap';

import { Colxx } from '../components/common/CustomBootstrap';
import Switch from 'rc-switch';
import './Customcss.css';
import { useTable, usePagination, useSortBy } from 'react-table';
import EmailCommunication from './EmailCommunication';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import setting from '../data/setting';
import { Scrollbars } from 'react-custom-scrollbars';

import avatar from './l60Hf.png'
import {FiUpload} from 'react-icons/fi'

function Themepage() {
  const [defaulttheme, setDefaulttheme] = useState(true);
  const [blanktheme, setBlanktheme] = useState(true);
  const [activeFirstTab, setActiveFirstTab] = useState('1');
  const [theme, setTheme] = useState('1');
  const [contactustheme, setContactustheme] = useState('1');
  let [select, setSelect] = useState('Select');
  let [select2, setSelect2] = useState('Select');
  const [timeline, settimeline] = useState(false)
  const [timeline1, settimeline1] = useState(false)
  const [timeline2, settimeline2] = useState(false)
  const [activeFirstTab1, setActiveFirstTab1] = useState('4');
  const [activeFirstTab3, setActiveFirstTab3] = useState('30');
  const [inputList, setInputList] = useState([{ firstName: "", lastName: "",rate: "" }]);
  const [inputList1, setInputList1] = useState([{ fullname: "", phone: "",email: "",address: "",website: "",linkedin: "",twitter: "",facebook: "",instagram: "",career_summary: ""}]);
  
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };
  function Table({ columns, data }) {
    const {
      getTableProps,
      getTableBodyProps,
      prepareRow,
      headerGroups,
      page,
      canPreviousPage,
      canNextPage,
      pageCount,
      gotoPage,
      setPageSize,
      state: { pageIndex, pageSize },
    } = useTable(
      {
        columns,
        data,
        initialState: { pageIndex: 0, pageSize: 6 },
      },
      useSortBy,
      usePagination
    );

  
    return (
      <>
      
        <table {...getTableProps()} className="r-table table">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column, columnIndex) => (
                  <th
                    key={`th_${columnIndex}`}
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className={
                      column.isSorted
                        ? column.isSortedDesc
                          ? 'sorted-desc'
                          : 'sorted-asc'
                        : ''
                    }
                  >
                    {column.render('Header')}
                    <span />
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell, cellIndex) => (
                    <td
                      key={`td_${cellIndex}`}
                      {...cell.getCellProps({
                        className: cell.column.cellClass,
                      })}
                    >
                      {cell.render('Cell')}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
  
        {/* <DatatablePagination
          page={pageIndex}
          pages={pageCount}
          canPrevious={canPreviousPage}
          canNext={canNextPage}
          pageSizeOptions={[4, 10, 20, 30, 40, 50]}
          showPageSizeOptions={false}
          showPageJump={false}
          defaultPageSize={pageSize}
          onPageChange={(p) => gotoPage(p)}
          onPageSizeChange={(s) => setPageSize(s)}
          paginationMaxSize={pageCount}
        /> */}
      </>
    );
  }
  
  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };
  const cols = [
    {
      Header: 'Name',
      accessor: 'name',
      cellClass: 'text-muted w-25',
      Cell: (props) => <p>{props.value}</p>,
      sortType: 'basic',
    },
    {
      Header: 'Email',
      accessor: 'email',
      cellClass: 'color',
      Cell: (props) => <p>{props.value}</p>,
      sortType: 'basic',
    },
    {
      Header: 'Role',
      accessor: 'role',
      cellClass: 'text-muted w-25',
      Cell: (props) => <p>{props.value}</p>,
      sortType: 'basic',
    },
    {
      Header: 'Action',
      cellClass: 'text-muted w-25',
      Cell: () => <Button color="danger">Delete</Button>,
      sortType: 'basic',
    },
  ]
  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { firstName: "", lastName: "",rate: "" }]);
  };
  let selectme = (e) => {
      if(e == 'select'){
        setSelect(select = 'Selected')
        setSelect2(select = 'Select')
      }
      else if(e == 'select2'){
        setSelect2(select2 = 'Selected')
        setSelect(select = 'Select')
      }
      else{
        setSelect(select = 'Select')
      }
  }

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const value = 100
  const handleInputChange1 = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList1];
    list[index][name] = value;
    setInputList1(list);
  };
   
  // handle click event of the Remove button
  const handleRemoveClick1 = index => {
    const list = [...inputList1];
    list.splice(index, 1);
    setInputList1(list);
  };
   
  // handle click event of the Add button
  const handleAddClick1 = () => {
    setInputList1([...inputList1, { fullname: "", phone: "",email: "",address: "",website: "",linkedin: "",twitter: "",facebook: "",instagram: "",career_summary: ""}]);
  };

  return (
    <>
    {/*  <FormGroup className="mb-4 d-flex float-right ml-auto" id="search">
          <Input type="email" className="d-flex" id="exampleEmail" placeholder="Search anything" />
          <Button id="searchbutton" className="d-flex ml-2">Search</Button>
        </FormGroup> */}
         <Row>
            <Nav tabs className="card-header-tabs mb-3">
                  <NavItem>
                    <NavLink
                      to="#"
                      location={{}}
                      className={classnames({
                        active: activeFirstTab3 === '30',
                        'nav-link': true,
                      })}
                      onClick={() => {
                        setActiveFirstTab3('30');
                      }}
                    >
                   <h6>General</h6>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      to="#"
                      location={{}}
                      className={classnames({
                        active: activeFirstTab3 === '31',
                        'nav-link': true,
                      })}
                      onClick={() => {
                        setActiveFirstTab3('31');
                      }}
                    >
                      <h6>Profile</h6>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      to="#"
                      location={{}}
                      className={classnames({
                        active: activeFirstTab3 === '32',
                        'nav-link': true,
                      })}
                      onClick={() => {
                        setActiveFirstTab3('32');
                      }}
                    >
                      <h6>Manage Users</h6>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      to="#"
                      location={{}}
                      className={classnames({
                        active: activeFirstTab3 === '33',
                        'nav-link': true,
                      })}
                      onClick={() => {
                        setActiveFirstTab3('33');
                      }}
                    >
                      <h6>Trainers</h6>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      to="#"
                      location={{}}
                      className={classnames({
                        active: activeFirstTab3 === '34',
                        'nav-link': true,
                      })}
                      onClick={() => {
                        setActiveFirstTab3('34');
                      }}
                    >
                      <h6>Payement Details</h6>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      to="#"
                      location={{}}
                      className={classnames({
                        active: activeFirstTab3 === '35',
                        'nav-link': true,
                      })}
                      onClick={() => {
                        setActiveFirstTab3('35');
                      }}
                    >
                      <h6>Manage Subscriptions</h6>
                    </NavLink>
                  </NavItem>
                  </Nav>
            </Row>
            <TabContent activeTab={activeFirstTab3}>
            <TabPane tabId="30">
    <h3 id="default" className="font-weight-bold">1. Website Theme</h3>
       
    <Row className="mt-1" style={{ marginLeft: '15px' }}>
            <label>
              <input
                type="radio"
                checked={theme === '1'}
                value="1"
                onChange={(e) => setTheme(e.target.value)}
              />
              <div className="">
                {/* <Card
                  className="p-4"
                  style={{ minWidth: '270px', minHeight: '200px' }}
                >
                  <CardImg top width="100%" src="" alt="Theme1 img" />
                  <CardBody>
                    <CardTitle>DefaultTheme</CardTitle>
                  </CardBody>
                </Card> */}
                <Row className="mt-4">
                <Card
                  className="p-4 ml-4"
                  style={{ minWidth: '270px', minHeight: '200px' }}
                >
                  <CardImg
                    top
                    width="100%"
                    src={require('./bebinca-thumb.jpg')}
                    alt="Theme1 img" className="mb-3"
                  />
                  Default Theme
                  <CardBody>
                  <Button className="float-left butn" onClick={() => selectme('select')}>{select}</Button><Button className="float-right butn">Edit</Button>
                  </CardBody>
                </Card>                <Card
                  className="p-4 ml-4"
                  style={{ minWidth: '270px', minHeight: '200px' }}
                >
                  <CardImg
                    top
                    width="100%"
                    src={require('./bebinca-thumb.jpg')}
                    alt="Theme1 img" className="mb-3"
                  />
                  Blank Theme
                  <CardBody>
                  <Button className="float-left butn" onClick={() => selectme('select2')}>{select2}</Button><Button className="float-right butn">Edit</Button>
                  </CardBody>
                </Card>
                </Row>
              </div>
            </label>
          </Row>



          <h3 className="d-flex mt-4 font-weight-bold" id="default">2. Enable blogs on website</h3> <Switch className="custom-switch custom-switch-secondary custom-switch-small ml-auto mb-auto d-flex" id="custom-switch" checked={timeline2} onChange={() => settimeline2(!timeline2)} /> <br/> 



          <h3 className="d-flex mt-4 font-weight-bold" id="default">3. Enable affiliate pages</h3> <Switch className="custom-switch custom-switch-secondary custom-switch-small ml-auto mb-auto d-flex" id="custom-switch" checked={timeline1} onChange={() => settimeline1(!timeline1)} /> <br/>
          {timeline1 ? <Card body className="card1">
          <Row>
            <Col md='6' xs='12'>
              <p className="mr-auto" id="para1">Do you want to give monitary benifit your affiliate?</p>
            </Col>
            
            <Col md='6' xs='12'>
              <Switch className="custom-switch custom-switch-secondary custom-switch-small ml-auto mb-auto" id="custom-switch" checked={timeline} onChange={() => settimeline(!timeline)} /> <br/>
            </Col>
          </Row>
          {timeline ? <div className="d-flex mt-4 mb-4 float-left thediv"><Input placeholder="Your Currency Name" className="mr-auto"/> <Button style={{borderRadius:'0px', marginLeft:'5px'}}>Submit</Button></div> : null}
          <Card body className="mt-2">
            <Row>
            <Nav tabs className="card-header-tabs mb-3">
                  <NavItem>
                    <NavLink
                      to="#"
                      location={{}}
                      className={classnames({
                        active: activeFirstTab1 === '4',
                        'nav-link': true,
                      })}
                      onClick={() => {
                        setActiveFirstTab1('4');
                      }}
                    >
                   <h6>Fixed</h6>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      to="#"
                      location={{}}
                      className={classnames({
                        active: activeFirstTab1 === '5',
                        'nav-link': true,
                      })}
                      onClick={() => {
                        setActiveFirstTab1('5');
                      }}
                    >
                      <h6>Set Ranges</h6>
                    </NavLink>
                  </NavItem>
                  </Nav>
            </Row>
            <TabContent activeTab={activeFirstTab1}>
            <TabPane tabId="4">
                     <div className="d-flex"><p className="font-weight-bold" style={{fontSize:'20px'}}>Rate per conversion</p> <Input style={{width:'70%' , marginLeft:'10px'}} /></div>
                     <Button className="mx-auto mt-4 d-flex" style={{borderRadius:"0px"}}>Submit</Button>
            </TabPane>
            <TabPane tabId="5">
            {inputList.map((x, i) => {
                    return (
                      <div className="box">
                        <div className="d-flex"><Input
                          name="firstName"
                          value={x.firstName}
                          onChange={e => handleInputChange(e, i)} placeholder="Cost(Min)"
                        /><p className="mt-2 ml-4"> to</p>
                        <Input
                          className="ml-4"
                          name="lastName"
                          value={x.lastName}
                          onChange={e => handleInputChange(e, i)}  placeholder="Cost(Max)"
                        />
                         <p className="mt-2 ml-4">=</p> 
                        <Input
                          className="ml-4"
                          name="rate"
                          value={x.rate}
                          onChange={e => handleInputChange(e, i)} placeholder="Rate"
                        /></div>
                        <div className="btn-box">
                          {inputList.length !== 1 && <Button className="mr10" className="mx-auto mt-4 d-flex mb-4" style={{borderRadius:"0px"}} onClick={handleRemoveClick}>Remove</Button>}
                          {inputList.length - 1 === i && <div className="d-flex"><Button onClick={handleAddClick} className="ml-auto mt-4 d-flex mr-2" style={{borderRadius:"0px"}} >Add</Button> <Button className=" mt-4 d-flex mr-auto ml-2" style={{borderRadius:"0px"}}>Submit</Button> </div>}
                        </div>
                        
                      </div>
                    );
                  })} 
                     {/* <Input className="mx-4" placeholder="Cost(Min)"/>  <Input className="mx-4" placeholder="Cost(Max)"/><Input className="mx-4" placeholder="Rate"/>
                     <Button >Add</Button> */}
            </TabPane>
            
            </TabContent>
          </Card>
        </Card> : null}
        </TabPane>
        <TabPane tabId="31" >
          <Row className="p-4">
          <Form>
            <div className="mx-4">
          <Card body>
              <Row>
                <Col md={6} className="pl-4">
                  
                 <Row className="ml-1"> <img src={avatar} style={{width:'20%', marginLeft:'10px'}} /><label className="mr-auto ml-4">
                      <input type="file" accept=".jpg,.jpeg,.png"/>
                      <FiUpload className="text-center " style={{marginLeft:'50px'}} />
                      <p id="ufd">Upload from device</p>
                  </label>
                   </Row>
                   <label className="mt-4">SubDomain Name</label>
                    <Input type="text" placeholder="Subdomain Name"/>
                </Col>
                <Col md={6} className="pr-4">
                     <label className="mt-4">Organization Name</label>
                    <Input type="text" placeholder="Organization Name"/>
                    <label className="mt-4">About me</label>
                    <Input type="textarea" height="200" name="text" id="exampleText" />
                </Col>
              </Row>
              <label className="mt-4 mx-1">Career Summary</label>
              <Input type="textarea" className="mr-2" rows="5" name="text" id="exampleText" />
              <p className="mt-2"><b>Note:</b>&nbsp;Please add ',' to separte skills.</p>
              <Row>
                <Col md={6}>
                  <label>Role</label>
                  <Input type="text" value="Instructor" disabled/>
                  <label className="mt-4">Occupation</label>
                  <Input type="text" placeholder="Occupation"/>
                  <label className="mt-4">Website</label>
                  <Input type="text" placeholder="example: www.xyz.com"/>
                </Col>
                <Col md={6}>
                  <label className="">LinkedIn</label>
                  <Input type="text" placeholder="Your LinkedIn Account URL"/>
                  <label className="mt-4">Facebook</label>
                  <Input type="text" placeholder="Your Facebook Account URL"/>
                  <label className="mt-4">Twitter</label>
                  <Input type="text" placeholder="Your Twitter Account URL"/>
                </Col>
              </Row>
              <Row className=""><Button type="reset" className="ml-auto mt-4 mr-2" style={{width:'100px', borderRadius: '0px'}} >Reset</Button> <Button type="submit" className="mr-auto mt-4 ml-2" style={{width:'100px', borderRadius:'0px'}}>Submit</Button></Row>
          </Card>
          </div>
          </Form>
          </Row>
        </TabPane>
        <TabPane tabId="32">
        <Button onClick={toggle} className="mx-auto d-flex mb-4" style={{borderRadius:"0px"}}>Invite User</Button>
        <Row>
          <Col md="12" xs="12">
        <Card className="h-100  ">
        <Scrollbars style={{ width: '100%', height: 400 }}>
          <CardBody>
            <Table columns={cols} data={setting} /> 
          </CardBody>
          </Scrollbars>
        </Card>
        </Col>
        </Row>
          <Modal isOpen={modal} toggle={toggle} >
            <ModalHeader toggle={toggle}>Modal title</ModalHeader>
            <Form>
            <ModalBody>
                <label>Name</label>
                <Input type="text" placeholder="Example: John Doe"/>
                <label>Role</label>
                <Input type="text" placeholder="Example: Tutor"/>
                <label>Email</label>
                <Input type="text" placeholder="Example: johndoe@gmail.com"/>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={toggle}>Submit</Button>{' '}
              <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
            </Form>
          </Modal>
        </TabPane>
        <TabPane tabId="33">
        {inputList1.map((x, i) => {
      return (
        <>
        
        <Card className="box mb-4">
          <CardBody>
          <Row><Col md={6} xs={12}><img src={avatar} className=" ml-auto" style={{width:'15%'}}/><label className="mr-auto ml-4" >
                      <input type="file" accept=".jpg,.jpeg,.png"/>
                      <FiUpload className="text-center " style={{marginLeft:'50px'}} />
                      <p id="ufd">Upload from device</p>
                  </label></Col><Col md={6} xs={12}>
                    <label>Occupation</label>
                    <Input type="text" placeholder="Where are you working right now?" />
                  </Col></Row>
          <Row className="mt-4">
            <Col md={4} xs="12">
            <label style={{fontSize:'15px'}}>Full Name</label>
          <Input
            name="fullname"
 placeholder="Enter Fullname"
            value={x.fullname}
            onChange={e => handleInputChange1(e, i)}
          /></Col>
          <Col md={4} xs="12">
          <label style={{fontSize:'15px'}}>Phone</label>
          <Input
            className="ml10"
            name="phone"
 placeholder="Phone Number"
            value={x.phone}
            onChange={e => handleInputChange1(e, i)}
          /></Col>
          <Col md={4} xs="12">
          {/* fullname: "", phone: "",email: "",address: "",website: "",linkedin: "",twitter: "",facebook: "",instagram: "",career_summary: "" */}
          <label style={{fontSize:'15px'}}>Email</label>
          <Input
            className="ml10"
            name="email"
 placeholder="Email"
            value={x.email}
            onChange={e => handleInputChange1(e, i)}
          /></Col></Row>
          <Row className="mt-4">
            <Col md={4} xs="12">
            <label style={{fontSize:'15px'}}>Address</label>
          <Input
            className="ml10"
            name="address"
 placeholder="Address"
            value={x.address}
            onChange={e => handleInputChange1(e, i)}
          /></Col>
          <Col md={4} xs="12">
          <label style={{fontSize:'15px'}}>Website</label>
          <Input
            className="ml10"
            name="website"
 placeholder="Website"
            value={x.website}
            onChange={e => handleInputChange1(e, i)}
          /></Col>
          <Col md={4} xs="12">
          <label style={{fontSize:'15px'}}>LinkedIn</label>
          <Input
            className="ml10"
            name="linkedin"
 placeholder="Copy & paste linkedin profile URL"
            value={x.linkedin}
            onChange={e => handleInputChange1(e, i)}
          /></Col></Row>
          <Row className="mt-4">
          <Col md={4} xs="12">
          <label style={{fontSize:'15px'}}>Twitter</label>
          <Input
            className="ml10"
            name="twitter"
 placeholder="Copy & paste Twitter profile URL"
            value={x.twitter}
            onChange={e => handleInputChange1(e, i)}
          /></Col>
          <Col md={4} xs="12">
          <label style={{fontSize:'15px'}}>Facebook</label>
          <Input
            className="ml10"
            name="facebook"
 placeholder="Copy & paste Facebook profile URL"
            value={x.facebook}
            onChange={e => handleInputChange1(e, i)}
          /></Col>
           <Col md={4} xs="12">
           <label style={{fontSize:'15px'}}>Instagram</label>
          <Input
            className="ml10"
            name="instagram"
 placeholder="Copy & paste Instagram profile URL"
            value={x.instagram}
            onChange={e => handleInputChange1(e, i)}
          /></Col></Row>
          <Row className="mt-4">
            <Col md={6} xs={12}>
            <label style={{fontSize:'15px'}}>Career Summary</label>
          <Input
          type="textarea"
            className="ml10"
            name="career_summary"
 placeholder="Please use ',' to separte your skills"
            value={x.career_summary}
            onChange={e => handleInputChange1(e, i)}
          /></Col><Col md={6} xs={12}>
          <label style={{fontSize:'15px'}}>Experience</label>
        <Input
        type="textarea"
          className="ml10"
          name="career_summary"
placeholder="Please use ',' to separte your skills"
          value={x.career_summary}
          onChange={e => handleInputChange1(e, i)}
        /></Col></Row>
          <div className="btn-box">
            {inputList1.length !== 1 && <Button
              className="mr-auto ml-auto d-flex mt-4" color="danger" style={{borderRadius: '0px'}}
              onClick={() => handleRemoveClick1(i)}>Remove</Button>}
          </div>
          </CardBody>
        </Card>
        {inputList1.length - 1 === i && <Button style={{borderRadius:'0px'}} className="mr-auto ml-auto d-flex" onClick={handleAddClick1}>Add</Button>}
        </>
      );
    })}
        </TabPane>
        <TabPane tabId="34">
          <Card className="mx-auto" style={{width:'50%'}}>
            <CardBody>
              <label>Full name</label>
              <Input type="text" placeholder="Full name"/>
              <label className="mt-2">Bank name</label>
              <Input type="text" placeholder="Bank name"/>
              <label className="mt-2">Account Number</label>
              <Input type="text" placeholder="Account Number"/>
              <label className="mt-2">IFSC Code</label>
              <Input type="text" placeholder="IFSC Code"/>
              <label className="mt-2">Bank Address</label>
              <Input type="text" placeholder="Bank Address"/>
              <Button type="submit" style={{borderRadius:"0px"}} className="mt-4 mx-auto d-flex">Submit</Button>
            </CardBody>
          </Card>
        </TabPane>
        </TabContent>
        <br/>
      {/* <Nav tabs className="card-header-tabs mb-3">
        <NavItem>
          <NavLink
            to="#"
            location={{}}
            className={classnames({
              active: activeFirstTab === '1',
              'nav-link': true,
            })}
            onClick={() => {
              setActiveFirstTab('1');
            }}
          >
            <h6> General</h6>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to="#"
            location={{}}
            className={classnames({
              active: activeFirstTab === '2',
              'nav-link': true,
            })}
            onClick={() => {
              setActiveFirstTab('2');
            }}
          >
            <h6>Blog Post</h6>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to="#"
            location={{}}
            className={classnames({
              active: activeFirstTab === '3',
              'nav-link': true,
            })}
            onClick={() => {
              setActiveFirstTab('3');
            }}
          >
            
          </NavLink>
        </NavItem>
        
      </Nav>

      <TabContent activeTab={activeFirstTab}>
        <TabPane tabId="1">
          <Row className="mt-3 mb-2" style={{ marginLeft: '15px' }}> */}
            
            {/* <Colxx xs="12" sm="6">
    <div
      className="d-flex justify-content-around"
      style={{ maxWidth: '400px' }}
    >
      <FormGroup className="error-l-100">
        <Switch
          className="custom-switch custom-switch-secondary custom-switch-small"
          checked={defaulttheme}
          onChange={(secondary) => setDefaulttheme(secondary)}
        />
      </FormGroup>
    </div>
  </Colxx> */}
         {/*  </Row> */}

          

          {/* <Row className="mt-3 mb-2" style={{ marginLeft: '15px' }}>
            <Colxx xs="12" sm="6">
              <h3>Blank Theme</h3>
            </Colxx> */}
            {/* <Colxx xs="12" sm="6">
    <div
      className="d-flex justify-content-around"
      style={{ maxWidth: '400px' }}
    >
      <FormGroup className="error-l-100">
        <Switch
          className="custom-switch custom-switch-secondary custom-switch-small"
          checked={blanktheme}
          onChange={(secondary) => setBlanktheme(secondary)}
        />
      </FormGroup>
    </div>
  </Colxx> */}
          {/* </Row> */}
         {/*  <Row style={{ marginLeft: '15px' }} className="mt-1">
            <Colxx xs="12" sm="6">
              <label>
                <input
                  type="radio"
                  checked={theme === '2'}
                  value="2"
                  onChange={(e) => setTheme(e.target.value)}
                /> */}
                {/* <div className="front-end box">
                  <Card
                    className="p-4"
                    style={{ minWidth: '270px', minHeight: '200px' }}
                  >
                    <CardImg top width="100%" src="" alt="Theme1 img" />
                    <CardBody>
                      <CardTitle>Blank Theme</CardTitle>
                    </CardBody>
                  </Card>
                </div> */}
           {/*    </label>
            </Colxx>
          </Row>
        </TabPane>
        <TabPane tabId="2">Tab 2</TabPane>
        <TabPane tabId="3">
 */}
{/* 
        </TabPane>
      </TabContent> */}
    </>
  );
}

export default Themepage;
