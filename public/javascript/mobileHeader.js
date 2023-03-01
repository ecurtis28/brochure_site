function mobileHeader() {
  const headerMobileButton = document.querySelector(".header-mobile-button");
  const header = document.querySelector(".header");

  const logoLink = document.querySelector(".logo-link");
  const mainNav = document.querySelector(".main-nav");
  const mainNavList = document.querySelector(".main-nav-list");
  let headerState = false;

  function headerMobileSwitch() {
    if (headerState === false) {
      header.classList.add("header-column");
      mainNav.classList.add("reset");
      logoLink.classList.add("reset");

      headerMobileButton.classList.add("adjust");

      headerState = !headerState;
    } else {
      console.log(headerState);
      header.classList.remove("header-column");
      mainNav.classList.remove("reset");
      logoLink.classList.remove("reset");
      headerMobileButton.classList.remove("adjust");
      headerMobileButton.classList.add("freeze");
      setTimeout(() => {
        headerMobileButton.classList.remove("freeze");
      }, 1000);
      headerState = !headerState;
    }
  }
  headerMobileButton.addEventListener("click", () => {
    if (!headerMobileButton.classList.contains("freeze")) {
      headerMobileSwitch();
    }
  });
}

mobileHeader();
