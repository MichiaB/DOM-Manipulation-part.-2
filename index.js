let menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

//part 1
const mainEl = document.querySelector("main");
//A
mainEl.style.backgroundColor = "var(--main-bg)";
//B
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
//C
mainEl.classList.add("flex-ctr");

//Part 2
const topMenuEl = document.querySelector("#top-menu");
// A
topMenuEl.style.height = "100%";
// B
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
//C
topMenuEl.classList.add("flex-around");

//Part 3
for (let i of menuLinks) {
  let anchor = document.createElement("a");
  anchor.setAttribute("href", i.href);
  anchor.textContent = i.text;
  topMenuEl.appendChild(anchor);
}

// DOM Manipulation pt. 2

// Part 3

// Select and cache the
//  <nav id="sub-menu"> element in a variable named subMenuEl.

const submenuEl = document.getElementById("sub-menu");

// Set the height subMenuEl element to be "100%".

submenuEl.style.height = "100%";

// Set the background color of subMenuEl to
// the value stored in the --sub-menu-bg CSS custom property.

submenuEl.style.backgroundColor = "var(--sub-menu-bg)";

// Add the class of flex-around to the subMenuEl element.

submenuEl.classList.add("flexaround");

// Set the CSS position property of subMenuEl to the value of absolute.

submenuEl.style.position = "abosolute";

// Set the CSS top property of subMenuEl to the value of 0.

submenuEl.style.top = "0";

/// Part4: Adding Menu Interaction

//Select and cache the all of the <a> elements 
// inside of topMenuEl in a variable named topMenuLinks.

topmenuLinks = document.querySelectorAll("a")


// Attach a delegated 'click' event listener to topMenuEl.
//The first line of code of the event listener function should call 
// the event object's preventDefault() method.
//The second line of code of the function should immediately return 
// if the element clicked was not an <a> element.
//Log the content of the <a> to verify the handler is working.

topMenuEl.addEventListener("click", menie )

function menie(e){
console.log("test")
    e.preventDefault()
    if(!e.target.classList.contains ("active"))
  if (!(e.target.tagName==="A")) return;
  
  
console.dir(e.target);
}
console.log(topmenuLinks)

// Part 5: adding a submenu interaction 

// Within the event listener, if the clicked <a> element 
// does not yet have a class of "active" (it was inactive when clicked):
//If the clicked <a> element's "link" object within menuLinks has 
//a subLinks property (all do, except for the "link" object for ABOUT), 
//set the CSS top property of subMenuEl to 100%.




//Otherwise, set the CSS top property of subMenuEl to 0.
//Hint: Caching the "link" object will come in handy for passing 
//its subLinks array later.


