let user = {
  firstName: "Harry",
  lastName: "Bow",
  motto: "C'est beau la vie !"
};

document.addEventListener("DOMContentLoaded", function () {
  let data = sessionStorage.getItem("user");

  if (data === null) {
    sessionStorage.setItem("user", JSON.stringify(user));
  } else {
    user = JSON.parse(data);
    console.log(user);
  }
});