package com.thecat.Config;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

public class ConfigManager {

    private static final Properties properties = new Properties();

    static {

        String environment = System.getProperty("env", "qa");

        String fileName = "environments/" + environment + ".properties";

        try (InputStream inputStream =
                     ConfigManager.class
                             .getClassLoader()
                             .getResourceAsStream(fileName)) {

            if (inputStream == null) {
                throw new RuntimeException(
                        "Arquivo de configuração não encontrado: "
                                + fileName
                );
            }

            properties.load(inputStream);

        } catch (IOException e) {

            throw new RuntimeException(
                    "Erro ao carregar configuração do ambiente",
                    e
            );
        }
    }

    public static String getBaseUrl() {

        return properties.getProperty("base.url");
    }
}
