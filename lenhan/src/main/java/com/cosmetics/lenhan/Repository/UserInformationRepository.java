package com.cosmetics.lenhan.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cosmetics.lenhan.Model.Entity.UserInformation;

public interface UserInformationRepository extends JpaRepository<UserInformation, Integer>{

}
