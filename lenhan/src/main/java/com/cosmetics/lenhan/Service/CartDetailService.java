package com.cosmetics.lenhan.Service;

import org.springframework.http.ResponseEntity;

import com.cosmetics.lenhan.Model.DTO.Request.AddToCartRequest;

public interface CartDetailService {

	ResponseEntity<?> addToCart(AddToCartRequest dto);
	
	ResponseEntity<?> editCartItem(AddToCartRequest dto);
	
	ResponseEntity<?> getListCartItems(Integer cartId);
	
	ResponseEntity<?> deleteCartItem(Integer cartId, Integer productId);
	
	ResponseEntity<?> deleteAllCartItems(Integer cartId);
}
