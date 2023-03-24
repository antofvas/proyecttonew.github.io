function redireccion(){
    location.href = "index.html"
    }
    let menuToggle = document.querySelector('.menu-toggle');
    let menuToggle = document.querySelector('.menu-toggle i');
    let menuToggle = document.querySelector('.menu');

    menuToggle.addEventListener('click', e=> (
        menu.classlist.toggle ('show');

        if (menu.classslist.contains('show')){
            menuToggleIcon.setAtribute('class', 'fa fa-times');
        }else {
            menuToggleIcon.setAtribute('class', 'fa fa-bars);
        }

        )
    ))