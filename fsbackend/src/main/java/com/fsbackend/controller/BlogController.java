package com.fsbackend.controller;

import com.fsbackend.entity.Blog;
import com.fsbackend.entity.User;
import com.fsbackend.service.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/blogs")
@CrossOrigin(origins = {"http://localhost:3000"})
public class BlogController {

    @Autowired
    BlogService blogService;

    @PostMapping("/add")
    public Blog addBlog(@RequestBody Blog blog){

        return blogService.addBlog(blog);

    }

    @GetMapping("")
    public List<Blog> getAllBlogs(){
        return blogService.getAllBlogs();
    }

    @PostMapping("/approve")
    public Blog approveBlog(@RequestBody Blog blog){
        return blogService.approveBlog(blog);
    }

    @GetMapping("/users")
    public List<User> getAuthors(){
        return blogService.getAuthors();
    }

    @PutMapping("/update")
    public Blog updateBlog(@RequestBody Blog blog){
        return blogService.updateBlog(blog);
    }

    @DeleteMapping("/delete")
    public Blog deleteBlog(@RequestBody Blog blog){
        return blogService.deleteBlog(blog);
    }


}
