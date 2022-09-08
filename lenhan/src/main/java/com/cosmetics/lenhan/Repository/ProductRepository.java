package com.cosmetics.lenhan.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cosmetics.lenhan.Model.Entity.Product;

public interface ProductRepository extends JpaRepository<Product, Integer>{

}
