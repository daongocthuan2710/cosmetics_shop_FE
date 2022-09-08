package com.cosmetics.lenhan.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cosmetics.lenhan.Model.Entity.Cart;

public interface CartRepository extends JpaRepository<Cart, Integer>{

}
