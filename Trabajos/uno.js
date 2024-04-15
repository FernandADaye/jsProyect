// eres bonit@?
// pon tu respuesta 
let respondes = true 

const eresBonita = new Promise((resolve, reject ) => {
    if (respondes) {
        resolve("obvio que siii")
    } else {
        reject("no te creo")
    }
})

eresBonita
.then((response)=>{
    console.log(response);
}).catch((error)=>{
    console.error(error);
})