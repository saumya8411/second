import React, { useState, useEffect } from 'react';
import {
  Card,
  Row,
  Input,
  CardTitle,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  CardBody,
  CardHeader,
  Nav,
  NavItem,
  TabContent,
  Button,
  Form,
  Label,
  FormGroup,
  TabPane,
  Col,
  CardImg,
  CardText,
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

import avatar from './l60Hf.png';
import { FiUpload } from 'react-icons/fi';
import axiosInstance from '../helpers/axiosInstance';
import NotificationManager from '../components/common/react-notifications/NotificationManager';

const Themepage = () => {
  const [defaulttheme, setDefaulttheme] = useState(true);
  const [blanktheme, setBlanktheme] = useState(true);
  const [activeFirstTab, setActiveFirstTab] = useState('1');
  const [theme, setTheme] = useState('1');
  const [contactustheme, setContactustheme] = useState('1');
  let [select, setSelect] = useState('Select');
  let [select2, setSelect2] = useState('Select');
  const [timeline, settimeline] = useState(false);
  const [timeline1, settimeline1] = useState(false);
  const [timeline2, settimeline2] = useState(false);
  const [activeFirstTab1, setActiveFirstTab1] = useState('4');
  const [activeFirstTab3, setActiveFirstTab3] = useState('30');
  const [inputList, setInputList] = useState([
    { firstName: '', lastName: '', rate: '' },
  ]);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  useEffect(() => {
    if (error) {
      console.log(error);
      NotificationManager.warning(error, 'User Profile', 3000, null, null, '');
      setError(null);
    }
  }, [error]);

  useEffect(() => {
    if (success) {
      NotificationManager.success(
        success,
        'User Profile',
        3000,
        null,
        null,
        ''
      );
      setSuccess(null);
    }
  }, [success]);

  const [inputList1, setInputList1] = useState([
    {
      profile_picture: '',
      occupation: '',
      fullname: '',
      phone: '',
      email: '',
      address: '',
      website: '',
      linkedin: '',
      twitter: '',
      facebook: '',
      instagram: '',
      career_summary: '',
      experience: '',
    },
  ]);

  const [paymentDetails, setPaymentDetails] = useState({
    customer_payment_full_name: '',
    customer_payment_bank_name: '',
    customer_payment_account_number: '',
    customer_payment_IFSC_code: '',
    customer_payment_bank_address: '',
  });

  const handlePaymentDetailsChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlePaymentDetailsSubmit = async () => {
    try {
      if (
        !paymentDetails.customer_payment_full_name ||
        !paymentDetails.customer_payment_bank_name ||
        !paymentDetails.customer_payment_account_number ||
        !paymentDetails.customer_payment_IFSC_code ||
        !paymentDetails.customer_payment_bank_address
      )
        setError('please fill all fields');
      else {
        const values = Object.assign(paymentDetails);
        console.log(values);
        const result = await axiosInstance.post('/user/payment/details', {
          values,
        });
        if (result.data.success)
          setSuccess('payment details uploaded successfully');
        else setError(result.data.error);
      }
    } catch (err) {
      try {
        setError(err.response.data.error);
      } catch (error) {
        setError('can not upload payment details');
      }
    }
  };

  const [userProfile, setUserProfile] = useState({
    customer_profile_picture: '',
    customer_subdomain_name: '',
    customer_institute_name: '',
    customer_about_me: '',
    customer_career_summary: '',
    customer_role: '',
    customer_linkedin_url: '',
    customer_occupation: '',
    customer_facebook_url: '',
    customer_website_url: '',
    customer_twitter_url: '',
  });
  const [displayProfileImage, setDisplayProfileImage] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const result = await axiosInstance.get('/user');
        console.log(result);
        if (result.data.success) setUserProfile(result.data.user);
        else {
          if (result.data.error) setError(result.data.error);
          else setError('could not fetch details');
        }
      } catch (err) {
        console.log(err);
        try {
          setError(err.response.data.error);
        } catch (error) {
          setError('could not fetch details');
        }
      }
    };
    getUser();
  }, []);

  const onFileChange = async (e) => {
    console.log(e.target.files[0].name);
    const file = e.target.files[0];
    const ext = file.name.slice(file.name.lastIndexOf('.') + 1);
    if (ext != 'jpg' || ext != 'jpeg' || ext != 'png')
      setError('only jpg,jpeg ,png formats are allowed');
    else {
      setUserProfile((prevstate) => ({
        ...prevstate,
        ['customer_profile_picture']: file,
      }));
    }
  };

  const handleUserProfileChange = (e) => {
    const { name, value } = e.target;
    setUserProfile((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleUserProfileSubmit = async (e) => {
    e.preventDefault();
    const values = userProfile;
    console.log(values);
    try {
      const formData = new FormData();
      formData.append('profile_picture', userProfile.customer_profile_picture);
      formData.append('values', JSON.stringify(values));
      const result = await axiosInstance.put('/users', formData);

      if (result.data.success) setUserProfile(result.data.user);
      else {
        if (result.data.error) setError(result.data.error);
        else setError('could not update details');
      }
    } catch (err) {
      console.log(err);
      try {
        setError(err.response.data.error);
      } catch (error) {
        setError('could not update details');
      }
    }
  };
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
  const handleRemoveClick = (index) => {
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
  ];
  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { firstName: '', lastName: '', rate: '' }]);
  };
  let selectme = (e) => {
    if (e == 'select') {
      setSelect((select = 'Selected'));
      setSelect2((select = 'Select'));
    } else if (e == 'select2') {
      setSelect2((select2 = 'Selected'));
      setSelect((select = 'Select'));
    } else {
      setSelect((select = 'Select'));
    }
  };

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const value = 100;

  const handleInputChange1 = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList1];
    list[index][name] = value;
    setInputList1(list);
  };

  const handleTrainerSubmit = async () => {
    console.log(inputList1);
    inputList1.forEach((doc) => {
      if (!doc.fullname) setError('provide full name of trainer');
      else if (!doc.occupation) setError('provide occupation of trainer');
      else if (!doc.phone) setError('provide phone no of trainer');
      else if (!doc.email) setError('provide email of trainer');
      else if (!doc.address) setError('provide address of trainer');
      else if (!doc.career_summary)
        setError('provide career summary of trainer');
      else if (!doc.experience) setError('provide experience of trainer');
    });
    const formData = new FormData();
    inputList1.forEach((doc, index) => {
      if (!doc.profile_picture) {
        setError('please provide profile picture');
        return;
      } else {
        formData.append(`Trainer ${index}`, doc.profile_picture);
      }
    });
    formData.append('values', JSON.stringify(inputList1));
    console.log(formData);
    try {
      const values = { formData, inputList1 };
      const result = await axiosInstance.post('/trainer', values);
      console.log(result);
      if (result.data.success)
        setSuccess('Trainer information uploaded successfully');
      else {
        try {
          setError(result.data.error);
        } catch (error) {
          setError('Unable to save trainer information');
        }
      }
    } catch (err) {
      console.log(err);
      try {
        setError(err.response.data.error);
      } catch (error) {
        setError('could not upload trainers data');
      }
    }
  };
  // handle click event of the Remove button
  const handleRemoveClick1 = (index) => {
    const list = [...inputList1];
    list.splice(index, 1);
    setInputList1(list);
  };

  // handle click event of the Add button
  const handleAddClick1 = () => {
    setInputList1([
      ...inputList1,
      {
        fullname: '',
        phone: '',
        email: '',
        address: '',
        website: '',
        linkedin: '',
        twitter: '',
        facebook: '',
        instagram: '',
        career_summary: '',
      },
    ]);
  };

  const [inviteUser, setInviteUser] = useState({
    invited_user_first_name: '',
    invited_user_last_name: '',
    invited_user_role: '',
    invited_user_email: '',
  });

  const handleInviteUserChange = (e) => {
    const { name, value } = e.target;
    setInviteUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const validateInviteUser = () => {
    if (!inviteUser.invited_user_first_name)
      return { error: 'provide first name', success: 0 };
    if (!inviteUser.invited_user_last_name)
      return { error: 'provide last name', success: 0 };
    if (!inviteUser.invited_user_role)
      return { error: 'provide user role', success: 0 };
    if (!inviteUser.invited_user_email)
      return { error: 'provide user email', success: 0 };
    return { success: 1 };
  };
  const handleInviteUserSubmit = async () => {
    toggle();
    console.log(inviteUser);
    const validate = validateInviteUser();
    console.log(validate);
    if (!validate.success) setError(validate.error);
    else {
      //do a network request
      try {
        const values = Object.assign(inviteUser);
        const result = await axiosInstance.post('/invite/trainer/invite', {
          values,
        });
        console.log(result);
        if (result.data.success) setSuccess('Invitation Sent');
        else setError(result.data.error);
      } catch (err) {
        console.log(err);
        try {
          setError(err.response.data.error);
        } catch (error) {
          setError('unable to invite user');
        }
      }
    }
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
          <NavItem>
            <NavLink
              to="#"
              location={{}}
              className={classnames({
                active: activeFirstTab3 === '36',
                'nav-link': true,
              })}
              onClick={() => {
                setActiveFirstTab3('36');
              }}
            >
              <h6>Third party integrations</h6>
            </NavLink>
          </NavItem>
        </Nav>
      </Row>
      <TabContent activeTab={activeFirstTab3}>
        <TabPane tabId="30">
          <h3 id="default" className="font-weight-bold">
            1. Website Theme
          </h3>
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
                      alt="Theme1 img"
                      className="mb-3"
                    />
                    Default Theme
                    <CardBody>
                      <Button
                        className="float-left butn"
                        onClick={() => selectme('select')}
                      >
                        {select}
                      </Button>
                      <Button className="float-right butn">Edit</Button>
                    </CardBody>
                  </Card>{' '}
                  <Card
                    className="p-4 ml-4"
                    style={{ minWidth: '270px', minHeight: '200px' }}
                  >
                    <CardImg
                      top
                      width="100%"
                      src={require('./bebinca-thumb.jpg')}
                      alt="Theme1 img"
                      className="mb-3"
                    />
                    Blank Theme
                    <CardBody>
                      <Button
                        className="float-left butn"
                        onClick={() => selectme('select2')}
                      >
                        {select2}
                      </Button>
                      <Button className="float-right butn">Edit</Button>
                    </CardBody>
                  </Card>
                </Row>
              </div>
            </label>
          </Row>
          <h3 className="d-flex mt-4 font-weight-bold" id="default">
            2. Enable blogs on website
          </h3>{' '}
          <Switch
            className="custom-switch custom-switch-secondary custom-switch-small ml-auto mb-auto d-flex"
            id="custom-switch"
            checked={timeline2}
            onChange={() => settimeline2(!timeline2)}
          />{' '}
          <br />
          <h3 className="d-flex mt-4 font-weight-bold" id="default">
            3. Enable affiliate pages
          </h3>{' '}
          <Switch
            className="custom-switch custom-switch-secondary custom-switch-small ml-auto mb-auto d-flex"
            id="custom-switch"
            checked={timeline1}
            onChange={() => settimeline1(!timeline1)}
          />{' '}
          <br />
          {timeline1 ? (
            <Card body className="card1">
              <Row>
                <Col md="6" xs="12">
                  <p className="mr-auto" id="para1">
                    Do you want to give monitary benifit your affiliate?
                  </p>
                </Col>

                <Col md="6" xs="12">
                  <Switch
                    className="custom-switch custom-switch-secondary custom-switch-small ml-auto mb-auto"
                    id="custom-switch"
                    checked={timeline}
                    onChange={() => settimeline(!timeline)}
                  />{' '}
                  <br />
                </Col>
              </Row>
              {timeline ? (
                <div className="d-flex mt-4 mb-4 float-left thediv">
                  <Input placeholder="Your Currency Name" className="mr-auto" />{' '}
                  <Button style={{ borderRadius: '0px', marginLeft: '5px' }}>
                    Submit
                  </Button>
                </div>
              ) : null}
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
                    <div className="d-flex">
                      <p
                        className="font-weight-bold"
                        style={{ fontSize: '20px' }}
                      >
                        Rate per conversion
                      </p>{' '}
                      <Input style={{ width: '70%', marginLeft: '10px' }} />
                    </div>
                    <Button
                      className="mx-auto mt-4 d-flex"
                      style={{ borderRadius: '0px' }}
                    >
                      Submit
                    </Button>
                  </TabPane>
                  <TabPane tabId="5">
                    {inputList.map((x, i) => {
                      return (
                        <div className="box">
                          <div className="d-flex">
                            <Input
                              name="firstName"
                              value={x.firstName}
                              onChange={(e) => handleInputChange(e, i)}
                              placeholder="Cost(Min)"
                            />
                            <p className="mt-2 ml-4"> to</p>
                            <Input
                              className="ml-4"
                              name="lastName"
                              value={x.lastName}
                              onChange={(e) => handleInputChange(e, i)}
                              placeholder="Cost(Max)"
                            />
                            <p className="mt-2 ml-4">=</p>
                            <Input
                              className="ml-4"
                              name="rate"
                              value={x.rate}
                              onChange={(e) => handleInputChange(e, i)}
                              placeholder="Rate"
                            />
                          </div>
                          <div className="btn-box">
                            {inputList.length !== 1 && (
                              <Button
                                className="mr10"
                                className="mx-auto mt-4 d-flex mb-4"
                                style={{ borderRadius: '0px' }}
                                onClick={handleRemoveClick}
                              >
                                Remove
                              </Button>
                            )}
                            {inputList.length - 1 === i && (
                              <div className="d-flex">
                                <Button
                                  onClick={handleAddClick}
                                  className="ml-auto mt-4 d-flex mr-2"
                                  style={{ borderRadius: '0px' }}
                                >
                                  Add
                                </Button>{' '}
                                <Button
                                  className=" mt-4 d-flex mr-auto ml-2"
                                  style={{ borderRadius: '0px' }}
                                >
                                  Submit
                                </Button>{' '}
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                    {/* <Input className="mx-4" placeholder="Cost(Min)"/>  <Input className="mx-4" placeholder="Cost(Max)"/><Input className="mx-4" placeholder="Rate"/>
                     <Button >Add</Button> */}
                  </TabPane>
                </TabContent>
              </Card>
            </Card>
          ) : null}
        </TabPane>
        <TabPane tabId="31">
          <Row className="p-4" style={{ width: '100% !important' }}>
            <Form onSubmit={handleUserProfileSubmit}>
              <div className="mx-4">
                <Card body>
                  <Row>
                    <Col md={6} className="pl-4">
                      <Row className="ml-1">
                        {' '}
                        <img
                          src={displayProfileImage}
                          style={{ width: '20%', marginLeft: '10px' }}
                        />
                        <label className="mr-auto ml-4">
                          <input
                            type="file"
                            name="customer_profile_picture"
                            accept=".jpg,.jpeg,.png"
                            onChange={(e) => {
                              console.log(e.target.files[0]);
                              const file = URL.createObjectURL(
                                e.target.files[0]
                              );
                              const currentImage = e.target.files[0];
                              if (
                                currentImage.type != 'image/jpg' &&
                                currentImage.type != 'image/jpeg' &&
                                currentImage.type != 'image/png'
                              )
                                setError(
                                  'only jpg,jpeg,png formats are allowed'
                                );
                              else {
                                if (currentImage.size > 2048000)
                                  setError('max image size limit is 2MB');
                                else {
                                  setUserProfile((prevState) => ({
                                    ...prevState,
                                    ['customer_profile_picture']: currentImage,
                                  }));
                                  setDisplayProfileImage(file);
                                }
                              }
                            }}
                          />
                          <FiUpload
                            className="text-center "
                            style={{ marginLeft: '50px' }}
                          />
                          <p id="ufd">Upload from device</p>
                        </label>
                      </Row>
                      <label className="mt-4">SubDomain Name</label>
                      <Input
                        type="text"
                        name="customer_subdomain_name"
                        value={userProfile.customer_subdomain_name}
                        onChange={handleUserProfileChange}
                        placeholder="Subdomain Name"
                      />
                    </Col>
                    <Col md={6} className="pr-4">
                      <label className="mt-4">Organization Name</label>
                      <Input
                        type="text"
                        placeholder="Organization Name"
                        name="customer_institute_name"
                        value={userProfile.customer_institute_name}
                        onChange={handleUserProfileChange}
                      />
                      <label className="mt-4">About me</label>
                      <Input
                        type="text"
                        name="customer_about_me"
                        onChange={handleUserProfileChange}
                        value={userProfile.customer_about_me}
                      />
                    </Col>
                  </Row>
                  <label className="mt-4 mx-1">Career Summary</label>
                  <Input
                    type="text"
                    className="mr-2"
                    name="customer_career_summary"
                    value={userProfile.customer_career_summary}
                    onChange={handleUserProfileChange}
                  />
                  <p className="mt-2">
                    <b>Note:</b>&nbsp;Please add ',' to separte skills.
                  </p>
                  <Row>
                    <Col md={6}>
                      <label>Role</label>
                      <Input type="text" value="Instructor" disabled />
                      <label className="mt-4">Occupation</label>
                      <Input
                        type="text"
                        placeholder="Occupation"
                        name="customer_occupation"
                        value={userProfile.customer_occupation}
                        onChange={handleUserProfileChange}
                      />
                      <label className="mt-4">Website</label>
                      <Input
                        type="text"
                        placeholder="example: www.xyz.com"
                        name="customer_website_url"
                        value={userProfile.customer_website_url}
                        onChange={handleUserProfileChange}
                      />
                    </Col>
                    <Col md={6}>
                      <label className="">LinkedIn</label>
                      <Input
                        type="text"
                        placeholder="Your LinkedIn Account URL"
                        name="customer_linkedin_url"
                        value={userProfile.customer_linkedin_url}
                        onChange={handleUserProfileChange}
                      />
                      <label className="mt-4">Facebook</label>
                      <Input
                        type="text"
                        placeholder="Your Facebook Account URL"
                        name="customer_facebook_url"
                        value={userProfile.customer_facebook_url}
                        onChange={handleUserProfileChange}
                      />
                      <label className="mt-4">Twitter</label>
                      <Input
                        type="text"
                        placeholder="Your Twitter Account URL"
                        name="customer_twitter_url"
                        value={userProfile.customer_twitter_url}
                        onChange={handleUserProfileChange}
                      />
                    </Col>
                  </Row>
                  <Row className="">
                    <Button
                      type="reset"
                      className="ml-auto mt-4 mr-2"
                      style={{ width: '100px', borderRadius: '0px' }}
                    >
                      Reset
                    </Button>{' '}
                    <Button
                      type="submit"
                      className="mr-auto mt-4 ml-2"
                      style={{ width: '100px', borderRadius: '0px' }}
                    >
                      Submit
                    </Button>
                  </Row>
                </Card>
              </div>
            </Form>
          </Row>
        </TabPane>
        <TabPane tabId="32">
          <Button
            onClick={toggle}
            className="mx-auto d-flex mb-4"
            style={{ borderRadius: '0px' }}
          >
            Invite User
          </Button>
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
          <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Modal title</ModalHeader>
            <Form>
              <ModalBody>
                <label>First Name</label>
                <Input
                  type="text"
                  placeholder="Example: John"
                  name="invited_user_first_name"
                  value={inviteUser.invited_user_first_name}
                  onChange={handleInviteUserChange}
                />
                <label>Last Name</label>
                <Input
                  type="text"
                  placeholder="Example: Doe"
                  name="invited_user_last_name"
                  value={inviteUser.invited_user_last_name}
                  onChange={handleInviteUserChange}
                />
                <label>Role</label>
                <Input
                  type="text"
                  placeholder="Example: Tutor"
                  name="invited_user_role"
                  value={inviteUser.invited_user_role}
                  onChange={handleInviteUserChange}
                />
                <label>Email</label>
                <Input
                  type="email"
                  placeholder="Example: johndoe@gmail.com"
                  name="invited_user_email"
                  value={inviteUser.invited_user_email}
                  onChange={handleInviteUserChange}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={handleInviteUserSubmit}>
                  Submit
                </Button>{' '}
                <Button color="secondary" onClick={toggle}>
                  Cancel
                </Button>
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
                    <Row>
                      <Col md={6} xs={12}>
                        <img
                          src={avatar}
                          className=" ml-auto"
                          style={{ width: '15%' }}
                        />
                        <label className="mr-auto ml-4">
                          <input
                            type="file"
                            accept=".jpg,.jpeg,.png"
                            onChange={(e) => {
                              const file = e.target.files[0];
                              const fileName = e.target.files[0].name;
                              const ext = fileName.slice(
                                fileName.lastIndexOf('.') + 1
                              );
                              console.log(ext);
                              if (
                                ext == 'jpeg' ||
                                ext == 'JPEG' ||
                                ext == 'jpg' ||
                                ext == 'JPG' ||
                                ext == 'png' ||
                                ext == 'PNG'
                              ) {
                                const list = [...inputList1];
                                list[i]['profile_picture'] = file;
                                setInputList1(list);
                              } else {
                                console.log('here', ext, ext == 'PNG');
                                setError(
                                  ' trainer pic only jpg,jpeg and png formats are allowed'
                                );
                              }
                            }}
                          />
                          <FiUpload
                            className="text-center "
                            style={{ marginLeft: '50px' }}
                          />
                          <p id="ufd">Upload from device</p>
                        </label>
                      </Col>
                      <Col md={6} xs={12}>
                        <label>Occupation</label>
                        <Input
                          type="text"
                          placeholder="Where are you working right now?"
                          value={x.occupation}
                          onChange={(e) => handleInputChange1(e, i)}
                        />
                      </Col>
                    </Row>
                    <Row className="mt-4">
                      <Col md={4} xs="12">
                        <label style={{ fontSize: '15px' }}>Full Name</label>
                        <Input
                          name="fullname"
                          placeholder="Enter Fullname"
                          value={x.fullname}
                          onChange={(e) => handleInputChange1(e, i)}
                        />
                      </Col>
                      <Col md={4} xs="12">
                        <label style={{ fontSize: '15px' }}>Phone</label>
                        <Input
                          className="ml10"
                          name="phone"
                          placeholder="Phone Number"
                          value={x.phone}
                          onChange={(e) => handleInputChange1(e, i)}
                        />
                      </Col>
                      <Col md={4} xs="12">
                        {/* fullname: "", phone: "",email: "",address: "",website: "",linkedin: "",twitter: "",facebook: "",instagram: "",career_summary: "" */}
                        <label style={{ fontSize: '15px' }}>Email</label>
                        <Input
                          className="ml10"
                          name="email"
                          placeholder="Email"
                          value={x.email}
                          onChange={(e) => handleInputChange1(e, i)}
                        />
                      </Col>
                    </Row>
                    <Row className="mt-4">
                      <Col md={4} xs="12">
                        <label style={{ fontSize: '15px' }}>Address</label>
                        <Input
                          className="ml10"
                          name="address"
                          placeholder="Address"
                          value={x.address}
                          onChange={(e) => handleInputChange1(e, i)}
                        />
                      </Col>
                      <Col md={4} xs="12">
                        <label style={{ fontSize: '15px' }}>Website</label>
                        <Input
                          className="ml10"
                          name="website"
                          placeholder="Website"
                          value={x.website}
                          onChange={(e) => handleInputChange1(e, i)}
                        />
                      </Col>
                      <Col md={4} xs="12">
                        <label style={{ fontSize: '15px' }}>LinkedIn</label>
                        <Input
                          className="ml10"
                          name="linkedin"
                          placeholder="Copy & paste linkedin profile URL"
                          value={x.linkedin}
                          onChange={(e) => handleInputChange1(e, i)}
                        />
                      </Col>
                    </Row>
                    <Row className="mt-4">
                      <Col md={4} xs="12">
                        <label style={{ fontSize: '15px' }}>Twitter</label>
                        <Input
                          className="ml10"
                          name="twitter"
                          placeholder="Copy & paste Twitter profile URL"
                          value={x.twitter}
                          onChange={(e) => handleInputChange1(e, i)}
                        />
                      </Col>
                      <Col md={4} xs="12">
                        <label style={{ fontSize: '15px' }}>Facebook</label>
                        <Input
                          className="ml10"
                          name="facebook"
                          placeholder="Copy & paste Facebook profile URL"
                          value={x.facebook}
                          onChange={(e) => handleInputChange1(e, i)}
                        />
                      </Col>
                      <Col md={4} xs="12">
                        <label style={{ fontSize: '15px' }}>Instagram</label>
                        <Input
                          className="ml10"
                          name="instagram"
                          placeholder="Copy & paste Instagram profile URL"
                          value={x.instagram}
                          onChange={(e) => handleInputChange1(e, i)}
                        />
                      </Col>
                    </Row>
                    <Row className="mt-4">
                      <Col md={6} xs={12}>
                        <label style={{ fontSize: '15px' }}>
                          Career Summary
                        </label>
                        <Input
                          type="textarea"
                          className="ml10"
                          name="career_summary"
                          placeholder="Please use ',' to separte your skills"
                          value={x.career_summary}
                          onChange={(e) => handleInputChange1(e, i)}
                        />
                      </Col>
                      <Col md={6} xs={12}>
                        <label style={{ fontSize: '15px' }}>Experience</label>
                        <Input
                          type="textarea"
                          className="ml10"
                          name="experience"
                          value={x.experience}
                          onChange={(e) => handleInputChange1(e, i)}
                        />
                      </Col>
                    </Row>
                    <div className="btn-box">
                      {inputList1.length !== 1 && (
                        <Button
                          className="mr-auto ml-auto d-flex mt-4"
                          color="danger"
                          style={{ borderRadius: '0px' }}
                          onClick={() => handleRemoveClick1(i)}
                        >
                          Remove
                        </Button>
                      )}
                    </div>
                  </CardBody>
                </Card>
                {inputList1.length - 1 === i && (
                  <Button
                    style={{ borderRadius: '0px' }}
                    className="mr-auto ml-auto d-flex"
                    onClick={handleAddClick1}
                  >
                    Add
                  </Button>
                )}
              </>
            );
          })}
          <Button onClick={handleTrainerSubmit}>Submit</Button>
        </TabPane>
        <TabPane tabId="34">
          <Card className="mx-auto" style={{ width: '50%' }}>
            <CardBody>
              <label>Full name</label>
              <Input
                type="text"
                placeholder="Full name"
                name="customer_payment_full_name"
                value={paymentDetails.customer_payment_full_name}
                onChange={handlePaymentDetailsChange}
              />
              <label className="mt-2">Bank name</label>
              <Input
                type="text"
                placeholder="Bank name"
                name="customer_payment_bank_name"
                value={paymentDetails.customer_payment_bank_name}
                onChange={handlePaymentDetailsChange}
              />
              <label className="mt-2">Account Number</label>
              <Input
                type="text"
                placeholder="Account Number"
                name="customer_payment_account_number"
                value={paymentDetails.customer_payment_account_number}
                onChange={handlePaymentDetailsChange}
              />
              <label className="mt-2">IFSC Code</label>
              <Input
                type="text"
                placeholder="IFSC Code"
                name="customer_payment_IFSC_code"
                value={paymentDetails.customer_payment_IFSC_code}
                onChange={handlePaymentDetailsChange}
              />
              <label className="mt-2">Bank Address</label>
              <Input
                type="text"
                placeholder="Bank Address"
                name="customer_payment_bank_address"
                value={paymentDetails.customer_payment_bank_address}
                onChange={handlePaymentDetailsChange}
              />
              <Button
                type="submit"
                style={{ borderRadius: '0px' }}
                className="mt-4 mx-auto d-flex"
                onClick={handlePaymentDetailsSubmit}
              >
                Submit
              </Button>
            </CardBody>
          </Card>
        </TabPane>
        <TabPane tabId="35">Hi, i am manage subscription</TabPane>
        <TabPane tabId="36">
          <label>Zoom JWT Token</label>
          <Input style={{ width: '30%' }} />
          <Button className="mt-4">Submit</Button>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </TabPane>
      </TabContent>
      <br />
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
};

export default Themepage;
