//url:
'https://www.bookdepository.com'

//login button
$x('(//a[text()="Sign in/Join"])[1]')

//input email
$('#ap_email')
$('//input[@type="email"]')

//input password
$('#ap_password')
$('//input[@placeholder="Book Depository password"]')
$('//input[@type="password"]')

//submit button
$$('#signInSubmit')

//sign out button
$x('(//a[text()="Sign out"])[1]')

//my account 
$x('(//a[text()="My Account"])[1]')

//search field
$$('input.text-input')

//search button
$$('button.header-search-btn')

// 5th product in product search
$x('(//div[contains(@class, "book-item")])[5]')

// 5th element price
$x('(//p[@class="price"])[5]')

let price = '109,89 €'
let l = price.length;
let value = price.substring(0, l-2);
let value_m = value.replace(",", ".");
let num = Number(value_m);
console.log(num);
