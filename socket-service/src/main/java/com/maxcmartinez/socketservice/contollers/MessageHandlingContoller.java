package com.maxcmartinez.socketservice.contollers;


import com.maxcmartinez.socketservice.models.Message;
import com.maxcmartinez.socketservice.models.User;
import com.maxcmartinez.socketservice.services.WSMessageHandlingService;
import lombok.AllArgsConstructor;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;

@RestController
@AllArgsConstructor
public class MessageHandlingContoller {

    private final WSMessageHandlingService wsMessageHandlingService;

    @MessageMapping("/public-chat")
    @SendTo("/public/messages")
    public Message send(@Payload Message message) {
        return wsMessageHandlingService.send(message);
    }

    @MessageMapping("/connect")
    @SendTo("/public/list-user")
    public Set<User> connect(@Payload User user) {
        return wsMessageHandlingService.connectUser(user);
    }

    @MessageMapping("/disconnect")
    @SendTo("/public/list-user")
    public Set<User> disconnect(@Payload User user) {
        return wsMessageHandlingService.disconnectUser(user);
    }
}
