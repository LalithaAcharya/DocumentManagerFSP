package com.DocumentManager.DocManage.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.DocumentManager.DocManage.Model.Customer;


@Repository
public interface CustomerRepo extends JpaRepository<Customer,Integer>{

}
