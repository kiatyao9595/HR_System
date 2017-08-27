/* ================================================================
 * Javascript functions that used in JomPAY reports.
 * Created by: SK Chai
 * Last updated: 05-Jan-2015
 * ================================================================*/

$(document).ready(function () {
    var links = $('ul.nav.navbar-nav.side-nav').children().find("a");
    $.each(links, function (key, value) {
        if (value.href == document.URL.split('?')[0]) {
            $(this).parent().addClass("active");
            $(this).parent().parent().addClass("in");
        }
    })

    // Select all when onfocus
    $("input:text").focus(function () { $(this).select(); });

    // Check if start date and end date are empty
    $('form').submit(function () {
        // Get the Login Name value and trim it
        var name = $.trim($('#log').val());


    });
    // End checking


    // To remove the default webgrid page.
    $("tfoot").remove();


    $('[data-toggle="tooltip"]').tooltip();

    $('[data-toggle="popover"]').popover();

    $('#datatable').DataTable({
        "pageLength": 10,
        "paging": true,
        "ordering": true
    }
    );

    $('#datatable_long').DataTable({
        "pageLength": 100,
        "paging": true,
        "scrollX": true,
        "order": [[1, "asc"]]
    }
    );


    /************************************************ 
    * OnChange to load category list and transaction
    * category list
    *************************************************/
    $('#category_name').change(function () {
        var parent_id = $("select#category_name").val();

        $.get("dropdown_process.cshtml", { parent: parent_id, list_type: 'trn_category' }, function (data, status) {
            $("select#transaction_category").empty().append(data);
        });
    });

    $('#team_name').change(function () {
        var team_code = $("select#team_name").val();
        $.get("dropdown_process.cshtml", { team_code: team_code, list_type: 'category' }, function (data, status) {
            $("select#category_name").empty().append(data);
        });
    });

    $('#master_status').change(function () {
        var status_code = $("select#master_status").val();
        //alert(status_code);
        $.post("dropdown_process.cshtml", { status_code: status_code, list_type: 'master_status' }, function (data, status) {
            if (status_code == 2 || status_code == 99) {
                $("textarea#status_details").attr("readonly", false);
            }
            else {
                $("textarea#status_details").attr("readonly", true);
            }
            $("textarea#status_details").empty().val(data);
        });
    });

    /*************************************************/

    /*** Change form action for difference purpose ***/
    $("button#create-master").click(function () {
        $("input#form_action").val("master");
    });

    $("button#create-proforma").click(function () {
        $("input#form_action").val("proforma");
    });

    $("a#copy-master").click(function () {
        $("input#form_action").val("copy");
    });

    $("button#next").click(function () {
        $("input#form_action").val("next");
    });

    $("button#delete").click(function () {
        $("input#form_action").val("delete");
    });

    $("button#update").click(function () {
        $("input#form_action").val("update");
    });
    /************************************************/

    // Load result via jquery
    $("button#searchlisting").click(function () {
        $("#searchresult").load("TransactionListing_result.cshtml", { start_date: $("#datepicker_start").val(), end_date: $("#datepicker_end").val(), team_name: $("#team_name").val() });
        //$('#e-eodrtcs_frame').contents().find('#datatable').bind('resize', function(){ $('#datatable').height($(this).height()); });
        var iframe = $("#e-eodrtcs_frame").contentWindow;
        $("#e-eodrtcs_frame").css({ height: '1000px' });
    });

    $("button#searchsummary").click(function () {
        $("#searchresult").load("SummaryReport_result.cshtml", { team_name: $("#team_name").val(), start_date: $("#datepicker_start").val(), end_date: $("#datepicker_end").val() });
    });

    $("button#preview").click(function () {
        if ($("#datepicker_start").datepicker("getDate") === null || $("#datepicker_end").datepicker("getDate") === null) {
            alert("Date not selected");
            return false;
        }
        else {
            $("#info-table").hide();
            var reportType = $("#report_type").val();
            switch (reportType) {
                case 'vp':
                    //$("#searchresult").load("FailValidatePayment.cshtml", { start_date: $("#datepicker_start").val(), end_date: $("#datepicker_end").val() });
                    //$('#searchresult_frame').attr('src', 'FailValidatePayment.cshtml');
                    $('form').attr('action', 'FailValidatePayment.cshtml');
                    break;
                case "nc":
                    //$("#searchresult").load("FailNotifyCompletion.cshtml", { start_date: $("#datepicker_start").val(), end_date: $("#datepicker_end").val() });
                    //$('#searchresult_frame').attr('src', 'FailNotifyCompletion.cshtml');
                    $('form').attr('action', 'FailNotifyCompletion.cshtml');
                    break;
                case "ou":
                    //$("#searchresult").load("OnUsTransaction.cshtml", { start_date: $("#datepicker_start").val(), end_date: $("#datepicker_end").val() });
                    //$('#searchresult_frame').attr('src', 'OnUsTransaction.cshtml');
                    $('form').attr('action', 'OnUsTransaction.cshtml');
                    break;
            }
        }

    });
    $("button#listing").click(function () {
        if ($("#datepicker_start").datepicker("getDate") === null || $("#datepicker_end").datepicker("getDate") === null) {
            alert("Date not selected");
            return false;
        }
        else {
            $("#info-table").hide();
            //$("#searchresult").load("FileListing.cshtml", { start_date: $("#datepicker_start").val(), end_date: $("#datepicker_end").val() });
            //$('#searchresult_frame').attr('src', 'FileListing.cshtml');
            $('form').attr('action', 'FileListing.cshtml');
        }
    });

    // Confirm submission to create new record
    $("button#confirm-submission").click(function () {
        var $btn = $(this).button('loading');
        $.post("CreateNewRecord_Process.cshtml", $("#transactionForm").serialize(), function (data, status) {
            alert("Submission Status: " + status);
            if ($.trim(status) == "success") {
                window.location = data;
            }
            else {
                alert('Error! Record is not processed properly.');
            }

        });
    });

    // Confirm submission to create new daily report
    $("button#report-submission").click(function () {
        var $btn = $(this).button('loading');
        var check_date = $("#datepicker_start").val();
        var team_name = $("#team_name option:selected").text();
        var team_code = $("#team_name option:selected").val();
        $.post("SummaryReport_Process.cshtml", { report_action: 'set_daily_report', check_date: check_date, team_code: team_code }, function (data, status) {
            alert("Process Status: " + status);
            if ($.trim(data) == "success") {
                alert("Report has been submitted successfully");
                $('#ReportSubmitModal').modal('hide');
                window.location = 'TransactionSummaryReport.cshtml?start_date=' + check_date + '&end_date=' + check_date + '&searchtransactionlist=true&status=success';
            }
            //window.location = data;
        });
    });

});



/********************************************
 Initiate datepicker for calendar input
********************************************/
/*    $( "#received_date" ).datepicker({
        inline: true,
        "dateFormat": "yy-mm-dd",
          numberOfMonths: 3,
          changeMonth: true,
          changeYear: true,
          maxDate: '+2Y'
    });

    $( "#doc_creation_date" ).datepicker({
        inline: true,
        "dateFormat": "yy-mm-dd",
          numberOfMonths: 3,
          changeMonth: true,
          changeYear: true,
          maxDate: '+2Y'
    });

   $( "#lc_issue_date" ).datepicker({
        inline: true,
        "dateFormat": "yy-mm-dd",
        numberOfMonths: 3,
        changeMonth: true,
        changeYear: true,
        maxDate: '+2Y'        
    });

    $( "#invoice_date" ).datepicker({
        inline: true,
        "dateFormat": "yy-mm-dd",
        numberOfMonths: 3,
        changeMonth: true,
        changeYear: true,
        maxDate: '+2Y'        
    });
        
    $( "#lc_tenor_lading_date" ).datepicker({
        inline: true,
        "dateFormat": "yy-mm-dd",
        numberOfMonths: 3,
        changeMonth: true,
        changeYear: true,
        maxDate: '+2Y'        
    });

    $( "#shp_date" ).datepicker({
        inline: true,
        "dateFormat": "yy-mm-dd",
        numberOfMonths: 3,
        changeMonth: true,
        changeYear: true,
        maxDate: '+2Y'        
    });

    $( "#completed_date" ).datepicker({
        inline: true,
        "dateFormat": "yy-mm-dd",
        numberOfMonths: 3,
        changeMonth: true,
        changeYear: true,
        maxDate: '+2Y'        
    });

    $( "#datepicker_start" ).datepicker({
        inline: true,
        "dateFormat": "yy-mm-dd",
          numberOfMonths: 3,
          changeMonth: true,
          changeYear: true,
          maxDate: '+2Y',
          onClose: function(dateText, inst) {
            $("#datepicker_end").focus();
            },
          onSelect: function(selected) {
          $("#datepicker_end").datepicker("option","minDate", selected)
          }

    });

    $( "#datepicker_end" ).datepicker({
        inline: true,
        "dateFormat": "yy-mm-dd",
          numberOfMonths: 3,
          changeMonth: true,
          changeYear: true,
          maxDate: '+2Y',
          onSelect: function(selected) {
          $("#datepicker_start").datepicker("option","maxDate", selected)
          }

    });*/
// End datepicker


    $('#form').submit(function () {
        if ($("#datepicker_start").datepicker("getDate") === null || $("#datepicker_end").datepicker("getDate") === null) {
            alert("Date not selected");
            return false;
        }
        else {     
            $("#info-table").hide();      
            return true;
        }
    });


function CopyToClipboard() {
    var controlValue = document.getElementById('copyfilename').attributes.getNamedItem('data-content').textContent;
    window.prompt("Copy payment filename to clipboard: Ctrl+C, Enter", controlValue);
}

function OpenDetails(report_type, id) {
    var newWindow = window.open("MessageDetails.cshtml?report_type="+report_type+"&id="+id, "blank","left=1, top=1, scrollbars=yes, width=800");
}

function PrintPage() {
    window.print();
}

function overWriteFile() {      
            var reportType = $("select#report_type",parent.document).val();
            var startDate = $("#datepicker_start", parent.document).val();            
            var endDate = $("#datepicker_end", parent.document).val();  
            $('#generatefile').attr("disabled","disabled");       
            $("#searchresult").load("GenerateInterfaceFile.cshtml", { start_date: startDate, end_date: endDate, generate:"yes", report_type: reportType, duplicate:"yes" });
            $('div#myModal').modal('hide');
   
}

function generateFile() {
            var reportType = $("select#report_type",parent.document).val();
            var startDate = $("#datepicker_start", parent.document).val();            
            var endDate = $("#datepicker_end", parent.document).val(); 
            $('#generatefile').attr("disabled","disabled");           
            $("#searchresult").load("GenerateInterfaceFile.cshtml", { start_date: startDate, end_date: endDate, generate:"yes", report_type: reportType });
            
        
}

function resizeIframe(obj) {
                    obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
                    //parent.resizeResult('searchresult', obj.contentWindow.document.body.scrollHeight);
                  }

function resizeResult(frameName) {
                    var get_obj = document.getElementById(frameName + '_frame');
                    resizeIframe(get_obj);
                  }

function scrollTop() {
          $('#page-wrapper').scrollTop(0);
      }

function goBack() {
    window.history.back();
}