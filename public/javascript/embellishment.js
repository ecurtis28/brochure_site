const links = document.querySelectorAll(".link-structure");


links.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    console.log(`Entering ${link}`);
    let embellishment = Array.prototype.filter.call(
      link.children,
      function (emb) {
        return emb.matches(".link-embellishment");
      }
    );
    let anchorLink = Array.prototype.filter.call(link.children, function (emb) {
      return emb.matches(".link");
    });
    anchorLink = anchorLink[0]
    embellishment = embellishment[0];
    // console.log(anchorLink);
    anchorLink.classList.add('link-highlight')
    embellishment.classList.add("embellishment-show");

    // console.log(embellishment);
  });
  link.addEventListener("mouseleave", () => {
    console.log(`Leaving ${link}`);
    let embellishment = Array.prototype.filter.call(
      link.children,
      function (emb) {
        return emb.matches(".link-embellishment");
      }
    );
    let anchorLink = Array.prototype.filter.call(link.children, function (emb) {
      return emb.matches(".link");
    });
    
    anchorLink = anchorLink[0]
    embellishment = embellishment[0];
    // console.log(anchorLink);
    anchorLink.classList.remove('link-highlight')
    embellishment.classList.remove("embellishment-show");
    // console.log(embellishment);
  });

  link.addEventListener('click', () => {
    let anchorLink = Array.prototype.filter.call(link.children, function (emb) {
      return emb.matches(".link");
    });
    anchorLink = anchorLink[0]

    let anchorLinkHref = anchorLink.getAttribute('href')
    document.location.href = anchorLinkHref
    
  })
});


