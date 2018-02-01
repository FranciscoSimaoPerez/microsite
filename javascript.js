function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
function loadContent() {
    $(function (){
        $('#content').load("home.html");
    });

    function loadContent(){
        $(document).ready(function(){
            $('#content').load("home.html");
        });
    }
}