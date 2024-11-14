function Footer() {
  useEffect(() => {
    if ($(window).width() <= 768) {
      $(".footer-links-wrapper").addClass("someClass");
    } else {
      $(".footer-links-wrapper").removeClass("someClass");
    }
    $(window).on("resize", function () {
      if ($(window).width() <= 768) {
        console.log("window width is less than 768");
        $(".footer-links-wrapper").addClass("someClass");
        window.location.reload();
      } else {
        $(".footer-links-wrapper").removeClass("someClass");
        $(".footer-links-wrapper ul").show();
      }
    });
    // Footer collapse Functionality
    $(document).on("click", ".someClass h3", function () {
      $(this).next("ul").slideToggle();

      $(this).toggleClass("expanded");
    });
    return () => {};
  });
}
