const aff = document.querySelector('.s22');
const text1 = document.querySelectorAll ('.t1');
const text2 = document.querySelectorAll ('.t2');
const text3 = document.querySelectorAll ('.t3');
const text4 = document.querySelectorAll ('.t4');
const text5 = document.querySelectorAll ('.t5');

const obeserver = new IntersectionObserver ((entries)=> {
    entries.forEach ((entry)=>{
        if (entry.isIntersecting){
            entry.target.classList.add ('show1') ;
        }
    })
})

text1.forEach ((text)=>{
    obeserver.observe (text);
});
text2.forEach ((text)=>{
    obeserver.observe (text);
});
text3.forEach ((text)=>{
    obeserver.observe (text);
});
text4.forEach ((text)=>{
    obeserver.observe (text);
});
text5.forEach ((text)=>{
    obeserver.observe (text);
});



function sendMail() {
    
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email1").value,
      message: document.getElementById("message").value,
    };
    const serviceID = "service_t6wcj09";
    const templateID = "template_ap8839n";

    if(params.name!=''&&params.email!=''&&params.message!=''){

      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          aff.classList.add ('s21');
          aff.innerHTML='Your message sent successfully!!';
          setTimeout (()=>{
              aff.classList.remove('s21');
              aff.innerHTML='';
          },1000);
      })
      .catch(err=>console.log(err));
        }
        else {
            aff.classList.add ('s20');
            aff.innerHTML='please Fill them all corctly';   
            setTimeout (()=>{
                aff.classList.remove('s20');
                aff.innerHTML='';
            },1000)
        }
  }
  


