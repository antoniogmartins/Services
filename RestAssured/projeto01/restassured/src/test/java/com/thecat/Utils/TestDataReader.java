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

                int id = Integer.parseInt(
                        record.get("id")
                );

                int statusEsperado = Integer.parseInt(
                        record.get("statusEsperado")
                );

                String tituloEsperado =
                        record.get("tituloEsperado");

                String corpoEsperado =
                        record.get("corpoEsperado")
                                .replace("\\n", "\n");

                dados.add(
                        Arguments.of(
                                id,
                                statusEsperado,
                                tituloEsperado,
                                corpoEsperado
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
}
