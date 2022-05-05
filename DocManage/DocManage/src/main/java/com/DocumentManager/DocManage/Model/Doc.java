package com.DocumentManager.DocManage.Model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Doc {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String userName;
	private String fileName;
	private String fileType;
	private String file;
	private String discrption;
	public Doc(int id, String userName, String fileName, String fileType, String file, String discrption) {
		super();
		this.id = id;
		this.userName = userName;
		this.fileName = fileName;
		this.fileType = fileType;
		this.file = file;
		this.discrption = discrption;
	}
	public Doc() {
		super();
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getFileName() {
		return fileName;
	}
	public void setFileName(String fileName) {
		this.fileName = fileName;
	}
	public String getFileType() {
		return fileType;
	}
	public void setFileType(String fileType) {
		this.fileType = fileType;
	}
	public String getFile() {
		return file;
	}
	public void setFile(String file) {
		this.file = file;
	}
	public String getDiscrption() {
		return discrption;
	}
	public void setDiscrption(String discrption) {
		this.discrption = discrption;
	}
	

}
