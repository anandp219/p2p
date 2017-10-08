function createCookie(name,value,days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

function eraseCookie(name) {
  createCookie(name,"",-1);
}

function logout() {
  eraseCookie("access-token")
  location.reload()
}

function getUserInfo() {
  const userId = readCookie("access-token")
  $.ajax({
    type: 'GET',
    url: 'https://322b3761.ngrok.io/users?userId='+userId,
    success: function (response) {
      updateUserInfo(response["user"])
    },
    error: function (response) {
      alert('An error occurred.');
      updateUserInfo({})
    }
  });
}

function getDashboard() {
  const userId = readCookie("access-token")
  $.ajax({
    type: 'GET',
    url: 'https://322b3761.ngrok.io/users?userId='+userId,
    success: function (response) {
      updateDashboard("dashboard")
    },
    error: function (response) {
      alert('An error occurred.');
      updateDashboard("dashboard")
    }
  });
}

function updateAadhar() {
  var file_data = $("#form-aadhar-image").prop("files")[0];
  var form_data = new FormData(); // Creating object of FormData class
  form_data.append("file", file_data)
  $.ajax({
    url: 'https://322b3761.ngrok.io/users/doc/upload?userId='+readCookie("access-token")+'&type=aadhaar',
    cache: false,
    contentType: false,
    processData: false,
    data: form_data, // Setting the data attribute of ajax with file_data
    type: 'post',
    success: function(data) {
      $("#form-aadhar-image").val(null)
      location.reload()
    },
    error: function(data) {
      $("#form-aadhar-image").val(null)
      alert("Error in uploading aadhar file")
    },
  });
  return false;
}

function updatePan() {
  var file_data = $("#form-pan-image").prop("files")[0];
  var form_data = new FormData(); // Creating object of FormData class
  form_data.append("file", file_data)
  $.ajax({
    url: 'https://322b3761.ngrok.io/users/doc/upload?userId='+readCookie("access-token")+'&type=pan',
    cache: false,
    contentType: false,
    processData: false,
    data: form_data, // Setting the data attribute of ajax with file_data
    type: 'post',
    success: function(data) {
      $("#form-pan-image").val(null)
      location.reload()
    },
    error: function(data) {
      $("#form-pan-image").val(null)
      alert("Error in uploading pan card")
    },
  });
  return false;
}

function updateLicense() {
  var file_data = $("#form-license-image").prop("files")[0];
  var form_data = new FormData(); // Creating object of FormData class
  form_data.append("file", file_data)
  $.ajax({
    url: 'https://322b3761.ngrok.io/users/doc/upload?userId='+readCookie("access-token")+'&type=license',
    cache: false,
    contentType: false,
    processData: false,
    data: form_data, // Setting the data attribute of ajax with file_data
    type: 'post',
    success: function(data) {
      $("#form-license-image").val(null)
      location.reload()
    },
    error: function(data) {
      $("#form-license-image").val(null)
      alert("Error in uploading Driving License")
    },
  });
  return false;
}

function updateEmail() {
  const email = $("#form-email").val()
  const data = {
    email: email
  }
  $.ajax({
    url: 'https://322b3761.ngrok.io/users/update?userId='+readCookie("access-token"),
    dataType: 'json',
    data: data,
    type: 'post',
    success: function(data) {
      location.reload()
    },
    error: function(data) {
      alert("Error in updating email")
      $("#form-email").val()
    }
  });
  return false
}

function updateMobile() {
  const mobile = $("#form-mobile").val()
  const data = {
    mobile: mobile
  }
  $.ajax({
    url: 'https://322b3761.ngrok.io/users/update?userId='+readCookie("access-token"),
    dataType: 'json',
    data: data,
    type: 'post',
    success: function(data) {
      location.reload()
    },
    error: function(data) {
      alert("Error in updating mobile")
      $("#form-mobile").val()
    }
  });
  return false
}

function updateDOB() {
  const dob = $("#form-dob").val()
  const data = {
    dob: dob
  }
  alert(JSON.stringify(dob))
  $.ajax({
    url: 'https://322b3761.ngrok.io/users/update?userId='+readCookie("access-token"),
    dataType: 'json',
    data: data,
    type: 'post',
    success: function(data) {
      location.reload()
    },
    error: function(data) {
      alert("Error in updating dob")
      $("#form-dob").val()
    }
  });
  return false
}