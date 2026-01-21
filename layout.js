function loadHTML(id, file) {
  fetch(file)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    });
}

loadHTML("header1", "partials/header.html");
loadHTML("futer1", "partials/footer.html");
