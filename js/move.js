(function(){

    const bg = document.querySelector('.bg') 
    const castle = document.querySelector('.castle')
    const ston = document.querySelectorAll('.ston')
    const castleWidth = castle.offsetWidth
    const castleTop = castle.getBoundingClientRect().top
    const end = document.querySelector('.end')
    const clear = document.querySelector('.clear')
  
   

    

    const play = () =>{
        for(i=0; i<ston.length; i++){
            const stonLeft = ston[i].getBoundingClientRect().left
            const stonTop = ston[i].getBoundingClientRect().top
            const h6El = document.createElement('h6')
            const castle = document.querySelector('.castle')

            if(stonLeft < castleWidth-150 && stonTop > castleTop -50){
                ston[i].classList.add('break')
                bg.appendChild(h6El)
                h6El.style.left = stonLeft + 'px'
                h6El.style.top = stonTop +'px'
                if(castle.classList.contains('castle_3')){
                    end.classList.add('game_set')
                }else if(castle.classList.contains('castle_2')){
                    castle.classList.add('castle_3')
                }else{
                    castle.classList.add('castle_2')
                }
        }
        if(ston[5].classList.contains('break') && !end.classList.contains('game_set')){
            clear.classList.add('game_clear')
        }

    }
    }
    setInterval(play,500)

    const handleEvent = (e) =>{
        const stonLeft = e.target.getBoundingClientRect().left
        const stonTop = e.target.getBoundingClientRect().top
        const h6El = document.createElement('h6')

        console.log(stonLeft)
        console.log(stonTop)
        if(e.target.classList.contains('ston')){
            e.target.classList.add('break')
            bg.appendChild(h6El)
            h6El.style.left = stonLeft + 'px'
            h6El.style.top = stonTop +'px'
        }
    }

    bg.addEventListener('click', handleEvent)
})()

