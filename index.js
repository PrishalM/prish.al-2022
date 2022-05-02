function ctaText(x) {
  if (x.matches) {
    // If media query matches

    document.getElementById("cta-btn-1").innerText = "Get in touch ";
    document.getElementById("cta-btn-2").innerText = "Get in touch";
  } else {
    document.getElementById("cta-btn-1").innerText = "Get in touch today";
    document.getElementById("cta-btn-2").innerText = "Get in touch today";
  }
}

let x = window.matchMedia("(max-width: 576px)");
ctaText(x); // Call listener function at run time
x.addEventListener(ctaText); // Attach listener function on state changes
