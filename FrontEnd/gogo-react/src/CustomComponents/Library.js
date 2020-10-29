import React from 'react';
import { Row, Card, CardBody, Button } from 'reactstrap';
import { useTable, usePagination, useSortBy } from 'react-table';
import classnames from 'classnames';
import products from '../data/products';
import { Colxx } from '../components/common/CustomBootstrap';

import DatatablePagination from '../components/DatatablePagination';
const data = [
 {
name: 'quiz-1',
size: '',
type:'Quiz',
uploaded: '28-10-2020'

},{
name: 'Notes-1',
size: '20Mb',
type: 'Handouts',
uploaded: '28-10-2020'

},
{
name: 'Notes-2',
size: '30Mb',
type: 'Handouts',
uploaded: '28-10-2020'
},
{
name: 'Introduction to Arduino IDE',
size: '300Mb',
type: 'Video',
uploaded: '27-10-2020'
}]

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
        style={{ maxWidth: '1100px' }}
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
                  className={(
                    column.isSorted
                      ? column.isSortedDesc
                        ? 'sorted-desc'
                        : 'sorted-asc'
                      : '') + columnIndex===3?'text-right':'text-left'
                  }
                >
                  
                  {column.render('Header')}
                  {column.isSorted ? (column.isSortedDesc ? '' : '') : ''}
                  <span />
                </th>
              ))}
            </tr>
          ))}
        </thead> */}

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
                <td>
                  {/* <Button color="light">
                    Launch
                  </Button> */}
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

export const Library = () => {
  const cols = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
        cellClass: 'list-item-heading w-20',
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: 'Uploaded At',
        accessor: 'uploaded',
        cellClass: 'text-muted  w-20',
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: 'Type',
        accessor: 'type',
        cellClass: 'text-muted  w-20',
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: 'Size',
        accessor: 'size',
        cellClass: 'text-muted  w-40 ',
        Cell: (props) => <>{props.value}</>,
      },
    ],
    []
  );
  return (
    <>
      {/* <Row /> */}
      {/* <Row style={{ width: '100%' }}>
        <Colxx xxs="12" md="10" style={{ margin: '0 auto' }}>
          <Card style={{ width: '100%' }}>
            <CardBody>
              <div className="mb-4"> */}
                    <div className="mb-4" style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>

                <Table columns={cols} data={data} divided />
                </div>
              {/* </div>
            </CardBody>
          </Card>
        </Colxx>
      </Row> */}
    </>
  );
};

export default Library;
