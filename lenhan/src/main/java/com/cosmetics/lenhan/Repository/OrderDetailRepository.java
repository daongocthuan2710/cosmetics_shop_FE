package com.cosmetics.lenhan.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cosmetics.lenhan.Model.Entity.OrderDetail;

public interface OrderDetailRepository extends JpaRepository<OrderDetail, Integer>{

}
