let lastScroll = 0;
const defaultOffset = 200;
const header = document.querySelector('.start__menu');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('hide');

window.addEventListener('scroll', () => {
    if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
        //scroll down
        header.classList.add('hide');
        console.log("down");
    }
    else if(scrollPosition() < lastScroll && containHide()){
        //scroll up
        header.classList.remove('hide');
        console.log("up");
    }

    lastScroll = scrollPosition();
})

// const btns = document.querySelectorAll('.treners__card');
// const modalOverlay = document.querySelector('.modal-overlay ');
// const modals = document.querySelectorAll('.modal');

// btns.forEach((el) => {
// 	el.addEventListener('click', (e) => {
// 		let path = e.currentTarget.getAttribute('data-path');

// 		modals.forEach((el) => {
// 			el.classList.remove('modal--visible');
// 		});

// 		document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
// 		modalOverlay.classList.add('modal-overlay--visible');
// 	});
// });

// modalOverlay.addEventListener('click', (e) => {
// 	console.log(e.target);

// 	if (e.target == modalOverlay) {
// 		modalOverlay.classList.remove('modal-overlay--visible');
// 		modals.forEach((el) => {
// 			el.classList.remove('modal--visible');
// 		});
// 	}
// });
let span = document.querySelector('.spanvis')

document.querySelector('.more').addEventListener('click', () =>{

	span.style.display = 'flex';

})