package com.maxcmartinez.socketservice.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;

@NoArgsConstructor
@AllArgsConstructor
@Getter @Setter
public class User {
    private UUID id;
    private String fullName;
    private String nickName;
    private boolean connected;
}
