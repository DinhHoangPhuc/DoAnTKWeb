$(document).ready(function () {
  $(".flash_sale_slider").slick({
    // dots: true,
    // customPaging: function (slider, i) {
    //   return (
    //     `<button class="tab">${$(slider.$slides[i]).attr("title")}<i class="fa-solid fa-circle"></i></button>`
    //   );
    // },
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fa-solid fa-arrow-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fa-solid fa-arrow-right' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });

  $(".slider").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fa-solid fa-arrow-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fa-solid fa-arrow-right' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });
});

$("#get").countdown("2023/05/01", function (event) {
  $(this).html(event.strftime("Kết thúc trong %w weeks %d days %H:%M:%S"));
});

$(document).ready(function () {
  // Get media - with autoplay disabled (audio or video)
  // var media = $('#v').not("[autoplay='autoplay']");
  var media = $("#v");
  var tolerancePixel = 40;

  function checkMedia() {
    var scrollTop = $(window).scrollTop() + tolerancePixel;
    var scrollBottom =
      $(window).scrollTop() + $(window).height() - tolerancePixel;

    media.each(function (index, el) {
      var yTopMedia = $(this).offset().top;
      var yBottomMedia = $(this).height() + yTopMedia;

      if (scrollTop < yBottomMedia && scrollBottom > yTopMedia) {
        $(this).get(0).play();
      } else {
        $(this).get(0).pause();
      }
    });
  }
  $(document).on("scroll", checkMedia);
});

var img = document.getElementById("image_product_detail_ip");
var imgs = document.getElementsByClassName("image_product_bottom");
console.log(imgs[0]);
for (let i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener("click", () => {
    img.src = imgs[i].src;
  });
}

$(".plus_btn").on("click", function (e) {
  e.preventDefault();
  var $this = $(this);
  var $input = $this.closest("div").find("input");
  var value = parseInt($input.val());

  if (value < 100) {
    value = value + 1;
  } else {
    value = 100;
  }

  $input.val(value);
});

$(".minus_btn").on("click", function (e) {
  e.preventDefault();
  var $this = $(this);
  var $input = $this.closest("div").find("input");
  var value = parseInt($input.val());

  if (value > 1) {
    value = value - 1;
  } else {
    value = 0;
  }

  $input.val(value);
});
