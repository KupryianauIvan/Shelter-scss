const petsSlider = document.querySelector('.layout-3-column');
const btnArrowRight = document.querySelector('.button-arrow_right');
const btnArrowLeft = document.querySelector('.button-arrow_left');
const sliderButtons = document.querySelectorAll('.button-arrow');
const containerButtonRight = document.querySelector('.arrow-container__button_right');
const containerButtonLeft = document.querySelector('.arrow-container__button_left');
const popup = document.querySelector('.popup');
const overlay = document.querySelector('.overlay');
const closeButton = document.querySelector('.popup__button');

const petsInfo = [
  {
    "name": "Jennifer",
    "img": "../../assets/images/pets/pets-jennifer.png", //../../assets/images/pets/pets-woody.png
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Sophia",
    "img": "../../assets/images/pets/pets-sophia.png",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Woody",
    "img": "../../assets/images/pets/pets-woody.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  {
    "name": "Scarlett",
    "img": "../../assets/images/pets/pets-scarlet.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Katrine",
    "img": "../../assets/images/pets/pets-katrine.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Timmy",
    "img": "../../assets/images/pets/pets-timmy.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  {
    "name": "Freddie",
    "img": "../../assets/images/pets/pets-freddie.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Charly",
    "img": "../../assets/images/pets/pets-charly.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  }
]

function randomNumber(n) {
  let arr = [];
  while (arr.length < 3) {
    let num = Math.floor(0 + Math.random() * (n + 1));
    if (!arr.includes(num)) {
      arr.push(num);
    }
  }
  return arr;
}

function makeRandomSliderItem(direction) {
  let sliderImages = document.querySelectorAll('.card__image img');
  let sliderName = document.querySelectorAll('.card__name');
  let currentPetsInfo = [...petsSlider.querySelectorAll('.card__name')].map(card => card.innerHTML);
  let imageCollection = [...petsInfo].filter(item => !currentPetsInfo.includes(item.name));
  let randomItems = randomNumber(imageCollection.length - 1);

  if (direction === 'right') {
    petsSlider.classList.add('move-right')
  } else if (direction === 'left') {
    petsSlider.classList.add('move-left')
  }

  window.setTimeout(function() {
    petsSlider.classList.remove('move-right');
    petsSlider.classList.remove('move-left');
    petsSlider.classList.remove('slider-animation');
  }, 350)
  petsSlider.classList.add('slider-animation');

  for (let i = 0; i < currentPetsInfo.length; i++ ) {
    sliderImages[i].src = imageCollection[randomItems[i]].img
    sliderName[i].innerHTML = imageCollection[randomItems[i]].name;
  }
}

btnArrowRight.addEventListener('click', () => makeRandomSliderItem('right'));
btnArrowLeft.addEventListener('click', () => makeRandomSliderItem('left'));
containerButtonRight.addEventListener('click', () => makeRandomSliderItem('right'));
containerButtonLeft.addEventListener('click', () => makeRandomSliderItem('left'));



function show(event) {
  let item = event.target.closest('.card')
  if (item.classList.contains('card')) {
    popup.classList.add('popup_show');
    overlay.classList.remove('overlay_hidden');
    document.body.classList.add('overflow');
    let petName = item.children[1].firstElementChild.innerHTML;
    let petData = petsInfo.filter(item => item.name === petName)[0];
    
    let img  = document.querySelector('.popup__image');
    let name = document.querySelector('.popup__heading');
    let type = document.querySelector('.popup__type');
    let description = document.querySelector('.popup__description');
    let options = document.querySelectorAll('.popup__item');

    name.innerHTML = petData.name;
    type.innerHTML = `${petData.type} - ${petData.breed}`;
    img.src = `${petData.img}`;
    description.innerHTML = petData.description;
    

    options[0].innerHTML = `<span class="popup__span">Age:</span> ${petData.age}`;
    options[1].innerHTML = `<span class="popup__span">Inoculations:</span> ${petData.inoculations}`;
    options[2].innerHTML = `<span class="popup__span">Diseases:</span> ${petData.diseases}`;
    options[3].innerHTML = `<span class="popup__span">Parasites:</span> ${petData.parasites}`;
  }
}

function closeModal() {
  popup.classList.remove('popup_show');
  overlay.classList.add('overlay_hidden');
  document.body.classList.remove('overflow');
}

overlay.addEventListener('click', function closeOverlay() {
  overlay.classList.add('overlay_hidden');
  popup.classList.remove('popup_show');
  document.body.classList.remove('overflow');
});
closeButton.addEventListener('click', closeModal);
petsSlider.addEventListener('click', show);