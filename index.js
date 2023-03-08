const pagerDisplay = document.getElementById('pager-display')
const phoneDisplay = document.getElementById('phone-display')



function keyPressed(val){
    phoneDisplay.textContent += val
}

function keyStarPressed(){
    phoneDisplay.textContent += "*"
}

function keyHashtagPressed(){
    phoneDisplay.textContent += "#"
}


document.getElementById('reset-btn').addEventListener('click',function(){
    phoneDisplay.textContent = ""
    pagerDisplay.textContent = ""
})

document.getElementById('send-btn').addEventListener('click',function(){
    
    setTimeout(function(){
        
        const audio = new Audio("assets/pager.wav")
        audio.play()  
        
        pagerDisplay.textContent = phoneDisplay.textContent
        phoneDisplay.textContent = ""
    } ,3000)
    
    
    
})