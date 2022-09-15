package com.cosmetics.lenhan.Service;

import org.springframework.http.ResponseEntity;

import com.cosmetics.lenhan.Model.Entity.Brand;

public interface BrandService {

	ResponseEntity<Brand> createBrand(Brand dto);  
	
	ResponseEntity<Brand> editBrand(Integer id); 
	
	ResponseEntity<Brand> deleteBrand(Integer id); 
}
