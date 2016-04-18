function checkEmail(email)
{
	var regex = /^([a-zA-Z0-9_.-])+@(a-zA-Z0-9_.-)+\.(a-zA-Z])/;
	return regex.test(email);
}

function checkName(name)
{
	var regex = /^([a-zA-Z])/;
	return regex.test(name);
}

function checkCard(creditCard)
{
	var regex = /^([0-9])/;
	return (regex.test(creditCard) && creditCard.length == 16);
}

function checkAddress(address)
{
	var regex = /^([0-9])+\ ([a-zA-Z])*/;
	return regex.test(address);
}

function checkZip(zip)
{
	var regex = /^([0-9])/;
	return (regex.test(zip) && zip.length >= 5);
}

function checkState(state)
{
	var regex = /^([a-zA-Z])/;
	return (regex.test(state) && state.length == 2);
}

function checkQuantity(quantity)
{
	var regex = /^([0-9])/;
	return regex.test(quantity);
}

function processForm()
{
	var first_name = document.getElementById("first-name").value;
	var last_name = document.getElementById("last-name").value;
	var credit_card = document.getElementById("credit-card").value;
	var address = document.getElementById("address").value;
	var zip = document.getElementById("zip-code").value;
	var state = document.getElementById("state").value;
	var quantity = document.getElementById("quantity").value;
	var error_message = "Errors in the following fields: \n\n";
	var error = false;
	
	if(!checkName(first_name))
	{
		error_message += "First name\n";
		error = true;
	}
	if(!checkName(last_name))
	{
		error_message += "Last name\n";
		error = true;
	}
	if(!checkCard(credit_card))
	{
		error_message += "Credit Card\n";
		if(credit_card.length < 16) {
			error_message += " Please enter at least 16 digits.\n";
		}
		error = true;
	}
	if(!checkAddress(address))
	{
		error_message += "Address\n";
		error = true;
	}
	if(!checkZip(zip))
	{
		error_message += "Zip\n";
		error = true;
	}
	if(!checkState(state))
	{
		error_message += "State\n";
		error = true;
	}
	if(!checkQuantity(quantity))
	{
		error_message += "Quantity\n";
		error = true;
	}
	if(error)
	{
		alert(error_message);
    return false;
	}
  return true;
}

var form = document.getElementById("order-form");
form.onSubmit = processForm;


