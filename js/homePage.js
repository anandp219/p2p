function getProfileDetails() {
  $("#dashboard").removeClass('active')
  $("#profileDetails").addClass('active')
  getUserInfo()
}

function getDashboardPage() {
  $("#dashboard").addClass('active')
  $("#profileDetails").removeClass('active')
  getDashboard()
}

function updateUserInfo(user) {
  const page = loadPage('/pages/profileDetailPage.html')
  $("#screen").html(page)
  $('#form-username').val(user["username"])
  if(user["isVerified"]) {
    $('#form-kyc-status').val("Verified")
  }
  if(user["aadhaarStatus"]) {
    $('#form-aadhar-status').val(user["aadhaarStatus"])
  }
  if(user["panStatus"]) {
    $('#form-pan-status').val(user["panStatus"])
  }
  if(user["licenseStatus"]) {
    $('#form-license-status').val(user["licenseStatus"])
  }
  if(user["aadhaarNo"]) {
    $('#form-aadhar-no').val(user["aadhaarNo"])
  }
  if(user["panNo"]) {
    $('#form-pan-no').val(user["aadhaarNo"])
  }
  if(user["aadhaarNo"]) {
    $('#form-aadhar-no').val(user["aadhaarNo"])
  }
  if(user["email"]) {
    $('#form-email').val(user["email"])
  }
  if(user["mobile"]) {
    $('#form-mobile').val(user["mobile"])
  }
  if(user["dob"]) {
    $('#form-dob').val(user["dob"])
  }
}
