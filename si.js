const firstElemet = (myArray)=>{
    console.log(myArray[0])
}
const allElements = (myArray)=>{
    myObject.forEach(element => {
        console.log(element)
    });
}

const allObjectElements=(object)=>{
    for(let element in object){
        console.log(element+' '+object[element])
    }
}

allObjectElements({myName:'david',myAge:2,myHouse:'Wallaby'})