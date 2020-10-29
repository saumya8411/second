
import React from 'react';
import { Card, CardBody, CardTitle,Button } from 'reactstrap';
import { useTable, usePagination, useSortBy } from 'react-table';
import classnames from 'classnames';
import products from '../data/products';
import DatatablePagination from '../components/DatatablePagination';
import CreateSession from './CreateSessions';
import Library from './Library';


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
  
    return (
      <>
        <table
        style={{maxWidth:'1000px'}}
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
                      {cell.render('Cell')}
                    {cellIndex===3?"  registrants":""}
                    {cellIndex===1?"  INR":""}
                    </td>
                  ))}
                  <td>
                  <Button color="light">
                    Launch
                  </Button>
                </td>
                </tr>
              );
            })}
          </tbody>
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
          Header: 'Published Date',
          accessor: 'date',
          cellClass: 'text-muted  w-20',
          Cell: (props) => <>{props.value}</>,
        },
        {
          Header: 'Registrations',
          accessor: 'registrations',
          cellClass: 'text-muted  w-40',
          Cell: (props) => <>{props.value}</>,
        },
      ],
      []
    );
    return (
      <div className="mb-4" style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
         {products.length>0?(<Table columns={cols} data={products} divided  />):(<CreateSession/>)} 
         <Library/>
      </div>
    );
  };