package com.DocumentManager.DocManage.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.DocumentManager.DocManage.Model.SignUp;

@Repository
public interface LoginRepo extends JpaRepository<SignUp,Integer> {
	
	public SignUp findByEmailId(String emailId);
    public SignUp findByEmailIdAndPassword(String emailId, String password);

}
