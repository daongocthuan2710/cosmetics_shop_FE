package com.cosmetics.lenhan.Service.Impl;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import com.cosmetics.lenhan.Model.DTO.Request.ChangePasswordRequest;
import com.cosmetics.lenhan.Model.DTO.Response.AccountResponse;
import com.cosmetics.lenhan.Service.AccountService;

@Service
public class AccountServiceImpl implements AccountService{

	
	@Override
	public ResponseEntity<?> ChangePassword(Integer id, ChangePasswordRequest dto) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ResponseEntity<AccountResponse> ChangeRole(Integer id, Integer roledId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ResponseEntity<AccountResponse> ChangeStatus(Integer id, boolean status) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ResponseEntity<?> getListAccount(String searchCode, Integer roleId, boolean status, String sort) {
		// TODO Auto-generated method stub
		return null;
	}

	

}
