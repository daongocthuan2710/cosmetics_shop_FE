package com.cosmetics.lenhan.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cosmetics.lenhan.Model.Entity.Brand;
import com.cosmetics.lenhan.Model.Entity.Product;

public interface ProductRepository extends JpaRepository<Product, Integer>{

	Optional<Product> findByBrand(Brand brand);
}
