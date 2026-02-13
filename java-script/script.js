const slider = document.getElementById("slider");
let cards = document.querySelectorAll(".card");

function getCardWidth() {
  if (window.innerWidth <= 768) {
    return 100; // mobile
  } else {
    return 25; // desktop (4 cards)
  }
}

let visibleCards = window.innerWidth <= 768 ? 1 : 4;
let index = visibleCards;

// Clone cards
for (let i = 0; i < visibleCards; i++) {
  const firstClone = cards[i].cloneNode(true);
  const lastClone = cards[cards.length - 1 - i].cloneNode(true);

  slider.appendChild(firstClone);
  slider.insertBefore(lastClone, slider.firstChild);
}

cards = document.querySelectorAll(".card");

slider.style.transform = `translateX(-${index * getCardWidth()}%)`;

function next() {
  index++;
  slider.style.transition = "transform 0.5s ease";
  slider.style.transform = `translateX(-${index * getCardWidth()}%)`;
}

function prev() {
  index--;
  slider.style.transition = "transform 0.5s ease";
  slider.style.transform = `translateX(-${index * getCardWidth()}%)`;
}

slider.addEventListener("transitionend", () => {
  if (index >= cards.length - visibleCards) {
    slider.style.transition = "none";
    index = visibleCards;
    slider.style.transform = `translateX(-${index * getCardWidth()}%)`;
  }

  if (index < visibleCards) {
    slider.style.transition = "none";
    index = cards.length - visibleCards * 2;
    slider.style.transform = `translateX(-${index * getCardWidth()}%)`;
  }
});
