import React, { useState, useContext, useEffect } from 'react';
import {
  Row,
  Button,
  Input,
  Modal,
  InputGroupAddon,
  InputGroup,
} from 'reactstrap';
import Select from 'react-select';
import CustomSelectInput from '../components/common/CustomSelectInput';
import { Colxx } from '../components/common/CustomBootstrap';
import { menuHiddenBreakpoint, searchPath } from '../constants/defaultValues';
import './Customcss.css';
import SessionInput from './SessionInput';
import { DropDownContext } from '../context/DropdownContext';

const selectFilters = [
  { label: 'All Sessions', value: 'findall', key: 0 },
  { label: 'Live Sessions', value: 'liveSession', key: 1 },
  { label: 'Recorded Sessions', value: 'recordedSession', key: 2 },
  { label: 'Launched', value: 'launched', key: 3 },
  { label: 'Yet to Launch', value: 'yetToLaunch', key: 4 },
];

const selectSort = [
  { label: 'Date', value: 'session_start_date', key: 0 },
  { label: 'Name', value: 'session_name', key: 1 },
  { label: 'Fees', value: 'session_fee', key: 2 },
  { label: 'Registrations', value: 'session_registration', key: 3 },
];

const CustomSelect = ({ intl }) => {
  const [
    selectedFilter,
    setSelectedFilter,
    selectedSort,
    setSelectedSort,
    search,
    setSearch,
    handleReloadTable,
  ] = useContext(DropDownContext);
  // const [selectedSort, setSelectedSort] = useState('');
  const [searchKeyword, setSearchKeyword] = useState('');
  // const [search, setSearch] = useState('');
  const [modalLarge, setModalLarge] = useState(false);

  const handleToggle = () => setModalLarge(!modalLarge);

  const handleSearchInputKeyPress = (e) => {
    if (e.key === 'Enter') {
      search();
    }
  };

  // const search = () => {
  //   // history.push(`${searchPath}?key=${searchKeyword}`);
  //   setSearchKeyword('');
  // };

  // const handleSearchIconClick = (e) => {
  //   if (window.innerWidth < menuHiddenBreakpoint) {
  //     let elem = e.target;
  //     if (!e.target.classList.contains('search')) {
  //       if (e.target.parentElement.classList.contains('search')) {
  //         elem = e.target.parentElement;
  //       } else if (
  //         e.target.parentElement.parentElement.classList.contains('search')
  //       ) {
  //         elem = e.target.parentElement.parentElement;
  //       }
  //     }

  //     if (elem.classList.contains('mobile-view')) {
  //       search();
  //       elem.classList.remove('mobile-view');
  //       removeEventsSearch();
  //     } else {
  //       elem.classList.add('mobile-view');
  //       addEventsSearch();
  //     }
  //   } else {
  //     search();
  //   }
  //   e.stopPropagation();
  // };

  // const removeEventsSearch = () => {
  //   document.removeEventListener('click', handleDocumentClickSearch, true);
  // };

  // const handleDocumentClickSearch = (e) => {
  //   let isSearchClick = false;
  //   if (
  //     e.target &&
  //     e.target.classList &&
  //     (e.target.classList.contains('navbar') ||
  //       e.target.classList.contains('simple-icon-magnifier'))
  //   ) {
  //     isSearchClick = true;
  //     if (e.target.classList.contains('simple-icon-magnifier')) {
  //       search();
  //     }
  //   } else if (
  //     e.target.parentElement &&
  //     e.target.parentElement.classList &&
  //     e.target.parentElement.classList.contains('search')
  //   ) {
  //     isSearchClick = true;
  //   }

  //   if (!isSearchClick) {
  //     const input = document.querySelector('.mobile-view');
  //     if (input && input.classList) input.classList.remove('mobile-view');
  //     removeEventsSearch();
  //     setSearchKeyword('');
  //   }
  // };

  // const addEventsSearch = () => {
  //   document.addEventListener('click', handleDocumentClickSearch, true);
  // };

  const onSearchKey = (e) => {
    if (e.key === 'Enter') {
      console.log(e.target.value.toLowerCase());
      setSearch(e.target.value.toLowerCase());
    }
  };

  // useEffect(() => {
  //   console.log(selectedSort, selectedFilter, search);
  // }, [
  //   selectedFilter,
  //   setSelectedFilter,
  //   selectedSort,
  //   setSelectedSort,
  //   search,
  //   setSearch,
  // ]);

  return (
    <>
      <Row>
        <Colxx xs="12" md="3" className="mt-4">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Input
              type="text"
              name="keyword"
              id="search1"
              placeholder="Search"
              onKeyPress={(e) => onSearchKey(e)}
            />
            <Button
              className="searchme"
              onClick={(e) =>
                setSearch(document.getElementById('search1').value)
              }
            >
              Search
            </Button>
          </div>
        </Colxx>
        <Colxx xs="12" md="3" className="mb-4">
          <span className="mr-2">Filter By</span>
          <Select
            components={{ Input: CustomSelectInput }}
            className="react-select"
            classNamePrefix="react-select"
            name="form-field-name"
            value={selectedFilter}
            onChange={setSelectedFilter}
            options={selectFilters}
          />
        </Colxx>
        <Colxx xs="12" md="3">
          <span className="mr-2">Sort By</span>
          <Select
            components={{ Input: CustomSelectInput }}
            className="react-select"
            classNamePrefix="react-select"
            name="form-field-name"
            value={selectedSort}
            onChange={setSelectedSort}
            options={selectSort}
          />
        </Colxx>
        <Colxx xs="12" md="3">
          <Button
            color="primary"
            className=" create"
            onClick={() => setModalLarge(true)}
          >
            Create Session
          </Button>
          <Modal isOpen={modalLarge} size="lg" toggle={() => handleToggle}>
            <SessionInput
              closeModal={handleToggle}
              propHandle={handleReloadTable}
            />
          </Modal>
        </Colxx>
      </Row>
    </>
  );
};

export default CustomSelect;
