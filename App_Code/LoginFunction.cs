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


	public string MD5Hash(string input)
	{
	 input = String.IsNullOrEmpty(input)?"":input;
   StringBuilder hash = new StringBuilder();
   MD5CryptoServiceProvider md5provider = new MD5CryptoServiceProvider();
   byte[] bytes = md5provider.ComputeHash(new UTF8Encoding().GetBytes(input));

   for (int i = 0; i < bytes.Length; i++)
   {
     hash.Append(bytes[i].ToString("x2"));
   }
   return hash.ToString();
	}


}
