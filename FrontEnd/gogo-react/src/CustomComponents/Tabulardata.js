
import React from 'react';
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

function Table({ columns, data, divided = false, defaultPageSize = 6 }) {
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
  console.log(getTableBodyProps,"gettable------body----props")
  console.log(getTableProps,"gettable------props")
  console.log(prepareRow,"prepare------row")
  console.log(page,"----------------page")
  const clickHandlerTable = (props) =>{
    console.log(props)
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
            <Link to={`${adminRoot}/sessiondetail`}>
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
                    {cellIndex===4?"  registrants":""}
                    {cellIndex===1?"  INR":""}
                    </td>
                  ))}
                  <td >
                    <div style={{display:"flex",alignItems:"center"}}>
                  <Button color="light" onClick={()=>clickHandlerTable(row.id)} className="mr-3">
                    Launch
                  </Button>
                  <PopoverItem id={row.id}/>
                  </div>
                </td>
                </tr>
              );
            })}
        </Link>  </tbody>
        </table>
  
        <DatatablePagination
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
        />
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