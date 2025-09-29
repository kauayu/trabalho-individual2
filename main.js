document.getElementById("faq-btn").addEventListener("click", function() {
    const faqAnswers = document.getElementById("faq-answers");
    
    if (faqAnswers.style.display === "none") {
        faqAnswers.style.display = "block";
    } else {
        faqAnswers.style.display = "none";
    }
});
