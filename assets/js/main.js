console.log('~~~~~~~\n /\\_/\\\n( o.o ) < lixuan <3\n > ^ <\n~~~~~~~');

// Navbar Scroll Active
const home = document.getElementById('nav-home'),
      about = document.getElementById('nav-about'),
      blog = document.getElementById('nav-blog'),
      contact = document.getElementById('nav-contact')

let currentPage = home

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset
    let maxVH = window.innerHeight
    let navs = [home, about, blog, contact]

    for (let i = 0;i < navs.length;i++) {
        if (currentScroll > maxVH*(i+0.5) || currentScroll < maxVH*(i-0.5)) {
            continue
        }
        if (navs[i] === currentPage) {
            return
        }
        currentPage = navs[i]
        currentPage.classList.add("nav-active")
        
        navs.splice(i, 1)

        let j = 0
        do {
            let handler = navs[j]
            handler.classList.remove("nav-active")
            j++
        } while (j < navs.length)

        return
    }
})

// Toggle Hamburger List
const hamburgerBotton = document.getElementById('hamburger-botton'),
      hamburgerList = document.getElementById('hamburger-list')

hamburgerBotton.addEventListener('click', () => {
    hamburgerList.classList.toggle('show-menu')
})