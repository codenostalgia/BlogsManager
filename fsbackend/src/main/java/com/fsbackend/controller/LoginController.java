package com.fsbackend.controller;

import com.fsbackend.entity.User;
import com.fsbackend.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = {"http://localhost:3000"})
public class LoginController {

    @Autowired
    LoginService loginService;

    @PostMapping("/login")
    public User verifyLogin(@RequestBody User user) throws IOException {
        System.out.println(user);
        return loginService.verifyLogin(user);
    }

    @PostMapping("/signup")
    public boolean signup(@RequestBody User user){
        System.out.println(user);
        return loginService.signup(user);
    }
}