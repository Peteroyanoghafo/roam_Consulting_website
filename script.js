const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav_menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});


var header = document.getElementsByClassName("nav_bar");
for (var i = 0; i < nav_links.length; i++) {
    btns[i].addEventListener("click",function() {
        var current = document.getElementsByClassName("active");
        current[0].className =
        current[0].className.replace ("active", "");
        this.className += " active";
    });
}


// function myFunction() {
//     var input, filter, title, txtValue;
//     input = document.getElementById ("myInput");
//     filter = input.value.toUpperCase();
//     title = document.getElementsByClassName("job_title");
//     txtValue = title.textContent || title.innerText;
//         if(txtValue.toUpperCase().indexOf(filter) > -1) {
            



//         }
// }
function myFunction() {
     var searchValue = document.getElementById("myInput").value;
     if (searchValue === "job") {
        window.open("/latestJobs.html");
     }
     else if (searchValue === "latest") {
        window.open("/latestJobs.html#moreJobs")
     }
     else{
       window.open("/latestJobs.html")
     }
}