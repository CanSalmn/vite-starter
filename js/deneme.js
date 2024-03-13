console.log("hello world")

const text = "deneme mi dersin "


const inSideValue = document.getElementById('changedValue').innerHTML

// console.log(inSideValue)

const car = { marka: 'bmw', model: '2018', color: 'red' }



    console.log(car.color)


function changeIt() {

    // document.getElementById('changedValue').innerHTML = text
    const aNewBodyElement = document.createElement("body");

    aNewBodyElement.id = "newBodyElement";
    document.body = aNewBodyElement;
}