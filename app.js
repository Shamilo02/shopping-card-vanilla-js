const shopBtn = document.querySelector(".shopBtn");
const shopModal = document.querySelector(".shop-modal");
const shopRow = document.querySelector(".shopRow");
const closeModal =document.querySelector('.closeModal')

let product = [
  {
    id: 1,
    src: "https://images7.alphacoders.com/857/thumbbig-857415.webp",
    title: "Bonucchi",
    price: 150,
  },
  {
    id: 2,
    src: "https://images6.alphacoders.com/325/thumbbig-325416.webp",
    title: "Mancini",
    price: 80,
  },
  {
    id: 3,
    src: "https://images3.alphacoders.com/874/thumbbig-874739.webp",
    title: "Classico",
    price: 200,
  },
  {
    id: 4,
    src: "https://images.alphacoders.com/602/thumbbig-602247.webp",
    title: "Tacossa",
    price: 120,
  },
];


let sebet = []

function sebetLoad() {
    let total =0;
    document.querySelector('tbody').innerHTML='';
    sebet.forEach((x) =>{
        let axtar = product.filter((prod) =>{
            return prod.id == x.id;
        })[0]
        axtar.count =x.count;
        console.log(axtar);
    
     
       document.querySelector('tbody').innerHTML+=`
       <tr>
       <td scope="row">
         <img
           width="100px"
           src="${axtar.src}"
          
         />
       </td>
       <td>${axtar.title}</td>
       <td>
       <div class="container w-50">
           <div class="row">
               <div class="col-lg-4">
                   <button class="btn btn-success" onclick="artir(${axtar.id})">Artir</button>
               </div>
               <div class="col-lg-4">
                   <span>${axtar.count}</span>
               </div>
               <div class="col-lg-4">
                 <button class="btn btn-danger" onclick="azalt(${axtar.id})">Azalt</button>
               </div>
           </div>
       </div>
       </td>
       <td>${axtar.price*axtar.count}$</td>
       <td><button class="btn btn-danger">delete</button></td>
     </tr>
       
       ` 

       
       total += axtar.price*axtar.count;
       document.querySelector(".total").innerHTML= total + `$`;
    })  
}

product.forEach((p)=>{
        document.querySelector(".shopRow").innerHTML+=`
        
        <div class="col-lg-3">
            <div class="card text-center">
            <img class="card-img-top"
             src="${p.src}" title="product">
            <div class="card-body">
            <h4 class="card-title">${p.title}</h4>
            <p class="card-text">Price ${p.price}$ </p>
            <button class="btn btn-info" onclick="addCard(${p.id})">Add Card </button>
                    </div>
                </div>
            </div>
        
        `
})

function addCard(x) {
    let tap = sebet.filter((s) =>{
     return s.id == x;
    })
    if (tap.length == 0) {
        sebet.push({
            id:x,
             count:1,  
        })    
    } else {
        tap[0].count++;
    }
}



function azalt(x) {
    let axtar =  sebet.filter((s) =>{
        return s.id == x;
    })[0];
    
    if (axtar.count == 0) {
        sebet.splice(sebet.indexOf(axtar),1)
    }else{
        axtar.count--
    }
    sebetLoad()
}

function artir(x) {
    sebet.filter((s) =>{
        return s.id == x;
    })[0].count++;
    sebetLoad()
}



shopBtn.onclick = () => {
    sebetLoad();
  shopModal.classList.add("show");
};
closeModal.onclick=()=>{
    shopModal.classList.remove('show')
}