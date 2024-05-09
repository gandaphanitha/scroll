

        // document.querySelectorAll('nav a').forEach(anchor => {
        //     anchor.addEventListener('click', function(e) {
        //         e.preventDefault();

        //         const targetId = this.getAttribute('href');
        //         const targetSection = document.querySelector(targetId);

        //         if (targetSection) {
        //             targetSection.scrollIntoView({
        //                 behavior: 'smooth'
        //             });
        //         }
        //     });
        // });











        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('header nav a');

        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(current)) {
                    link.classList.add('active');
                }
            });
        });
