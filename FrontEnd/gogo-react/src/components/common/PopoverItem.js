import React, { useState } from 'react';
import { Button, Card, CardBody, Popover, PopoverBody,Row ,Dropdown,DropdownToggle,DropdownMenu,DropdownItem } from 'reactstrap';
import { iconsmind, simplelineicons } from '../../data/icons';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';

const PopoverItem = ({ id, item }) => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <span>
      {/* <Button
        className="mr-1 mb-2"
        color="secondary"
        id={`popover_${id}`}
        onClick={() => setPopoverOpen(true)}
      >
        {item.text}
      </Button> */}
      {/* <div className="simple-line-icons" } >
                            <div className="glyph">
              <div className={`glyph-icon ${simplelineicons[22]}`} />
              {/* <div className="class-name">{icon}</div> */}
            {/* </div>
            
</div>  */}
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle
        tag="span"
        data-toggle="dropdown"
        aria-expanded={dropdownOpen}
      >
        <HiOutlineDotsHorizontal style={{cursor:"pointer"}}/>
      </DropdownToggle>
      <DropdownMenu right>
        <DropdownItem  onClick={toggle} className={`glyph-icon ${simplelineicons[114]} mr-2`} style={{fontSize:'1.1rem'}}><a href="" className="ml-4">Edit</a></DropdownItem >
        <DropdownItem  onClick={toggle} className={`glyph-icon ${simplelineicons[146]} mr-2`} style={{fontSize:'1.1rem'}}><span className="ml-4">Preview</span></DropdownItem >
        <DropdownItem  onClick={toggle} className={`glyph-icon ${simplelineicons[35]} mr-2`} style={{fontSize:'1.1rem'}}><span className="ml-4">Delete</span></DropdownItem >
        <DropdownItem  onClick={toggle} className={`glyph-icon ${simplelineicons[143]} mr-2`} style={{fontSize:'1.1rem'}}><span className="ml-4">Download</span></DropdownItem >
      </DropdownMenu>
    </Dropdown>
{/* <Button className={`glyph-icon ${simplelineicons[22]}`} onClick={() => setPopoverOpen(true)} id={`popover_${id}`} style={{width:'min-content',cursor:'pointer',fontSize:'1rem'}} />

      <Popover
      placement={"bottom"}
        isOpen={popoverOpen}
        target={`popover_${id}`}
        toggle={() => setPopoverOpen(!popoverOpen)}
        style={{}}
      >
        <PopoverBody>
<Card>
<GrFormClose style={{fontSize:"20px", cursor:"pointer"}} onClick={() => setPopoverOpen(false)} className="ml-auto float-right mt-2 mr-2"/>
  <CardBody style={{fontSize:'1.3rem'}}>
    
    <Row className="mb-2" style={{cursor:'pointer'}}>
    <div className={`glyph-icon ${simplelineicons[114]} mr-2`} style={{margin:'auto 0'}}/>

    <a href="">Edit</a>

    </Row>
    <Row className="mb-2" style={{cursor:'pointer'}} >
    <div className={`glyph-icon ${simplelineicons[146]} mr-2`} style={{margin:'auto 0'}}/>

    <span >Preview</span>

    </Row>
    <Row className="mb-2" style={{cursor:'pointer'}} >
    <div className={`glyph-icon ${simplelineicons[35]} mr-2`} style={{margin:'auto 0'}}/>

    <span >Delete</span>

    </Row>
    <Row className="mb-2" style={{cursor:'pointer'}}>
    <div className={`glyph-icon ${simplelineicons[143]} mr-2`} style={{margin:'auto 0'}}/>

    <span >Download</span>

    </Row>
  </CardBody>
</Card>
          
        </PopoverBody>
      </Popover> */}
    </span>
  );
};
export default PopoverItem;
