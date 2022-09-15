package com.cosmetics.lenhan.Service;

import org.springframework.http.ResponseEntity;

import com.cosmetics.lenhan.Model.DTO.Response.UserInformationResponse;


public interface UserInformationService {

	ResponseEntity<UserInformationResponse> editUserInformation(Integer id); 
}
