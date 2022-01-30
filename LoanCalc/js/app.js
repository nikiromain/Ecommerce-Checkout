const getMonthlyPayment = (loanTerm, loanAmt)=>
{
    const RATE = 5
    const loanTermMonths = loanTerm * 12
    const monthlyInterest = (RATE/100) /12
    const mathPw = 1- (Math.pow(1 + monthlyInterest , -loanTermMonths))
    const monthlyInstallment = (mathPw / (loanAmt * monthlyInterest)).toFixed(2)

    return monthlyInstallment
}

const isValidated = (fields, error)=>
{
    
    let validated = true;

    if (fields[0].value == "")
    {
        error[0].innerText = "Please enter a loan amount";
        validated = false;
    }


    else if (isNaN(fields[0].value))
    {
        error[0].innerText = "You must enter a valid amount. eg. 5000"
        validated = false;
    }

    else 
    {
        error[0].innerText = ""
        validated = true
    }
    

    if (fields[2].value == "")
    {
        error[2].innerText = "Please enter the loan term in years";
        validated = false;
    }

    else if (isNaN(fields[2].value))
    {
        error[2].innerText = "You must enter a valid loan term eg. 31"
        validated = false;
    }


    else 
    {
        error[2].innerText = ""
        validated = true
    }
    return validated

}

const displayAnswer = (modal,fields)=>
{
    const loanAmt = parseFloat(fields[0].value)
    const rate = parseInt(fields[1].value)
    const term = parseFloat(fields[2].value * 12)

    modal.classList.remove("hide")
    modal.children[0].innerText = `Loan Amount: ${loanAmt}\nRate: ${rate}\nLoan Term: ${term}\nMonthly Payments: ${getMonthlyPayment(loanAmt, term)}`

    fields.forEach(fields=>
    {
        fields.value = ""
        
    })

}

const hideModal = (modal)=>
{
    modal.classList.add("hide")
}

const main = (()=>
{

    const fields = document.querySelectorAll(".fields > input[type=text]")
    const error = document.querySelectorAll(".error")
    const btn = document.querySelector("#getLoanPaymentsBtn")
    const modal = document.querySelector(".modal")

    btn.addEventListener("click",()=>
    {
        const val = isValidated(fields, error)
        {
            if(val == true)
            {
                displayAnswer(modal, fields)
            }
        }
    });

    modal.addEventListener("click",()=>
    {
        hideModal(modal)
    });



})();