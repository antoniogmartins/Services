package Utils;

public class criarusuarioEstatico {

    private String email;
    private String password;

    public criarusuarioEstatico(String email, String password) {
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
