package com.capstone.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

//stores to the table
@Entity
@Table(name="coin")
//you need pojo so users can make changes to table

public class Coin {
//what is id?
@Id	
@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private String coin;
	private String ticker;
	private String price;
	private String volume;
public Coin()
{
//hibernate uses empty constructor to create object
}


//equivalent of props
public Coin(String coin,String ticker, String price,String volume) {
	super();
	this.coin=coin;
	this.ticker=ticker;
	this.price=price;
	this.volume=volume;
}

public int getId() {
	return id;
}


public void setId(int id) {
	this.id = id;
}


public String getCoin() {
	return coin;
}

public void setCoin(String coin) {
	this.coin = coin;
}

public String getTicker() {
	return ticker;
}

public void setTicker(String ticker) {
	this.ticker = ticker;
}

public String getPrice() {
	return price;
}

public void setPrice(String price) {
	this.price = price;
}

public String getVolume() {
	return volume;
}

//why did she comment out override

public void setVolume(String volume) {
	this.volume = volume;
}
}





