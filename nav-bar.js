export function navBarInit(store){
    let navBar = document.getElementById("navbar");
    let lineCont = document.getElementById('line-cont');
    let lineContSytle = lineCont.style;
    let navElements = Array.from(document.getElementsByClassName('nav-li'));

    let curOffset = 0;
    let cornersFixed = {val: true};
    let fixGrdCornersInterval; 
    function fixGrdCorners(startPos, endPos, pixelSkip){
        cornersFixed.val = true;
        let computedLineStyle = window.getComputedStyle(lineCont);
        let curStartPos = parseInt(computedLineStyle.getPropertyValue('--grd-start'));
        let curEndPos = parseInt(computedLineStyle.getPropertyValue('--grd-end'));
        startPos = parseInt(startPos);
        endPos = parseInt(endPos);
        clearInterval(fixGrdCornersInterval);
        return new Promise((resolve)=>{
            let startDir = startPos > curStartPos ? +1 : -1;
            let endDir = endPos < curEndPos ? -1 : +1;
            fixGrdCornersInterval = setInterval(()=>{
                if(startPos != curEndPos){
                    curStartPos = Math.abs(curStartPos - startPos) < pixelSkip ?  startPos : curStartPos + startDir * pixelSkip;
                    lineContSytle.setProperty('--grd-start', curStartPos);
                }
                if(endPos != curEndPos){
                    curEndPos = Math.abs(curEndPos - endPos) < pixelSkip ? endPos : curEndPos + endDir * pixelSkip;
                    lineContSytle.setProperty('--grd-end', curEndPos);
                }
                if(startPos == curStartPos && endPos == curEndPos){
                    clearInterval(fixGrdCornersInterval);
                    resolve();
                }
            }, 0);
        })
    }
    let expandTimeOut;
    function addHoverEffect(){
        for(let element of navElements){
            element.addEventListener('mouseover', ()=>{
                clearTimeout(expandTimeOut)
                lineCont.classList.remove('move-with-mouse');
                let elementRect = element.getBoundingClientRect();
                fixGrdCorners(elementRect.left, elementRect.right, 7);
                curOffset = parseInt(elementRect.width/2); 
                lineContSytle.setProperty('--grd-end-offset', `${curOffset}`);
                lineContSytle.setProperty('--grd-start-offset', `${curOffset}`);
            })
            element.addEventListener('mouseout', ()=>{
                lineCont.classList.add('move-with-mouse');
                cornersFixed.val = false;
                expandTimeOut = setTimeout(()=>{
                    lineCont.classList.remove('move-with-mouse');
                    fixGrdCorners(0, store.windowWidth, 5)
                }, 500);
            })
        }
        
    }

    function updateWhileFollow(mouseX){
        console.log(cornersFixed)
        if(!cornersFixed.val){
            lineContSytle.setProperty('--grd-start', parseInt(mouseX - curOffset));
            lineContSytle.setProperty('--grd-end', parseInt(mouseX + curOffset));
        }
    }
    return new Promise((resolve)=>{
        store.root.style.setProperty('--window-width', store.windowWidth);
        store.root.style.setProperty('--mouse-x', store.windowWidth/2)
        lineContSytle.setProperty('--grd-start', store.windowWidth/2);
        lineContSytle.setProperty('--grd-end', store.windowWidth/2);

        fixGrdCorners(0, store.windowWidth, 3)
            .then(()=>{
                addHoverEffect();
                resolve(updateWhileFollow);
            });
    });



    
}
