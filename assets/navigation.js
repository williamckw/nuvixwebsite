document.addEventListener("DOMContentLoaded",function(){
  const menuButton=document.querySelector(".nx-menu-toggle");
  const navigation=document.querySelector(".nx-nav");
  const dropdownItems=document.querySelectorAll(".nx-has-dropdown");
  if(menuButton&&navigation){menuButton.addEventListener("click",function(){const isOpen=navigation.classList.toggle("is-open");menuButton.setAttribute("aria-expanded",isOpen?"true":"false")})}
  dropdownItems.forEach(function(item){const trigger=item.querySelector(".nx-nav__trigger");if(!trigger)return;trigger.addEventListener("click",function(event){if(window.innerWidth<=1050){event.preventDefault();dropdownItems.forEach(function(other){if(other!==item)other.classList.remove("is-open")});item.classList.toggle("is-open")}})});
  document.addEventListener("click",function(event){if(!event.target.closest(".nx-top")){if(navigation)navigation.classList.remove("is-open");dropdownItems.forEach(function(item){item.classList.remove("is-open")});if(menuButton)menuButton.setAttribute("aria-expanded","false")}});
  window.addEventListener("resize",function(){if(window.innerWidth>1050){if(navigation)navigation.classList.remove("is-open");dropdownItems.forEach(function(item){item.classList.remove("is-open")});if(menuButton)menuButton.setAttribute("aria-expanded","false")}})
});
