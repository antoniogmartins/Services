package br.com.martins.framework.models.products;

import lombok.*;

import java.math.BigDecimal;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProductResponse {

    private Long id;
    private String name;
    private String description;
    private BigDecimal price;
    private Integer quantity;
    private String category;
    private Boolean active;

    private String createdAt;
    private String updatedAt;
}