package auth;

public class userRequest {

    private String username;
    private String password;
    private int expiresInMis;

    public userRequest(){

    }

    public userRequest(String Username, String Password, int Expiresinmis){
        this.username = Username;
        this.password = Password;
        this.expiresInMis = Expiresinmis;

    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String Username) {
        username = Username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String Password) {
        this.password = Password;
    }

    public int getExpiresInMis() {
        return expiresInMis;
    }

    public void setExpiresInMis(int ExpiresInMis) {
        this.expiresInMis = ExpiresInMis;
    }
}
