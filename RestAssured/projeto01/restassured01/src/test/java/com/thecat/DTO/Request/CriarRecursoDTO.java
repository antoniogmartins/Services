package com.thecat.DTO.Request;

public class CriarRecursoDTO {

    private String title;
    private String body;
    private int userId;

    public CriarRecursoDTO() {
    }

    public CriarRecursoDTO(String title, String body, int userId) {
        this.title = title;
        this.body = body;
        this.userId = userId;
    }

    public String getTitle() {
        return this.title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getBody() {
        return this.body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public int getUserId() {
        return this.userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

}
