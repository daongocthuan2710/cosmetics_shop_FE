package com.cosmetics.lenhan.Service;

import org.springframework.http.ResponseEntity;

import com.cosmetics.lenhan.Model.Entity.Brand;

public interface BrandService {

	ResponseEntity<Brand> createBrand(String brandName);  
	
	ResponseEntity<?> deleteBrand(Integer id); 
}
