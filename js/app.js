/* =====Nav===== */
const button = document.getElementById('btn-click');
const menu = document.getElementById('menu-li');

button.addEventListener('click', showMenu);

function showMenu() {
    button.classList.toggle('active');
    menu.classList.toggle('active');
}
/* =====Nav Ends===== */


/* =====Student Profile===== */
const profileButton = document.querySelectorAll('.student-name');
const studentProfile = document.querySelectorAll('.student-profile-main-container');

for (let index = 0; index < studentProfile.length; index++) {
    studentProfile[index].style.display = "none";   

    for (let index = 0; index < profileButton.length; index++) {
    
        profileButton[index].addEventListener('click', function () {

            switch (studentProfile[index].style.display) {
                case 'none':
                    studentProfile[index].style.display = "block";
                    break;
            
                default:
                    studentProfile[index].style.display = "none";
                    break;
            }
        });
    };

};

