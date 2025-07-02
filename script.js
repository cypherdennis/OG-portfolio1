const quoteBox = document.getElementById("quote");
const authors = document.getElementById("author");
const navBar = document.getElementById("nav-bar");
const navList = document.querySelector(".nav");
const contactForm = document.getElementById("contact");

let trigger = false;

navBar.addEventListener("click", () => {
    if (!trigger) {
        navList.style.display = "block";
        trigger = true;
    } else {
        navList.style.display = "none";
        trigger = false;
    }
});

const quotes = async () => {
     try {
        const res = await fetch("https://api.allorigins.win/get?url=" + encodeURIComponent("https://zenquotes.io/api/random"));
        const data = await res.json();
        const quoteData = JSON.parse(data.contents);
        quoteBox.textContent = `"${quoteData[0].q}"`;
        authors.textContent = `${quoteData[0].a}`;
    } catch (err) {
        console.error("Error:", err);
    }
};

quotes();

emailjs.init("VO--XQN1OAIz7VLyO");

contactForm.addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm('service_4vb7viy', 'template_txijvtk', this)
    .then(function() {
      alert('Message sent successfully');
      contactForm.reset();
    }, function(error) {
      console.log('FAILED...', error);
      alert('Oops! Something went wrong');
    });
});



