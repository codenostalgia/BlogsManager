import React, { Component } from "react";
import { CardDeck, CardGroup ,Col} from "reactstrap";
import { getAllBlogs } from "../Axios/AxiosRequests";
import BlogApprove from "./BlogApprove";

class BlogsToBeApproved extends Component {

  constructor(props) {
    super(props);
    console.log("constructor called..")
    this.state = {
      blogsToBeApproved: [],
    };
    this.updater()
  }

    
  checktobeApproved=(b)=>{
    return !b.approved}

  updater = () => {
    
    console.log("Component Mounted")

    const prom =  getAllBlogs();

    prom
      .then((res) => {
        console.log(res.data);
        
        this.setState(()=>{
            console.log(this.state)
            let data=res.data
            this.state.blogsToBeApproved= data.filter(this.checktobeApproved)
            console.log(this.state.blogsToBeApproved)
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
          {this.state.blogsToBeApproved.length > 0
            ? this.state.blogsToBeApproved.map((item) => 
            
                <BlogApprove history={this.props.history} key={item.bid} blog={item}>
                </BlogApprove>
            )
            : "No Blogs Available"}
        </CardDeck>
      </div>
    );
  }
}

export default BlogsToBeApproved;
