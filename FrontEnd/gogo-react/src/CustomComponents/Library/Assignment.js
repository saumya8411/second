import React, { useState, useEffect } from 'react';
// import Table from './Table';

import NotificationManager from '../../components/common/react-notifications/NotificationManager';
import axiosInstance from '../../helpers/axiosInstance';
import Loader from '../settings/Loader';

import { useTable, usePagination, useSortBy } from 'react-table';
import classnames from 'classnames';
import PopoverItem from '../../components/common/PopoverItem';

const Table = ({ columns, data, divided = false, defaultPageSize = 6 }) => {
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
        style={{ maxWidth: '1100px', margin: '0 auto' }}
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
                    style={{ fontSize: '1.3rem' }}
                    key={`td_${cellIndex}`}
                    {...cell.getCellProps({
                      className: cell.column.cellClass,
                    })}
                  >
                    {cell.render('Cell')}
                  </td>
                ))}
                <td>
                  <PopoverItem id={`1${row.id}`} />
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
};

const Assignment = ({ columns }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (error)
      NotificationManager.warning(
        error,
        'Library Recorded Item',
        3000,
        null,
        null,
        ''
      );
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await axiosInstance.get('/library/assignments');
        console.log('assignment', result);
        if (result.data.success) {
          const data = result.data.result.map((doc) => {
            if (doc.item_type == 'quiz') doc.item_size = '---';
            else if (doc.item_size / 1024 <= 1024)
              doc.item_size = `${(doc.item_size / 1024).toFixed(2)}Kb`;
            else if (doc.item_size / 1048576 <= 1024)
              doc.item_size = `${(doc.item_size / 1048576).toFixed(2)}Mb`;
            else doc.item_size = `${(doc.item_size / 1073741824).toFixed(2)}Gb`;
            console.log(doc);
            return {
              name: doc.item_name,
              size: doc.item_size,
              type: doc.item_type,
              uploaded: doc.updatedAt.substr(0, 10),
            };
          });
          setData(data);
        } else {
          try {
            setError(result.data.error);
          } catch (e) {
            setError('Unable to fetch data');
          }
        }
      } catch (err) {
        try {
          setError(err.response.data.error);
        } catch (e) {
          setError('Unable to fetch data');
        }
      } finally {
        setIsLoaded(true);
      }
    };
    getData();
  }, []);

  //backend team find a way to sort or filter data via this feature and show in tabs
  if (!isLoaded) return <Loader />;

  if (!data.length) return <div>No Assignment Data Found</div>;
  return <Table columns={columns} data={data} divided />;
};
export default Assignment;
