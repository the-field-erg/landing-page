 /* Fullscreen */
 function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullSscreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
}


function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) { /* Firefox */
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE/Edge */
    document.msExitFullscreen();
  }
}

/* Show / hide mobile nav by changing the width from 0px to 70% */
function mobileNav() {
  var x = document.getElementById("nav-mobile");
  var y = document.getElementById("nav-mobile-inner");
  if (x.style.width === "70%") {
    x.style.width = "0px";
    y.style.opacity = "0";
    /* Wait 500 ms so width animation can finish, then display none */
    setTimeout(function() {
      x.style.display = "none";
  }, 500);
  } else {
    x.style.display = "block";
    /* Wait 10 ms so display block can be set first, then set with to 70% and opacity 1 */
    setTimeout(function() {
      x.style.width = "70%";
      y.style.opacity = "1";
  }, 10);
  }
}

function toggleBars(x) {
  x.classList.toggle("change");
}

/* Scroll to element by ID */
function scrollToHero() {
  document.querySelector('#hero').scrollIntoView({behavior: 'smooth'});
}
function scrollToMission() {
  document.querySelector('#mission').scrollIntoView({behavior: 'smooth'});
}
function scrollToFishFilet() {
  document.querySelector('#fishfilet').scrollIntoView({behavior: 'smooth'});
}
function scrollToTokenomics() {
  document.querySelector('#tokenomics').scrollIntoView({behavior: 'smooth'});
}
function scrollToFishingPond() {
  document.querySelector('#fishing-pond').scrollIntoView({behavior: 'smooth'});
}
function scrollToDiscoverErgo() {
  document.querySelector('#discoverErgo').scrollIntoView({behavior: 'smooth'});
}
function scrollToChart() {
  document.querySelector('#token').scrollIntoView({behavior: 'smooth'});
}
function scrollToGiveaways() {
  document.querySelector('#giveaways').scrollIntoView({behavior: 'smooth'});
}

/* Click to copy */
function copyToClipboard(element) {
  let $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}

/* Refresh page */
function refreshPage(){
  document.location.reload();
}

/* Set opacity of all sections to 1 on page load */
window.addEventListener('load', function() {
  let sections = document.querySelectorAll('section');
  sections.forEach(function(section) {
    section.style.opacity = '1';
  });
});