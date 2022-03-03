var myData = {
    hello: 1
};
function render(page)
{
    switch (page) {
        case 'compras':
            window.location.href = "../compras/";
            break;
    
        default:
            break;
    }
}
function render_B(){
    fetch('/produtos/')
    .then(function(response){
        return response.json();
    })
    .then( function(myJson){
        /*console.log(myJson['descricao'])*/
        RenderView(myJson)
    })
}

function RenderView(json){
    document.getElementsByClassName('area-box')[0].innerHTML = "";
    for (let i = 0; i < json.length; i++) {
        const Div = document.createElement("div");
        const p = document.createElement("p");
        p.innerText='Descrição: '+json[i]['descricao']+' Valor: '+json[i]['valor_venda'];
        Div.appendChild(p);
        document.getElementsByClassName('area-box')[0].appendChild(Div)
        /*console.log(Div)*/
        
        
    }

}
function Render_Search(){
    data=document.getElementsByClassName("search-input")[0]
    console.log(data.value); 
    o='/produtos/?search='+data.value
    /*console.log(o)*/
    fetch(o)
    .then(function(response){
        return response.json();
    })
    .then( function(myJson){
        /*console.log(myJson['descricao'])*/
        RenderView(myJson)
    })
}



function RenderFilter(){


    fetch('/produtos/')
    .then(function(response){
        return response.json();
    })
    .then( function(json){
        /*console.log(myJson['descricao'])*/
        
        ac=[]
        for (let i = 0; i < json.length; i++) {
            ac[i]=(json[i]['categoria'])
            var cac = ac.filter(function(el, i) {
                return ac.indexOf(el) === i;
            });
            as[i]=(json[i]['categoria'])
            var cas = as.filter(function(el, i) {
                return as.indexOf(el) === i;
            });
            am[i]=(json[i]['categoria'])
            var cam = am.filter(function(el, i) {
                return am.indexOf(el) === i;
            });
            
            /* const li = document.createElement("li");
            const ckbox= document.createElement("INPUT");
            ckbox.setAttribute("type", "checkbox");
            ckbox.innerText=
            Div.appendChild(p);
            document.getElementsByClassName('area-box')[0].appendChild(Div)
            /*console.log(Div)
            
         */   
        }
        for (let i = 0; i < json.length; i++) {
            const li = document.createElement("li");
            const cslect= document.createElement("select");
        }
        console.log(cac)
    })
}




