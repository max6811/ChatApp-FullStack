package com.maxcmartinez.socketservice.models;

import com.maxcmartinez.socketservice.enums.Status;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
public class OutputMessage extends Message{
    private String date;

    public OutputMessage(String from, String text, Status status, String date) {
        super(from, text, status);
        this.date = date;
    }
}
