package com.maxcmartinez.socketservice.contollers;


import com.maxcmartinez.socketservice.models.Message;
import com.maxcmartinez.socketservice.models.OutputMessage;
import com.maxcmartinez.socketservice.models.User;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import java.text.SimpleDateFormat;
import java.util.*;

@Controller
public class MessageHandlingContoller {
    private List<User> users ;
    private final Set<String> listUser;

    public  MessageHandlingContoller(){
        this.users = new ArrayList<>();
        this.listUser = new HashSet<>();
    }

    @MessageMapping("/public-chat")
    @SendTo("/public/messages")
    public OutputMessage send(Message message) throws Exception {
        String time = new SimpleDateFormat("HH:mm").format(new Date());
        return new OutputMessage(message.getSenderName(), message.getText(), message.getStatus(), time);
    }

    @MessageMapping("/connect")
    @SendTo("/public/list-user")
    public Set<String> connect(String name){
        listUser.add(name);
        return listUser;
    }

    @MessageMapping("/disconnect")
    @SendTo("/public/list-user")
    public Set<String> disconnect(String name){
        listUser.remove(name);
        return listUser;
    }
}
