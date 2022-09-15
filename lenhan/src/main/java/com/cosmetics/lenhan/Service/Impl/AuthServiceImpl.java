package com.cosmetics.lenhan.Service.Impl;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.cosmetics.lenhan.Exception.ResourceNotFoundException;
import com.cosmetics.lenhan.Model.DTO.Request.LoginRequest;
import com.cosmetics.lenhan.Model.DTO.Request.SignupRequest;
import com.cosmetics.lenhan.Model.DTO.Response.LoginResponse;
import com.cosmetics.lenhan.Model.Entity.Account;
import com.cosmetics.lenhan.Repository.AccountRepository;
import com.cosmetics.lenhan.Security.JwtUtils;
import com.cosmetics.lenhan.Security.Service.UserDetailsImpl;
import com.cosmetics.lenhan.Service.AuthService;

@Service
public class AuthServiceImpl implements AuthService{

	final AuthenticationManager authenticationManager;
	final AccountRepository accountRepository;
	final PasswordEncoder passwordEncoder;
	final JwtUtils jwtUtils;
	
	public AuthServiceImpl(AuthenticationManager authenticationManager, AccountRepository accountRepository,
			PasswordEncoder passwordEncoder, JwtUtils jwtUtils) {
		this.authenticationManager = authenticationManager;
		this.accountRepository = accountRepository;
		this.passwordEncoder = passwordEncoder;
		this.jwtUtils = jwtUtils;
	}

	@Override
	public ResponseEntity<LoginResponse> signup(SignupRequest dto) {
		// TODO Auto-generated method stub
		
		return null;
	}

	@Override
	public ResponseEntity<LoginResponse> login(LoginRequest dto) {
		// TODO Auto-generated method stub
		Optional<Account> optional = accountRepository.findByUserName(dto.getUsername());
		if(!optional.isPresent()) {
			throw new ResourceNotFoundException("Username or password is incorrect. Please try again");
		}
		if(!optional.get().isStatus()== true) {
			throw new ResourceNotFoundException("Account is disable can not Login .");
		}
		if(!BCrypt.checkpw(dto.getPassword(),optional.get().getPassword())){
			throw new ResourceNotFoundException("Username or password is incorrect. Please try again");
		}
		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(dto.getUsername(), dto.getPassword()));
		SecurityContextHolder.getContext().setAuthentication(authentication);
		String jwt = jwtUtils.generateJwtToken(authentication);
		UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
		List<String> roles = userDetails.getAuthorities().stream().map(item -> item.getAuthority())
				.collect(Collectors.toList());
		return ResponseEntity.ok(new LoginResponse(jwt, userDetails.getId(), userDetails.getUsername(), roles.get(0), userDetails.isStatus()));
		
	}

	
}
