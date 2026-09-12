var navLinks = document.getElementById("navLinks");

function showmenu() {
    navLinks.style.right = "0";
}

function hidemenu() {
    navLinks.style.right = "-200px";
}


/* =========================================
   OPEN CLOSE CHAT
========================================= */

function toggleChat() {

    let box = document.getElementById("chatBox");

    if (box.style.display === "block") {
        box.style.display = "none";
    } else {
        box.style.display = "block";
    }
}


/* =========================================
   SEND MESSAGE
========================================= */

function sendMsg(e) {

    if (e.key === "Enter") {

        let input = document.getElementById("chatInput");
        let msg = input.value;

        if (msg.trim() === "") return;

        let chat = document.getElementById("chatMessages");

        chat.innerHTML +=
            "<div class='user-msg'>" + msg + "</div>";

        let reply = getReply(msg.toLowerCase());

        setTimeout(function () {

            chat.innerHTML +=
                "<div class='bot-msg'>" + reply + "</div>";

            chat.scrollTop = chat.scrollHeight;

        }, 500);

        input.value = "";
    }
}


/* =========================================
   BOT REPLY
========================================= */

function getReply(msg) {

    if (msg.includes("hi") || msg.includes("hello"))
        return "Hello 👋 How can I help you?";

    if (msg.includes("service"))
        return "👉 BCA, BCA-IT, B.Sc CS & IT and other courses.";

    if (msg.includes("time"))
        return "⏰ College Timing: 11 AM to 6 PM";

    if (msg.includes("contact"))
        return "📞 Please contact the college office.";

    if (msg.includes("email"))
        return "✉️ Please check the Contact Us section.";

    if (msg.includes("location"))
        return "📍 Chandur Bazar, Amravati, Maharashtra";

    return "👉 Please contact the college office for more information 😊";
}


/* =========================================
   COLLEGE IMAGE SLIDER
========================================= */

const ctnSlides = document.querySelectorAll(".ctn-slide");

let ctnCurrentSlide = 0;

function changeCtnSlide() {

    if (ctnSlides.length === 0) return;

    ctnSlides[ctnCurrentSlide].classList.remove("active");

    ctnCurrentSlide++;

    if (ctnCurrentSlide >= ctnSlides.length) {
        ctnCurrentSlide = 0;
    }

    ctnSlides[ctnCurrentSlide].classList.add("active");
}


/* Change image every 3 seconds */

if (ctnSlides.length > 0) {
    setInterval(changeCtnSlide, 3000);
}


/* =========================================
   PROFILE POPUP DATA
========================================= */

const profileData = {

    founder: {

        image: "image/chairman1.jpeg",

        role: "संस्थापक व प्रेरणास्थान",

        name: "कै. नानासाहेब देशमुख",

        qualification: "संस्थापक अध्यक्ष व प्रेरणास्थान",

        description:
            "कै. नानासाहेब देशमुख संस्थापक अध्यक्ष, \n पीपल्स वेलफेअर सोसायटी, चांदूर बाजार \n कै. नानासाहेब देशमुख हे चांदूर बाजार परिसरातील एक दूरदृष्टी असलेले शिक्षणप्रेमी, समाजसेवक आणि थोर व्यक्तिमत्व होते. ग्रामीण भागातील गरीब, शेतकरी आणि कष्टकरी कुटुंबातील मुलांना उच्च शिक्षणापासून वंचित राहावे लागू नये, या एकाच तळमळीतून त्यांनी पीपल्स वेलफेअर सोसायटी ची स्थापना केली. त्यांच्या अथक प्रयत्नातूनच कै. नारायणराव अमृतराव कला, वाणिज्य व BCA महाविद्यालयाची मुहूर्तमेढ रोवली गेली. शिक्षण हाच खरा विकासाचा मार्ग आहे, असा त्यांचा ठाम विश्वास होता. साधी राहणी, उच्च विचारसरणी आणि समाजाप्रती निस्वार्थ सेवा ही त्यांच्या जीवनाची वैशिष्ट्ये होती. आज आपले महाविद्यालय जे काही आहे, ते त्यांनी लावलेल्या त्यागाच्या आणि सेवेच्या रोपट्याचेच फळ आहे. त्यांचे विचार, त्यांची मूल्ये आणि त्यांनी दाखवलेला मार्ग आम्हाला सदैव प्रेरणा देत राहील. त्यांच्या पवित्र स्मृतीस आमचे विनम्र अभिवादन!"

    },


    president: {

        image: "image/chairman2.jpeg",

        role: "अध्यक्ष",

        name: "मा. सौ. वसुधाताई देशमुख",

        qualification: "माजी वित्तमंत्री, महाराष्ट्र शासन , अध्यक्ष पीपल्स वेलफेअर सोसायटी, चांदूर बाजार",

        description:
            "माननीय अध्यक्षांचा संदेश - \n अध्यक्षांच्या लेखणीतून... प्रिय विद्यार्थी, पालक व हितचिंतकांनो, \n पीपल्स वेलफेअर सोसायटी संचलित कै. नारायणराव अमृतराव कला, वाणिज्य व BCA महाविद्यालय, चांदूर बाजार च्या अधिकृत संकेतस्थळावर आपले मी मनःपूर्वक स्वागत करते. समाजातील शेवटच्या घटकापर्यंत शिक्षण पोहोचावे, ग्रामीण भागातील गोरगरीब विद्यार्थ्यांना उच्च शिक्षणाच्या प्रवाहात आणावे, या एकाच ध्येयाने आमच्या संस्थेने हे शिक्षणाचे रोपटे लावले. आज त्याचा वटवृक्ष झाला आहे याचा मला सार्थ अभिमान आहे. आमच्यासाठी शिक्षण म्हणजे केवळ पुस्तकी ज्ञान नाही, तर संस्कार, सेवा आणि स्वावलंबन आहे. कै. नारायणरावजी आणि अमृतरावजी यांच्या त्याग आणि सेवेच्या विचारांना पुढे नेत आम्ही विद्यार्थ्यांमध्ये मूल्याधिष्ठित शिक्षण रुजवत आहोत. कला, वाणिज्य सोबतच आधुनिक काळाची गरज ओळखून सुरू केलेला BCA विभाग आमच्या विद्यार्थ्यांना जागतिक स्पर्धेत टिकण्यासाठी सक्षम करत आहे. संस्थेच्या वतीने मी आपणास आश्वस्त करते की, आपल्या पाल्याच्या उज्ज्वल भविष्यासाठी आम्ही सदैव कटिबद्ध आहोत."



    },


    principal: {

        image: "image/principal.jpeg",

        role: "प्राचार्य",

        name: "डॉ. निलेश आर. ठाकरे",

        qualification: "MSc, BEd, PhD, LLB",

        description:
            "प्राचार्यांच्या लेखणीतून...\n  प्रिय विद्यार्थी, पालक व हितचिंतकांनो, \n कै. नारायणराव अमृतराव कला, वाणिज्य व BCA महाविद्यालय, चांदूर बाजार* या आमच्या ज्ञानमंदिरात आपले मी मनःपूर्वक स्वागत करतो.आमच्या महाविद्यालयाची स्थापना ग्रामीण भागातील विद्यार्थ्यांना उच्च दर्जाचे शिक्षण मिळावे या उदात्त हेतूने झाली आहे. येथे शिक्षण म्हणजे केवळ पदवी प्राप्त करणे नाही, तर उत्तम चारित्र्य आणि सक्षम व्यक्तिमत्व घडवणे आहे.राष्ट्रसंत तुकडोजी महाराजांच्या आधी केले मग सांगितले  आणि  या सेवाभावी विचारांना समोर ठेवून आम्ही विद्यार्थ्यांना ज्ञान, कौशल्य आणि संस्कार यांचा त्रिवेणी संगम देतो.नवीन शैक्षणिक धोरण (NEP 2020) च्या अनुषंगाने आम्ही रोजगाराभिमुख, तंत्रज्ञान-आधारित आणि मूल्याधिष्ठित शिक्षणावर भर देत आहोत. आमचे अनुभवी व समर्पित प्राध्यापक, सुसज्ज ग्रंथालय, आधुनिक प्रयोगशाळा आणि BCA विभागातील अद्ययावत संगणक कक्ष विद्यार्थ्यांच्या सर्वांगीण विकासासाठी सज्ज आहेत.माझी आपणा सर्वांना विनंती आहे की, या शिक्षण-यज्ञात सहभागी व्हा आणि आपले उज्ज्वल भविष्य आमच्यासोबत घडवा. "
    }

};


/* =========================================
   OPEN PROFILE POPUP
========================================= */

function openProfile(person) {

    const data = profileData[person];

    if (!data) {
        console.log("Profile not found:", person);
        return;
    }


    document.getElementById("profileImage").src = data.image;

    document.getElementById("profileRole").innerText = data.role;

    document.getElementById("profileName").innerText = data.name;

    document.getElementById("profileQualification").innerText =
        data.qualification;

    document.getElementById("profileDescription").innerText =
        data.description;


    const modal = document.getElementById("profileModal");

    modal.classList.add("show");

    document.body.style.overflow = "hidden";
}


/* =========================================
   CLOSE PROFILE POPUP
========================================= */

function closeProfile() {

    const modal = document.getElementById("profileModal");

    modal.classList.remove("show");

    document.body.style.overflow = "";
}


/* =========================================
   CLOSE ON BACKGROUND CLICK
========================================= */

const profileModal = document.getElementById("profileModal");

if (profileModal) {

    profileModal.addEventListener("click", function (event) {

        if (event.target === this) {
            closeProfile();
        }

    });
}


/* =========================================
   CLOSE WITH ESC KEY
========================================= */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
        closeProfile();
    }

});
