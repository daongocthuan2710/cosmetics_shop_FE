package com.cosmetics.lenhan.Service;

import org.springframework.http.ResponseEntity;

import com.cosmetics.lenhan.Model.Entity.Cart;

public interface CartService {

	ResponseEntity<Cart> createCart(Integer accountId);
	
}
