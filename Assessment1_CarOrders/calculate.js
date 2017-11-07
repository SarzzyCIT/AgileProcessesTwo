/*
Brian Sarsfield
R00030805
Interactive web development
*/

//Global variable for the total price
var totalPrice = 0;
		
		//Changing the car image
		function colourChange()
			{
				var tempColour = document.getElementById("carColour");
				var selectedColour = tempColour.options[tempColour.selectedIndex].id;
				document.getElementById('car').src='carImg/' + selectedColour + ".jpg";
			}
			
			//Calculate and show the final price
		function calcTotal()
			{
				var configPrice, factoryPrice;
				
				configPrice = parseInt(document.carSelection.config.value);
				factoryPrice = parseInt(document.carSelection.factory.value);
				
				totalPrice = configPrice + factoryPrice;
				
					if (document.getElementById("dealerAuto").checked)
						{
							totalPrice = totalPrice + 550;
						}
					
					if (document.getElementById("dealerSecurity").checked)
					{
						totalPrice = totalPrice + 399;
					}
					
					if (document.getElementById("dealerMirror").checked )
					{
						totalPrice = totalPrice + 295;
					}
				
	
				document.getElementById("finalPrice").innerHTML = "&#8364; " + totalPrice;
			}
			
			//Make sure the order details are entered and then submit the details to the server
			function finalOrder()
			{
				if (totalPrice == 0)
				{
					alert("Select Calculate Total Before Placing Order");
				}
				else
				{
					alert("Order Has Been Placed");
					document.getElementById("carSelection").submit("http://atlantis.cit.ie/displayvalues.php");
				}
			}