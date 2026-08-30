package com.thecat.Utils;

import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVParser;
import org.apache.commons.csv.CSVRecord;
import org.junit.jupiter.params.provider.Arguments;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;

public class TestDataReader {

    public static Stream<Arguments> lerCSV(String arquivo) {

        List<Arguments> dados = new ArrayList<>();

        try (InputStream inputStream =
                     TestDataReader.class
                             .getClassLoader()
                             .getResourceAsStream(arquivo)) {

            if (inputStream == null) {
                throw new RuntimeException(
                        "Arquivo não encontrado: " + arquivo
                );
            }

            BufferedReader reader =
                    new BufferedReader(
                            new InputStreamReader(
                                    inputStream,
                                    StandardCharsets.UTF_8
                            )
                    );

            CSVParser parser = CSVFormat.DEFAULT.builder()
                    .setHeader()
                    .setSkipHeaderRecord(true)
                    .build()
                    .parse(reader);

            for (CSVRecord record : parser) {

                List<Object> valores = new ArrayList<>();

                for (String coluna : parser.getHeaderNames()) {

                    String valor = record.get(coluna);

                    valores.add(converterValor(valor));
                }

                dados.add(
                        Arguments.of(
                                valores.toArray()
                        )
                );
            }

        } catch (IOException e) {

            throw new RuntimeException(
                    "Erro ao ler arquivo: " + arquivo,
                    e
            );
        }

        return dados.stream();
    }

    private static Object converterValor(String valor) {

        if (valor == null || valor.isBlank()) {
            return "";
        }

        valor = valor.trim();

        // Boolean
        if (valor.equalsIgnoreCase("true")
                || valor.equalsIgnoreCase("false")) {

            return Boolean.parseBoolean(valor);
        }

        // Integer
        try {
            return Integer.parseInt(valor);
        } catch (NumberFormatException ignored) {
        }

        // Long
        try {
            return Long.parseLong(valor);
        } catch (NumberFormatException ignored) {
        }

        // Double
        try {
            return Double.parseDouble(valor);
        } catch (NumberFormatException ignored) {
        }

        // String
        return valor.replace("\\n", "\n");
    }
}

