window.addEventListener("scroll", function() {
    var elementoRolagem = document.querySelector("#elemento-rolagem");
    var scrollTop = window.scrollY; 
    elementoRolagem.style.top = scrollTop + "px"; 
});
