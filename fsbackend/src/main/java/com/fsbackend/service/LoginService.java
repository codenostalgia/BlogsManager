package com.fsbackend.service;

import com.fsbackend.entity.User;

import java.io.IOException;

public interface LoginService {

    public User verifyLogin(User user) throws IOException;

    boolean signup(User user);
}
