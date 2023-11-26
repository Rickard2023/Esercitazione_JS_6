
function shopnamechange(element)
{
    element.innerText = "Phone shop";
    element.style.color = "rebeccapurple";
    backgroundchange(element,"black");
}
function shopnamerevert(element)
{
    element.innerText = "My Shop";
    element.style.color = "black";
    backgroundchange(element,"white");
}

function backgroundchange(element, color)
{
    document.body.style.backgroundColor = color;
}

function clicktest()
{
    let el = document.getElementById("Awi");
    el.style.color = "green";
    el.style.fontSize = "small";
    el.style.fontFamily = "Arial";
    el.innerText = "TOPO";
}

function addClass()
{
   let el = document.getElementsByClassName("itemdesc1");
   el.classList.add("newclass");
}

 function crazySales(price)
 {
    let r = Math.random()*100;
    let colors = ["black", "red", "limegreen", "green", "cyan", "purple", "rebeccapurple", "darkgoldenrod", "antiquette", "teal", "orange", "brown"];
    price.style.color = colors[Math.floor(Math.random() * colors.length) + 1];
 //   price.innerText = "€" + r.toFixed(2);
 }

 function hidePics(element) {
    element.classList.add("hidepic");
 }