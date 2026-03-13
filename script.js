//your JS code here. If required.
const btn = document.getElementById("submit");

btn.addEventListener('click', (e) =>{
	e.preventDefault();
	
	const fname = document.getElementById("first-name").value;
	const lname = document.getElementById("last-name").value;
	const phone = document.getElementById("phone").value;
	const email = document.getElementById("email").value;

	alert(`First Name: ${fname} Last Name: ${lname} Phone Number: ${phone} Email ID: ${email}`)
})


