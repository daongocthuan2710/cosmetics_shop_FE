package com.cosmetics.lenhan.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cosmetics.lenhan.Model.Entity.Category;

public interface CategoryRepository extends JpaRepository<Category, Integer>{

}
