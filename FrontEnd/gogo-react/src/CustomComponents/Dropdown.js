import React, { useState } from 'react';
import { Row,Button,Input,Modal } from 'reactstrap';
import Select from 'react-select';
import CustomSelectInput from '../components/common/CustomSelectInput';
import { Colxx } from '../components/common/CustomBootstrap';
import {
  menuHiddenBreakpoint,
  searchPath,
  
} from '../constants/defaultValues';
import './Customcss.css'
import SessionInput from './SessionInput';

const selectFilters = [
    { label: 'All Sessions', value: 'all-sessions', key: 0 },
    { label: 'Live Sessions', value: 'live-sessions', key: 1 },
    { label: 'Recorded Sessions', value: 'Record-sessions', key: 2 },
    { label: 'Launched', value: 'launched', key: 3},
    {label:'Yet to Launch',value: 'yet-to-launch', key: 4}
];
  
  const selectSort = [
    { label: 'date', value: 'date', key: 0 },
    { label: 'Name', value: 'name', key: 1 },
    { label: 'Fees', value: 'fees', key: 2 },
    { label: 'Registration', value: 'registration', key: 3 }
  ]
  
  

const CustomSelect = ({intl}) =>{
    const [selectedFilter, setSelectedFilter] = useState('');
    const [selectedSort, setSelectedSort] = useState('');
    const [searchKeyword,setSearchKeyword ] = useState('');
    const [search, setSearch] = useState('');
    const [modalLarge, setModalLarge] = useState(false);

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

    
  const onSearchKey=(e) => {
    if (e.key === 'Enter') {
      setSearch(e.target.value.toLowerCase());
    }
  }

    return(
        <>
        <Row>
          <Colxx xs="12" md="3" className="mt-4">
        <div style={{display:'flex',alignItems:'center'}}>
        <div className="search-sm d-inline-block float-md-left mr-1 mb-1 align-top">
                <input 
                style={{minHeight:"38px",position:'relative'}}
                  type="text"
                  name="keyword"
                  id="search"
                  placeholder={['menu.search']}
                  onKeyPress={(e) => onSearchKey(e)}
                />
              </div>
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
<Colxx xs="12" md="3" >
<Button color="primary" className="mb-2 p-3 mt-4 create" onClick={() => setModalLarge(true)}>
                Create Session
              </Button>
              <Modal  
                  isOpen={modalLarge}
                  size="lg"
                  toggle={() => setModalLarge(!modalLarge)}
                >
                  <SessionInput/>
                </Modal>
</Colxx>
</Row>        </>
    )
}

export default CustomSelect;