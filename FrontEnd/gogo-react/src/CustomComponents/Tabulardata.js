
import React,{useState} from 'react';
import { Card, CardBody, CardTitle,Button } from 'reactstrap';
import { useTable, usePagination, useSortBy } from 'react-table';
import classnames from 'classnames';
import products from '../data/products';
import DatatablePagination from '../components/DatatablePagination';
import CreateSession from './CreateSessions';
import Library from './Library';
import './Customcss.css'
import PopoverItem from '../components/common/PopoverItem';
import { Link } from 'react-router-dom';
import { adminRoot } from '../constants/defaultValues';
import Counter from './useCounter'
import useCounter from './useCounter';

function Table({ columns, data, divided = false, defaultPageSize = data.length }) {
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
        initialState: { pageIndex: 0, pageSize: defaultPageSize },
      },
      useSortBy,
      usePagination
    );
    const [name, setName] = useState("Launch")
    const change = (text) => setName(text);
  // console.log(getTableBodyProps,"gettable------body----props")
  // console.log(getTableProps,"gettable------props")
  // console.log(prepareRow,"prepare------row")
  // console.log(page,"----------------page")
  const clickHandlerTable = (props) =>{
    console.log(props)
  }
  //const [name , ChangeName] = useCounter()
  const info = {
    name : 'Launched'
  }
    return (
      <>
        <table
        style={{margin:'0 auto'}}
          {...getTableProps()}
          className={`r-table table ${classnames({ 'table-divided': divided })}`}
        >
          {/* <thead>
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
                    {column.isSorted
                        ? column.isSortedDesc
                    ?'':''
                    :''
                    }
                    <span />
                  </th>
                ))}
              </tr>
            ))}
          </thead>
   */}
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

{cellIndex===0?(
  <Link to={{
  pathname: row.original.type==="Recorded"?`${adminRoot}/recordedsession`:`${adminRoot}/livesession`,
  state: {
  uniquesessionid:row.original.id 
  }
}}
>{cell.render('Cell')}</Link>

):cell.render('Cell')}
                      {row.original.type==="Recorded" && console.log("true it is")}
                    {cellIndex===4?"  registrants":""}
                    {cellIndex===1?"  INR":""}
                    {cellIndex===0?<p style={{fontSize:'.8rem'}}>{row.original.type}</p>:""}
                    
                    </td>
                    
                  ))}
                  <td >
                    <div style={{display:"flex",alignItems:"center"}}>
                  <Button color="secondary" onClick={()=>{clickHandlerTable(row.id); change("Launched");}} className="mr-3" style={{fontSize:'1.2rem'}}>
                   {name}
                  </Button>
                  <PopoverItem id={row.id}/>
                  </div>
                </td>
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
  

export const TabularData = () => {
    const cols = React.useMemo(
      () => [
        {
          Header: 'Title',
          accessor: 'title',
          cellClass: 'list-item-heading w-20',
          Cell: (props) => <>{props.value}</>,
        },
        {
          Header: 'Fee',
          accessor: 'fee',
          cellClass: 'text-muted  w-20',
          Cell: (props) => <>{props.value}</>,
        },
        {
          Header: 'Tags',
          accessor: 'tags',
          cellClass: 'text-muted  w-20',
          Cell: (props) => <>{props.value}</>,
        },
        {
          Header: 'Published Date',
          accessor: 'date',
          cellClass: 'text-muted  w-20',
          Cell: (props) => <>{props.value}</>,
        },
        {
          Header: 'Registrations',
          accessor: 'registrations',
          cellClass: 'text-muted  w-20',
          Cell: (props) => <>{props.value}</>,
        },
      ],
      []
    );
    return (
      <div className="mb-4">
         {products.length>0?(<Table columns={cols} data={products} divided  />):(<CreateSession/>)} 
      </div>
    );
  };