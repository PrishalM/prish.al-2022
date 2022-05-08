let skillDesktopButton = document.getElementById("skill-deskop-btn");
let skillMobileButton = document.getElementById("skill-mobile-btn");
skillDesktopButton.addEventListener("click", skillsButton);
skillMobileButton.addEventListener("click", skillsButton);

function skillsButton() {
  document.getElementById("babel").classList.toggle("hide");
  document.getElementById("webpack").classList.toggle("hide");
  document.getElementById("react-router").classList.toggle("hide");

  let viewMoreContent = `<span class="view-more">View more</span>
  <i class="ps-3 bi bi-plus-circle-fill"></i>`;

  let viewLessContent = `<span class="view-less">View less</span>
  <i class="ps-3 bi bi-dash-circle-fill"></i>`;

  if (
    skillDesktopButton.innerHTML &&
    skillMobileButton.innerHTML === viewLessContent
  ) {
    console.log("Works One");
    skillDesktopButton.innerHTML = viewMoreContent;
    skillMobileButton.innerHTML = viewMoreContent;
  }

  if (
    skillDesktopButton.innerHTML &&
    skillMobileButton.innerHTML === viewMoreContent
  ) {
    console.log("Works Two");
    skillDesktopButton.innerHTML = viewLessContent;
    skillMobileButton.innerHTML = viewLessContent;
  }
}

function smJobDetail1() {
  document.getElementById("job-detail-1").classList.toggle("hide");
  document.getElementById("sm-job-detail-1").innerHTML = "View more";
}

function smJobDetail2() {
  document.getElementById("job-detail-2").classList.toggle("hide");
  document.getElementById("sm-job-detail-2").innerHTML = "View more";
}
