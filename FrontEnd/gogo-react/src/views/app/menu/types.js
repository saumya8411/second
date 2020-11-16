import React ,{useState} from 'react';
import { connect } from 'react-redux';
import { useTable, usePagination, useSortBy } from 'react-table';
import { Row, Button ,NavItem,Nav,TabContent,TabPane,NavLink,Table,CardTitle,CardBody,Card,Badge,Col,CardText,UncontrolledDropdown,Label,FormGroup,Input,
  DropdownItem,
  DropdownToggle,
  DropdownMenu, } from 'reactstrap';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import classnames from 'classnames';
import { setContainerClassnames } from '../../../redux/actions';
import IntlMessages from '../../../helpers/IntlMessages';
import products from '../../../data/products';
import DatatablePagination from '../../../components/DatatablePagination';
import my_table from '../../../data/my_table';
import { FaUsers } from 'react-icons/fa';
import { FaFilter } from 'react-icons/fa';
import { LineChart } from '../../../components/charts';
import { lineChartData } from '../../../data/charts';
import { ImBooks } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';
import { FaBookOpen } from 'react-icons/fa';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import { AiFillBank } from 'react-icons/ai';
import { FaHandHoldingUsd } from 'react-icons/fa';
import Communication_table from '../../../data/Communication_table'
import Monitization_table from '../../../data/Monitization_table'
import { BiBroadcast } from 'react-icons/bi';
import { BiMessageRoundedDots } from 'react-icons/bi';
import { BiTime } from 'react-icons/bi';
import { RiMailSendFill } from 'react-icons/ri';
import { MdLocalLibrary } from 'react-icons/md';
import './style.css'
import { Scrollbars } from 'react-custom-scrollbars';
import my_table_courses from '../../../data/my_table_courses';

const MenuTypes = ({
  match,
  subHiddenBreakpoint,
  menuHiddenBreakpoint,
  selectedMenuHasSubItems,
  setContainerClassnamesAction,
}) => {
  const getMenuClassesForResize = (classes) => {
    let nextClasses = classes.split(' ').filter((x) => x !== '');
    const windowWidth = window.innerWidth;
    if (windowWidth < menuHiddenBreakpoint) {
      nextClasses.push('menu-mobile');
    } else if (windowWidth < subHiddenBreakpoint) {
      nextClasses = nextClasses.filter((x) => x !== 'menu-mobile');
      if (
        nextClasses.includes('menu-default') &&
        !nextClasses.includes('menu-sub-hidden')
      ) {
        nextClasses.push('menu-sub-hidden');
      }
    } else {
      nextClasses = nextClasses.filter((x) => x !== 'menu-mobile');
      if (
        nextClasses.includes('menu-default') &&
        nextClasses.includes('menu-sub-hidden')
      ) {
        nextClasses = nextClasses.filter((x) => x !== 'menu-sub-hidden');
      }
    }
    return nextClasses;
  };

  const changeDefaultMenuType = (e, classes) => {
    e.preventDefault();
    const nextClasses = getMenuClassesForResize(classes);

    setContainerClassnamesAction(
      0,
      nextClasses.join(' '),
      selectedMenuHasSubItems
    );
  };
  const name = ['Peter', 'Bruce', 'Kent', 'Tony', 'Joker']
  const cols2 = [
    {
      Header: 'Course',
      accessor: 'title',
      cellClass: 'text-muted w-25',
      Cell: (props) => <>{props.value}</>,
      sortType: 'basic',
    },
    {
      Header: 'Registrations',
      accessor: 'status',
      cellClass: 'color',
      Cell: (props) => <>{props.value}</>,
      sortType: 'basic',
    },
    {
      Header: 'Enrolled',
      accessor: 'fee',
      cellClass: 'text-muted w-25',
      Cell: (props) => <>{props.value}</>,
      sortType: 'basic',
    },
    {
      Header: 'Revenue',
      accessor: 'sb',
      cellClass: 'text-muted w-20',
      Cell: (props) => <>{props.value}</>,
      sortType: 'basic',
    },
    {
      Header: 'Library space consumed',
      accessor: 're',
      cellClass: 'text-muted w-30',
      Cell: (props) => <>{props.value}</>,
      sortType: 'basic',
    },
    {
      Header: 'Bandwidth',
      accessor: 'NOC',
      cellClass: 'text-muted w-25',
      Cell: (props) => <>{props.value}</>,
      sortType: 'basic',
    },
  
  ]

  const cols3 = [
    {
      Header: 'Send to',
      accessor: 'Send_to',
      cellClass: 'text-muted',
      Cell: (props) => <>{props.value}</>,
      sortType: 'basic',
    },
    {
      Header: 'Date',
      accessor: 'date',
      cellClass: 'color',
      Cell: (props) => <>{props.value}</>,
      sortType: 'basic',
    },
    {
      Header: 'Time',
      accessor: 'time',
      cellClass: 'text-muted ',
      Cell: (props) => <>{props.value}</>,
      sortType: 'basic',
    },
    {
      Header: 'message_id',
      accessor: 'message_id',
      cellClass: 'text-muted',
      Cell: (props) => <>{props.value}</>,
      sortType: 'basic',
    },
    {
      Header: 'Opened',
      accessor: 'opened',
      cellClass: 'text-muted',
      Cell: (props) => <>{props.value}</>,
      sortType: 'basic',
    },
  ]
  const cols4 = [
    {
      Header: 'Payment ID',
      accessor: 'payment_id',
      cellClass: 'text-muted',
      Cell: (props) => <>{props.value}</>,
      sortType: 'basic',
    },
    {
      Header: 'Razor Pay ID',
      accessor: 'razor_pay_id',
      cellClass: 'color',
      Cell: (props) => <>{props.value}</>,
      sortType: 'basic',
    },
    {
      Header: 'Order ID',
      accessor: 'order_id',
      cellClass: 'text-muted ',
      Cell: (props) => <>{props.value}</>,
      sortType: 'basic',
    },
    {
      Header: 'Amount',
      accessor: 'amount',
      cellClass: 'text-muted',
      Cell: (props) => <>{props.value}</>,
      sortType: 'basic',
    },
    {
      Header: 'Email',
      accessor: 'email',
      cellClass: 'text-muted',
      Cell: (props) => <>{props.value}</>,
      sortType: 'basic',
    },
    {
      Header: 'Contact',
      accessor: 'contact',
      cellClass: 'text-muted',
      Cell: (props) => <>{props.value}</>,
      sortType: 'basic',
    },
    {
      Header: 'Date',
      accessor: 'date',
      cellClass: 'text-muted',
      Cell: (props) => <>{props.value}</>,
      sortType: 'basic',
    },    {
      Header: 'Time',
      accessor: 'time',
      cellClass: 'text-muted',
      Cell: (props) => <>{props.value}</>,
      sortType: 'basic',
    },
    {
      Header: 'Status',
      accessor: 'status',
      cellClass: 'text-muted',
      Cell: (props) => <>{props.value}</>,
      sortType: 'basic',
    },
  ]


  const cols = [
      {
        Header: 'Name',
        accessor: 'title',
        cellClass: 'text-muted w-15',
        Cell: (props) => <>{props.value}</>,
        sortType: 'basic',
      },
      {
        Header: 'Contact No.',
        accessor: 'ph',
        cellClass: 'text-muted ',
        Cell: (props) => <>{props.value}</>,
        sortType: 'basic',
      },
      {
        Header: 'Email',
        accessor: 'email',
        cellClass: 'text-muted w-15',
        Cell: (props) => <>{props.value}</>,
        sortType: 'basic',
      },
      {
        Header: 'Total Courses',
        accessor: 'NOC',
        cellClass: 'text-muted w-20 ',
        Cell: (props) => <>{props.value}</>,
        sortType: 'basic',
      },
      {
        Header: 'Fee Paid',
        accessor: 'fee',
        cellClass: 'text-muted w-15',
        Cell: (props) => <>{props.value}</>,
        sortType: 'basic',
      },
      {
        Header: 'Refareals',
        accessor: 'sb',
        cellClass: 'text-muted w-15',
        Cell: (props) => <>{props.value}</>,
        sortType: 'basic',
      },
      {
        Header: 'Reward Earned',
        accessor: 're',
        cellClass: 'text-muted w-30',
        Cell: (props) => <>{props.value}</>,
        sortType: 'basic',
      },
      {
        Header: 'Status',
        accessor: 'status',
        cellClass: 'color w-10',
        Cell: (props) => <>{props.value}</>,
        sortType: 'basic',
      },
    ]
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
  const [activeFirstTab, setActiveFirstTab] = useState('1');
  return (
    <>
        
      <Row>
        <Colxx xxs="12">

        </Colxx>
      </Row>
{/*       <Row>
        <Colxx xxs="12" className="mb-4">
          <Button
            outline
            color="primary"
            className="mb-2"
            onClick={(e) => changeDefaultMenuType(e, 'menu-default')}
          >
            <IntlMessages id="menu.default" />
          </Button>{' '}
          <Button
            outline
            color="primary"
            className="mb-2"
            onClick={(e) => changeDefaultMenuType(e, 'menu-sub-hidden')}
          >
            <IntlMessages id="menu.subhidden" />
          </Button>{' '}
          <Button
            outline
            color="primary"
            className="mb-2"
            onClick={(e) => changeDefaultMenuType(e, 'menu-hidden')}
          >
            <IntlMessages id="menu.hidden" />
          </Button>
        </Colxx>
      </Row> */}
       <Nav tabs className="card-header-tabs mb-3">
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
                   <h6>Students</h6>
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
                      <h6>Courses</h6>
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
                 <h6>Communication</h6>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      to="#"
                      location={{}}
                      className={classnames({
                        active: activeFirstTab === '4',
                        'nav-link': true,
                      })}
                      onClick={() => {
                        setActiveFirstTab('4');
                      }}
                    >
                   <h6>Monetization</h6>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      to="#"
                      location={{}}
                      className={classnames({
                        active: activeFirstTab === '5',
                        'nav-link': true,
                      })}
                      onClick={() => {
                        setActiveFirstTab('5');
                      }}
                    >
                   <h6>Affiliate</h6>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      to="#"
                      location={{}}
                      className={classnames({
                        active: activeFirstTab === '6',
                        'nav-link': true,
                      })}
                      onClick={() => {
                        setActiveFirstTab('6');
                      }}
                    >
                   <h6>Blogs</h6>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      to="#"
                      location={{}}
                      className={classnames({
                        active: activeFirstTab === '7',
                        'nav-link': true,
                      })}
                      onClick={() => {
                        setActiveFirstTab('6');
                      }}
                    >
                   <h6>Link Tracking</h6>
                    </NavLink>
                  </NavItem>
                  <FormGroup className="mb-4 d-flex float-right ml-auto" id="search">
                    <Input type="email" className="d-flex" id="exampleEmail" placeholder="Search anything" />
                    <Button id="searchbutton" className="d-flex ml-2">Search</Button>
                  </FormGroup>
                </Nav>
                <div className="mb-4">

                <TabContent activeTab={activeFirstTab}>
<TabPane tabId="1">
<Card className="h-120 ">
<Scrollbars style={{ width: '100%', height: 400 }}>
      <CardBody>

        <Table columns={cols} data={my_table} /> 
      </CardBody>
      </Scrollbars>
    </Card>
    <br/>
</TabPane>
<TabPane tabId="2">
    <Row>
      <Col sm="3" xs="12" className="mb-3">
        <Card body id="crd" className="text-center" style={{backgroundColor:"#F4A261"}}>
          <Row>
          <Col md="6" xs="6">
          <FaUsers id="myicon" className="text-light"/>
          </Col>
          <Col md="6" xs="6">
            <CardText className="font-weight-bold head text-light">13</CardText>
            <CardText className="font-weight-bold para text-light">Total Students Enrolled</CardText>
          </Col>
          </Row>
        </Card>
      </Col>
      <Col sm="3" xs="12" className="mb-3">
        <Card body id="crd" className="text-center" style={{backgroundColor:"#ab47bc"}}>
          <Row>
        <Col md="6" xs="6">
          <ImBooks id="myicon" className="text-light"/>
        </Col>
        <Col md="6" xs="6">
        <CardText className="font-weight-bold head text-light">23</CardText>
            <CardText className="font-weight-bold para text-light">Total Courses Created</CardText>
        </Col>
        </Row>
        </Card>
      </Col>
      <Col sm="3" xs="12" className="mb-3">
        <Card body id="crd" className="text-center" style={{backgroundColor:"#E9C46A"}}>
        <Row>
        <Col md="6" xs="6">
        <BiBroadcast id="myicon" className="text-light"/>
        </Col>
        <Col md="6" xs="6">
        <CardText className="font-weight-bold head text-light">12</CardText>
            <CardText className="font-weight-bold para text-light">Total Live Lectures</CardText>
        </Col>
        </Row>
        </Card>
      </Col>
      <Col sm="3" xs="12" className="mb-3">
        <Card body id="crd" className="text-center" style={{backgroundColor:"#457B9D"}}>
        
        <Row>
          <Col md="6" xs="6">
            <MdLocalLibrary id="myicon" className="text-light"/>
          </Col>
          <Col md="6" xs="6">
          <CardText className="font-weight-bold head text-light">60</CardText>
            <CardText className="font-weight-bold para text-light">Total Library Items</CardText>
          </Col>
          </Row>
          
        </Card>
      </Col>
    </Row>
    <Row>
      <Col md="12" xs="12">
    <Card className="h-100  ">
    <Scrollbars style={{ width: '100%', height: 400 }}>
      <CardBody>
        <Table columns={cols2} data={my_table_courses} /> 
      </CardBody>
      </Scrollbars>
    </Card>
    </Col>
    </Row>
</TabPane>
<TabPane tabId="3">
<Row>
      <Col sm="3" xs="12" className="mb-3">
        <Card body id="crd" className="text-center" style={{backgroundColor:"#ec407a"}}>
          <Row>
          <Col md="6" xs="6">
          <MdEmail id="myicon" className="text-light"/>
          </Col>
          <Col md="6" xs="6">
            <CardText className="font-weight-bold head text-light">76</CardText>
            <CardText className="font-weight-bold para text-light">Total Email Send</CardText>
          </Col>
          </Row>
        </Card>
      </Col>
      <Col sm="3" xs="12" className="mb-3">
        <Card body id="crd" className="text-center" style={{backgroundColor:"#ab47bc"}}>
          <Row>
        <Col md="6" xs="6">
          <RiMailSendFill id="myicon" className="text-light"/>
        </Col>
        <Col md="6" xs="6"> 
        <CardText className="font-weight-bold head text-light">43</CardText>
            <CardText className="font-weight-bold para text-light">Total Text Message Send</CardText>
        </Col>
        </Row>
        </Card>
      </Col>
      <Col sm="3" xs="12" className="mb-3">
        <Card body id="crd" className="text-center" style={{backgroundColor:"#64b5f6"}}>
        <Row>
        <Col md="6" xs="6">
        <BiMessageRoundedDots id="myicon" className="text-light"/>
        </Col>
        <Col md="6" xs="6" className="mb-3">
        <CardText className="font-weight-bold head text-light">33</CardText>
          <CardText className="font-weight-bold para text-light">Total Whattsapp Message Send</CardText>
        </Col>
        </Row>
        </Card>
      </Col>
      <Col sm="3" xs="12" className="mb-3">
        <Card body id="crd" className="text-center" style={{backgroundColor:"#4db6ac"}}>
        <Row>
        <Col md="6" xs="6">
          <BiTime id="myicon" className="text-light"/>
          </Col>
          <Col md="6" xs="6" className="mb-3">
          <CardText className="font-weight-bold head text-light">60</CardText>
            <CardText className="font-weight-bold para text-light">Total Spendings</CardText>
          </Col>
          </Row>
        </Card>
      </Col>
    </Row>
    <Scrollbars style={{ width: '100%', height: 500 }}>
    <Card className="mt-4 line" md='12' id="l1" >
    <CardTitle>
      <Row className="ml-4 mt-4">
      
      <div className="thecard">
        <span id="dott"></span><small className="ml-2">Text Messages</small> 
        <span id="dott2"></span><small id="no" className="ml-2" >Whattsapp</small>
        <span id="dott3"></span> <small id="no">Spendings</small>
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
      <CardBody  >

      
        <div className="dashboard-line-chart">
          <LineChart shadow data={lineChartData} />
        </div>
      </CardBody>
      
    </Card></Scrollbars>
    <Row>
      <Col md="12" xs="12">
    <Card className="h-100  ">
    <Scrollbars style={{ width: '100%', height: 400 }}>
      <CardBody>
        <Table columns={cols3} data={Communication_table} /> 
      </CardBody>
      </Scrollbars>
    </Card>
    </Col>
    </Row>
</TabPane>
<TabPane tabId="4">
<Row>
      <Col sm="3" xs="12" className="mb-3">
        <Card body id="crd" className="text-center" style={{backgroundColor:"#FFBF69"}}>
          <Row>
          <Col md="6" xs="6">
          <FaBookOpen id="myicon" className="text-light"/>
          </Col>
          <Col md="6" xs="6">
            <CardText className="font-weight-bold head text-light">42</CardText>
            <CardText className="font-weight-bold para text-light">Total Courses Created</CardText>
          </Col>
          </Row>
        </Card>
      </Col>
      <Col sm="3" xs="12" className="mb-3">
        <Card body id="crd" className="text-center" style={{backgroundColor:"#E76F51"}}>
          <Row>
        <Col md="6" xs="6">
          <FaHandHoldingUsd id="myicon" className="text-light"/>
        </Col>
        <Col md="6" xs="6"> 
        <CardText className="font-weight-bold head text-light">22</CardText>
            <CardText className="font-weight-bold para text-light">Total Rewards Given</CardText>
        </Col>
        </Row>
        </Card>
      </Col>
      <Col sm="3" xs="12" className="mb-3">
        <Card body id="crd" className="text-center" style={{backgroundColor:"#457B9D"}}>
        <Row>
        <Col md="6" xs="6">
        <RiMoneyDollarCircleFill id="myicon" className="text-light"/>
        </Col>
        <Col md="6" xs="6" className="mb-3">
        <CardText className="font-weight-bold head text-light">31</CardText>
          <CardText className="font-weight-bold para text-light">Number of payments</CardText>
        </Col>
        </Row>
        </Card>
      </Col>
      <Col sm="3" xs="12" className="mb-3">
        <Card body id="crd" className="text-center" style={{backgroundColor:"#4db6ac"}}>
        <Row>
        <Col md="6" xs="6">
          <AiFillBank id="myicon" className="text-light"/>
          </Col>
          <Col md="6" xs="6" className="mb-3">
          <CardText className="font-weight-bold head text-light">60</CardText>
            <CardText className="font-weight-bold para text-light">Payment volume</CardText>
          </Col>
          </Row>
        </Card>
      </Col>
    </Row>
    <Scrollbars style={{ width: '100%', height: 500 }}>
    <Card className=" line" md='12' id="l1">
    <CardTitle>
      <Row className="ml-4 mt-4">
      
      <div className="thecard">
        <span id="dott"></span><small className="ml-2">Earning</small> 
        <span id="dott2"></span><small id="no" className="ml-2" >Courses</small>
        <span id="dott3"></span> <small id="no">Rewards</small>
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

        <CardTitle>
        </CardTitle>
        <div className="dashboard-line-chart">
          <LineChart shadow data={lineChartData} />
        </div>
      </CardBody>
    </Card>
    </Scrollbars>
    <Row>
      <Col md="12" xs="12">
    <Card className="h-120  ">
    <Scrollbars style={{ width: '100%', height: 400 }}>
      <CardBody style={{width:'120%'}}>
        <Table columns={cols4} data={Monitization_table} /> 
      </CardBody>
      </Scrollbars>
    </Card>
    </Col>
    </Row>
</TabPane>
<TabPane tabId="5">
  quiz
</TabPane>
<TabPane tabId="6">
  doubts
</TabPane>
</TabContent>

  </div>
    </>
  );
};
const mapStateToProps = ({ menu }) => {
  const {
    containerClassnames,
    subHiddenBreakpoint,
    menuHiddenBreakpoint,
    menuClickCount,
    selectedMenuHasSubItems,
  } = menu;
  return {
    containerClassnames,
    subHiddenBreakpoint,
    menuHiddenBreakpoint,
    menuClickCount,
    selectedMenuHasSubItems,
  };
};

export default connect(mapStateToProps, {
  setContainerClassnamesAction: setContainerClassnames,
})(MenuTypes);
