package com.maxcmartinez.socketservice.models;

import com.maxcmartinez.socketservice.enums.Status;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Message {
    private String senderName;
    private String text;
    private Status status;
}
