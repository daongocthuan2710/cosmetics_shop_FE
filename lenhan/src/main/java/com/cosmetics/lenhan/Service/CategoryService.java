package com.cosmetics.lenhan.Service;

import org.springframework.http.ResponseEntity;


public interface CategoryService {

	ResponseEntity<?> createCategory(String CategoryName);
}
