// import React, { useState } from 'react';
// import {
//   Row,
//   Card,
//   CardBody,
//   Button,
//   NavItem,
//   Nav,
//   TabContent,
//   TabPane,
//   FormGroup,
//   Input,
// } from 'reactstrap';
// import { useTable, usePagination, useSortBy } from 'react-table';
// import classnames from 'classnames';
// import products from '../data/products';
// import { Colxx } from '../components/common/CustomBootstrap';
// import PopoverItem from '../components/common/PopoverItem';
// import { NavLink } from 'react-router-dom';
// import './Customcss.css';
// import DatatablePagination from '../components/DatatablePagination';
// import Table from './Library/Table';

// const data = [
//   {
//     name: 'quiz-1',
//     size: '---',
//     type: 'Quiz',
//     uploaded: '28-10-2020',
//   },
//   {
//     name: 'Notes-1',
//     size: '20Mb',
//     type: 'Handouts',
//     uploaded: '28-10-2020',
//   },
//   {
//     name: 'Notes-2',
//     size: '30Mb',
//     type: 'Handouts',
//     uploaded: '28-10-2020',
//   },
//   {
//     name: 'Introduction to Arduino IDE',
//     size: '300Mb',
//     type: 'Video',
//     uploaded: '27-10-2020',
//   },
//   {
//     name: 'Projects on Arduino IDE',
//     size: '30Mb',
//     type: 'Zip',
//     uploaded: '27-10-2020',
//   },
// ];

// // function Table({ columns, data, divided = false, defaultPageSize = 6 }) {
// //   const {
// //     getTableProps,
// //     getTableBodyProps,
// //     prepareRow,
// //     headerGroups,
// //     page,
// //     canPreviousPage,
// //     canNextPage,
// //     pageCount,
// //     gotoPage,
// //     setPageSize,
// //     state: { pageIndex, pageSize },
// //   } = useTable(
// //     {
// //       columns,
// //       data,
// //       initialState: { pageIndex: 0, pageSize: defaultPageSize },
// //     },
// //     useSortBy,
// //     usePagination
// //   );

// //   return (
// //     <>
// //       <table
// //         style={{ maxWidth: '1100px', margin: '0 auto' }}
// //         {...getTableProps()}
// //         className={`r-table table ${classnames({ 'table-divided': divided })}`}
// //       >
// //         {/* <thead>
// //           {headerGroups.map((headerGroup) => (
// //             <tr {...headerGroup.getHeaderGroupProps()}>
// //               {headerGroup.headers.map((column, columnIndex) => (
// //                 <th
// //                   key={`th_${columnIndex}`}

// //                   {...column.getHeaderProps(column.getSortByToggleProps())}
// //                   className={(
// //                     column.isSorted
// //                       ? column.isSortedDesc
// //                         ? 'sorted-desc'
// //                         : 'sorted-asc'
// //                       : '') + columnIndex===3?'text-right':'text-left'
// //                   }
// //                 >

// //                   {column.render('Header')}
// //                   {column.isSorted ? (column.isSortedDesc ? '' : '') : ''}
// //                   <span />
// //                 </th>
// //               ))}
// //             </tr>
// //           ))}
// //         </thead> */}

// //         <tbody {...getTableBodyProps()}>
// //           {page.map((row) => {
// //             prepareRow(row);
// //             return (
// //               <tr {...row.getRowProps()}>
// //                 {row.cells.map((cell, cellIndex) => (
// //                   <td
// //                     style={{ fontSize: '1.3rem' }}
// //                     key={`td_${cellIndex}`}
// //                     {...cell.getCellProps({
// //                       className: cell.column.cellClass,
// //                     })}
// //                   >
// //                     {cell.render('Cell')}
// //                   </td>
// //                 ))}
// //                 <td>
// //                   <PopoverItem id={`1${row.id}`} />
// //                 </td>
// //               </tr>
// //             );
// //           })}
// //         </tbody>
// //       </table>

// //       {/* <DatatablePagination
// //         page={pageIndex}
// //         pages={pageCount}
// //         canPrevious={canPreviousPage}
// //         canNext={canNextPage}
// //         pageSizeOptions={[4, 10, 20, 30, 40, 50]}
// //         showPageSizeOptions={false}
// //         showPageJump={false}
// //         defaultPageSize={pageSize}
// //         onPageChange={(p) => gotoPage(p)}
// //         onPageSizeChange={(s) => setPageSize(s)}
// //         paginationMaxSize={pageCount}
// //       /> */}
// //     </>
// //   );
// // }

// export const Library = () => {
//   const cols = React.useMemo(
//     () => [
//       {
//         Header: 'Name',
//         accessor: 'name',
//         cellClass: 'list-item-heading w-40 n',
//         Cell: (props) => <p>{props.value}</p>,
//       },
//       {
//         Header: 'Uploaded At',
//         accessor: 'uploaded',
//         cellClass: 'text-muted  w-20 n',
//         Cell: (props) => <p>{props.value}</p>,
//       },
//       {
//         Header: 'Type',
//         accessor: 'type',
//         cellClass: 'text-muted  w-20 n',
//         Cell: (props) => <p>{props.value}</p>,
//       },
//       {
//         Header: 'Size',
//         accessor: 'size',
//         cellClass: 'text-muted  w-20 n',
//         Cell: (props) => <p>{props.value}</p>,
//       },
//     ],
//     []
//   );
//   const [activeFirstTab, setActiveFirstTab] = useState('1');
//   //backend team find a way to sort or filter data via this feature and show in tabs
//   return (
//     <>
//       <br />
//       {/* <Row>
//         <Colxx xxs="12">

//         </Colxx>
//       </Row> */}
//       <Nav tabs className="card-header-tabs mb-3">
//         <NavItem>
//           <NavLink
//             to="#"
//             location={{}}
//             className={classnames({
//               active: activeFirstTab === '1',
//               'nav-link': true,
//             })}
//             onClick={() => {
//               setActiveFirstTab('1');
//             }}
//           >
//             <h6>All</h6>
//           </NavLink>
//         </NavItem>
//         <NavItem>
//           <NavLink
//             to="#"
//             location={{}}
//             className={classnames({
//               active: activeFirstTab === '2',
//               'nav-link': true,
//             })}
//             onClick={() => {
//               setActiveFirstTab('2');
//             }}
//           >
//             <h6>Video</h6>
//           </NavLink>
//         </NavItem>
//         <NavItem>
//           <NavLink
//             to="#"
//             location={{}}
//             className={classnames({
//               active: activeFirstTab === '3',
//               'nav-link': true,
//             })}
//             onClick={() => {
//               setActiveFirstTab('3');
//             }}
//           >
//             <h6>Recordings</h6>
//           </NavLink>
//         </NavItem>
//         <NavItem>
//           <NavLink
//             to="#"
//             location={{}}
//             className={classnames({
//               active: activeFirstTab === '4',
//               'nav-link': true,
//             })}
//             onClick={() => {
//               setActiveFirstTab('4');
//             }}
//           >
//             <h6>Assignment</h6>
//           </NavLink>
//         </NavItem>
//         <NavItem>
//           <NavLink
//             to="#"
//             location={{}}
//             className={classnames({
//               active: activeFirstTab === '5',
//               'nav-link': true,
//             })}
//             onClick={() => {
//               setActiveFirstTab('5');
//             }}
//           >
//             <h6>Quiz</h6>
//           </NavLink>
//         </NavItem>
//         {/* <FormGroup className="mb-4 ml-auto d-flex float-right" id="search">
//                     <Input type="email" className="d-flex" id="exampleEmail" placeholder="Search anything" />
//                     <Button id="searchbutton" className="d-flex ml-2">Search</Button>
//                   </FormGroup> */}
//       </Nav>
//       <div className="mb-4">
//         <TabContent activeTab={activeFirstTab}>
//           <TabPane tabId="1">
//             <Table columns={cols} data={data} divided />
//           </TabPane>
//           <TabPane tabId="2">
//             <Table
//               columns={cols}
//               data={data}
//               divided
//               style={{ fontSize: '16px' }}
//             />
//           </TabPane>
//           <TabPane tabId="3">
//             <Table columns={cols} data={data} divided />
//           </TabPane>
//           <TabPane tabId="4">
//             <Table columns={cols} data={data} divided />
//           </TabPane>
//           <TabPane tabId="5">
//             <Table columns={cols} data={data} divided />
//           </TabPane>
//         </TabContent>
//       </div>
//     </>
//   );
// };

// export default Library;

import React from 'react';
import LibraryIndex from './Library';
const Library = () => {
  return <LibraryIndex />;
};
export default Library;
