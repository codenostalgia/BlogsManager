package com.fsbackend;

import com.fsbackend.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class FsbackendApplication {

	@Autowired
	LoginService loginService;

	public static void main(String[] args) {
		SpringApplication.run(FsbackendApplication.class, args);
	}

}
