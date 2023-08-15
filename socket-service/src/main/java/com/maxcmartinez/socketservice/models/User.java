package com.maxcmartinez.socketservice.models;

import lombok.*;

import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    private String email;
    private String name;
    private boolean connected;
}

