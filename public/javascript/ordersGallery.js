function ordersGallery() {
  const photos = document.querySelectorAll(".orders-gallery-photo");

  const ordersGalleryPreview = document.querySelector(
    ".orders-gallery-preview"
  );
  const overlay = document.querySelector(".overlay");

  const body = document.querySelector("body");

  let source;
  leaveGalleryPreviewFlag = false;
  setTimeoutFlag = false;

  photos.forEach((photo) => {
    photo.addEventListener("mouseenter", function () {});
    photo.addEventListener("mouseleave", function () {});
    photo.addEventListener("click", function () {
      if (leaveGalleryPreviewFlag === false && setTimeoutFlag === false) {
        source = photo.getAttribute("src");

        ordersGalleryPreview.setAttribute("src", source);
        ordersGalleryPreview.classList.add("orders-gallery-preview-show");
        overlay.style.display = "block";
        setTimeoutFlag = true;
        setTimeout(() => {
          leaveGalleryPreviewFlag = true;
          setTimeoutFlag = false;
        }, 200);
      }
    });
  });

  ordersGalleryPreview.addEventListener("mouseleave", function () {});

  const onClickOutside = (e) => {
    if (
      !e.target.classList.contains("orders-gallery-preview") &&
      ordersGalleryPreview.classList.contains("orders-gallery-preview-show")
    ) {
      photos.forEach((photo) => {
        photo.style.setProperty("--hover-border-color", "transparent");
        photo.style.setProperty("--active-border-color", "transparent");
      });
      if (leaveGalleryPreviewFlag === true) {
        leaveGalleryPreviewFlag = false;
        ordersGalleryPreview.classList.remove("orders-gallery-preview-show");
        overlay.style.display = "none";
        photos.forEach((photo) => {
          photo.style.setProperty("--hover-border-color", "#010101");
          photo.style.setProperty("--active-border-color", "#924e4e");
        });
      }
    }
  };

  body.addEventListener("click", onClickOutside);
}
ordersGallery();
