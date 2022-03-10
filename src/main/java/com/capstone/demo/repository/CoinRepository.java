package com.capstone.demo.repository;
//so you can make a list
//import java.util.List;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.capstone.demo.model.Coin;

//connects spring to sql
//jpa repo?
@Repository
//use table name?
public interface CoinRepository extends JpaRepository<Coin,Integer>{
//
//	List<Gettersetter2>findAll();

//	Gettersetter2 save(Gettersetter2 st);
//	
	List<Coin> findByCoin(String coin);
	List<Coin> findByTicker(String ticker);
}