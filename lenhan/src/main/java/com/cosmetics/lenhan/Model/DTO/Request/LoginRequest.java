package com.cosmetics.lenhan.Model.DTO.Request;

import javax.validation.constraints.NotEmpty;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginRequest {

	@NotEmpty
	private String username;
	
	@NotEmpty
	private String password;
}
