package Utils;

public class CriarusuarioEstatico {

    private String email;
    private String password;

    public CriarusuarioEstatico(String email, String password) {
        this.email = email;
        this.password = password;
    }

    public String getEmail() {
        return this.email;
    }

    public String getPassword() {
        return this.password;
    }

}
