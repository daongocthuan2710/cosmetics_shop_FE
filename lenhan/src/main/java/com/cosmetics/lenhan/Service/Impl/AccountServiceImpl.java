package com.cosmetics.lenhan.Service.Impl;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.cosmetics.lenhan.Model.DTO.Request.AccountRequest;
import com.cosmetics.lenhan.Model.DTO.Response.AccountResponse;
import com.cosmetics.lenhan.Service.AccountService;

@Service
public class AccountServiceImpl implements AccountService{

	@Override
	public ResponseEntity<AccountResponse> createAccount(AccountRequest accountRequest) {
		// TODO Auto-generated method stub
		return null;
	}

}
