package com.cosmetics.lenhan.Service;

import org.springframework.http.ResponseEntity;

import com.cosmetics.lenhan.Model.DTO.Request.LoginRequest;
import com.cosmetics.lenhan.Model.DTO.Request.SignupRequest;
import com.cosmetics.lenhan.Model.DTO.Response.LoginResponse;

public interface AuthService {

	ResponseEntity<LoginResponse> signup(SignupRequest dto);
	
	ResponseEntity<LoginResponse> login(LoginRequest dto);
}
