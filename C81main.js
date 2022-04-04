var mouseEvent = "";

var color ="";
var radius = "";
var width = "";

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown ()
{
    color=document.getElementById("color").value;
    console.log(color);
    radius=document.getElementById("radius").value;
    console.log(radius);
    width=document.getElementById("width").value;
    console.log(width);
    mouseEvent =mousedown;
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup ()
{
    mouseEvent = mouseup;
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave ()
{
    mouseEvent=mouseleave;
    mouse_x=e.clientX-canvas.offsetLeft;
    mouse_y=e.clientY-canvas.offsetTop;
    console.log("X="+mouse_x+",Y"+mouse_y);
    circle(mouse_x,mouse_y);
}