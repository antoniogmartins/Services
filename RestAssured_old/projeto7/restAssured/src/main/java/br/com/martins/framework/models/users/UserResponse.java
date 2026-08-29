package br.com.martins.framework.models.users;

import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserResponse {

    private Long id;
    private String name;
    private String email;
    private String role;
    private String createdAt;
    private String updatedAt;
}