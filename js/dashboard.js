var page

function updateDashboard(user) {
  const userId = readCookie("access-token")
  $.ajax({
    type: 'GET',
    url: 'https://981c952e.ngrok.io/users?userId='+userId,
    success: function (response) {
      updateUserDashboard(response["user"])
    },
    error: function (response) {
      alert('An error occurred.');
      updateUserDashboard({})
    }
  });
}

function updateUserDashboard(user) {
  page = loadPage("/pages/dashboard.html")
  $("#screen").html(page)
  if (!isNaN(user["rating"])) {
    $("#rating").text(Math.random()*5)
  }
}

