package com.capstone.demo.exception;

//why is it not the class name
//and where does runtime exception come from
public class ResourceNotFoundException extends RuntimeException{
	private static final long serialVersionUID =1L;
	
public ResourceNotFoundException(String message) {
	super(message);
}
}
