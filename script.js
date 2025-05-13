const email = document.getElementById("email");
const submitBtn = document.getElementById("btnsubmit");
const price = document.getElementById("price");
const item = document.getElementById("item-name");


console.log(email);
submitBtn.addEventListener('click',
    () =>{
        if(email.value.trim() === ""){
            alert("Email Field must be filled!");
        }
// mokom@gmail.com: value = ['mokom', 'gmail.com']
        if (email.value && email.value.split('@').length !== 2) {
            alert("Email address invalid");
        }
        if(price.value <= 0){
            alert("Invalid price!");
        
        }
        if(item.value === ""){
            alert("Enter name of Item!!");
        }
        // if(check(url.value) === false){
        //     alert("Input a Valid Link!");
        // }
    }
)

// console.log(url.value);
// function check(link){
//     // let arr[] = link;
//     let count = 0;
//     for(let i=0; i< link.length; i++){
//         if(link.charAt[i] === '/'){
//             count +=1;
//         }
//     } 
//     if(count <1){
//         return true;
//     }
//     return false;
// }