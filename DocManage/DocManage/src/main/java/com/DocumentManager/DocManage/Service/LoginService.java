package com.DocumentManager.DocManage.Service;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.DocumentManager.DocManage.Model.Doc;
import com.DocumentManager.DocManage.Model.SignUp;
import com.DocumentManager.DocManage.Repository.DocRepo;
import com.DocumentManager.DocManage.Repository.LoginRepo;

@Service
public class LoginService {
	
	@Autowired
	private LoginRepo logRepo;
	
	
	public SignUp saveUser(SignUp user) {
		return logRepo.save(user);
	}
	
	
	public SignUp fetchUserByEmailId(String email) {
		return logRepo.findByEmailId(email);
	}
	
	
	public SignUp fetchUserByEmailIdAndPassword(String email, String password) {
		return logRepo.findByEmailIdAndPassword(email, password);
	}
	
//	@Autowired
//	private DocRepo drep;
//	
//	public Doc updatedoc(Doc doc,) {
//		Integer id = doc.getId();
//		Doc std = drep.findById(id).get();
//		std.setUserName(doc.getUserName());
//		std.setFileName(doc.getFileName());
//		std.setFileType(doc.getFileType());
//		return drep.save(std);
//	}

}
