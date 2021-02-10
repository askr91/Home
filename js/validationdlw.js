//*******************Select Post to Apply************************
function trade_select() {
  if ($('#applied_post').val() === 'ITI') {
    $('#trade_block').show();
   $('#trade').focus();                                                      
  } else {
    $('#trade_block').hide();
    $('#trade').val("");                      
    // $('#trade_hidden').val("");              
  }
}
//**********************************************************************


//**********************Auto Fill Permanet Address************************************************

    function fillperadd(f) {
      if(f.per_add.checked == true) {
      f.per_address.value = f.address.value;
      f.per_locality.value = f.locality.value;
      f.per_pincode.value = f.pincode.value;
     }

    else if(f.per_add.checked == false) {
      f.per_address.value = "";
      f.per_locality.value = "";
      f.per_city.value = "";
      f.per_state.value = "";
      f.per_pincode.value = "";
      }
      }
//**********************/Auto Fill Permanet Address************************************************

//****************************ON CHECK, ENABLE SUBMIT button IN UPLOAD FORM*****************************
function enableSubmit(f) {
      if(f.conditions.checked == true) {
        document.getElementById('submit').disabled = false;
        }
        else
        {
          document.getElementById('submit').disabled = true;
        }
      }
      
      

function enableSubmit1(f) {
      if(f.conditions_regi.checked == true) {
        document.getElementById('submit').disabled = false;
        }
        else
        {
          document.getElementById('submit').disabled = true;
        }
      }      

//**********************/ON CHECK ENABLE SUBMIT IN UPLOAD FORM************************************

//******************Capitalize Each Letter*******************************
function capitaliseFirstLetter(string) {
  var str = string.value.toUpperCase();
  document.getElementById(string.id).value = str;
}
//***************************************************************************

//*********************Enrollment No validation******************************
function allLetter(inputtxt)
      { 
      var letters = /^[0-9A-Za-z]+$/;
      if(!inputtxt.value.match(letters))
      {
      alert('Please Enter Alphabets and Numbers only');
      document.getElementById('enrollment').value="";
      document.getElementById('enrollment').focus();
      return false;
      }
      }

function allLetter1(inputtxt)
      { 
      var letters = /^[0-9A-Za-z]+$/;
      if(!inputtxt.value.match(letters))
      {
      alert('Please Enter Alphabets and Numbers only');
      document.getElementById('roll_code').value="";
      document.getElementById('roll_code').focus();
      return false;
      }
      }
      
function allLetter2(inputtxt)
      { 
      var letters = /^[0-9A-Za-z]+$/;
      if(!inputtxt.value.match(letters))
      {
      alert('Please Enter Alphabets and Numbers only');
      document.getElementById('roll_no').value="";
      document.getElementById('roll_no').focus();
      return false;
      }
      }      

function blockSpecialChar(event) {
                var en = document.getElementById('enrollment');
                var x = event.keyCode;
              if ((x >= 106 && x <= 123) || (x == 32) || (x >= 186 && x <= 191) || (x >= 219 && x <= 222) || (x == 16)) {
                document.getElementById('enrollment').value = '';
                alert ("Invalid Key Pressed");
                en.focus();
                return false;
              }
              return true;
}

//***************************************************************************

//*********************ITI Enrollment No validation******************************
function itiblockSpecialChar(event) {
                var en = document.getElementById('iti_regi_no');
                var x = event.keyCode;
              if ((x >= 106 && x <= 123) || (x == 32) || (x >= 186 && x <= 191) || (x >= 219 && x <= 222) || (x == 16)) {
                document.getElementById('iti_regi_no').value = '';
                alert ("Invalid Key Pressed");
                en.focus();
                return false;
              }
              return true;
}

//***************************************************************************

//****************************CAPTCHA VALIDATION*****************************
  // function validate_captcha(){
  //             $(document).ready(function() {
  //             $('#captcha').blur(function(event) {
  //             var captcha = $("#captcha").val();
  //             if(captcha == '') {
  //                 alert ('Please enter captcha!');
  //               } 
  //             else {
  //                 $.post("captcha.php", {getcaptchastring : 'yes'}, function(data) {
  //             if(captcha != data) {
  //                 alert('Wrong captcha entered!');
  //                 $("#captcha").val("");
  //                 }
  //               })
  //               }        
  //               });
  //           });
  //           }
// //*********************************************************************************

//***********************************CALCULATE AGE**************************** 
function chkage()
  { 
    var db = document.getElementById("date").value;
    var d = document.getElementById("date").value;
    dbs= db.split("/");
    var calday = dbs[1];
    var calmon = dbs[0];
    var calyear = dbs[2];

    if(!calage(calday,calmon,calyear))
      { 
        d.focus();
        document.getElementById("date").value='';
        return false; 
      }
  }

function calage(day,month,year)
  {
    var calday = day;   
    var calmon = month;
    var calyear = year;
    var now = new Date();
    // alert ("Current Date" + now);
    var yearNow = now.getFullYear();
    var monthNow = now.getMonth()+1;
    var dateNow = now.getDate();
    var cald = new Date(calyear,calmon-1,calday);
    // alert ("Calender Date" + cald);
    var dife = datediff(now,cald);
    // document.getElementById("age").innerHTML = dife;
  }

function datediff(date1, date2) 
  {
    var y1 = date1.getFullYear(), m1 = date1.getMonth(), d1 = date1.getDate(),
    y2 = date2.getFullYear(), m2 = date2.getMonth(), d2 = date2.getDate();
    if (d1 < d2) 
      {
        m1--;
        d1 += DaysInMonth(m2, y2);
          function DaysInMonth (month, year) 
            {
            return new Date(year, month, 0).getDate();
            }
      }
    
    if (m1 < m2) 
      {
        y1--;
        m1 += 12;
      }
      alert ("Your Age is: " + parseInt(y1-y2) + " Years " + parseInt(m1-m2) + " Months and " + parseInt(d1-d2) + " Days." );
    // return [parsInt(y1 - y2), parseInt(m1 - m2), parseInt(d1 - d2)];
  }
//***********************************/CALCULATE AGE**************************** 


//**********************Validate Name****************************************
function chkpls(str) {
  var index;
  var tmpStr;
  var tmpChar;
  var preString;
  var postString;
  var strlen;
  tmpStr = str.value.toLowerCase();
  strLen = tmpStr.length;
  if (strLen > 0) {
    for (index = 0; index < strLen; index++) {
      if (index == 0) {
        tmpChar = tmpStr.substring(0, 1).toUpperCase();
        postString = tmpStr.substring(1, strLen);
        tmpStr = tmpChar + postString;
        } 
      else {
        tmpChar = tmpStr.substring(index, index + 1);
        if (tmpChar === ' ' && index < (strLen - 1)) {
          tmpChar = tmpStr.substring(index + 1, index + 2).toUpperCase();
          preString = tmpStr.substring(0, index + 1);
          postString = tmpStr.substring(index + 2, strLen);
          tmpStr = preString + tmpChar + postString;
            }
          }
        }
    }

  str.value = tmpStr;
  var newValue = str.value;
  var newLength = newValue.length;
  var extraChars = ' ';
  var search;
  for (var i = 0; i != newLength; i++) {
    aChar = newValue.substring(i, i + 1);
    aChar = aChar.toUpperCase();
    search = extraChars.indexOf(aChar);
    if (search == -1 && (aChar < 'A' || aChar > 'Z')) {
      alert('Only Alphabetic Characters are allowed. Numbers, Special characters etc. are not allowed');
      str.value = '';
      str.focus();
      return false;
    }
  }
}

//***************************************************************************

//************************Select Enrollment for Board Type(Bihar & Others)********************

function board_enrollment() {
  if ($('#board').val() === '10') {
    $('#enrollment_bihar_block').show();
    $('#enrollment_all_block').hide();
    $('#enrollment').val("");
  } 
  else if($('#board').val() != '10') {
    $('#enrollment_all_block').show();
    $('#enrollment_bihar_block').hide();
    $('#roll_code').val(""); 
    $('#roll_no').val("");
  }
  else {
    $('#enrollment_bihar_block').hide();
    $('#enrollment_all_block').hide();
    $('#roll_code').val(""); 
    $('#roll_no').val("");
    $('#enrollment').val("");
  }
}

//*************************************************************



//************************Select Creamy Layer Status for OBC********************

function select_dt_crmy() {
  if ($('#community').val() === 'OBC') {
    $('#crmy_dt_block').show();
    $('#obc_cert_dt').focus();   
    
  } else {
    $('#crmy_dt_block').hide();
    $('#obc_cert_dt').val("");                            //07102018

  }
}

//**************************29-10-2020**********************
function select_community() {
  if ($('#community').val() === 'GEN') 
    {
        $('#community_ews_block').show();
        $('#community_obc_block').hide();
        $('#obc_cert_dt').val("");
        //$('#ews').focus();
        
    } 
  else if($('#community').val() === 'OBC') 
    {
        $('#community_obc_block').show();
        $('#community_ews_block').hide();
        $('#ews').val("");
        $('#obc_cert_dt').focus();
        
    }
  else 
    {
    $('#community_ews_block').hide();
    $('#community_obc_block').hide();
    $('#obc_cert_dt').val(""); 
    $('#ews').val("");
    
    }
}

//************************29-10-2020************************












//*************************Physically Challenge Status*****************************

function ph_hand() {

  var ph1 = document.getElementById('ph_handi');
   if (ph1.value == 'Yes') {
    document.getElementById('ph_type_block').style.display = 'block';
    var ph2 = document.getElementById('ph_type');
    ph2.focus();
  } 
  else 
  {
    document.getElementById('ph_type_block').style.display = 'none';
    document.getElementById('ph_type').value = '';                                              
  }
}

//*********************************************************************************

//*********************Check PIN CODE is Number****************************************
function checkpincode(str) {
  if (isNaN(str)) {
    alert('Please enter only numeric digits');
    document.getElementById('pincode').value = '';
    document.getElementById('per_pincode').value = '';

    return false;
  }

  return true;
}
//*********************/Check PIN CODE is Number****************************************


//*********************Uploading Documents Validations****************************************
function readPhoto(input) 
  {
      var fileSize = input.files[0].size / 1024  ; // in KB
      var filePath=input.value;
      var allowedExtensions= /(\.jpg|\.jpeg|\.png)$/i;
        if (!allowedExtensions.exec(filePath))
          {
          alert('Please upload file having extensions .jpeg/.jpg/.png only.');
          input.value='';
          fileInput.value='';
          return false;
          }

          if (fileSize>=50 || fileSize<15 )
            {
            alert('Please upload file having size 15KB to 50KB');
            fileSize='';
            input.value='';

          return false;
          }
          else
          {
            if (input.files && input.files[0]) {
              var reader = new FileReader();
              reader.onload = function (e) {
              $('#photo')
                .attr('src', e.target.result)
                .width(100)
                .height(100);
                };
              reader.readAsDataURL(input.files[0]);
              }
            }
  }

  function readSign(input) 
  {
      var fileSize = input.files[0].size / 1024  ; // in KB
      var fileSizeVal= fileSize.value;
      var filePath=input.value;
      var allowedExtensions= /(\.jpg|\.jpeg|\.png)$/i;
        if (!allowedExtensions.exec(filePath))
          {
          alert('Please upload file having extensions .jpeg/.jpg/.png only.');
          input.value='';
          return false;
          }

          if (fileSize>=30 || fileSize<5 )
            {
            alert('Please upload file having size 5KB to 30KB');
            fileSize.value='';
            input.value='';

          return false;
          }
          else
          {

        if (input.files && input.files[0]) {
              var reader = new FileReader();
              reader.onload = function (e) {
                $('#sign')
                    .attr('src', e.target.result)
                    .width(150)
                    .height(100);
            };
            reader.readAsDataURL(input.files[0]);
        }
      }
  }


  function readTen(input) 
  {
      var fileSize = input.files[0].size / 1024  ; // in KB
      var filePath=input.value;
      var allowedExtensions= /(\.jpg|\.jpeg|\.png)$/i;
        if (!allowedExtensions.exec(filePath))
          {
          alert('Please upload file having extensions .jpeg/.jpg/.png only.');
          input.value='';
          return false;
          }

          if (fileSize>=200 || fileSize<100 )
            {
            alert('Please upload file having size 100 KB to 200 KB');
            fileSize='';
            input.value='';

          return false;
          }
          else
          {
           if (input.files && input.files[0]) {
              var reader = new FileReader();
              reader.onload = function (e) {
                $('#ten')
                    .attr('src', e.target.result)
                    .width(80)
                    .height(100);
                  };
              reader.readAsDataURL(input.files[0]);
              }
          }
  }

  
  function readCast(input) 
  {
      var fileSize = input.files[0].size / 1024  ; // in KB
      var filePath=input.value;
      var allowedExtensions= /(\.jpg|\.jpeg|\.png)$/i;
        if (!allowedExtensions.exec(filePath))
          {
          alert('Please upload file having extensions .jpeg/.jpg/.png only.');
          input.value='';
          return false;
          }

          if (fileSize>=200 || fileSize<100 )
            {
            alert('Please upload file having size 100 KB to 200 KB');
            fileSize='';
            input.value='';

          return false;
          }
          else
          {
          if (input.files && input.files[0]) {
              var reader = new FileReader();
              reader.onload = function (e) {
                  $('#cast')
                      .attr('src', e.target.result)
                      .width(80)
                      .height(100);
                  };
                reader.readAsDataURL(input.files[0]);
             }
          }
  }
  

  
  function readPh(input) 
  {
    var fileSize = input.files[0].size / 1024  ; // in KB
      var filePath=input.value;
      var allowedExtensions= /(\.jpg|\.jpeg|\.png)$/i;
        if (!allowedExtensions.exec(filePath))
          {
          alert('Please upload file having extensions .jpeg/.jpg/.png only.');
          input.value='';
          return false;
          }

          if (fileSize>=200 || fileSize<100 )
            {
            alert('Please upload file having size 100 KB to 200 KB');
            fileSize='';
            input.value='';

          return false;
          }
          else
          {
          if (input.files && input.files[0]) {
              var reader = new FileReader();
              reader.onload = function (e) {
                  $('#ph')
                      .attr('src', e.target.result)
                      .width(80)
                      .height(100);
              };
              reader.readAsDataURL(input.files[0]);
            }
          }
  }
  

  function readEx(input) 
  {
    var fileSize = input.files[0].size / 1024  ; // in KB
      var filePath=input.value;
      var allowedExtensions= /(\.jpg|\.jpeg|\.png)$/i;
        if (!allowedExtensions.exec(filePath))
          {
          alert('Please upload file having extensions .jpeg/.jpg/.png only.');
          input.value='';
          return false;
          }

          if (fileSize>=200 || fileSize<100 )
            {
            alert('Please upload file having size 100 KB to 200 KB');
            fileSize='';
            input.value='';

          return false;
          }
          else
          {
          if (input.files && input.files[0]) {
              var reader = new FileReader();
              reader.onload = function (e) {
                  $('#ex')
                      .attr('src', e.target.result)
                      .width(80)
                      .height(100);
                };
              reader.readAsDataURL(input.files[0]);
            }
          }
  }




  function readIti(input) 
  {
    var fileSize = input.files[0].size / 1024  ; // in KB
      var filePath=input.value;
      var allowedExtensions= /(\.jpg|\.jpeg|\.png)$/i;
        if (!allowedExtensions.exec(filePath))
          {
          alert('Please upload file having extensions .jpeg/.jpg/.png only.');
          input.value='';
          return false;
          }

          if (fileSize>=200 || fileSize<100 )
            {
            alert('Please upload file having size 100 KB to 200 KB');
            fileSize='';
            input.value='';

          return false;
          }
          else
          {
          if (input.files && input.files[0]) {
              var reader = new FileReader();
              reader.onload = function (e) {
                  $('#iti')
                      .attr('src', e.target.result)
                      .width(80)
                      .height(100);
                };
              reader.readAsDataURL(input.files[0]);
            }
          }
  }
  
  
  
  
function readEws(input) 
  {
    var fileSize = input.files[0].size / 1024  ; // in KB
      var filePath=input.value;
      var allowedExtensions= /(\.jpg|\.jpeg|\.png)$/i;
        if (!allowedExtensions.exec(filePath))
          {
          alert('Please upload file having extensions .jpeg/.jpg/.png only.');
          input.value='';
          return false;
          }

          if (fileSize>=200 || fileSize<100 )
            {
            alert('Please upload file having size 100 KB to 200 KB');
            fileSize='';
            input.value='';

          return false;
          }
          else
          {
          if (input.files && input.files[0]) {
              var reader = new FileReader();
              reader.onload = function (e) {
                  $('#ews')
                      .attr('src', e.target.result)
                      .width(80)
                      .height(100);
              };
              reader.readAsDataURL(input.files[0]);
            }
          }
  }
//*********************/Uploading Documents Validations****************************************



//*********************Check Obtain Marks is Number****************************************
function checkobtmarks(str) {
  if (isNaN(str)) {
    alert('Please enter only numeric digits');
    document.getElementById('obtmarks').value = '';
    return false;
  }

  return true;
}

//*********************************************************************************

//*********************Check Total Marks is Number****************************************
function checktotmarks(str) {
  if (isNaN(str)) {
    alert('Please enter only numeric digits');
    document.getElementById('totmarks').value = '';
    return false;
  }

  return true;
}

//*********************************************************************************


//*********************Check CGPA is Number****************************************
function checkcgpa(str) {
  if (isNaN(str)) {
    alert('Please enter only numeric digits');
    document.getElementById('cgpa').value = '';
    return false;
  }

  return true;
}

//*********************************************************************************

//*********************Check Valid Mobile***************************************
function checkmobile(str) {
  if (isNaN(str)) {
    alert('Please enter only numeric digits');
    document.getElementById('mobileno').value = '';
    return false;
  }

  return true;
}

//***************************************************************************

//*************************Marks Style*****************************************

function grade_select() {
  var gr = document.getElementById('grade');
   if (gr.value == 'Yes') {
    document.getElementById('result_grade_block').style.display = 'block';
    document.getElementById('result_mark_block').style.display = 'none';
    document.getElementById('percentage').value='';
	  document.getElementById('totmarks').value='';
	  document.getElementById('obtmarks').value='';
    document.getElementById('cgpa').focus();

  }

  else if (gr.value == 'No') {
    document.getElementById('result_mark_block').style.display = 'block';
    document.getElementById('result_grade_block').style.display = 'none'
	  document.getElementById('percentage').value='';
    document.getElementById('cgpa').value='';
    document.getElementById('totmarks').focus();

  } else {
    document.getElementById('result_mark_block').style.display = 'none';
    document.getElementById('result_grade_block').style.display = 'none';
  }

}

//******************************************************************************

// function setblank(){
//   var totmarks=document.getElementById('totmarks');
//   if(totmarks!='')
//   {
//   document.getElementById('obtmarks').value='';
//   document.getElementById('percentage').value'';
//   }
// }

//***************************************************************************

function showHint(str) {

  if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp = new XMLHttpRequest();
  } else { // code for IE6, IE5
    xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
  }

  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      if (xmlhttp.responseText == 1) {

        alert('This email ID is already registered');

        document.getElementById('Email').value = '';
        document.getElementById('Email').focus();

        return false;
      }
    }
  }

  xmlhttp.open('GET', 'oraauth/candidate/emailcheck.php?q=' + str, true);
  xmlhttp.send();
}

//***************************************************************************


//*************************************************************************

function checkyear(str) {
  if (isNaN(str)) {
    alert('Please enter only numeric digits');
    document.getElementById('year').value = '';
    return false;
  }

  return true;
}
//**************************************************************************

//********************************************************************************
function per0() {
  var result = 0;
  var tot = parseInt(document.getElementById('totmarks').value);
  var obt = parseInt(document.getElementById('obtmarks').value);
  if(tot<obt)
    {
    alert("obtain marks should be less than or equals to total marks");
    document.getElementById('totmarks').value=""; 
    document.getElementById('obtmarks').value=""; 
    document.getElementById('percentage').value="";
    document.getElementById("cgpa").value="";
    document.getElementById("totmarks").focus();
    }
  }

//*******************************************************************************


//********************************************************************************

function per() {
  var result = 0;
  var tot = parseInt(document.getElementById('totmarks').value);
  var obt = parseInt(document.getElementById('obtmarks').value);
 if(tot<obt)
 {
	 alert("obtain marks should be less than or equals to total marks");
  document.getElementById('totmarks').value="";	
  document.getElementById('obtmarks').value="";	
  document.getElementById('percentage').value="";
  document.getElementById("cgpa").value="";
  document.getElementById("totmarks").focus();
 }
 else
	{		
  result = (obt * 100) / tot;
  result=result.toFixed(2);
  document.getElementById('percentage').value = result;
      if (result < 50) {
	   alert('Your percentage is less than 50%, so You are Not Eligible for Act Apprentiship-2019');
     document.getElementById('totmarks').value="";	
  document.getElementById('obtmarks').value="";	
	 document.getElementById('obtmarks').focus();
     document.getElementById('percentage').value="";
	  }
	}

    // obtmarks.focus();
  }
//*******************************************************************************



//************************************************************************************
function per1() {
  var c = parseFloat(document.getElementById('cgpa').value);
    var result=c*9.5;
  result=result.toFixed(2);
  if (c < 5 || c > 10 || isNaN(c)) {
    alert('CGPA Must be Between 5 to 10');
    document.getElementById('totmarks').value="";	
  document.getElementById('obtmarks').value="";	
  document.getElementById('percentage').value="";
  document.getElementById("cgpa").value="";
	   cgpa.focus();
    result = 0;

  } else if (result < 50.00) {
    alert('Your percentage is less than 50%, so You are Not Eligible for Act Apprentiship-2019');
     result=0;
	 document.getElementById('percentage').value ="";
	document.getElementById('totmarks').value ="";
	document.getElementById('obtmarks').value ="";
	document.getElementById('cgpa').value="";
	cgpa.focus();
  } 

  document.getElementById('percentage').value = result;
 }
//**************************************************************************

//***********************************************************************************


//***********************************************************************************

function validateForm() {
  var po = document.getElementById('applied_post');
  var na = document.getElementById('name');
  var sex = document.getElementById('sex');
  var cm = document.getElementById('community');
  //var crmy = document.getElementById('crmy');
  var ex = document.getElementById('exmen');
  var ph = document.getElementById('ph_handi');
  var dob = document.getElementById('date');
  var mob = document.getElementById('mobileno');
  var em = document.getElementById('Email');
  var c_em = document.getElementById('confirmEmail');
  var id = document.getElementById('id_mark');
  //var nat = document.getElementById('nationality');
  var brd = document.getElementById('board');
  var yr = document.getElementById('year');
  // var enrol = document.getElementById('enrollment');
  // var rc = document.getElementById('roll_code');
  // var rn = document.getElementById('roll_no');
  var gr = document.getElementById('grade');
  var cap = document.getElementById('captcha');
  // var cgp = document.getElementById('cgpa');
  // var tot = document.getElementById('totmarks');
  // var obt = document.getElementById('obtmarks');
  var mob = /^[1-9]{1}[0-9]{9}$/;
  var Mobileno = document.getElementById('mobileno');

  var re5digit = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9!@#$%^&*!%^&()+=-[]\';,.{}|':<>?~_]{10,20}$/

  if (po.value == '') 
  {
    alert('Please Select POST Applied for');
    po.focus();
    return false;
  } 
  else if (po.value == 'ITI')
  {
    var tr = document.getElementById('trade');
    if (tr.value == '')
    {
      alert('Please Select Your Trade of ITI');
      tr.focus();
      return false;
    }
  }

  
  if (na.value == '') {
    alert('Please Enter Your Name');
    na.focus();
    return false;
  }


  if (sex.value == '') {
    alert('Please Select Your Gender');
    sex.focus();
    return false;
  }


  if (cm.value == '')
  {
    alert('Please Select Your Community');
    cm.focus();
    return false;
  } 
  else if (cm.value == 'OBC')
    {
    var obc_cert_dt = document.getElementById('obc_cert_dt');
    if (obc_cert_dt.value == '') 
    {
     alert('Please Select Your Non Creamy Layer Certificate Date');
     //obc_cer_dt.focus();
     return false;
   }
  }
  else if (cm.value == 'GEN')
    {
    var ews = document.getElementById('ews');
    if (ews.value == '') 
    {
     alert('Please Select Economicaly Weaker Section Criteria');
     return false;
   }
  }


  if (ex.value == '') {
    alert('Please Select Your Ex-Servicemen Status');
    ex.focus();
    return false;
  } 


  if (ph.value == '') {
    alert('Please Select Divyang Status');
    ph.focus();
    return false;
  } else if (ph.value == 'Yes') {
    var ph_ty = document.getElementById('ph_type');
    if (ph_ty.value == 0) {
      alert('Please Select Physically Challenged Type');
      ph_ty.focus();
      return false;
    }
  }


  if (dob.value == '') {                       
    alert('Please Enter Your Date of Birth');
    dob.focus();
    return false;
  }


  if (Mobileno.value === '') {
    alert('Please enter 10 digit mobile number.');
    Mobileno.value = '';
    Mobileno.focus();
    return false;
  }



  if (mob.test(Mobileno.value) == false) {
    alert('Please enter valid 10 digit mobile number.');
    Mobileno.value = '';
    Mobileno.focus();
    return false;
  }



  if (em.value == '') {
    alert('Please Enter Your E-Mail Address.');
    em.focus();
    return false;
  }
  
  
  if (c_em.value == '') {
    alert('Please Confirm Your E-Mail Address.');
    c_em.focus();
    return false;
  }


  // if (id.value == 0) {
  //   alert('Please Enter Your Permanent Identification Mark');
  //   id.focus();
  //   return false;
  // }



  if (brd.value == '') 
    {
    alert("Please Select Your Class 10th Board of Examination.");
    brd.focus();
    return false;
    }
  else if (brd.value == '10') 
    {
      var rc = document.getElementById('roll_code');
      var rn = document.getElementById('roll_no');
      if (rc.value == '') 
      {
        alert('Please Enter Roll Code for Bihar School Examination Board.');
        rc.focus();
        return false;
      }
      if (rn.value == '') 
      {
        alert('Please Enter Roll No. for Bihar School Examination Board.');
        rn.focus();
        return false;
      }
    }
    else if (brd.value != '10')
    {
      var enrol = document.getElementById('enrollment');
      if (enrol.value == '') 
      {
        alert('Please Enter Your Class 10th Enrollment No.');
        enrol.focus();
        return false;
  }
    }


  if (yr.value == '') {
    alert('Please Select Your Class 10th Passing Year');
    yr.focus();
    return false;
  }


  // if (enrol.value == '') {
  //   alert('Please Enter Your Class 10th Enrollment No.');
  //   enrol.focus();
  //   return false;
  // }


  if (gr.value == '') {
    alert('Please Select Your Class 10th Examination Pattern i.e Grade System or Marks System');
    gr.focus();
    return false;
  }
  else if(gr.value =='Yes')
    {
        var cgp=document.getElementById('cgpa');
        if(cgp.value == '' || isNaN(cgp.value) || cgp.value == 0)  // 29/10/2018
            {
                alert ('Please Enter Your CGP Marks');
                cgp.value='';  // 29/10/2018
                cgp.focus();
                return false;
            }
    }
     else if(gr.value =='No')
   {
	   var tot=parseInt(document.getElementById('totmarks'));
	   var obt=parseInt(document.getElementById('obtmarks'));
        if(tot.value == '' || tot.value == 0)
            {
                alert ('Please Enter Your Total  Marks');
                tot.focus();
                return false;
            }
		    if(obt.value == '' || obt.value == 0)
            {
                alert ('Please Enter Your obtain  Marks');
                obt.focus();
                
                return false;
            }
            if(obt.value>tot.value)
            {
                alert('Obtain Marks must be less than Total Marks');
                tot.value='';
                obt.value='';
                tot.focus();
                return false;
            }
   }


   if (cap.value == '') {
    alert('Please Enter Captcha Code..');
    cap.focus();
    return false;
  }
  else
  $(document).ready(function() {
              $('#captcha').blur(function(event) {
              var captcha = $("#captcha").val();
              if(captcha != '') {
                  // alert ('Please enter captcha!');
                  $.post("captcha.php", {getcaptchastring : 'yes'}, function(data) {
              if(captcha != data) {
                  alert('Wrong captcha entered!');
                  $("#captcha").val("");
                  return false;
                  }
                })
                }        
                });
              });
  
  return confirm("Do you want to submit the form ? Please validate all details before submission.");
}

//******************************************************************
function calcAge(date) {
  var dob = new Date(date);
  var today = new Date(2018,09,06);
  var timeDiff = Math.abs(today.getTime() - dob.getTime());

  return Math.ceil(timeDiff / (1000 * 3600 * 24)) / 365;
 }
//Compares calculated age with minimum age and acts according to rules//
//*******************************************************************


//*******************************************************************
function validateAge() {
// *****************Age Calculation*********************
    var db = document.getElementById("date").value;
    dbs= db.split("/");
    var calday = dbs[1];
    var calmon = dbs[0];
    var calyear = dbs[2];
    var now = new Date();
    var cald = new Date(calyear,calmon-1,calday);
    var y1 = now.getFullYear(), m1 = now.getMonth(), d1 = now.getDate(),
    y2 = cald.getFullYear(), m2 = cald.getMonth(), d2 = cald.getDate();
    if (d1 < d2) 
      {
        m1--;
        d1 += DaysInMonth(m2, y2);
          function DaysInMonth (month, year) 
            {
            return new Date(year, month, 0).getDate();
            }
      }
    
    if (m1 < m2) 
      {
        y1--;
        m1 += 12;
      }
    //   alert ("Your Age is: " + parseInt(y1-y2) + " Years " + parseInt(m1-m2) + " Months and " + parseInt(d1-d2) + " Days." );
// *****************/Age Calculation
  var dt = document.getElementById('date').value;
  var it = document.getElementById('applied_post').value;
  var cm = document.getElementById('community').value;
  var tr = document.getElementById('trade').value;
  var ph = document.getElementById('ph_handi').value;
  var ex = document.getElementById('exmen').value;

  var ageRules = {
    minAge: '12/01/2005',           //mm/dd/yyyy   11/21/2004
   
    ITI: {
      trades: ['all'],
      GEN: {
        all: '12/02/1996',
        special: '12/02/1986',
        special1: '12/02/1976'
      },
      OBC: {
        all: '12/02/1993',
        special: '12/02/1983',
        special1: '12/02/1973'
      },
      ST: {
        all: '12/02/1991',
        special: '12/02/1981',
        special1: '12/02/1971'
      },
      SC: {
        all: '12/02/1991',
        special: '12/02/1981',
        special1: '12/02/1971'
      }
    
  }};

  var dob = new Date(dt);
  var appliedPostRules = ageRules[it];
  var categoryRules;

  if (it === '' || ph === '' || dt === '' || ex === '' ||  cm === '' ) 
  {
    alert('Please enter previous form details before age eligibility check.');
    document.getElementById('conditions_regi').disabled = true;
    return false;
  }

  // if (it === 'ITI') {
  //   categoryRules = (tr === 'Welder' || tr === 'Carpenter') ? appliedPostRules[0][cm] : appliedPostRules[1][cm];
  // } else 
  {
    categoryRules = appliedPostRules[cm];
  }

    if(ph === 'Yes' && ex === 'Yes')
  {
  var dt = categoryRules[(ph === 'Yes') && (ex === 'Yes') ? 'special1' : 'all'];
  }
  else
  {
  var dt = categoryRules[(ph === 'Yes') || (ex === 'Yes') ? 'special' : 'all']; 
  }
//   var dt = categoryRules[(ph === 'Yes') || (ex === 'Yes') ? 'special' : 'all']; 
//   var dt = categoryRules[(ph === 'Yes') && (ex === 'Yes') ? 'special1' : 'all'];
  var min = new Date(dt);
  var max = new Date(ageRules.minAge);
  
  if (dob >= min && dob <= max) {
      alert("Your Age is: " + parseInt(y1-y2) + " Years " + parseInt(m1-m2) + " Months and " + parseInt(d1-d2) + " Days. \n You are Eligible for Act Apprenticehsip" );
    // alert('You are Eligible for Act Apprenticeship');
    document.getElementById('date').disabled = true;
    // document.getElementById('name').setAttribute("readonly", "readonly");
    // document.getElementById('fname').setAttribute("readonly", "readonly");
    // document.getElementById('mname').setAttribute("readonly", "readonly");
     document.getElementById('applied_post').disabled = true;
    document.getElementById('community').disabled = true;
    document.getElementById('exmen').disabled = true;
    document.getElementById('ph_handi').disabled = true;
    // document.getElementById('sex').disabled = true;11
    document.getElementById('trade').disabled = true;
    // document.getElementById('obc_cert_dt').disabled = true;
    // document.getElementById('obc_cert_dt').disabled = true;
    // document.getElementById('ph_type').disabled = true;
    document.getElementById('mobileno').focus();
    // document.getElementById('submit').disabled = false;
    document.getElementById('conditions_regi').disabled = false;
    
    return true;
    
  }else{
      alert("Your Age is: " + parseInt(y1-y2) + " Years " + parseInt(m1-m2) + " Months and " + parseInt(d1-d2) + " Days. \n You are NOT Eligible for Act Apprenticehsip" );
    // alert('You are not Eligible for Act Apprenticehsip');
    document.getElementById('date').focus();
    document.getElementById('date').value = '';
    document.getElementById('submit').disabled = true;
    return false;
  }
}
//***********************************************
function reset_enable()
{
	document.getElementById('applied_post').disabled = false;
	document.getElementById('trade').disabled = false;
	// document.getElementById('name').RemoveAttr("readonly");
	// document.getElementById('fname').setAttribute("readonly", "false");
 //    document.getElementById('mname').setAttribute("readonly", "false");
	// document.getElementById('sex').disabled = false;
	document.getElementById('community').disabled = false;
	// document.getElementById('dd').disabled = false;
    // document.getElementById('mm').disabled = false;
    // document.getElementById('yy').disabled = false;
	document.getElementById('exmen').disabled = false;
    document.getElementById('ph_handi').disabled = false;
	document.getElementById('ph_type').disabled = false;
    document.getElementById('date').disabled = false;
    
    //document.getElementById('mobileno').focus();
    document.getElementById('submit').disabled = true;
}



//******************************************


function ch_mail() {
  umail = document.getElementById('Email').value;
  if ((umail.length === 0) || (umail.search(/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z_]([-.]?[0-9a-zA-Z_])*.[a-zA-Z]{2,4}$/) === -1)) {
    alert('Incorrect or empty Email');
    document.getElementById('Email').value = '';
    document.getElementById('Email').focus();

    return false;
  }
}

function ch_mailconfirm() {
  umail = document.getElementById('confirmEmail').value;
  if ((umail.length === 0) || (umail.search(/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z_]([-.]?[0-9a-zA-Z_])*.[a-zA-Z]{2,4}$/) === -1)) {

    alert('Incorrect or empty Email ');
    document.getElementById('confirmEmail').value = '';
    //document.getElementById('Email').value = '';
    //document.getElementById('confirmEmail').focus();
    return false;

  }

  if (document.getElementById('Email').value != '') {
    if ((umail.length === 0) || (umail.search(/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z_]([-.]?[0-9a-zA-Z_])*.[a-zA-Z]{2,4}$/) === -1)) {

      alert('Incorrect or empty Email ');
      document.getElementById('confirmEmail').value = '';
      document.getElementById('Email').value = '';
      document.getElementById('Email').focus();
      return false;

    }
    if (document.getElementById('confirmEmail').value != document.getElementById('Email').value) {
      alert('Email and Confirm Email do not match');
      document.getElementById('confirmEmail').value = '';
      // document.getElementById('Email').value = '';
      //document.getElementById('Email').focus();
      return false;
    }
  }
}