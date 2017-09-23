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
public class LeaveFuction
{
  Database db = Database.Open("HR_System");

  public bool sufficientLeave(string username, int no_leave_applied, string type_of_leave){
    bool sufficientLeave = false;
    var sql = "SELECT TOP 1 "+type_of_leave+"_bal FROM tbl_employeeInfo WHERE username = @0";
    var leaveLeft = db.QueryValue(sql,username);
    int leaveDeduction  = no_leave_applied-leaveLeft;
    if(leaveDeduction > 0 ){
      sufficientLeave=true;
    }
    return sufficientLeave;
  }

  public bool pendingApprovalLeave(string username){
    bool hasPendingLeave = false;
    var sql = "SELECT COUNT(*) FROM tbl_leaveApplication WHERE submitted_by = @0 AND status = 'Pending Approval' ";
    var pendingApprovalLeave = db.QueryValue(sql,LoginFunction.getNamebyUsername(username));
    if(pendingApprovalLeave > 0){
       hasPendingLeave = true;
    }
    return hasPendingLeave;
  }

  public void reduceLeave(int id,int no_days_applied, string type_of_leave, string username){
      var sql = "";
    if(type_of_leave == "annual_leave"){
      sql = "SELECT TOP 1 a."+type_of_leave+"_bal AS leave_bal, a.username AS username FROM tbl_employeeInfo a INNER JOIN tbl_leaveApplication b on a.username = b.username_submitted WHERE b.ID = @0";
    }else{
      sql = "SELECT TOP 1 a."+type_of_leave+"_bal AS leave_bal, a.username AS username FROM tbl_employeeInfo a INNER JOIN tbl_leaveApplication b on a.username = b.username_submitted WHERE type_of_leave = 'Medical leave' AND username_submitted='"+username+"' ORDER BY b.ID DESC";
    }

    var result = db.QuerySingle(sql,id);
    sql = "UPDATE tbl_employeeInfo SET "+type_of_leave+"_bal = @0 WHERE username=@1";
    db.Execute(sql,(result.leave_bal - no_days_applied),result.username);
  }




}
