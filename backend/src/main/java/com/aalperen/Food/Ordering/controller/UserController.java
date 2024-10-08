package com.aalperen.Food.Ordering.controller;

import com.aalperen.Food.Ordering.entity.User;
import com.aalperen.Food.Ordering.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/profile")
    public ResponseEntity<User> findUserByToken(@RequestHeader("Authorization") String jwt) throws Exception {

        User user = userService.findUserByToken(jwt);

        return new ResponseEntity<>(user, HttpStatus.OK);

    }
}
