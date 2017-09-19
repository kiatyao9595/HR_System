using System;
using System.Xml;
using System.IO;
using System.Text;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebMatrix.Data;
using Microsoft.VisualBasic;
using Microsoft.VisualBasic.FileIO;
using System.Security.Cryptography;

/// <summary>
/// Summary description for ArchiveTable
/// </summary>
public class LoginFunction
{
	public String sql = "";
	Database db = Database.Open("HR_System");

	public string MD5Hash(string input)
	{
	 input = String.IsNullOrEmpty(input)?"":input.ToString();
   StringBuilder hash = new StringBuilder();
   MD5CryptoServiceProvider md5provider = new MD5CryptoServiceProvider();
   byte[] bytes = md5provider.ComputeHash(new UTF8Encoding().GetBytes(input));

   for (int i = 0; i < bytes.Length; i++)
   {
     hash.Append(bytes[i].ToString("x2"));
   }
   return hash.ToString();
	}

	public bool checkUsername(String username){
	  bool userExist = false;
		sql = "SELECT COUNT(*) FROM tbl_employeeInfo WHERE username = @0";
		var result = db.QueryValue(sql,username);
		if(result > 0){
			userExist = true;
		}
		return userExist;
	}

	public bool checkPassword(String username,String password){
		bool validPassword = false;
		sql = "SELECT COUNT(*) FROM tbl_employeeInfo WHERE password = @0 AND username = @1";
		var result = db.QueryValue(sql, MD5Hash(password), username);
		if(result > 0){
			validPassword = true;
		}
		return validPassword;
	}

	public bool checkUserStatus(String username, String password){
		bool userActive = false;
		sql = "SELECT TOP 1 status FROM tbl_employeeInfo WHERE password = @0 AND username = @1";
		var result = db.QueryValue(sql, MD5Hash(password), username);
		if(result == "Active" ){
			userActive = true;
		}
		return userActive;
	}

	public bool checkUserRetryCount(String username){
		bool noExceedCount = false;
		sql = "SELECT TOP 1 retry_count FROM tbl_employeeInfo WHERE username = @0";
		int result = db.QueryValue(sql, username);
		if(result <= 2 ){
			noExceedCount = true;
		}
		return noExceedCount;
	}


	public void increaseRetryCount(String username){
		sql = "SELECT TOP 1 retry_count FROM tbl_employeeInfo WHERE username = @0";
		int retry_count = db.QueryValue(sql,username);
		retry_count++;

		sql = "UPDATE tbl_employeeInfo SET retry_count = @0 WHERE username = @1";
		db.Execute(sql,retry_count,username);

		if(retry_count >= 3){
			sql = "UPDATE tbl_employeeInfo SET status = 'Inactive' WHERE username = @0";
			db.Execute(sql,username);
		}

	}

	public void ResetRetryCount(int id){
			sql = "UPDATE tbl_employeeInfo SET retry_count = 0, status = 'Active' WHERE ID = @0";
			db.Execute(sql,id);
	}
	public void ResetRetryCount(String username){
			sql = "UPDATE tbl_employeeInfo SET retry_count = 0, status = 'Active' WHERE username = @0";
			db.Execute(sql,username);
	}

	public static String getNamebyUsername(String username){
		 var sql = "SELECT TOP 1 employeeName FROM tbl_employeeInfo WHERE username = @0";
		 Database db = Database.Open("HR_System");
		 String result = db.QueryValue(sql,username);
		 return result;
	}
	public static String getIdbyUsername(String username){
		 var sql = "SELECT TOP 1 ID FROM tbl_employeeInfo WHERE username = @0";
		 Database db = Database.Open("HR_System");
		 String result = db.QueryValue(sql,username).ToString();
		 return result;
	}



}
