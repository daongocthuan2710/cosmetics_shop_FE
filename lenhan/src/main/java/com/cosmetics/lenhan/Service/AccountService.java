package com.cosmetics.lenhan.Service;

import org.springframework.http.ResponseEntity;

import com.cosmetics.lenhan.Model.DTO.Request.AccountRequest;
import com.cosmetics.lenhan.Model.DTO.Response.AccountResponse;


public interface AccountService {
	
	

	ResponseEntity<AccountResponse> createAccount(AccountRequest accountRequest);
	
	
}
