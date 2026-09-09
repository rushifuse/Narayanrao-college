var navLinks= document.getElementById("navLinks");

function showmenu(){
    navLinks.style.right="0";
}   
function hidemenu(){
    navLinks.style.right="-200px";
}

// document.addEventListener('contextmenu', event => event.preventDefault


/* OPEN CLOSE CHAT */
function toggleChat(){
  let box = document.getElementById("chatBox");
  if(box.style.display === "block"){
    box.style.display = "none";
  } else {
    box.style.display = "block";
  }
}

/* SEND MESSAGE */
function sendMsg(e){
  if(e.key === "Enter"){
    let input = document.getElementById("chatInput");
    let msg = input.value;

    if(msg.trim() === "") return;

    let chat = document.getElementById("chatMessages");

    chat.innerHTML += "<div class='user-msg'>" + msg + "</div>";

    let reply = getReply(msg.toLowerCase());

    setTimeout(function(){
      chat.innerHTML += "<div class='bot-msg'>" + reply + "</div>";
      chat.scrollTop = chat.scrollHeight;
    },500);

    input.value="";
  }
}

/* BOT REPLY */
function getReply(msg){
  if(msg.includes("hi") || msg.includes("hello"))
    return "Hello 👋 How can I help you?";

  if(msg.includes("service"))
    return "👉 BCA , MCA , BA , MA , Other.";

  if(msg.includes("time"))
    return "⏰ 11 AM to 6 PM";

  if(msg.includes("contact"))
    return "📞 1234567891";

    if(msg.includes("Email"))
    return "📞 rr@gmail.com";
    
  if(msg.includes("location"))
    return "📍 Chandur Bazar, Near Shivaji Chowk";


  return "👉 Please contact on WhatsApp 😊";
}
  
