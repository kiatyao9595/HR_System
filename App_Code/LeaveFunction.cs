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

  public bool sufficientLeave(string username, int no_leave_applied){
    bool sufficientLeave = false;
    var sql = "SELECT TOP 1 no_of_leave_left FROM tbl_employeeInfo WHERE username = @0";
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

  public void reduceLeave(int id,int no_days_applied){
    var sql = "SELECT TOP 1 a.no_of_leave_left AS no_of_leave_left, a.username AS username FROM tbl_employeeInfo a INNER JOIN tbl_leaveApplication b on a.username = b.username_submitted WHERE b.ID = @0";
    var result = db.QuerySingle(sql,id);
    sql = "UPDATE tbl_employeeInfo SET no_of_leave_left = @0 WHERE username=@1";
    db.Execute(sql,(result.no_of_leave_left - no_days_applied),result.username);

  }


}
