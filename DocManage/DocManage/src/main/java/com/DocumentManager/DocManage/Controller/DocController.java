package com.DocumentManager.DocManage.Controller;

import java.util.List;
import java.util.Optional;

import javax.management.AttributeNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.DocumentManager.DocManage.Model.Customer;
import com.DocumentManager.DocManage.Model.Doc;
import com.DocumentManager.DocManage.Model.SignUp;
import com.DocumentManager.DocManage.Repository.CustomerRepo;
import com.DocumentManager.DocManage.Repository.DocRepo;
import com.DocumentManager.DocManage.Service.LoginService;


@RestController
@CrossOrigin(origins="http://localhost:4200")
public class DocController {
	
	@Autowired
	private DocRepo drep;
	
	@GetMapping("/getdoc")
	public List<Doc> getdocs(){
		return drep.findAll();
	}
	
	@PostMapping("/adddoc")
	public Doc adddoc(@RequestBody Doc d) {
		return drep.save(d);
	}
	
	@GetMapping("/getdocbyid/{id}")
	public Optional<Doc> getdocbyid(@PathVariable int id) {
		return drep.findById(id);
	}
	
	
	@DeleteMapping("/deldoc/{id}")
	public void deletedoc(@PathVariable int id) {
		drep.deleteById(id);
//		return "delete";
	}
	
//	@GetMapping("/downdoc/{id}")
//	public Doc downloaddoc(@PathVariable int id) {
//		return drep.getById(id);
//	}
	
	
	@PutMapping("/updatedoc/{id}")
	public Doc updateDoc(@PathVariable int id,@RequestBody Doc doc) {
		return drep.save(doc);
	}
	
	@Autowired
	  private LoginService loginService;
	  
	  //Save Users (Register//SignUp)
	  @PostMapping("/registeruser")
	  public SignUp registerUser(@RequestBody SignUp user) throws Exception {
	    String tempEmailId = user.getEmailId();
	    if(tempEmailId != null && !"".equals(tempEmailId)) {
	    	SignUp userObj = loginService.fetchUserByEmailId(tempEmailId);
	      if(userObj != null) {
	        throw new Exception("User with "+tempEmailId+ " is already exists");
	      } 
	    }
	    SignUp userObj=null;
	    userObj = loginService.saveUser(user);
	    return userObj;
	  }
	  
	  
	  //Login User
	  @PostMapping("/login")
	  public SignUp loginUser(@RequestBody SignUp user) throws Exception {
	    String tempEmail= user.getEmailId();
	    String tempPass= user.getPassword();
	    SignUp userObj = null;
	    if(tempEmail != null && tempPass != null) {
	      userObj = loginService.fetchUserByEmailIdAndPassword(tempEmail, tempPass);
	    }
	    if(userObj == null) {
	      throw new Exception ("User with "+tempEmail+ " does not exists");
	    }
	    return userObj;
	  }
	  
	  @Autowired
		private CustomerRepo crepo;
	  
	  @PostMapping("/customer")
	  public Customer addMessage(@RequestBody Customer cust) {
		  return crepo.save(cust);
	  }
}

	
