import React from "react";
import {ListGroup} from 'reactstrap'
import {Link} from 'react-router-dom'

//template -> rs

//tag a => makes text blue when hover
//action => makes box little grey when hover, and clickable in all box
//href => redirect

function Menus() {
  return (
    <div>
      <ListGroup className="enlarge">
        <Link className="list-group-item list-group-item-action" tag="a" to="/" action>Home</Link>
        <Link className="list-group-item list-group-item-action" tag="a" to="/View" action>View Blogs</Link>
        <Link className="list-group-item list-group-item-action" tag="a" to="/approve" action>Approval Needed</Link>
        <Link className="list-group-item list-group-item-action" tag="a" to="/Add" action>Add Blog</Link>
        <Link className="list-group-item list-group-item-action" tag="a" to="/Logout" action>Logout</Link>
      </ListGroup>
    </div>
  );
}

export default Menus;
