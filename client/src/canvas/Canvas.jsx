import React, { useCallback, useEffect,useMemo,useRef, useState } from 'react'

const Canvas = (props) => {
  const particleArray = [];
  const Canvasref = useRef(null)
  const requestRef = useRef();
  const mouse = useRef({x:0,y:0,radius:100})


class Shape 
{
    constructor(context,x,y,size,dx,dy,ds,color)
    {
       this.x = x;
       this.y = y;
       this.size= size;
       this.dx = dx;
       this.dy = dy;
       this.ds = ds||0;
       this.color = color
      
       this.ctx = context
    }

    drawLine(){
        
      this.ctx.beginPath()
      this.ctx.arc(this.x,this.y,this.size,Math.PI *2 ,false)
      this.ctx.fillStyle = this.color
      this.ctx.fill()
       for(let i=0;i<particleArray.length;i++)
       {
        if(particleArray[i] != this)
        {
            if(Math.abs(particleArray[i].x-this.x) < 20 && Math.abs(particleArray[i].y - this.y) <20)
            {
              this.ctx.beginPath()
              this.ctx.moveTo(this.x,this.y)
              this.ctx.lineTo(particleArray[i].x,particleArray[i].y)
              this.ctx.strokeStyle = this.color
              this.ctx.stroke()
              this.ctx.closePath()
            }
        }

       }
   
    }

    updateLine(){
    
          this.x += this.dx;
          this.y += this.dy;
          this.size -= this.ds;
          this.timer =0
          this.size >= 0 &&this.drawLine()
        
          for(let i=0;i<particleArray.length;i++)
          {
              if(particleArray[i].size <= 0)
              {
                 
                particleArray.splice(i,1);
                  i--
              }
          }
  
        
    }
}  
let lastTime = null;
const delay = 800/60;
let wait = 0;

const animate = (time) => {
    let deltaTime = 0;
    if (lastTime !== null) {
        deltaTime = time - lastTime;
    }
lastTime = time;
    if(deltaTime + wait < delay) {
      wait += deltaTime;
        requestAnimationFrame(animate);
        return;
    }
    wait = 0;
    if (Canvasref.current) {
        const context = Canvasref.current.getContext('2d');
        context.clearRect(0,0,innerWidth,innerHeight);

        for(let i=0;i<particleArray.length;i++) {
            particleArray[i].updateLine(deltaTime);
        }

        for(let i=0;i<particleArray.length;i++) {
            if(particleArray[i].size <= 0) {
                particleArray.splice(i,1);
                i--;
            }
        }
    }
     requestAnimationFrame(animate.bind(this));
};

function getRandomColor() {
  let colors = ['white'];
  return colors[Math.floor(Math.random() * colors.length)];
}

  useEffect(()=>{
    const handlemousemove =(e)=>{
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      if(Canvasref.current){
        const context = Canvasref.current.getContext('2d')
      for(let i=0;i<10;i++)
          {
              let s = Math.random() * (8 -4) +4
              let dx = Math.random() * (2 +1) - 1
              let dy = Math.random() * ( 2 + 2) -2
              let color = getRandomColor()
              let shape = new Shape(context,mouse.current.x,mouse.current.y,s,dx,dy,0.4,color)
              shape.updateLine()
              particleArray.push(shape)
          }
        }
    }
   
    window.addEventListener('mousemove',handlemousemove)
    requestRef.current = requestAnimationFrame(animate);
    return ()=>{
    window.removeEventListener('mousemove',handlemousemove)
    cancelAnimationFrame(requestRef.current)
    }
  },[Canvasref])

  
  
  

    function size(canvas){
      const context = canvas.getContext('2d')
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    

    useEffect(()=>{
      const canvas = Canvasref.current
      const context = canvas.getContext('2d')
      size(canvas)
      
      
     
      const handleResize = () => size(canvas);
      window.addEventListener('resize',handleResize)

      animate()

      return ()=>{
        window.removeEventListener('resize',handleResize)
      }

    },[Canvasref])

    
    
  return <canvas ref={Canvasref} className=' h-screen w-screen bg-black'  {...props}/>
}

export default Canvas
