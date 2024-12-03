// =========================================menubar======
const menubar = document.querySelector(".menubar");
const menuList = document.querySelector(".menulist");
const menubarFirst = document.querySelector(".menubarFirst");
const menubarSecond = document.querySelector(".menubarSecond");
const menubarmid = document.querySelector(".menubarmid");
const body = document.body;

menubar.addEventListener("click", function () {
    menuList.classList.toggle("-right-full");
    menubarFirst.classList.toggle("rotate-[-43deg]")
    menubarSecond.classList.toggle("rotate-[40deg]")
    menubarFirst.classList.toggle("translate-x-[-1px]")
    menubarmid.classList.toggle("translate-x-[100px]")
    menubarmid.classList.toggle("opacity-0")
    menubarFirst.classList.toggle("translate-y-[-7px]")
    menubar.classList.toggle("fixed")
    menubar.classList.toggle("mr-8")
    menuList.classList.toggle("right-0");
    body.classList.toggle("overflow-hidden")
    menuBar.addEventListener('click', () => {
    });
})
AOS.init();
// ======================slider====================
$(".slider").slick({
    autoplay: true,
    autoplaySpeed: 0,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    adaptiveHeight: true,
    centerMode: true,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 600,
            settings: {
                centre: true,
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
});

$(document).ready(function () {
    $('.sliderTeam').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        responsive: [
            {
                breakpoint: 1536,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: true,
                    centerMode: true,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 3000,
                }
            },
        ]
    });
});

// =================================accordian============
document.addEventListener('DOMContentLoaded', () => {
    const firstItem = document.querySelector('.accordion-item');
    toggleAccordion(firstItem, true);
});

function toggleAccordion(element, forceOpen = false) {
    const container = document.getElementById('accordion-container');
    const allItems = container.querySelectorAll('.accordion-item');
    const content = element.querySelector('.accordion-content');
    const icon = element.querySelector('.accordion-icon');

    allItems.forEach((item) => {
        const itemContent = item.querySelector('.accordion-content');
        const itemIcon = item.querySelector('.accordion-icon');
        if (item !== element) {
            itemContent.classList.add('hidden');
            item.classList.remove('bg-gray-700');
            itemIcon.style.transform = 'rotate(0deg)';
        }
    });

    if (forceOpen || content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        icon.style.transform = 'rotate(180deg)';
    } else {
        content.classList.add('hidden');
        element.classList.remove('bg-gray-700');
        icon.style.transform = 'rotate(0deg)';
    }
}
// --------=================================current year===================
const year = document.querySelector(".year");
const currentYear = new Date().getFullYear();
year.textContent = currentYear;
// =========================count-down===============================
function startCountdown(durationInSeconds) {
    let timer = durationInSeconds;
    const updateDisplay = () => {
        const days = Math.floor(timer / (24 * 3600));
        const hours = Math.floor((timer % (24 * 3600)) / 3600);
        const minutes = Math.floor((timer % 3600) / 60);
        const seconds = timer % 60;

        document.getElementById("days").textContent = days < 10 ? "0" + days : days;
        document.getElementById("hours").textContent = hours < 10 ? "0" + hours : hours;
        document.getElementById("minutes").textContent = minutes < 10 ? "0" + minutes : minutes;
        document.getElementById("seconds").textContent = seconds < 10 ? "0" + seconds : seconds;
    };

    const interval = setInterval(() => {
        updateDisplay();

        if (timer <= 0) {
            clearInterval(interval);
            return;
        }

        localStorage.setItem("countdownTimer", timer - 1);
        timer--;
    }, 1000);

    updateDisplay();
}

window.onload = () => {
    const initialDuration = (10 * 24 * 3600) + (12 * 3600) + (25 * 60) + 45;
    const savedTimer = localStorage.getItem("countdownTimer");
    const countdownTime = savedTimer !== null ? parseInt(savedTimer, 10) : initialDuration;

    startCountdown(countdownTime);
};
// =================Back To Top ===================
const backToTopBtn = document.getElementById('backToTopBtn');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.remove('hidden');
    } else {
        backToTopBtn.classList.add('hidden');
    }
});
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
    });
});
// ===========================Drop Down==================
const flagImg = document.getElementById('flag-img');
const languageSelect = document.getElementById('language-select');
languageSelect.addEventListener('change', (event) => {
    const selectedOption = event.target.selectedOptions[0];
    const newFlag = selectedOption.getAttribute('data-flag');

    if (newFlag) {
        flagImg.src = newFlag;
    }
});
