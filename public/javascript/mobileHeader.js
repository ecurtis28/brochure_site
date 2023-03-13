function mobileHeader() {
  const headerMobileButton = document.querySelector(".header-mobile-button");
  const header = document.querySelector(".header");
  const logoLink = document.querySelector(".logo-link");
  const mainNav = document.querySelector(".main-nav");
  const mainNavList = document.querySelector(".main-nav-list");
  let headerState = false;
  let oneSwitch = true;
  const observer = new ResizeObserver((entries) => {
    const headerBoxElement = entries[0];
   
    if (headerBoxElement.contentRect.width > 601) {
      mainNav.classList.remove("reset-hide");
      logoLink.classList.remove("reset-hide");
      //find way to make logo link and main nav transition opacity and appear when reset is activated and header shifts to mobile button mode
      oneSwitch = true;
    } else if (headerBoxElement.contentRect.width < 601) {
     
      if(oneSwitch === true){
      mainNav.classList.add("reset-hide");
      logoLink.classList.add("reset-hide");
      setTimeout(() => {
        mainNav.classList.remove("reset-hide");
        logoLink.classList.remove("reset-hide");
        
      }, 180);
      oneSwitch = false
    }
    }
  });
  observer.observe(header);

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
      },1250);
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
