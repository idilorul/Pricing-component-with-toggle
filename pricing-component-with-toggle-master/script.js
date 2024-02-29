"use strict";
const checkbox = document.querySelector(".checkbox");
const hidOne = document.querySelector(".hid__one");
const hidTwo = document.querySelector(".hid__two");
const hidThree = document.querySelector(".hid__three");
const selectionTwo = document.querySelector(".selection__two");
const selectionThree = document.querySelector(".selection__three");
const selectionFour = document.querySelector(".selection__four");

const whenClicked = function () {
  hidOne.classList.toggle("hidden");
  hidTwo.classList.toggle("hidden");
  hidThree.classList.toggle("hidden");
  selectionTwo.classList.toggle("hidden");
  selectionThree.classList.toggle("hidden");
  selectionFour.classList.toggle("hidden");
};

checkbox.addEventListener("click", function () {
  whenClicked();
});
