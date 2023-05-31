// ПЕРЕКЛЮЧЕНИЕ ТАБОВ ИЗ ГОВНА И ПАЛОК

document.addEventListener('DOMContentLoaded', () => {
    let tabsBtn = document.querySelectorAll('.button-name');
    let contentTabs = document.querySelectorAll('.works');
    let checkboxChecked = document.querySelectorAll('.checkbox');
    let btnObj = {};

    function searchTab() {
        tabsBtn.forEach((item, index, arr) => {
            item.addEventListener('click', (element) => {
                let currentBtn = item;
                searchDots(item, index);
                tabsBtn.forEach(function (item) {
                    item.classList.remove('active-btn');
                });
                currentBtn.classList.add('active-btn');
                btnObj.current = currentBtn;
                console.log(btnObj);
            });
            //checkCheck();
        });
    }

    function searchDots(it, ind) {
        contentTabs.forEach(function (item) {
           item.classList.remove('active-works');
        });

        for (let i = 0; i < contentTabs.length; i++) {
            contentTabs[ind].classList.add('active-works');
        }
    }

    // function checkCheck () {
    //     checkboxChecked.forEach( (e, i) => {
    //         e.addEventListener('click', function (f) {
    //             if (e.checked) {
    //                 btnObj.current.classList.add('active-circle');
    //                 console.log(i + i);
    //             } else  {
    //                  btnObj.current.classList.remove('active-circle');
    //             }
    //         });
    //     });
    // }

    searchTab();
});