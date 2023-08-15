package com.maxcmartinez.socketservice.models;

import com.maxcmartinez.socketservice.enums.MessageStatus;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Message {
    private String sender;
    private String email;
    private String date;
    private String text;
    private MessageStatus status;
}
