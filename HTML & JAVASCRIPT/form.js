document.getElementById('CUFORM').addEventListener('submit',(event)=>{
event.preventDefault()

const Fname = document.getElementById('Fname').value
const Lname = document.getElementById('Lname').value
const usermail = document.getElementById('usermail').value
const phone = document.getElementById('phone').value
const msg = document.getElementById('msg').value
const OPhone = document.getElementById('Phone').checked
const OEmail = document.getElementById('E-Mail').checked

function DDValidate(){
    const type = document.getElementById('type').checked;

    if(type.value = ""){
        
        return false;
    }
    return true;

}






  

    if((Fname == "" && Lname == "") ){
        alert('Full Name and Last Name Must Be Filled!')
        
        return
    }
    else if( Lname == ""){
        alert('Last Name Must Be Filled!')
        return
    }
    else if( Fname == "") {
        alert('Full Name Must Be Filled!')
        return
    }
    else{
        for(let i=0;i<Fname.length;i++){
            if((!isNaN(Fname[i])) && (!isNaN(Lname[i]))){
                alert('Full Name and Last Name Can\'t Be A Number!')
                return
            }
        }
    }

  
      if(usermail == ""){
        alert('Email Must Be Filled!')
        return
      }
      else if((!usermail.endsWith('@gmail.com'))){
        alert('Invalid Email, Email Must End With @gmail.com!')
        return
      }

if(phone == ""){
    alert('Phone Number Must Be Filled!')
    return
}else{
    var NumCount= 0;
    for(let i = 1;i<phone.length;i++){
        if((phone[i] === ' ') || (phone[i] === '-') ){
            alert('Phone Number Can\'t Have - r +');
            return;
        }
        else if (phone[i] !== '+' && (phone[i] < '0' || phone[i] > '9')) {
            alert('Phone Number Must Only Be Numbers!');
            return;
          }
        else if(!(phone.startsWith('+'))){
            alert('Phone Number Must Start With +')
            return
        }
        else if(!(isNaN(phone[i]))){
            NumCount++;
            
        }
        else if(NumCount != 13){
            alert('Phone Number Length Must Be 13')
            return
        }
        
    }
}



    if(OPhone == false && OEmail == false){
        alert('Preferred Way Of Contact Must Be Filled')
        return
    }

    if(msg == ""){
        alert('Message Field Must Filled!')
        return
    }
    else if(msg.length < 10 && msg.length > 500){
        alert('Message Must Be In Between 10-500 Words!')
        return  
    }



console.log(usermail,msg,OPhone,OEmail,phone,Lname,Fname)
alert('Your Message Has Been Sent!')
window.location.href = 'index.html'


})