package com.cosmetics.lenhan.Model.Entity;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "cart_detail")
public class CartDetail {

	@EmbeddedId
	CartKey id;
	
	@Column(name = "quantity")
    @NotEmpty(message = "cannot generate quantity")
    private Integer quantity;
}
