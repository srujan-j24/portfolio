import "./style.scss";

let root = document.documentElement;
import { navBarInit } from "./nav-bar";

const store = {
    windowWidth: window.innerWidth,
    root: document.documentElement,
}
window.addEventListener('resize', ()=>{
    store.windowWidth = window.innerWidth;
});

function followMouse(e, fn){
    root.style.setProperty('--mouse-x', e.clientX);
    root.style.setProperty('--mouse-y', e.clientY);
    fn(e.clientX);
}
function stopFollowMouse(){
    document.removeEventListener('mousemove', followMouse);
}


navBarInit(store).then((fn)=>{
    document.addEventListener('mousemove', (e)=>{followMouse(e, fn)});
});


