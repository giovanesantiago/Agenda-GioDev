package com.primeiro.sozinho.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WelloController {

    @GetMapping
    public String HelloWorld() {
        return "Hello Word, seja bem vindo a minha primeira API feito sozinho";
    }

}
