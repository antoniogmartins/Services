package br.com.abc.javacore.Diversos_Paralelo.classes;

public class TestCase {

    private String testName;
    private String endpoint;
    private String method;
    private int expectedStatusCode;
    private boolean automated;


    public TestCase(String testName, String endpoint, String method, int expectedStatusCode, boolean automated) {
        this.testName = testName;
        this.endpoint = endpoint;
        this.method = method;
        this.expectedStatusCode = expectedStatusCode;
        this.automated = automated;
    }

    @Override
    public String toString() {
        return "TestCase{" +
                "testName='" + testName + '\'' +
                ", endpoint='" + endpoint + '\'' +
                ", method='" + method + '\'' +
                ", expectedStatusCode=" + expectedStatusCode +
                ", automated=" + automated +
                '}';
    }


    public String getTestName() {
        return this.testName;
    }

    public void setTestName(String testName) {
        this.testName = testName;
    }

    public String getEndpoint() {
        return this.endpoint;
    }

    public void setEndpoint(String endpoint) {
        this.endpoint = endpoint;
    }

    public String getMethod() {
        return this.method;
    }

    public void setMethod(String method) {
        this.method = method;
    }

    public int getExpectedStatusCode() {
        return this.expectedStatusCode;
    }

    public void setExpectedStatusCode(int expectedStatusCode) {
        this.expectedStatusCode = expectedStatusCode;
    }

    public boolean isAutomated() {
        return this.automated;
    }

    public void setAutomated(boolean automated) {
        this.automated = automated;
    }





}
