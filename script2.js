const title = document.getElementById("title");

title.innerText ="Got you";

console.dir(title.id);
console.dir(title.className);

const hellos = document.getElementsByClassName("Hello");

console.log(hellos);


const title3 = document.getElementsByTagName("h3");
console.log(title3)

const title3_1 = document.querySelector(".hello11 h4");
console.log(title3_1);

// 아래 두개는 같은 결과를 얻음
//const title4_1 = document.querySelector("#test");
//const title4_2 = document.getElementById("test");

const title5_1 = document.querySelector("div#first:first-child h2");
// console.dir(title5_1);
// title5_1.style.color = "tomato";

function handleTitleClick(){
    // console.log("title was clicked");
    // title5_1.style.color = "red";
    const currentColor = title5_1.style.color;
    let newColor;
    console.log(title5_1.style.color);

    if(currentColor === "red"){
        newColor = "green";
    }else {
        newColor  = "red";
    }
    title5_1.style.color = newColor;
}


function handleMouseEnter(){
    title5_1.innerText  = "Mouse is here!"

}

function handleMouseLeave(){
    title5_1.innerText ="Mouse is Gone!";

}
function handleTitleclick2(){
    // title5_1.className= "active";
    // console.log("test!!");
    const currentClassName = title5_1.className;
    const cilckedClass = "active"
    let titleClass;
    if(currentClassName === cilckedClass){
        titleClass = "";
    }else {
        titleClass = cilckedClass;
    }
    title5_1.className = titleClass;
}

//* handle~~3 과 handle~~4는 같은 결과값을 냄
function handleTitleclick3(){
    const cilckedClass = "active"
    if(title5_1.classList.contains(cilckedClass)){
        title5_1.classList.remove(cilckedClass);
    }else {
        title5_1.classList.add(cilckedClass);
    }
}

// toggle 함수로 한줄로 작성 가능!!
function handleTitleclick4(){
    title5_1.classList.toggle("active");
}


//title5_1.addEventListener("click", handleTitleClick);
// title5_1.onclick = handleTitleClick;
// title5_1.addEventListener("click", handleTitleclick2);
// title5_1.addEventListener("click", handleTitleclick3);
title5_1.addEventListener("click", handleTitleclick4);
// title5_1.addEventListener("mouseenter", handleMouseEnter)
title5_1.onmouseenter = handleMouseEnter;
// title5_1.addEventListener("mouseleave", handleMouseLeave)
title5_1.onmouseleave = handleMouseLeave;


function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy(){
    alert("copier!!");
}
function handleWindowOffline(){
    alert("SOS no WIFI");
}
function handleWindowOnline(){
    alert("ALL GOOODDDDD");
}

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);


