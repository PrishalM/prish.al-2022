// Skills Button

// desktop
document
  .getElementById("skills-view-more-deskop-btn")
  .addEventListener("click", () => {
    document.getElementById("babel").classList.remove("hide");
    document.getElementById("webpack").classList.remove("hide");
    document.getElementById("react-router").classList.remove("hide");
    document.getElementById("bcrypt").classList.remove("hide");
    document.getElementById("json-web-token").classList.remove("hide");

    document
      .getElementById("skills-view-more-deskop-btn")
      .classList.add("hide");
    document
      .getElementById("skills-view-less-deskop-btn")
      .classList.remove("hide");
  });

document
  .getElementById("skills-view-less-deskop-btn")
  .addEventListener("click", () => {
    document.getElementById("babel").classList.add("hide");
    document.getElementById("webpack").classList.add("hide");
    document.getElementById("react-router").classList.add("hide");
    document.getElementById("bcrypt").classList.add("hide");
    document.getElementById("json-web-token").classList.add("hide");

    document
      .getElementById("skills-view-more-deskop-btn")
      .classList.remove("hide");
    document
      .getElementById("skills-view-less-deskop-btn")
      .classList.add("hide");
  });

// Mobile
document
  .getElementById("skills-view-more-mobile-btn")
  .addEventListener("click", () => {
    document.getElementById("babel").classList.remove("hide");
    document.getElementById("webpack").classList.remove("hide");
    document.getElementById("react-router").classList.remove("hide");
    document.getElementById("bcrypt").classList.remove("hide");

    document
      .getElementById("skills-view-more-mobile-btn")
      .classList.add("hide");
    document
      .getElementById("skills-view-less-mobile-btn")
      .classList.remove("hide");
  });

document
  .getElementById("skills-view-less-mobile-btn")
  .addEventListener("click", () => {
    document.getElementById("babel").classList.add("hide");
    document.getElementById("webpack").classList.add("hide");
    document.getElementById("react-router").classList.add("hide");
    document.getElementById("bcrypt").classList.add("hide");

    document
      .getElementById("skills-view-more-mobile-btn")
      .classList.remove("hide");
    document
      .getElementById("skills-view-less-mobile-btn")
      .classList.add("hide");
  });

// Job detail 1 - futureproof
function smJobDetailViewLessFutureproof() {
  document.getElementById("view-futureproof").classList.toggle("hide");
  document
    .getElementById("sm-job-detail-view-less-futureproof")
    .classList.toggle("hide");
  document
    .getElementById("sm-job-detail-view-more-futureproof")
    .classList.toggle("hide");
}
function smJobDetailViewMoreFutureproof() {
  document.getElementById("view-futureproof").classList.toggle("hide");
  document
    .getElementById("sm-job-detail-view-less-futureproof")
    .classList.toggle("hide");
  document
    .getElementById("sm-job-detail-view-more-futureproof")
    .classList.toggle("hide");
}

// Job detail 2 - ichoosr
function smJobDetailViewLessiChoosr() {
  document.getElementById("view-ichoosr-1").classList.toggle("hide");
  document.getElementById("view-ichoosr-2").classList.toggle("hide");
  document.getElementById("view-ichoosr-3").classList.toggle("hide");
  document.getElementById("view-ichoosr-4").classList.toggle("hide");
  document
    .getElementById("sm-job-detail-view-less-ichoosr")
    .classList.toggle("hide");
  document
    .getElementById("sm-job-detail-view-more-ichoosr")
    .classList.toggle("hide");
}

function smJobDetailViewMoreiChoosr() {
  document.getElementById("view-ichoosr-1").classList.toggle("hide");
  document.getElementById("view-ichoosr-2").classList.toggle("hide");
  document.getElementById("view-ichoosr-3").classList.toggle("hide");
  document.getElementById("view-ichoosr-4").classList.toggle("hide");
  document
    .getElementById("sm-job-detail-view-less-ichoosr")
    .classList.toggle("hide");
  document
    .getElementById("sm-job-detail-view-more-ichoosr")
    .classList.toggle("hide");
}

// School detail 1 - UH
function smSchoolDetailViewLessUH() {
  document.getElementById("view-uh-1").classList.toggle("hide");
  document.getElementById("view-uh-2").classList.toggle("hide");
  document
    .getElementById("sm-school-detail-view-less-uh")
    .classList.toggle("hide");
  document
    .getElementById("sm-school-detail-view-more-uh")
    .classList.toggle("hide");
}

function smSchoolDetailViewMoreUH() {
  document.getElementById("view-uh-1").classList.toggle("hide");
  document.getElementById("view-uh-2").classList.toggle("hide");
  document
    .getElementById("sm-school-detail-view-less-uh")
    .classList.toggle("hide");
  document
    .getElementById("sm-school-detail-view-more-uh")
    .classList.toggle("hide");
}

// School detail 2 - SU
function smSchoolDetailViewLessSU() {
  document.getElementById("view-su-1").classList.toggle("hide");
  document.getElementById("view-su-2").classList.toggle("hide");
  document
    .getElementById("sm-school-detail-view-less-su")
    .classList.toggle("hide");
  document
    .getElementById("sm-school-detail-view-more-su")
    .classList.toggle("hide");
}

function smSchoolDetailViewMoreSU() {
  document.getElementById("view-su-1").classList.toggle("hide");
  document.getElementById("view-su-2").classList.toggle("hide");
  document
    .getElementById("sm-school-detail-view-less-su")
    .classList.toggle("hide");
  document
    .getElementById("sm-school-detail-view-more-su")
    .classList.toggle("hide");
}

// School detail 3 - WSU
function smSchoolDetailViewLessWSU() {
  document.getElementById("view-wsu-1").classList.toggle("hide");
  document.getElementById("view-wsu-2").classList.toggle("hide");
  document
    .getElementById("sm-school-detail-view-less-wsu")
    .classList.toggle("hide");
  document
    .getElementById("sm-school-detail-view-more-wsu")
    .classList.toggle("hide");
}

function smSchoolDetailViewMoreWSU() {
  document.getElementById("view-wsu-1").classList.toggle("hide");
  document.getElementById("view-wsu-2").classList.toggle("hide");
  document
    .getElementById("sm-school-detail-view-less-wsu")
    .classList.toggle("hide");
  document
    .getElementById("sm-school-detail-view-more-wsu")
    .classList.toggle("hide");
}

// School detail 4 - ESSCA
function smSchoolDetailViewLessESSCA() {
  document.getElementById("view-essca-1").classList.toggle("hide");
  document.getElementById("view-essca-2").classList.toggle("hide");
  document
    .getElementById("sm-school-detail-view-less-essca")
    .classList.toggle("hide");
  document
    .getElementById("sm-school-detail-view-more-essca")
    .classList.toggle("hide");
}

function smSchoolDetailViewMoreESSCA() {
  document.getElementById("view-essca-1").classList.toggle("hide");
  document.getElementById("view-essca-2").classList.toggle("hide");
  document
    .getElementById("sm-school-detail-view-less-essca")
    .classList.toggle("hide");
  document
    .getElementById("sm-school-detail-view-more-essca")
    .classList.toggle("hide");
}

// School detail 5 - CANDI
function smSchoolDetailViewLessCANDI() {
  document.getElementById("view-candi-1").classList.toggle("hide");
  document.getElementById("view-candi-2").classList.toggle("hide");
  document
    .getElementById("sm-school-detail-view-less-candi")
    .classList.toggle("hide");
  document
    .getElementById("sm-school-detail-view-more-candi")
    .classList.toggle("hide");
}

function smSchoolDetailViewMoreCANDI() {
  document.getElementById("view-candi-1").classList.toggle("hide");
  document.getElementById("view-candi-2").classList.toggle("hide");
  document
    .getElementById("sm-school-detail-view-less-candi")
    .classList.toggle("hide");
  document
    .getElementById("sm-school-detail-view-more-candi")
    .classList.toggle("hide");
}

function checkScrollPosition() {
  if (document.documentElement.scrollTop > 20) {
    document.getElementById("header").classList.add("header-shadow");
  } else {
    document.getElementById("header").classList.remove("header-shadow");
  }
}
