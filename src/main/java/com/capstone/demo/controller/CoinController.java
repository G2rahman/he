package com.capstone.demo.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.capstone.demo.exception.ResourceNotFoundException;
import com.capstone.demo.model.Coin;
import com.capstone.demo.repository.CoinRepository;



@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/home")
public class CoinController {


	@Autowired
	private CoinRepository platform;
//list not class
	@GetMapping("/allcoins")
	public List<Coin>getALLCoins()
	{
	//is findall the method?
		return platform.findAll();
	}
///I HAVE MORE THAN 2 PROPERTIES, I DONT HAVE ID IN MY TABLE
	@PostMapping("/addcoin")
	public Coin newCOINS(@RequestBody Coin st)
	{
		return platform.save(st);
	}
	@GetMapping("/coin/{coin}")
	public ResponseEntity<Coin> getcoin(@PathVariable String coin)
	{
		Coin s=platform.findByCoin(coin).get(0);
//not needed
		return ResponseEntity.ok(s);
	}
	@GetMapping("/id/{id}")
	public ResponseEntity<Coin> getcoinbyid(@PathVariable int id)
	{
		Coin s=platform.findById(id).orElseThrow();
//not needed
		return ResponseEntity.ok(s);
	}
	@GetMapping("/coins/{ticker}")
//why is it name
	public List<Coin> getCoinByTicker(@PathVariable String ticker)
	{
	List<Coin>coinname=platform.findByTicker(ticker);

	if(coinname.isEmpty())
	{
		System.out.println(new ResourceNotFoundException("Coin(s) with the ticker "+ticker+" not found"));
	}
		return coinname;//or FINDby ticker(ticker);
	}
	@PutMapping("/coin/{id}")
	public ResponseEntity<Coin> updateCoin(@PathVariable int id ,@RequestBody Coin gold)
	{
		Coin s=platform.findById(id).orElseThrow();
		s.setCoin(gold.getCoin());
		s.setTicker(gold.getTicker());
		s.setPrice(gold.getPrice());
		s.setVolume(gold.getVolume());
		Coin updatedtable=platform.save(s);
		return ResponseEntity.ok(updatedtable);
	}
//	@PutMapping("/id/{id}")
//	public ResponseEntity<Coin> updateCoin(@PathVariable int id,String ticker,@RequestBody Coin gold)
//	{
//		Coin s=platform.findById(id).orElseThrow();
//		s.setCoin(gold.getCoin());
//		s.setTicker(gold.getTicker());
//		s.setPrice(gold.getPrice());
//		s.setVolume(gold.getVolume());
//		Coin updatedtable=platform.save(s);
//		return ResponseEntity.ok(updatedtable);
//	}
	
	
	
	@DeleteMapping("/coin/{coin}")
	public String deleteCoin(@PathVariable String coin) {
		Coin silver=platform.findByCoin(coin).get(0);
		platform.delete(silver);
		return "The coin: "+ coin +" is removed from the database.";
	}
	
	@DeleteMapping("/id/{id}")
	public String deleteCoin(@PathVariable int id) {
		Coin silver=platform.findById(id).orElseThrow();
		platform.delete(silver);
		return "The id: "+ id +" is removed from the database.";
	}
}
