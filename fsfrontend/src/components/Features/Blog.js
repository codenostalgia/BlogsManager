import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { CardHeader, Row } from 'reactstrap';

import 
{
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Container,
    Button,
    Col
}
 from 'reactstrap'
import { deleteBlog, getAuthors } from '../Axios/AxiosRequests';

// style={{"width": "50rem"}}

function Blog({blog,history}) {

    let prom = getAuthors()
    let [author,setAuthor]= useState(null)

    function chechAuthor(au){
      console.log(blog.aid)
      console.log(au.uid)
      console.log(au.uid==blog.aid)
      return au.uid==blog.aid
    }

    prom.then(res=>{
      let newauthor = res.data.filter(chechAuthor)[0].userName
      setAuthor(newauthor)
    }).catch(e=>
      console.log(e))

    function blogupdateHandler(){
      console.log("inside update handler...")
      history.push({
        pathname:`/update`,
        state: {
          blog:blog
        }
      })
    }

    function blogdeleteHandler(){
        let prom = deleteBlog(blog)

        prom.then(res=>{
          toast.success("Blog Deleted")
        })
        .catch("Some Error Happened..")
    }

    return (
        <div className="m-2">
          <Card className="mycard" body color="primary" outline>
            <CardHeader>
            {
                blog.title===null?
                "No Content":
                blog.title
              }
            </CardHeader>
            <CardBody className="text-center">
              <CardTitle className="card-title">Author: {author}</CardTitle>
              <CardSubtitle>
              {
                blog.content===null?
                "No Content":
                blog.content
              }
            </CardSubtitle>
            <Button color='warning' onClick={blogupdateHandler}>Update</Button>
            <Button color='danger' className='m-3' onClick={blogdeleteHandler}>Delete</Button>
          </CardBody>
        </Card>
      </div>
    );

}

export default Blog;