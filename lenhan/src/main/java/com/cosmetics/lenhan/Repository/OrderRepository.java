package com.cosmetics.lenhan.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cosmetics.lenhan.Model.Entity.Order;

public interface OrderRepository extends JpaRepository<Order, Integer>{

}
