$.fn.onlynumbers = function () {
  $(this).on("keyup", function () {
    $(this).val($(this).val().replace(/[^a-zA-Z ]/gi, ""));
  });
};
