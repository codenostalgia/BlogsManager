package com.fsbackend.service.serviceImpl;

import com.fsbackend.entity.Blog;
import com.fsbackend.entity.User;
import com.fsbackend.repository.BlogRepository;
import com.fsbackend.repository.UserRepository;
import com.fsbackend.service.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BlogServiceImpl implements BlogService {

    @Autowired
    BlogRepository blogRepository;

    @Autowired
    UserRepository userRepository;
    @Override
    public Blog addBlog(Blog blog) {

        Blog bsaved=blogRepository.save(blog);
        System.out.println("Saved blog..."+bsaved);

        return bsaved;
    }

    @Override
    public List<Blog> getAllBlogs() {
        List<Blog> blogs = blogRepository.findAll();
        return  blogs;
    }

    @Override
    public Blog approveBlog(Blog blog) {
        blog.setApproved(true);
        Blog bsaved = blogRepository.save(blog);
        return bsaved;
    }

    @Override
    public List<User> getAuthors() {
        return userRepository.findAll();
    }

    @Override
    public Blog updateBlog(Blog blog) {
        return blogRepository.save(blog);
    }

    @Override
    public Blog deleteBlog(Blog blog) {
        blogRepository.delete(blog);
        return blog;
    }
}
