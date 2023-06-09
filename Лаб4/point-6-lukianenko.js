function validateForm() {
    let accountName = document.forms["myForm"]["accountName"].value;
    let age = document.forms["myForm"]["age"].value;
    let date = document.forms["myForm"]["date"].value;
    let password = document.forms["myForm"]["password"].value;
    let confirmPassword = document.forms["myForm"]["confirmPassword"].value;
    if (accountName == "" || age == "" || date == "" || password == "" || confirmPassword == "") {
      alert("Всі поля повинні бути заповнені!");
      return false;
    }
  
    if (isNaN(age) || age < 1 || age > 120) {
      alert("Вік повинен бути числом в діапазоні від 1 до 120!");
      return false;
    }
  
    if (!/^\d{2}\.\d{2}\.\d{4}$/.test(date)) {
      alert("Дата повинна бути в форматі DD.MM.YYYY!");
      return false;
    }
  
    if (password !== confirmPassword) {
      alert("Паролі повинні співпадати!");
      return false;
    }
    alert("Validation success!")
    return true;
  }
  