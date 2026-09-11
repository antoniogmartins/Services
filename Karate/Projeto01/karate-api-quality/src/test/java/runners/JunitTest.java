package runners;

import io.karatelabs.core.SuiteResult;
import org.junit.jupiter.api.Test;
import io.karatelabs.core.Runner;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class JunitTest {

    @Test
    void testAll() {
        SuiteResult result = Runner.path("classpath:features")
                .outputHtmlReport(true)
                .parallel(1);

        assertTrue(result.isPassed());
    }
}
