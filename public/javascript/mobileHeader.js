function mobileHeader() {
  const headerMobileButton = document.querySelector(".header-mobile-button");
  const header = document.querySelector(".header");
  const logoLink = document.querySelector(".logo-link");
  const mainNav = document.querySelector(".main-nav");

  let headerState = false;
  let oneSwitch = true;
  const observer = new ResizeObserver((entries) => {
    const headerBoxElement = entries[0];
    headerMobileButton.addEventListener("click", () => {

      if(headerMobileButton.classList.contains('adjust')){
        mainNav.classList.remove("reset-hide");
      logoLink.classList.remove("reset-hide");
      }

    });
    if (headerBoxElement.contentRect.width > 601) {
      mainNav.classList.remove("reset-hide");
      logoLink.classList.remove("reset-hide");
      mainNav.classList.remove("reset-active");
      oneSwitch = true;
    } else if (headerBoxElement.contentRect.width < 601) {
      if (oneSwitch === true) {
        mainNav.classList.add("reset-hide");
        logoLink.classList.add("reset-hide");

 
        if (headerMobileButton.classList.contains("adjust")) {
          mainNav.classList.add("reset-active");
        } else {
          mainNav.classList.remove("reset-active");
        }

        let msCheckArray = [];
        let delay = 50;
        let delayTracker = 0;
        let intervalID;
        let isFullyActive;

        intervalID = setInterval(() => {
          follower(mainNav);
        }, delay);

        function follower(element) {
          if (element.classList.contains("reset-active")) {
            msCheckArray.push(true);
          } else {
            msCheckArray.push(false);
          }
          delayTracker += delay;
          console.log(delayTracker);
          // delayTracker >= 300 && clearInterval(intervalID)
          if (delayTracker >= 300) {
            clearInterval(intervalID);
            isFullyActive = msCheckArray.every((item) => item === true);
            console.log(msCheckArray);
            console.log(isFullyActive);
            mainNav.classList.remove("reset-active");
            if (isFullyActive === true) {
              mainNav.classList.remove("reset-hide");
              logoLink.classList.remove("reset-hide");
            } else if (isFullyActive === false) {
            }
          }
        }

        oneSwitch = false;
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
      }, 1250);
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
