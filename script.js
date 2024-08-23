
const replace1 = document.getElementById("replaceElement1");
const replace2 = document.getElementById("replaceElement2");
const replace3 = document.getElementById("replaceElement3");
replace1.classList.add("inactive") //for a intial step
replace2.classList.add("inactive")//for a intial step


const offer1 = document.getElementById("offer1");
const offer2 = document.getElementById("offer2");
const offer3 = document.getElementById("offer3");
offer3.classList.add("inactive") //for a intial step


//click on frist box then add class current element 
offer1.addEventListener("click", function () {
    replace1.classList.remove('inactive')
    replace3.classList.add("inactive")
    offer1.classList.add("inactive")
    offer3.classList.remove("inactive")
    replace2.classList.add('inactive')
    offer2.classList.remove("inactive")
});

//click on frist box then add class current element 
offer2.addEventListener("click", function () {
    replace2.classList.remove('inactive')
    replace3.classList.add("inactive")
    offer2.classList.add("inactive")
    replace1.classList.add('inactive')
    offer1.classList.remove("inactive")  
    offer3.classList.remove("inactive")
});

//click on frist box then add class current element 
offer3.addEventListener("click", function () {
    replace1.classList.add("inactive")
    replace2.classList.add("inactive")
    replace3.classList.remove("inactive")
    offer3.classList.add("inactive")
    offer2.classList.remove("inactive")
});
