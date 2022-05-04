package com.DocumentManager.DocManage.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.DocumentManager.DocManage.Model.Doc;

@Repository
public interface DocRepo extends JpaRepository<Doc,Integer> {


//	Doc set(int id, Doc doc);

}
