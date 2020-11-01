import React, { useState } from 'react';
import { Button, Card, CardBody, Popover, PopoverBody,Row } from 'reactstrap';
import { iconsmind, simplelineicons } from '../../data/icons';

const PopoverItem = ({ id, item }) => {
  const [popoverOpen, setPopoverOpen] = useState(false);

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
<div className={`glyph-icon ${simplelineicons[22]}`} onClick={() => setPopoverOpen(true)} id={`popover_${id}`} style={{width:'min-content',cursor:'pointer'}} />

      <Popover
        placement={"bottom"}
        isOpen={popoverOpen}
        target={`popover_${id}`}
        toggle={() => setPopoverOpen(!popoverOpen)}
      >
        <PopoverBody>
<Card>
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
      </Popover>
    </span>
  );
};
export default PopoverItem;
