document.addEventListener("DOMContentLoaded", () => {
  console.log("loaded!!");

  // 홈 버튼
  const homeBtn = document.querySelector("#homeBtn");
  if (homeBtn) {
    homeBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // 스크롤 이동 버튼
  document.querySelectorAll(".navBtn").forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-target");
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        const rect = targetEl.getBoundingClientRect();
        const scrollY = rect.top + window.pageYOffset - 100;
        window.scrollTo({ top: scrollY, behavior: "smooth" });
      } else {
        console.warn(`Element with ID="${targetId}" doesn’t exist`);
      }
    });
  });

  // 팝업 관련
  const popupOverlay = document.getElementById("popupOverlay");
  const popupImage = document.getElementById("popupImage");

  const pop1 = document.getElementById("profile1");
  const pop2 = document.getElementById("profile2");
  const pop3 = document.getElementById("profile3");

  if (pop1) {
    pop1.addEventListener("click", () => {
      popupImage.src = "img/cc1.png";
      popupOverlay.style.display = "flex";
    });
  }

  if (pop2) {
    pop2.addEventListener("click", () => {
      popupImage.src = "img/cc2.png";
      popupOverlay.style.display = "flex";
    });
  }

  if (pop3) {
    pop3.addEventListener("click", () => {
      popupImage.src = "img/cc3.png";
      popupOverlay.style.display = "flex";
    });
  }

  if (popupOverlay) {
    popupOverlay.addEventListener("click", () => {
      popupOverlay.style.display = "none";
      popupImage.src = "";
    });
  }
});
