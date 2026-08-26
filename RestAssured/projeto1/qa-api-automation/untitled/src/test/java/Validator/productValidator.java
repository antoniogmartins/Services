package Validator;

public class productValidator {

    public boolean quantidade(Integer quantidade){
        return quantidade >= 1;
    }

    public boolean idValido(Integer id) {
         return (id != null) && (id != 0);
    }
}
