// ========================================menu-lines====================================================

const elem      = document.getElementById("animation"),
	  elem2     = document.getElementById("animation2"),
	  line1     = document.getElementById("line1"),
	  line2     = document.getElementById("line2");

// функция просчета и отрисовки градиента элемента при наведении
function callMove (e) {
	let x          =   e.offsetX;
	let thisWidth  =   e.target.offsetWidth;

	let newgr = (x / thisWidth) * 100;
	line1.style.background = 
	"linear-gradient(to right, rgba(170,189,255,0), rgba(170,189,255,1)" + 
	newgr + 
	"% ,rgba(170,189,255,0))";

	line2.style.background = 
	"linear-gradient(to right, rgba(170,189,255,0), rgba(170,189,255,1)" + 
	newgr + 
	"% ,rgba(170,189,255,0))";
}

// событие движения мыши над элементом
elem.addEventListener("mousemove", callMove);
elem2.addEventListener("mousemove", callMove);


// ========================================changes img=====================================================

const bplus     = document.getElementById("plusBtn"),
	  bminus    = document.getElementById("minusBtn"),
	  ptz      	= document.getElementById("img1"),
	  lyceum   	= document.getElementById("img2");

// показ картинки лицея
function changeImagesPlus() {
	if (ptz.classList.contains("active-img")) {
		ptz.classList.add("scale");
		ptz.classList.remove("active-img");
		lyceum.classList.add("active-img");
	} else {
		return;
	}
}

// показ картинки Петрозаводска
function changeImagesMinus() {
	if (lyceum.classList.contains("active-img")) {
		ptz.classList.remove("scale");
		lyceum.classList.remove("active-img");
		ptz.classList.add("active-img");
	} else {
		return;
	}
}

// события на кнопки
bplus.addEventListener("click", changeImagesPlus);
bminus.addEventListener("click", changeImagesMinus);



// =======================================slider-profile=====================================================

const butLeft   = document.getElementById("leftBtn"),
	butRight    = document.getElementById("rightBtn"),
	slides      = document.querySelectorAll(".profile__slider-item"),
	dots        = document.querySelectorAll(".profile__dots-item");

// активный слайд
let act;

// событие нажатия на левую кнопку
butLeft.onclick = function() {

	// определеные активного слайда
	for (let i = 0; i < slides.length; i++) {
		if(slides[i].classList.contains("active")) {
			act = i;
		}
	}

	for (dot of dots) {
		dot.classList.remove("active-dot");
	}

	// если нулевой активный (переход на последний)
	if(act == 0) {
		slides[act].className = " ";
		slides[act].classList.add("profile__slider-item", "slide" + act, "active");
		slides[slides.length - 1].className = " ";
		slides[slides.length - 1].classList.add("profile__slider-item", "slide5");
		slides[act].classList.add("active-leavetoright");
		slides[act].classList.remove("active");
		slides[slides.length - 1].classList.add("active-comefromleft");
		slides[slides.length - 1].classList.add("active");

		dots[slides.length - 1].classList.add("active-dot");
	} else { // переход на предыдущий
		slides[act].className = " ";
		slides[act].classList.add("profile__slider-item", "slide" + act, "active");
		slides[act - 1].className = " ";
		slides[act - 1].classList.add("profile__slider-item", "slide" + (act-1));
		slides[act].classList.add("active-leavetoright");
		slides[act].classList.remove("active");
		slides[act - 1].classList.add("active-comefromleft");
		slides[act - 1].classList.add("active");

		dots[act - 1].classList.add("active-dot");
	}
	
}

// событие нажатия на правую кнопку
butRight.onclick = function() {

	// определеные активного слайда
	for (let i = 0; i < slides.length; i++) {
		if(slides[i].classList.contains("active")) {
			act = i;
		}
	}

	for (dot of dots) {
		dot.classList.remove("active-dot");
	}

	// если последний активный (переход на первый)
	if(act == slides.length - 1) {
		slides[act].className = " ";
		slides[act].classList.add("profile__slider-item", "slide" + act, "active");
		slides[0].className = " ";
		slides[0].classList.add("profile__slider-item", "slide0");
		slides[act].classList.add("active-leavetoleft");
		slides[act].classList.remove("active");
		slides[0].classList.add("active-comefromright");
		slides[0].classList.add("active");

		dots[0].classList.add("active-dot");
	} else { // переход на следующий
		slides[act].className = " ";
		slides[act].classList.add("profile__slider-item", "slide" + act, "active")
		slides[act + 1].className = " ";
		slides[act + 1].classList.add("profile__slider-item", "slide" + (act+1));
		slides[act].classList.add("active-leavetoleft");
		slides[act].classList.remove("active");
		slides[act + 1].classList.add("active-comefromright");
		slides[act + 1].classList.add("active");

		dots[act + 1].classList.add("active-dot");
	}
}

// =======================================slider-news=====================================================

//константы для слайдера
const leftBut           = document.getElementById('left');
const rightBut          = document.getElementById('right');
const slider            = document.getElementById('slider');
const newsSlides        = document.querySelectorAll('.news__card');

// константы для бегунка
const runnerField       = document.getElementById('runnerField');
const runner            = document.getElementById('runner');

//коэфициенты анимации
const sK                = 412;
const rK                = 70;

let sr                   = sK;
let sl                   = sK;

let rr                   = rK;
let rl                   = rK;

// правая граница прокрутки новостей
const len                = newsSlides.length;
const barier             = (len - 3) * sK;

// нажатия на кнопки
leftBut.addEventListener("click", toRight);
rightBut.addEventListener("click", toleft);

// нажатие левой кнопки (движение направо)
function toRight(e) {
	// движение новостей
	if (sr == sK) {
		console.log("блин");
		return;
	} else {
		sl-=sK;
		slider.style.transform = "translateX(" + sr + "px)";
		sr+=sK;
	}
	
	// движение бегунка налево
	rl = rr - 2 * rK
	runner.style.left = rl + "px";
	rr -= rK
}

// нажатие правой кнопки (движение налево)
function toleft(e) {
	// движение новостей
	if (sl == barier) {
		console.log("блин");
		return;
	} else {
		sr-=sK;
		if (sl < 0) {
			slider.style.transform = "translateX(" + (-1 * sl) + "px)";
		} else {
			slider.style.transform = "translateX( -" + sl + "px)";
		}
		sl+=sK;
	}

	// движение бегунка направо
	runner.style.left = rr + "px";
	rr+=rK;
}

// =======================================smooth-scrolling=====================================================

// прокрутка кнопки читать далее
const btn   = document.getElementById('toSecondSec');

btn.addEventListener("click", scrollToInfo);

function scrollToInfo() {
	const info   = document.getElementById('infoSection');
	
	info.scrollIntoView({
		block: "start",
		behavior: "smooth",
	});
}


// прокрутка всех остальных ссылок

// константа хранящая все ссылки, атрибут href которых начинается с "#"
const smoothLinks = document.querySelectorAll('a[href^="#"]');

// для каждого элемента из полученного NodeList'а выполняем прокутку
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault(); // отменяем действие по умолчанию для ссылок при нажатии
        const id = smoothLink.getAttribute('href');

        let thisElem = document.querySelector(id);

        thisElem.scrollIntoView({  // для элемента на который ссылается ссылка выполняем метод прокрутки
            behavior: 'smooth',
            block: 'start'
        });
    });
};

// =======================================onload-animation=====================================================

window.onload = function() {
	const moveImg = document.getElementById('imgToMove');
	moveImg.style.transform = "translateX(0px)";

	const hSec = document.querySelector('.header__main-section');
	const children = hSec.children;
	console.log(children);

	for (child of children) {
		child.style.transform = "translateX(0px)";
	}
}

// =======================================check-box-agreement=====================================================

const chBox = document.getElementById('checkbox');
const fBut = document.getElementById('formBut');

chBox.addEventListener("click", colorChBox);

function colorChBox() {
	chBox.classList.toggle("active-chb");
}

if (chBox.classList.contains("active-chb") == false) {
}

fBut.addEventListener("click", function clickOnBut(e) {
	e.preventDefault();

	if (chBox.classList.contains("active-chb") == false) {
		alert("Вы не поставили соглашение!!!");
	}
});