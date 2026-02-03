document.addEventListener("DOMContentLoaded", () => {

  /* ================= SHIMMER TEXT ================= */
  window.addEventListener("load", () => {
    document.querySelectorAll(".shimmer-line").forEach(el => {
      el.classList.remove("shimmer-line");
      el.textContent = "We design scalable, intelligent, and high-performance digital solutions for modern businesses.";
    });
  });


  /* ================= SCROLL REVEAL (FIXED) ================= */
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const el = entry.target;

      if (entry.isIntersecting) {

        // hitung urutan global biar aman
        const index = [...reveals].indexOf(el);

        el.style.transitionDelay = `${index * 80}ms`;
        el.classList.add("active");

      } else {
        el.classList.remove("active");
        el.style.transitionDelay = "0ms";
      }
    });
  }, {
    threshold: 0.2
  });

  reveals.forEach(el => observer.observe(el));

});

// HILANGKAN GAMBAR JIKA LINK PREVIEW TIDAK ADA
document.querySelectorAll(".portfolio-img").forEach(img => {
  img.addEventListener("error", () => {
    img.style.display = "none";
  });
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/service-worker.js")
      .then(() => console.log("Service Worker Registered"));
  });
}
