// set time out is here because for some reason due to the animation getBoundingClientRect is
// getting the wrong measurement on dish-gallery-img-container element sometimes
// this ensures animation is done loading before measuring the element
setTimeout(() => {
  setInterval(() => {
    images.forEach((image) => {
      const dishGalleryImageContainer = image.getBoundingClientRect();

      const dishGalleryTitleElement = image.children[1];
      const dishGalleryBackdropElement = image.children[2];
      const dishGalleryTitleObject =
        dishGalleryTitleElement.getBoundingClientRect();

      // need to make dishGalleryBackDropWidth based off of a certain percentage of the dishGalleryTitleObject.width
      // compared to the dishGalleryImageContainer.width
      // then add that percentage converted to pixels to the dishGalleryTitleObject.width like this
      // let dishGalleryBackdropWidth = dishGalleryTitleObject.width + percentToPixelVariable
      let dishGalleryBackdropWidth = dishGalleryTitleObject.width;
      let dishGalleryBackdropPercent =
        (dishGalleryTitleObject.width / dishGalleryImageContainer.width) * 100 +
        5.85;
      dishGalleryBackdropWidth =
        (dishGalleryImageContainer.width / 100) * dishGalleryBackdropPercent;
      // let leftPixels = dishGalleryBackdropWidth / 9;
      // dishGalleryBackdropElement.style.left = `${leftPixels}px`;

      // console.log(dishGalleryImageContainer.width / 100);
      // console.log(
      //   "centering percent",
      //   dishGalleryBackdropWidth / 20,
      //   dishGalleryBackdropWidth
      // );
    
      dishGalleryBackdropWidth = dishGalleryBackdropWidth.toString() + "px";

      dishGalleryBackdropElement.style.width = dishGalleryBackdropWidth;
      image.addEventListener("mouseenter", () => {
        const dishGalleryTitle = image.children[1].classList;

        const dishGalleryBackdrop = image.children[2].classList;

        dishGalleryTitle.add("show-fog");
        dishGalleryTitle.remove("hide-fog");
        dishGalleryBackdrop.add("show-fog");
        dishGalleryBackdrop.remove("hide-fog");
      });
      image.addEventListener("mouseleave", () => {
        const dishGalleryTitle = image.children[1].classList;
        const dishGalleryBackdrop = image.children[2].classList;

        dishGalleryTitle.add("hide-fog");
        dishGalleryTitle.remove("show-fog");
        dishGalleryBackdrop.add("hide-fog");
        dishGalleryBackdrop.remove("show-fog");
      });
    });
  }, 500);
  const images = document.querySelectorAll(".dish-gallery-img-container");
}, "1000");
