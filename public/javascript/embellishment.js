const links = document.querySelectorAll(".link-structure");


links.forEach((link) => {
  link.addEventListener("mouseenter", () => {
  
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
  
    anchorLink.classList.add('link-highlight')
    embellishment.classList.add("embellishment-show");

 
  });
  link.addEventListener("mouseleave", () => {

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

    anchorLink.classList.remove('link-highlight')
    embellishment.classList.remove("embellishment-show");
    
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


