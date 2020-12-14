package com.personal.calendar.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.web.bind.annotation.*;

import java.util.Objects;


@RestController
public class Mail {
    @Autowired
    private JavaMailSender javaMailSender;
    @GetMapping("/o")
    public void sendSimpleMessage(){

        SimpleMailMessage msg = new SimpleMailMessage();
        msg.setTo("shreyasubhash46@gmail.com");
        msg.setSubject("Approved");
        msg.setText("...");
//        msg.setFrom("shreyasubhash46@gmail.com");
        System.out.println(javaMailSender);
        System.out.println(msg);
        javaMailSender.send(msg);
    }



}
