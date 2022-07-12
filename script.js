var imgs = document.querySelectorAll(".i");
var show = document.getElementById("im");
var p = document.createElement("div");
var s = document.getElementById("show");
var bt = document.getElementsByClassName(".btn")[0];
imgs.forEach(img => {
    img.addEventListener("click", () => {
        s.style.visibility = "visible";
        var url = img.getAttribute("src");
        var title = img.getAttribute("title");
        show.setAttribute("src", url);
        s.appendChild(p);
        s.style.display = "flex"
        p.setAttribute("class", "paragraph");
        p.innerText = title;
    });
});
function del(){
    s.style.display = "none"
}