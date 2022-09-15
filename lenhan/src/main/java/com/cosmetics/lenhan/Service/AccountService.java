package com.cosmetics.lenhan.Service;

import org.springframework.http.ResponseEntity;

import com.cosmetics.lenhan.Model.DTO.Request.ChangePasswordRequest;
import com.cosmetics.lenhan.Model.DTO.Response.AccountResponse;


public interface AccountService {
	
	ResponseEntity<?> ChangePassword(Integer id, ChangePasswordRequest dto);
	
	ResponseEntity<AccountResponse> ChangeRole(Integer id, Integer roledId);
	
	ResponseEntity<AccountResponse> ChangeStatus(Integer id, boolean status);
	
	ResponseEntity<?> getListAccount(String searchCode, Integer roleId, boolean status, String sort);
}
