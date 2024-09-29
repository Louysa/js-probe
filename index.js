class V2 {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    add(that){
        return new V2(this.x + that.x,this.y + that.y)
    }
    sub(that){
        return new V2(this.x - that.x, this.y - that.y)
    }

    scale(that){
        return new V2()
    }
    
}

function fillCircle(context,x,y,radius,color="green")
{
    
context.beginPath();
context.arc(x,y,radius,90,2*Math.PI);

context.fillStyle = color;

context.fill();
    
}


(() => {
    const canvas = document.getElementById("myCanvas");
    const radius = 69;
    const context = canvas.getContext("2d");
    let start;

    function step(timestamp){
        
    if(start = undefined){
        start = timestamp
    }
    const dt = (timestamp - start) * 0.001;
    start = timestamp 

    
     const width   = window.innerWidth;
     const height  = window.innerHeight;
     canvas.width  = width;
     canvas.height = height;

    fillCircle(context,width / 2,height / 2, radius,"red")

     window.requestAnimationFrame(step);
}
    
window.requestAnimationFrame(step);

       

   

})();
