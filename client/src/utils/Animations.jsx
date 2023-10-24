export const Animationleft =(distance,delaytime,duration)=> {
 return {
    initial:{x:distance,opacity:0},
    whileInView:{x:0},
    animate:{opacity:1},
    transition:{duration:duration,delay:delaytime}
 
}
}

export const Animationbottom =(distance,delaytime,duration)=>{
    return {
        initial:{y:distance,opacity:0},
        whileInView:{y:0,opacity:1},
        transition:{duration:duration,delay:delaytime}
    }
}

export const projectanimation = ()=>{

    return {
        initial:{scale:0.3,height:"0px",width:"0px",opacity:0},
        animate:{scale:1,height:"300px",width:"300px",opacity:1},
        exit:{scale:0.3,height:"0px",width:"0px",opacity:0},
    }
}

export const fadeanimation =()=>{
    return{
        initial:{scale:0.3,opacity:0},
        animate:{scale:1,opacity:1},
        exit:{scale:0.3,opacity:0},
    }
}

export const navanimation =()=>{
    return{
        initial:{height:"0"},
        animate:{height:"fit-content"},
        exit:{height:"0px"}
    }
}