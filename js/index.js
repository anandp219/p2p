$(document).ready(function(){

  const accessToken = readCookie('access-token')
  if(accessToken) {
    const homePage = loadPage('/pages/home.html')
    $('#main').html(homePage)
  } else {
    const loginPage = loadPage('/pages/loginAndRegister.html')
    $('#main').html(loginPage)
  }
});