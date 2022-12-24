const photos = document.querySelectorAll(".orders-gallery-photo");
const body = document.querySelector("body");
const ordersGalleryPreview = document.querySelector(".orders-gallery-preview");
const overlay = document.querySelector(".overlay")

let source;
leaveGalleryPreviewFlag = false;
setTimeoutFlag = false;
console.log(leaveGalleryPreviewFlag);

photos.forEach((photo) => {
  photo.addEventListener("mouseenter", function () {});
  photo.addEventListener("mouseleave", function () {});
  photo.addEventListener("click", function () {
    if (leaveGalleryPreviewFlag === false && setTimeoutFlag === false) {
      source = photo.getAttribute("src");
      console.log(source);
      ordersGalleryPreview.setAttribute("src", source);
      ordersGalleryPreview.classList.add("orders-gallery-preview-show");
      overlay.style.display = "block"
      setTimeoutFlag = true;
      setTimeout(() => {
        leaveGalleryPreviewFlag = true;
        setTimeoutFlag = false;
        console.log(leaveGalleryPreviewFlag);
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
      overlay.style.display = "none"
      photos.forEach((photo) => {
        photo.style.setProperty("--hover-border-color", "#010101");
        photo.style.setProperty("--active-border-color", "#924e4e");
      });
      console.log("working2");
    }
    console.log("working");
  }
};

body.addEventListener("click", onClickOutside);
