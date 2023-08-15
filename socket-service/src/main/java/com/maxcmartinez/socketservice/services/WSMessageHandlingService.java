package com.maxcmartinez.socketservice.services;

import com.maxcmartinez.socketservice.models.Message;
import com.maxcmartinez.socketservice.models.User;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Service
public class WSMessageHandlingService {

    private final Set<User> listUser;

    public WSMessageHandlingService() {
        this.listUser = new HashSet<>();
    }

    public Message send(Message message) {
        String date = new SimpleDateFormat("HH:mm").format(new Date());
        return new Message(
                message.getSender(),
                message.getEmail(),
                date,
                message.getText(),
                message.getStatus()
        );
    }

    public Set<User> connectUser(User user) {
        user.setConnected(true);
        listUser.add(user);
        return listUser;
    }

    public Set<User> disconnectUser(User user) {
        listUser.remove(user);
        return listUser;
    }

}
