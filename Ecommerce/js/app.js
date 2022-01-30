

/*const pantExtPrice = (quantity)=>
{
    const PANTSUNITPRICE = 40.99

    const pantsExtendedPrice = PANTSUNITPRICE * quantity
    return pantsExtendedPrice
   
}

const shirtExtPrice = (unitNum)=>
{
    const shirtUnitPrice = 10.99
    return 10.99 * unitNum
}

const generateExtPrice = (extPrice, quantity) =>
{
    const units = parseInt(quantity.value)
    extPrice.innerHTML = `<p> $${(pantExtPrice(units)).toFixed(2)} </p>`;

}
*/

const subtotal = (unit, shirtUnits)=>
{
    return unit + shirtUnits
}



const main = (()=>
{

    const products = document.querySelectorAll("#products")
    const pantsQuantity = document.querySelector("#pantsQuantity")
    const shirtQuantity = document.querySelector("#shirtQuantity")

    const pantUnits = document.querySelector(".pantunits")
    const shirtUnits = document.querySelector(".shirtunits")


    const unitPrice = document.querySelectorAll("#unitPrice")
    const extendedPrice = document.querySelector("#extPrice")
    const extendedPriceShirt = document.querySelector("#extPriceShirt")

    const promo = document.querySelector("#promo")


    const addBtn = document.querySelector(".add")
    const minusBtn = document.querySelector(".minus")
    const calBtn = document.querySelector("#calculate")
    const promoCodeBtn = document.querySelector("#promocode")

    const subTotal = document.querySelector("#subtotal")
    const tax = document.querySelector("#tax")
    const total = document.querySelector("#total")

    const PANTSUNITPRICE = 40.99
    const SHIRTSUNITPRICE = 10.99
    const TAX = 0.13
    let count = 0;

    pantsQuantity.addEventListener("click",(event)=>
    {
        const element = event.target

        if (element.tagName == "BUTTON" && element.innerText == "+")
        { 
            count++
            pantUnits.innerText++
        }


       else if (element.tagName == "BUTTON" && element.innerText == "-" && (pantUnits.innerHTML > "0") )
        { 
            count = --pantUnits.innerText;
        }

       let units = (count * PANTSUNITPRICE).toFixed(2)
       extendedPrice.innerText = `$${units}`

    })



    shirtQuantity.addEventListener("click",(event)=>
    {
        const element = event.target

        if (element.tagName == "BUTTON" && element.innerText == "+")
       {   
            count++ 
            shirtUnits.innerText++;    
       }

       else if (element.tagName == "BUTTON" && element.innerText == "-" && (shirtUnits.innerHTML > "0") )
       {
            
            count = --shirtUnits.innerText
        
       }

       let shirtunit = (count * SHIRTSUNITPRICE).toFixed(2)
       extendedPriceShirt.innerText = `$${shirtunit}`
           
    })

    calBtn.addEventListener("click",()=>
    {
        const subtotal = (parseFloat(extendedPriceShirt.innerText)) + (parseFloat(extPrice.innerText))
        subTotal.innerText = `$${subtotal}`
        const Tax = (parseFloat(subtotal * TAX)).toFixed(2)
        tax.innerText = `$${Tax}`
        const Total = parseFloat(subtotal + Tax)
        total.innerText = `$${Total}`

    })

    promoCodeBtn.addEventListener("click",()=>
    {
        let subtotal = 0;
        const userPromocode = prompt("Please enter your promo code: ")

        if (userPromocode === "NOTAX")
        {
            Tax=0
            subtotal = (parseFloat(extendedPriceShirt.innerText)) + (parseFloat(extPrice.innerText))
            subTotal.innerText = `$${subtotal}`
            tax.innerText = `$${Tax}`
            const Total = parseFloat(subtotal + Tax)
            total.innerText = `$${Total}`
        }

        else if(userPromocode === "FIFTYFIFTY")
        {
            subtotal = (parseFloat(extendedPriceShirt.innerText)) + (parseFloat(extPrice.innerText))
            subtotal = subtotal * 0.5
            subTotal.innerText = `$${subtotal}`
            const Tax = (parseFloat(subtotal * TAX)).toFixed(2)
            tax.innerText = `$${Tax}`
            const Total = parseFloat(subtotal + Tax)
            total.innerText = `$${Total}`
        }

        else 
        promo.innerHTML += `<div> Code Invalid, please enter a valid coupon code</div>`
        console.log("Code Invalid")

    })

})()