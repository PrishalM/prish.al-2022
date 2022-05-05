let skillDesktopButton = document.getElementById("skill-deskop-btn");

let skillMobileButton = document.getElementById("skill-mobile-btn");

skillDesktopButton.addEventListener("click", skillsButton);
skillMobileButton.addEventListener("click", skillsButton);

function skillsButton() {
  console.log("Skill button");

  document.getElementById("json-web-token").classList.toggle("hide");
  document.getElementById("bcrypt").classList.toggle("hide");
  document.getElementById("babel").classList.toggle("hide");
  document.getElementById("webpack").classList.toggle("hide");
  document.getElementById("react-router").classList.toggle("hide");

  if (
    skillDesktopButton.innerHTML ||
    skillMobileButton.innerHTML ===
      `View less
    <i class="ps-3 bi bi-dash-circle-fill"></i>`
  ) {
    skillDesktopButton.innerHTML = `View more<i class="ps-3 bi bi-plus-circle-fill"></i>`;
    skillMobileButton.innerHTML = `View more
    <i class="ps-3 bi bi-plus-circle-fill"></i>`;
  } else if (
    skillDesktopButton.innerHTML ||
    skillMobileButton.innerHTML ===
      `View more
    <i class="ps-3 bi bi-plus-circle-fill"></i>`
  ) {
    skillDesktopButton.innerHTML = `View less
    <i class="ps-3 bi bi-dash-circle-fill"></i>`;
    skillMobileButton.innerHTML = `View less
    <i class="ps-3 bi bi-dash-circle-fill"></i>`;
  }
}
