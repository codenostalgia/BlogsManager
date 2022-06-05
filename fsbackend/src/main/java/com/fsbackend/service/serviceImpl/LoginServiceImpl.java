package com.fsbackend.service.serviceImpl;

import com.fsbackend.entity.Blog;
import com.fsbackend.entity.User;
import com.fsbackend.repository.BlogRepository;
import com.fsbackend.repository.UserRepository;
import com.fsbackend.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
public class LoginServiceImpl implements LoginService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    BlogRepository blogRepository;

    private boolean flag=true;

    public void initializeUser() throws IOException {

        List<User> users = new ArrayList<>();
        users.add(new User(1L,"superadmin","superadmin","superadmin"));
        users.add(new User(2L,"admin","admin","admin"));
        users.add(new User(3L,"root","root","root"));
        userRepository.saveAll(users);

        List<Blog> blogs = new ArrayList<>();

        blogs.add(new Blog(3L,"2/5/2021","Im a Full stack Developer",true,"Developer"));
        blogs.add(new Blog(1L,"23/10/2018","I love Programming",true,"Programming"));
        blogs.add(new Blog(2L,"03/6/2019","Maths is Interesting",true,"Maths"));
        blogs.add(new Blog(2L,"4/8/2021","AI is advancing day by day",false,"AI"));
        blogs.add(new Blog(2L,"12/7/2017","Love yourself!!",false,"Love"));

        blogRepository.saveAll(blogs);

    }

    @Override
    public User verifyLogin(User user) throws IOException {

        if(flag){
            initializeUser();
            flag=false;
        }

        System.out.println(user);

        List<User> users = userRepository.findAll();

        for(User u: users){
            if(u.getUserName().equals(user.getUserName())){

                if(u.getPassword().equals(user.getPassword()) && u.getType().equalsIgnoreCase(user.getType())){
                    userRepository.save(u);
                    return u;
                }
                return null;
            }
        }

        return null;

    }

    @Override
    public boolean signup(User user) {

        List<User> users = userRepository.findAll();

        for(User u: users){
            if(u.getUserName().equals(user.getUserName())){
                return false;
            }
        }

        User usaved= userRepository.save(user);
        System.out.println(usaved);
        return true;

    }


}
