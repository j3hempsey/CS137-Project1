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
	var regex = /^([0-9])+\ +([a-zA-Z])*/;
	return regex.test(address);
}

function checkZip(zip)
{
	var regex = /^([0-9])/;
	return (regex.test(zip) && zip.length == 5);
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
	var first_name = document.getElementById("first-name");
	var last_name = document.getElementById("last-name");
	var credit_card = document.getElementById("credit-card");
	var address = document.getElementById("address");
	var zip = document.getElementById("zip-code");
	var state = document.getElementById("state");
	var quantity = document.getElementById("quantity");
	var error_message = "Errors in the following fields: \n\n";
	var error = false;
	
	if(!checkName(first_name.value))
	{
		error_message += "First name\n";
		error = true;
	}
	if(!checkName(last_name.value))
	{
		error_message += "Last name\n";
		error = true;
	}
	if(!checkCard(credit_card.value))
	{
		error_message += "Credit Card\n";
		error = true;
	}
	if(!checkAddress(address.value))
	{
		error_message += "Address\n";
		error = true;
	}
	if(!checkZip(zip.value))
	{
		error_message += "Zip\n";
		error = true;
	}
	if(!checkState(state.value))
	{
		error_message += "State\n";
		error = true;
	}
	if(!checkQuantity(quantity.value))
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

var form = document.getElementByID("order-form");
form.onsubmit = processForm;
