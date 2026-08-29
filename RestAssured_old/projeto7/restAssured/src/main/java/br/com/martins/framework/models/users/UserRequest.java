package br.com.martins.framework.models.users;

import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserRequest {

    private String name;
    private String email;
    private String password;
    private String role; // opcional (admin/user etc)
}