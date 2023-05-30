package com.petworld.dto.productDto.request;

import com.petworld.entity.ImageDetail;
import com.petworld.dto.markDto.request.MarkDtoRequest;
import lombok.*;

import java.util.List;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class ProductDtoRequest {
    private String name;
    private String description;
    private String image;
    private Double price;
    private String productCode;
    private String protein;
    private String fats;
    private String carbohydrates;
    private String minerals;
    private String vitamins;
    private String animal;
    private boolean status;
    private MarkDtoRequest markDtoRequest;
    private Integer sale;
    private List<ImageDetail> imageDetail;
}
