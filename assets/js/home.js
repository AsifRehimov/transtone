 function clickStart (event) {

        var elementCompanyOne = document.querySelector('.company-select-one');
        var hasTagCompanyOne = elementCompanyOne.classList.contains('active'); 

        var elementCompanyTwo = document.querySelector('.company-select-two');
        var hasTagCompanyTwo = elementCompanyTwo.classList.contains('active');
       
        // var elementCompanyThree = document.querySelector('.company-select-three'); 
        // var hasTagCompanyThree = elementCompanyThree.classList.contains('active');

        var targetCompany = document.querySelector('.company-select-link');

        

        var elementServiceOne = document.querySelector('.service-select-one');
        var hasTagServiceOne = elementServiceOne.classList.contains('active'); 

        var elementServiceTwo = document.querySelector('.service-select-two');
        var hasTagServiceTwo = elementServiceTwo.classList.contains('active');

        var elementServiceThree = document.querySelector('.service-select-three');
        var hasTagServiceThree = elementServiceThree.classList.contains('active'); 

        var targetService = document.querySelector('.service-select-link');

        if (hasTagCompanyOne || hasTagCompanyTwo) {
            targetCompany.classList.add('active1');
        } else {
            targetCompany.classList.remove('active1');
            console.log("not");
        }
        if (hasTagServiceOne || hasTagServiceTwo || hasTagServiceThree) {
            targetService.classList.add('active1');
        } else {
            targetService.classList.remove('active1');
        }

    }
    var navItems = document.getElementsByClassName('nav-item');
    for (var i = 0; i < navItems.length; i++) {
        navItems[i].addEventListener('click', clickStart);
    }

    function toggleServices() {
        var servicesDropdown = document.getElementById("servicesDropdown");
        var elementServiceOne = document.querySelector('.select-services-item');
        var responsiveClass = elementServiceOne.classList.contains('d-none'); 
        if (responsiveClass) {
            servicesDropdown.classList.remove("d-none");
        } else {
            servicesDropdown.classList.add("d-none");

        }
    }
    function toggleCompany() {
        var servicesDropdown = document.getElementById("companyDropdown");
        var elementServiceOne = document.querySelector('.select-companies-item');
        var responsiveClass = elementServiceOne.classList.contains('d-none'); 
        if (responsiveClass) {
            servicesDropdown.classList.remove("d-none");
        } else {
            servicesDropdown.classList.add("d-none");

        }
    }

// home body 

var swiper = new Swiper(".mySwiperHome", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var swiper = new Swiper(".mySwiperAuto", {
    watchSlidesProgress: true,
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: ".auto-button-next",
      prevEl: ".auto-button-prev",
    },

  });