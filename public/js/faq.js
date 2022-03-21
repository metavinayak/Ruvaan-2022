const Ques = [
    "Do I have to come to IIT Mandi Campus to attend any of the event?",
    "How to clarify doubts regarding any contest (participant from another college)?",
    "Is there any participation fee for events?",
    "How do I register for Ruvaan?",
    "What should I do after completing registration?",
    "Do the team-mates need to be from the same college for team events?",
    "My college is not officially participating in Ruvaan'22. Can I still be a part of the fest on individual level?",
    "How will I receive event web links, if I have registered for it?",
];
const Ans = [
    "No. Since the event is online, your presence is not required at the IIT Mandi campus",
    "Participants can contact the event coordinators of the respective events. The contact info can be found in the rulebook of each event. ",
    "No, all the events in Ruvaan are free.",
    "You can register online at: https://forms.gle/VWVjHsxxQqAZteVL8 Hope to see you soon!",
    "Please follow our updates on social-media and email.",
    "No, you are free to form teams with other colleges as well.",
    "Yes, Ruvaan'22 is open for all college-students.",
    "All relevant information would be conveyed through email."
];

function addtoAccordion(que, ans, i) {
    let faqAccordian = `<div class="accordion-item">
      <h2 class="accordion-header" id="flush-heading${i}">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${i}" aria-expanded="false" aria-controls="flush-collapse${i}">
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
let pastState = " ";

function faqValue() {
    let faqSearch = $(".search-box").val();
    if (pastState !== faqSearch) {
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
        } else {
            Ques.forEach(function(Q, index) {
                addtoAccordion(Ques[index], Ans[index], index);
            });
        }
    }
}
setInterval(faqValue, 1000);