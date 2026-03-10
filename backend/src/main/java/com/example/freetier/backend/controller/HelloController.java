package com.example.freetier.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/api/message")
    public String message() {
        return "BACKEND BOYS!!!";
    }
}