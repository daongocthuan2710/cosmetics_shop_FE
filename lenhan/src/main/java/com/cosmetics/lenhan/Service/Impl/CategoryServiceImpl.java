package com.cosmetics.lenhan.Service.Impl;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.cosmetics.lenhan.Repository.CategoryRepository;
import com.cosmetics.lenhan.Service.CategoryService;

@Service
public class CategoryServiceImpl implements CategoryService{

	final CategoryRepository categoryRepository;
	
	@Override
	public ResponseEntity<?> createCategory(String CategoryName) {
		// TODO Auto-generated method stub
		return null;
	}

}
