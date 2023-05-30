package com.petworld.converter;

import com.petworld.entity.Product;
import com.petworld.dto.productDto.request.ProductDtoRequest;
import com.petworld.dto.productDto.request.UpdateProductDtoRequest;
import com.petworld.dto.productDto.response.ProductDetailDtoResponse;
import com.petworld.dto.productDto.response.ProductDtoResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class ProductConverter{
    private final MarkConverter markConverter;
    private final ImageDetailsConverter imageDetailsConverter;

    public Page<ProductDtoResponse> entitiesToDtos(Page<Product> products){
        Page<ProductDtoResponse> productDtoResponses = products.map(product -> entityToDto(product));
        return productDtoResponses;
    }

    public ProductDtoResponse entityToDto(Product product){
        ProductDtoResponse productDto = new ProductDtoResponse();
        BeanUtils.copyProperties(product, productDto);
        productDto.setMarkDtoResponse(markConverter.entityToDto(product.getMark()));
        return productDto;
    }

    //Create a new product
    public Product dtoToEntity(ProductDtoRequest productDtoRequest){
        Product product = new Product();
        BeanUtils.copyProperties(productDtoRequest, product);
        product.setMark(markConverter.dtoToEntity(productDtoRequest.getMarkDtoRequest()));
        return product;
    }

    //Update a product
    public Product dtoToEntity(UpdateProductDtoRequest updateProductDtoRequest, Product product){
        BeanUtils.copyProperties(updateProductDtoRequest, product);
        return product;
    }

    public ProductDetailDtoResponse entityToProductDetailDto(Product product){
        ProductDetailDtoResponse productDetailDtoResponse = new ProductDetailDtoResponse();
        BeanUtils.copyProperties(product, productDetailDtoResponse);
        productDetailDtoResponse.setImageDetailList(imageDetailsConverter.entititesToDtos(product.getImageDetails()));
        return productDetailDtoResponse;
    }

}
