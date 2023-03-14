
setTimeout(() => {
  setInterval(() => {
    images.forEach((image) => {
      const dishGalleryImageContainer = image.getBoundingClientRect();

      const dishGalleryTitleElement = image.children[1];
      const dishGalleryBackdropElement = image.children[2];
      const dishGalleryTitleObject =
        dishGalleryTitleElement.getBoundingClientRect();

 
      let dishGalleryBackdropWidth = dishGalleryTitleObject.width;
      let dishGalleryBackdropPercent =
        (dishGalleryTitleObject.width / dishGalleryImageContainer.width) * 100 +
        5.85;
      dishGalleryBackdropWidth =
        (dishGalleryImageContainer.width / 100) * dishGalleryBackdropPercent;

    
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
