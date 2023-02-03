console.log('~~~~~~~\n /\\_/\\\n( o.o ) < lixuan <3\n > ^ <\n~~~~~~~');

/* navbar active background */
const home = document.getElementById('navHome');
const about = document.getElementById('navAbout');
const blog = document.getElementById('navBlog');
const contact = document.getElementById('navContact');

let currentPage = home;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset
    let maxVH = window.innerHeight
    let navs = [home, about, blog, contact]

    for (let i = 0;i < navs.length;i++) {
        if (currentScroll <= maxVH*(i+0.5) && currentScroll >= maxVH*(i-0.5)) {
			if (navs[i] === currentPage) {
				return
			}
			currentPage = navs[i]
			currentPage.classList.add("active")
			
            navs.splice(i, 1)

            let j = 0
            do {
				let handler = navs[j]
				handler.classList.remove("active")
				j++
            } while (j < navs.length)

			return
        }
    }
}, {
	passive: true
})