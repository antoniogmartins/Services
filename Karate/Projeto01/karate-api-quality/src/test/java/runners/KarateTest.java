package runners;

import io.karatelabs.junit6.Karate;
import org.junit.jupiter.api.DynamicNode;

public class KarateTest {

    @Karate.Test
    Iterable<DynamicNode> testAll() {
        return Karate.run("classpath:features");
    }
}
