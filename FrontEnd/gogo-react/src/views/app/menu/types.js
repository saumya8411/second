import React ,{useState} from 'react';
import { connect } from 'react-redux';
import { useTable, usePagination, useSortBy } from 'react-table';
import { Row, Button ,NavItem,Nav,TabContent,TabPane,NavLink,Table,CardTitle,CardBody,Card,Badge,Col,CardText } from 'reactstrap';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import classnames from 'classnames';
import { setContainerClassnames } from '../../../redux/actions';
import IntlMessages from '../../../helpers/IntlMessages';
import products from '../../../data/products';
import DatatablePagination from '../../../components/DatatablePagination';
import my_table from '../../../data/my_table';
import { FaUsers } from 'react-icons/fa';
import { ImBooks } from 'react-icons/im';
import { BiBroadcast } from 'react-icons/bi';
import { MdLocalLibrary } from 'react-icons/md';
import './style.css'
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
      cellClass: 'text-muted w-10',
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
      cellClass: 'text-muted w-5',
      Cell: (props) => <>{props.value}</>,
      sortType: 'basic',
    },
    {
      Header: 'Revenue',
      accessor: 'sb',
      cellClass: 'text-muted w-10',
      Cell: (props) => <>{props.value}</>,
      sortType: 'basic',
    },
    {
      Header: 'Library consumed',
      accessor: 're',
      cellClass: 'text-muted w-20',
      Cell: (props) => <>{props.value}</>,
      sortType: 'basic',
    },
    {
      Header: 'Bandwidth consumed',
      accessor: 'NOC',
      cellClass: 'text-muted w-20',
      Cell: (props) => <>{props.value}</>,
      sortType: 'basic',
    },
  
  ]

  const cols = [
      {
        Header: 'Name',
        accessor: 'title',
        cellClass: 'text-muted w-10',
        Cell: (props) => <>{props.value}</>,
        sortType: 'basic',
      },
      {
        Header: 'Status',
        accessor: 'status',
        cellClass: 'color',
        Cell: (props) => <>{props.value}</>,
        sortType: 'basic',
      },
      {
        Header: 'Fee Paid',
        accessor: 'fee',
        cellClass: 'text-muted w-9',
        Cell: (props) => <>{props.value}</>,
        sortType: 'basic',
      },
      {
        Header: 'Refareals',
        accessor: 'sb',
        cellClass: 'text-muted w-10',
        Cell: (props) => <>{props.value}</>,
        sortType: 'basic',
      },
      {
        Header: 'Reward Earned',
        accessor: 're',
        cellClass: 'text-muted w-20',
        Cell: (props) => <>{props.value}</>,
        sortType: 'basic',
      },
      {
        Header: 'Number of courses',
        accessor: 'NOC',
        cellClass: 'text-muted w-20',
        Cell: (props) => <>{props.value}</>,
        sortType: 'basic',
      },
      {
        Header: 'phone number',
        accessor: 'ph',
        cellClass: 'text-muted w-25',
        Cell: (props) => <>{props.value}</>,
        sortType: 'basic',
      },
      {
        Header: 'Email',
        accessor: 'email',
        cellClass: 'text-muted w-25',
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
          <h1 style={{fontSize:"1.5rem"}}>Stats</h1>

          <Separator className="mb-5" />
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
                   <h6>General</h6>
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
                </Nav>
                <div className="mb-4">

                <TabContent activeTab={activeFirstTab}>
<TabPane tabId="1">
<Card className="h-100">
      <CardBody>

        <Table columns={cols} data={my_table} /> 
      </CardBody>
    </Card>
</TabPane>
<TabPane tabId="2">
    <Row>
      <Col sm="3">
        <Card body id="crd" className="text-center" style={{backgroundColor:"#ec407a"}}>
          <Row>
          <Col md="6">
          <FaUsers id="myicon" className="text-light"/>
          </Col>
          <Col md="6">
            <CardText className="font-weight-bold head text-light">13</CardText>
            <CardText className="font-weight-bold para text-light">Students</CardText>
          </Col>
          </Row>
        </Card>
      </Col>
      <Col sm="3">
        <Card body id="crd" className="text-center" style={{backgroundColor:"#ab47bc"}}>
          <Row>
        <Col md="6">
          <ImBooks id="myicon" className="text-light"/>
        </Col>
        <Col md="6">
        <CardText className="font-weight-bold head text-light">23</CardText>
            <CardText className="font-weight-bold para text-light">Courses</CardText>
        </Col>
        </Row>
        </Card>
      </Col>
      <Col sm="3">
        <Card body id="crd" className="text-center" style={{backgroundColor:"#64b5f6"}}>
        <Row>
        <Col md="6">
        <BiBroadcast id="myicon" className="text-light"/>
        </Col>
        <Col md="6">
        <CardText className="font-weight-bold head text-light">12</CardText>
            <CardText className="font-weight-bold para text-light">Live Lectures</CardText>
        </Col>
        </Row>
        </Card>
      </Col>
      <Col sm="3">
        <Card body id="crd" className="text-center" style={{backgroundColor:"#4db6ac"}}>
        <Row>
        <Col md="6">
          <MdLocalLibrary id="myicon" className="text-light"/>
          </Col>
          <Col md="6">
          <CardText className="font-weight-bold head text-light">60</CardText>
            <CardText className="font-weight-bold para text-light">Library Items</CardText>
          </Col>
          </Row>
        </Card>
      </Col>
    </Row>
    <Card className="h-100 mt-4 ">
      <CardBody>
        <Table columns={cols2} data={my_table_courses} /> 
      </CardBody>
    </Card>
</TabPane>
<TabPane tabId="3">
  recordings
</TabPane>
<TabPane tabId="4">
  assignment
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
