/**
 * Manage the main site navigation
 * @params {*} none
 * @return {function} initializes the main site navigation
 */
const navigation = (function() {
  const init = () => {
    const header = document.querySelector(".js-header");
    const homeLink = document.querySelector(".js-home-link");
    const mainMenu = document.querySelector(".js-main-menu");
    const page = document.body;

    homeLink.addEventListener("click", e => {
      // click on home link closes the main navigation and the overlay
      page.classList.remove("menu-active");
    });

    header.addEventListener("click", e => {
      // click on hamburger opens/closes the overlay and the main navigation
      if (e.target.matches(".js-hamburger, .js-hamburger *")) {
        page.classList.toggle("menu-active");
      }
    });

    mainMenu.addEventListener("click", e => {
      // click on any menu link closes the main navigation and the overlay
      if (e.target.matches("a")) {
        // close overlay and menu
        page.classList.remove("menu-active");
      }
    });

    // use a body attribute "pageName" to style nav items, etc.

    // get the path from the window.location object and delete leading and trailing "/"
    let loc = window.location.pathname.replace(/(^\/)|(\/$)/g, "");
    loc = loc || "home";
    document.body.setAttribute("pageName", loc);

    document.addEventListener("swup:contentReplaced", e => {
      // get the path from the swup object and delete leading and trailing "/"
      let loc = e.path[0].location.pathname.replace(/(^\/)|(\/$)/g, "");
      loc = loc || "home";
      document.body.setAttribute("pageName", loc);
    });

    // fadein the header background when page starts scrolling
    const scrollObserver = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        document.body.classList.remove("is-scrolling");
      } else {
        document.body.classList.add("is-scrolling");
      }
    });
    scrollObserver.observe(header);
  };

  return { init };
})();

export default navigation;
