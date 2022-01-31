const Ques = [
    "Are the events paid?",
    "What is the last date to register?",
    "Can non IIT sudents also participate?",
    "Do we have to come to IIT Mandi to participate?",
    "Are all the events completely online?",
];
const Ans = [
    "No. Some events are paid while others are open for everyone to participate without any entry barrier.",
    "For every event you must register at least 24 hours prior to the commencement.",
    "Ruvaan is open for everyone. You need not be a college student all together to participate.",
    "No. Since the events are in online mode, your presence is neigther required nor expected.Hum toh pohche nahi hain tumko pehe jana hai.",
    "While all events are completely online for attendees there might be performances which will be aired directly from IIT Mandi",
];

function addtoAccordion(que, ans, i) {
    let faqAccordian = `<div class="accordion-item">

    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${i}" aria-expanded="false" aria-controls="flush-collapse${i}">

    <h2 class="accordion-header" id="flush-heading${i}">
        ${que}
        </button>
    </h2>
    <div id="flush-collapse${i}" class="accordion-collapse collapse" aria-labelledby="flush-heading${i}" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">
        ${ans}
        </div>
    </div>
    </div>`;
    $(".accordion").append(faqAccordian);
}
let pastState = "";

function faqValue() {
    let faqSearch = $(".search-box").val();

    if (faqSearch === "") {
        $(".accordion-item").remove();
        $(".collapse").remove();
        Ques.forEach(function(Q, index) {
            addtoAccordion(Ques[index], Ans[index], index);
        });
    } else if (pastState !== faqSearch) {
        pastState = faqSearch;
        $(".accordion-item").remove();
        $(".collapse").remove();
        if (faqSearch.length !== 0) {
            console.log(faqSearch);
            let pattern = new RegExp(faqSearch, "i");

            Ques.forEach(function(Q, index) {
                let result = Q.match(pattern);
                if (result !== null) {
                    addtoAccordion(Ques[index], Ans[index], index);
                }
            });
        }
    }
}
setInterval(faqValue, 1000);