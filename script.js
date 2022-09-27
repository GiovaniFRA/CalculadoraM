let op1=document.getElementById("op1")
let op2=document.getElementById("op2")
let op3=document.getElementById("op3")
let op4=document.getElementById("op4")
let reset=document.getElementById("reset")

let n1=document.getElementById("n1")
let n2=document.getElementById("n2")
let n3=document.getElementById("n3")
let n4=document.getElementById("n4")

let m1=document.getElementById("m1")
let m2=document.getElementById("m2")
let m3=document.getElementById("m3")
let m4=document.getElementById("m4")

let r1=document.getElementById("r1")
let r2=document.getElementById("r2")
let r3=document.getElementById("r3")
let r4=document.getElementById("r4")


op1.addEventListener("click",soma)
op2.addEventListener("click",sub)
op3.addEventListener("click",mul)
op4.addEventListener("click",det)
reset.addEventListener("click",refresh)

function refresh(){
    location.reload()
}

function soma(a){
    init()
    r1=n1+m1
    document.getElementById("r1").value=r1

    r2=n2+m2
    document.getElementById("r2").value=r2

    r3=n3+m3
    document.getElementById("r3").value=r3

    r4=n4+m4
    document.getElementById("r4").value=r4
}

function sub(a){
    
    init()
    r1=n1-m1
    document.getElementById("r1").value=r1

    r2=n2-m2
    document.getElementById("r2").value=r2

    r3=n3-m3
    document.getElementById("r3").value=r3

    r4=n4-m4
    document.getElementById("r4").value=r4
}

function mul(a){
    
    init()
    r1=(n1*m1)+(n3*m2)
    document.getElementById("r1").value=r1

    r2=(n2*m1)+(n4*m2)
    document.getElementById("r2").value=r2

    r3=(n1*m3)+(n3*m4)
    document.getElementById("r3").value=r3

    r4=(n2*m3)+(n4*m4)
    document.getElementById("r4").value=r4

    
}

let cont=0
function det(){
    if(cont==0){
        setLayout("det")
        document.getElementById("r1").value=0
        cont=1
    }else{
        init()
        r1=n1*n4-n2*n3
        document.getElementById("r1").value=r1
        cont++
    }
      
}


function setLayout(a){
    if(a=="det"){
        document.getElementById("campo2").style.display="none"
        r4.style.display="none"
        r3.style.display="none"
        r2.style.display="none"
    }
}

function end(){
    let bloq=document.createElement("div")
    bloq.style.height=100+"vh"
    bloq.style.whidt=100+"vw"
    bloq.style.backgroundColor="red"

    document.body.appendChild(bloq)
}

function init(){
    n2=parseInt(document.getElementById("n2").value)
    n1=parseInt(document.getElementById("n1").value)
    n3=parseInt(document.getElementById("n3").value)
    n4=parseInt(document.getElementById("n4").value)
    m1=parseInt(document.getElementById("m1").value)
    m2=parseInt(document.getElementById("m2").value)
    m3=parseInt(document.getElementById("m3").value)
    m4=parseInt(document.getElementById("m4").value)
    r1=parseInt(document.getElementById("r1").value)
    r2=parseInt(document.getElementById("r2").value)
    r3=parseInt(document.getElementById("r3").value)
    r4=parseInt(document.getElementById("r4").value)
}






