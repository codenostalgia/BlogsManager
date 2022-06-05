import React, { Component } from "react";
import { Button, CardDeck, CardGroup ,Col} from "reactstrap";
import { getAllBlogs } from "../Axios/AxiosRequests";
import Blog from "./Blog";

class AllBlogs extends Component {

  constructor(props) {
    super(props);
    console.log("constructor called..")
    this.state = {
      blogs: [],
    };
    this.updater()
  }

  blogsApproved=(b)=>{
    return b.approved}


  updater = () => {
    
    console.log("Component Mounted")

    const prom =  getAllBlogs();

    prom
      .then((res) => {
        console.log(res.data);
        
        this.setState(()=>{
            console.log(this.state)
            let data=res.data
            this.state.blogs= data.filter(this.blogsApproved)
            return this.state
        })

      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="border p-3">
        <h4 class="card-text">Blogs Are As Follows:</h4>
        <CardDeck>
          {this.state.blogs.length > 0
            ? this.state.blogs.map((item) => 
            
                <Blog history={this.props.history} key={item.bid} blog={item}>
                </Blog>
            )
            : "No Blogs Available"}
        </CardDeck>
      </div>
    );
  }
}

export default AllBlogs;
