package com.cosmetics.lenhan.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cosmetics.lenhan.Model.Entity.Account;

public interface AccountRepository extends JpaRepository<Account, Integer>{

}
