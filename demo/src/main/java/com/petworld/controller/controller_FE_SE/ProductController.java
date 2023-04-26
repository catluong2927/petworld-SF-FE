package com.petworld.controller.controller_FE_SE;


import com.petworld.dto.productDto.response.ProductDetailDtoResponse;
import com.petworld.dto.productDto.response.ProductDtoResponse;
import com.petworld.service.IProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/products")
@RequiredArgsConstructor
public class ProductController {
    private final IProductService productService;

    @GetMapping("")
    public ResponseEntity<?> findAllProducts() {
        List<ProductDtoResponse> productDtoResponses = productService.findAllProducts();
        if (productDtoResponses.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(productDtoResponses, HttpStatus.OK);
    }

    @GetMapping("/detail/{id}")
    public ResponseEntity<?> findProductById(@PathVariable("id") Long id){
        ProductDetailDtoResponse productDetailDtoResponse = productService.findById(id);
        if (productDetailDtoResponse == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(productDetailDtoResponse, HttpStatus.OK);
    }


}
