window.addEventListener('DOMContentLoaded', () => {
    // nav
    const menu = document.querySelector('#close_menu');
    const menuBtn = document.querySelector('.menuButton');
    const user = document.querySelector('.user')
    const searchInput = document.querySelector('.user #search');
    const searchLabel = document.querySelector('.user #search-label');
    const headerGirl = document.querySelector('.model-woman img');


    menuBtn.addEventListener('click', () => {
        user.classList.toggle('flex-start-user')
        menuBtn.classList.toggle('divAnim');

    })



    searchLabel.addEventListener('click', openSearch);

    function openSearch() {

        searchInput.classList.add('show-search-input');
        searchInput.focus();
        searchLabel.removeEventListener('click', openSearch);
        searchInput.addEventListener('blur', closeSearch)
    }

    function closeSearch() {

        searchInput.classList.remove('show-search-input');
        searchInput.removeEventListener('blur', closeSearch);
        setTimeout(() => {
            searchLabel.addEventListener('click', openSearch);
        }, 1000);


    }
    headerGirl.classList.add('headerGirl-anim')

    //end of nav
    // parts of scarf 
    const scarfParts = document.querySelectorAll('.card-part-scarf');
    $(window).scroll(function() {
        let position = Number($(this).scrollTop());
        if (position >= 100) {

            scarfParts.forEach((element) => {
                element.classList.add('scarfParts-animate');

            })


        } else {
            scarfParts.forEach((element) => {
                element.classList.remove('scarfParts-animate');
            })

        }
    })

    // end of parts of scarf
    // filter shopping 
    const filterGirls = document.querySelectorAll('.filter-model');
    $(window).scroll(function() {
        let position = Number($(this).scrollTop());
        if (position >= 500) {

            filterGirls[1].classList.add('filterGirls-animate-left');
            filterGirls[0].classList.add('filterGirls-animate-right');


        } else {
            filterGirls[1].classList.remove('filterGirls-animate-left');
            filterGirls[0].classList.remove('filterGirls-animate-right');

        }
    })

    // end of filter shopping
    //  collections
    //sale collection

    const timerBox = document.querySelector('.timer')
    const timerBoxHr = document.querySelector('.timer .hr')
    const timerBoxMin = document.querySelector('.timer .min')
    const timerBoxSec = document.querySelector('.timer .sec')

    //these functions built till connecting the website to backend .
    function setTimer() {
        let hr = timerBoxHr.innerHTML;
        let min = timerBoxMin.innerHTML;
        let sec = timerBoxSec.innerHTML;
        let time = (Number(hr) * 3600) + (Number(min) * 60) + (Number(sec));
        setTimeout(() => {
            let newTime = time - 1;
            let hr2 = Math.floor(newTime / 3600)
            let min2 = Math.floor((newTime % 3600) / 60);
            let sec2 = ((newTime % 3600) % 60);

            hr2 = hr2 < 10 ? '0' + hr2 : hr2;
            min2 = min2 < 10 ? '0' + min2 : min2;
            sec2 = sec2 < 10 ? '0' + sec2 : sec2;
            timerBoxHr.innerHTML = hr2 + " ";
            timerBoxMin.innerHTML = min2 + " ";
            timerBoxSec.innerHTML = sec2 + " ";
            if (!((hr2 + min2 + sec2) <= 0)) {
                setTimeout(countReverse, 0);
            }

        }, 1000);
    }

    function countReverse() {
        setTimeout(() => {
            let hr = timerBoxHr.innerHTML;
            let min = timerBoxMin.innerHTML;
            let sec = timerBoxSec.innerHTML;
            let time = (Number(hr) * 3600) + (Number(min) * 60) + (Number(sec));

            let newTime = time - 1;
            let hr2 = Math.floor(newTime / 3600)
            let min2 = Math.floor((newTime % 3600) / 60);
            let sec2 = ((newTime % 3600) % 60);

            hr2 = hr2 < 10 ? '0' + hr2 : hr2;
            min2 = min2 < 10 ? '0' + min2 : min2;
            sec2 = sec2 < 10 ? '0' + sec2 : sec2;
            timerBoxHr.innerHTML = hr2 + ' ';
            timerBoxMin.innerHTML = min2 + ' ';
            timerBoxSec.innerHTML = sec2 + ' ';
            if (!((hr2 + min2 + sec2) <= 0)) {
                setTimeout(countReverse, 0);
            }

        }, 1000);
    }
    setTimer()
        // end of sale collection
    const newCollctions = document.querySelectorAll('#new-collection-slider .carousel-item');
    newCollctions.forEach(e => {
        e.classList.toggle('active');

    })
    const favCollctions = document.querySelectorAll('#fav-collection-slider .carousel-item');
    favCollctions.forEach(e => {
            e.classList.toggle('active')
        })
        //end of  collections
})