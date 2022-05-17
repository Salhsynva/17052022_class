let box = document.getElementById("box");
let mainBox = document.getElementById("mainBox");
let dot = document.getElementById("dot")


let leftPosition = 0;
let topPosition = 0;

window.addEventListener('keydown', function (e) {
    if (e.keyCode == 39) {
        if (leftPosition == mainBox.offsetWidth) {
            leftPosition = -box.style.width;
        }
        leftPosition += 5;
        box.style.left = leftPosition + 'px';
    } else if (e.keyCode == 37) {
        if (leftPosition == -box.style.width) {
            leftPosition = mainBox.offsetWidth;
        }
        leftPosition -= 5;
        box.style.left = leftPosition + 'px';
    } else if (e.keyCode == 38) {
        if (topPosition == -box.offsetHeight) {
            topPosition = mainBox.offsetHeight;
        }
        topPosition -= 5;
        box.style.top = topPosition + 'px';
    } else if (e.keyCode == 40) {
        if (topPosition == mainBox.offsetHeight) {
            topPosition = -box.offsetHeight;
        }
        topPosition += 5;
        box.style.top = topPosition + 'px';
    }

    if((((box.offsetTop+box.offsetHeight) > (dot.offsetHeight+dot.offsetTop)) && (box.offsetTop < dot.offsetTop)) && 
    (((box.offsetLeft+box.offsetWidth) > (dot.offsetWidth+dot.offsetLeft)) && (box.offsetLeft < dot.offsetLeft))){
    
    console.log(dot);
}
})

for (let i = 0; i < 30; i++) 
{
    let newDot = document.createElement('div');
    newDot.classList.add('dot');
    mainBox.append(newDot)
    console.log(newDot);
    do{
        
        var dotLeft = Math.floor(Math.random() * 1000);
        var dotTop = Math.floor(Math.random() * 1000);
    }while(!(dotLeft <= mainBox.offsetHeight && dotTop <= mainBox.offsetTop))

    newDot.style.left = dotLeft+"px";
    newDot.style.top = dotTop+"px";


}








