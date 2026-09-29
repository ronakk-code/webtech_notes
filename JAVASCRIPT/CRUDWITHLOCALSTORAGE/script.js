const form = document.getElementById("registration-form")
const maincontent = document.getElementById("maincontent")

form.addEventListener("submit" , (e)=>{
      e.preventDefault();

      let user_name = e.target.username.value;
      let user_email = e.target.email.value;
      let user_password = e.target.password.value;

      let user_data = JSON.parse(localStorage.getItem("userDetails")) ?? [];

      user_data.push({
        "user_name" : user_name,
        "user_email" : user_email,
        "user_password" : user_password
      })

      localStorage.setItem("userDetails",JSON.stringify(user_data))
      e.target.reset();
      displayData();
})

function displayData(){
  let user_data = JSON.parse(localStorage.getItem("userDetails")) ?? [];
  let finalData = "";
  user_data.forEach((element,i) => {
    finalData += `<div>
    <button onclick ="removeData(${i})">&times;</button>
    <h3> Name: </h3>
    <div>${element.user_name}</div>
    <h3> Email: </h3>
    <div>${element.user_email}</div>
    <h3> Password: </h3>
    <div>${element.user_password}</div>
    </div>`
  });
  maincontent.innerHTML  = finalData;
}

function removeData(ind){
  let user_data = JSON.parse(localStorage.getItem("userDetails")) ?? [];
  user_data.splice(ind,1);
  localStorage.setItem("userDetails",JSON.stringify(user_data));
  displayData();
}

displayData();