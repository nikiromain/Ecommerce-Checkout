README.md
# QUESTION 1 - LOAN CALCULATOR

For example :
Users should  NOT be allowed to leave text fields empty.
Users should NOT be allowed to enter text when asked for numeric values.
Display descriptive error messages when the users break the validation rules .
ALL error messages and outputs should be displayed in a customized modal that you designed in HTML & CSS.
QUESTION 1
You have been contracted as a web programmer to develop a loan calculator web application for a Bank.. The loan calculator must allow any user using the web application to generate their monthly payments for a given loan amount based on a given annual interest rate.
 
Your Loan Calculator Web Application MUST ONLY allow the user to enter the following data, via a web form:-
 
o  Loan Amount
o Annual Interest Rate (5%)- This should be fixed and the user should not be allowed to change this value
o  Loan term(years)

After the user enters the aforementioned data and click on the button titled “Calculate”, the web application would then calculate the user Monthly Loan payment
 
The web application would then be required to lastly print out the following information below the  web form . See information to be displayed : 
o   Loan Amount
o   Annual Interest Rate
o   Loan term(in months)
o   Monthly Payments

The calculations for calculating the monthly loan payments are as follows:
 
1. 	 Get user loan amount
a. 	If the user enters 5000. Then 5000 becomes the user loan amount.
 
2. 	Find the number of payments required on the loan.
a. 	This is done by taking the value that the user entered in the “Loan term field (years)” and multiplying it by 12.
b. 	For Example, if the user entered 5 as the Loan term, then the number of payments required would be 60 (5*12).
 
3. 	Calculate the monthly interest.
a. 	This is done by dividing the annual interest rate by 12.
b. 	For example if the user entered 5 as the annual interest then the monthly interest would be ((5/100)/12 ) this would equal to 0.00416
  
4. 	Add 1 to the monthly interest rate just calculated
a. 	For example if the monthly interest rate was 0.00416, adding 1 to it would be it 1.00416 
5. 	Raise the above sum(1.00416) using a negative exponent of the number of loan payments required .
a. 	For example if you have to make 60 loan payments, you raise 1.00416 to the power of – 60.
This is done by writing this line of code “ Math.pow(1.00416 , -60) “. This should equal 0.779205.

6. 	Subtract your above answer from 1
a. 	For example, 1 – (1.00416 to the power -60). This should equal to 0.2207946
 
7. 	Multiply your monthly interest rate by the loan amount
a. 	The user monthly interest rate for this example is 0.00416 and their loan amount is 5000, thus 5000 * 0.00416 would equal to 20.8333
 
8. 	Produce your monthly instalments by, dividing the above answer from [ 1 – (1.00416 to the power -60) ].
a. 	For example 20.8333  /0.2207946 which would equal to 94.36
 
 
GUIDELINES:
 
1. 	Develop an HTML page that will contain the relevant text boxes to capture the data. 
3. 	You must create an external Javascript file that will provide all the functionality stated above.
4. 	When displayed, the monthly instalments should be displayed in red text. This must be done through Javascript.

# QUESTION 2 - ECOMMERCE CHECKOUT
You have been hired by H&M to develop an online E-Commerce Web Application. Using HTML 5 /CSS/Javascript, quickly create a checkout prototype page for H&M’s E-commerce store.

1. PART 1:  Develop the User Interface 

Your User Interface should look similar to the below diagram  


2. PART 2:  Calculating Extended Prices 

Clicking on the r+ / - buttons should increase/decrease the respective quantity & calculate the respective extended Price for pants and shirt, as shown in the below diagram shown. All amounts need to be rounded to 2 decimal points.



You cannot have negative quantities in the shopping cart. Thus, if the quantity is zero on any of the two items and the user hits the - button, the quantity should not decrease further.

Extended Price is Quantity X Extended Price


3. PART 3:  Calculating the SubTotal/Tax and Final Total of your shopping cart

When the user presses the CALCULATE button,  the web application should calculate subtotal (Add two extended prices together), tax (13% of the sub total), and total (subtotal + tax)l.  
These amounts must be output to the user interface, as shown in the diagram below.
All amounts should be rounded to 2 decimal points.




4. PART 4:  Adding Coupons 

When the user presses the Click to Enter button,  the web application should prompt the user to enter a coupon code from the below codes:

Code
Effect
NOTAX
Customer does not need to pay tax
FIFTYFIFTY
Customer gets 50% off their subtotal





Once the user enters a valid code, the calculated discount value should be deducted from final total and should be updated on the page


