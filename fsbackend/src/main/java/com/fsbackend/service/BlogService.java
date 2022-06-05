package com.fsbackend.service;

import com.fsbackend.entity.Blog;
import com.fsbackend.entity.User;

import java.util.List;

public interface BlogService {
    Blog addBlog(Blog blog);

    List<Blog> getAllBlogs();

    Blog approveBlog(Blog blog);

    List<User> getAuthors();

    Blog updateBlog(Blog blog);

    Blog deleteBlog(Blog blog);
}
