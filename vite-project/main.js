"use strict";

import "./style.css";
const sideBarBtn = document.querySelector(".header-btn");
const sideBar = document.querySelector(".main-nav");
const sideBarClose = document.querySelector(".x-icon");
sideBarBtn.addEventListener("click", function () {
  sideBar.classList.add("main-nav-mobile");
});
sideBarClose.addEventListener("click", function () {
  sideBar.classList.remove("main-nav-mobile");
});
