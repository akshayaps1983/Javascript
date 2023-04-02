function toggle(e){
    console.log(e.target.name)
    if(e.target.name=="yelow"){
        id_inp.style.backgroundcolor='yellow'
        id_inp.value='yellow'

    }
    elseif(e.target.name=="pink"){
        id_inp.style.backgroundcolor='pink'
        id_inp.value='pink'  
    }
    
}