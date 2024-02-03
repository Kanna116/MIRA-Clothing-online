const mainLogo = document.querySelector(".nav-center");
const scrollToTopBtn = document.querySelector(".scroll-to-top")

function scrollingToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}
window.addEventListener("load", () => scrollingToTop())
mainLogo.addEventListener("click", () => scrollingToTop())
scrollToTopBtn.addEventListener("click", () => scrollingToTop())


function loadingSpinner() {
    const container = document.querySelector("#container");
    const newHtml = container.innerText
        .split("")
        .map((char) => `<span class="letter">${char}</span>`)
        .join("");

    container.innerHTML = newHtml;

    const letters = document.querySelectorAll(".letter");
    letters.forEach((letter, index) => {
        letter.style.transform = `translate(25px) rotate(${index * 10}deg)`;
    });
}
loadingSpinner();

function percentageLoading() {
    const loadPercentage = document.querySelector("#percentage")
    let load = 0;
    setInterval(() => {
        if (load >= 100) {
            loadPercentage.textContent = "100 %"
            return true;
        }
        else {
            loadPercentage.textContent = load + " %"
            load++;
        }
    }, 20);

}
percentageLoading();

function gsapAnimations() {
    const tl = gsap.timeline({
        defaults: {
            ease: "circ"
        }
    });

    tl.from("#overlay", {
        scale: 0,
        duration: 2,
        delay: 1,
    }, "load")
    tl.from(".letter", {
        scale: 0,
        duration: 2,
    }, "load")



    tl.to(".loader", {
        y: -100 + "%",
        transformOrigin: "top",
        duration: 2,
        ease: "power4"

    })
    tl.from(' .nav-center,.nav-left, .nav-right', {
        y: -100,
        duration: .8,
        stagger: .2,
    },"heroItems")
    tl.from(".hero-section", {

        y: 100,
        opacity: 0,
        duration: .8
    },"heroItems")
    tl.from(".hero-title, .scroll-text, .hero-section .shop-now", {
        y: 100,
        opacity: 0,
        duration: .8,
        stagger: .3
    },"heroItems")
    tl.from(".elevation-caption", {
        x: -300,
        opacity: 0,
        duration: 2,
        scrollTrigger: {
            trigger: ".elevation-caption",
            scroller: "body",
            start: "top 80%",
            end: "top 50%",
            scrub: 2,
        }
    }, "elevationSet")


    tl.from(".elevation-text", {
        x: 300,
        opacity: 0,
        duration: 2,
        scrollTrigger: {
            trigger: ".elevation-caption",
            start: "top 80%",
            end: "top 50%",
            scrub: 3,
        }

    }, "elevationSet");
    tl.from(".box", {
        height: 0,
        transformOrigin: "top",
        duration: 1,
        scrollTrigger: {
            trigger: ".box",
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
        }
    });
    tl.from(".box-2 p", {
        x: -300,
        opacity: 0,
        duration: 2,
        scrollTrigger: {
            trigger: ".box-2 p",
            start: "top 80%",
            end: "top 50%",
            scrub: 3,
        }

    });

    tl.from(".category-chips", {
        y: 100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".category-chips",
            start: "top 90%",
            end: "top 80%",
            scrub: 3,
        }
    })


    tl.from(".product-1,.product-3,.product-4", {
        x: -300,
        duration: 2,
        stagger: .5,
        scrollTrigger: {
            trigger: ".product-1,.product-3,.product-4",
            start: "top 60%",
            end: "top 30%",
            scrub: 2,
        }
    }, "product");
    tl.from(".product-2,.product-5", {
        x: 300,
        duration: 2,
        stagger: .5,
        scrollTrigger: {
            trigger: ".product-2,.product-5",
            start: "top 60%",
            end: "top 30%",

            scrub: 2,
        }
    }, "product");
    tl.from(".brand-partner-title,.brand-partner-desc", {
        y: 100,
        opacity: 0,
        duration: 2,
        stagger: 1,
        scrollTrigger: {
            trigger: ".brand-partner-title,.brand-partner-desc",
            start: "top 80%",
            end: "top 60%",
            scrub: 3,
        }
    })
    tl.from(".brand", {
        height: 0,
        transformOrigin: "top",
        duration: 1,
        scrollTrigger: {
            trigger: ".brand",
            start: "top 90%",
            end: "top 75%",
            scrub: 1,
        }
    })


    tl.from(".footer-left", {
        x: -100 + "%",
        duration: 2,
        scrollTrigger: {
            trigger: ".footer-left",
            start: "top 70%",
            end: "top 40%",
            scrub: 3,
        }
    }, "footer")
    tl.from(".footer-right", {
        x: 100 + "%",
        duration: 2,
        scrollTrigger: {
            trigger: ".footer-right",
            start: "top 70%",
            end: "top 40%",
            scrub: 3,
        }
    }, "footer")

    tl.from(".footer-caption,.get-now", {
        y: 200,
        opacity: 0,
        duration: 2,
        stagger: .3,
        scrollTrigger: {
            trigger: ".footer-caption,.get-now",
            start: "top 80%",
            end: "top 70%",
            scrub: 3,
        }
    }, "footerItems")

    tl.from(".left-two .logo,.links li", {
        y: 200,
        opacity: 0,
        duration: 2,
        stagger: .3,
        scrollTrigger: {
            trigger: ".left-two .logo,.links li",
            start: "top 80%",
            end: "top 70%",
            scrub: 3,
        }
    }, "footerItems")
    tl.from(".footer-right p,.social-link", {
        y: 300,
        opacity: 0,
        duration: 2,
        stagger: .3,
        scrollTrigger: {
            trigger: ".footer-right p,.social-link",
            start: "top 80%",
            end: "top 70%",
            scrub: 3,
        }
    }, "footerItems")

    tl.from(".license,.copy-right", {
        y: -100,
        duration: 1,
        scrollTrigger: {
            trigger: ".license,.copy-right",
            scrub: 1

        }
    }, "license")
    tl.from(".scroll-to-top", {
        y: -400,
        duration: 1,
        scrollTrigger: {
            trigger: ".scroll-to-top",
            scrub: 1

        }
    }, "license")
}

gsapAnimations();





