// declaration
let collapse = document.querySelector('.c-collapse');
let fixedNav = document.querySelector('.c-fixed-top');
let mySearch = document.getElementById('mySearch');
let textField = document.getElementById('textField');
let topBtn = document.getElementById("goTop");

// display main menu
function displayMenu() {
  collapse.style.display = 'block'
}

//close main menu
function closeMenu() {
  collapse.style.display = 'none'
}

// displaying dropdown
function toggleDropdown(dropdown) {
let dropDown = document.getElementById(dropdown);
dropDown.classList.toggle('c-dropdisplay')
}

// Hide Panel
document.getElementById("hidePanel").addEventListener("click", function hidePanel(){
  let panel = document.getElementById('panel');
  panel.style.display = 'none'
  panel.style.transitionDelay = '.3s'
});

// Sticky topnav and toTop appearing on scroll
window.onscroll = function() {scroll()};
function scroll() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    fixedNav.style.display = 'block';
    topBtn.style.display = "block";
  } else {
    fixedNav.style.display = 'none';
    topBtn.style.display = 'none';
  }
}

//scroll to the top of the document when user clicks goTop button
function toTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Open the full screen search box when the search icon is clicked
function openSearch() {
  document.getElementById("mySearch").style.display = "block";
}

// Close the full screen search box
function closeSearch() {
  document.getElementById("mySearch").style.display = "none";
}

// When the user clicks anywhere on the mySearch container except the text input field, close it
mySearch.onclick = function(event) {
    if (event.target != textField) {
        mySearch.style.display = "none";
    }
}


//Changing icon on  hovering
function changeIcon(icon, iconId) {
    document.getElementById(iconId).src = icon;
}


//Displaying and hiding of tooltip function
function showTooltip(tip) {
    let toolTip = document.getElementById(tip);
    let activeTip = document.querySelector('.c-active-tip');
    toolTip.classList.add('c-active-tip');
    if (toolTip != activeTip) {
        activeTip.classList.remove('c-active-tip');
    }
    else {
        activeTip.classList.add('c-active-tip');
    }
}


/*
    Carousel
*/
$('#carousel-example').on('slide.bs.carousel', function (e) {
    /*
        CC 2.0 License Iatek LLC 2018 - Attribution required
    */
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 5;
    var totalItems = $('.carousel-item').length;
 
    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
                $('.carousel-item').eq(i).appendTo('.carousel-inner');
            }
            else {
                $('.carousel-item').eq(0).appendTo('.carousel-inner');
            }
        }
    }
});


/*
 Partners slider
*/
$('#partners-carousel').on('slide.bs.carousel', function (e) {
  let $e = $(e.relatedTarget);
  let idx = $e.index();
  let slideItems = 6;
  let totalItems = $('.c-carousel-item').length;

  if (idx >= totalItems-(slideItems-1)) {
      let it = slideItems - (totalItems - idx);
      for (let i = 0; i < it; i++) {
          // append slides to end
          if (e.direction == "left") {
              $('.c-carousel-item').eq(i).appendTo('.c-carousel-inner');
          }
          else {
              $('.c-carousel-item').eq(0).appendTo('.c-carousel-inner');
          }
      }
  }
});

