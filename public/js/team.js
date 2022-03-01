const data = [
    ["team_images/male.jpg", "Devansh Kochar", "#", "#", "#"],
    ["team_images/ridhi.jpg", "Ridhi Ratan", "#", "#", "#"],
    ["team_images/madhumita.jpg", "V Madhumita ", "https://www.facebook.com/madhumita.vadlamannati", "https://www.linkedin.com/in/madhumita-vadlamannati", "#", "#"],
    ["team_images/jahanvi.jpg", "Jahanvi Chaudhary ", "#", "https://instagram.com/jahanvi_lastleaf?utm_medium=copy_link", "#"],
    ["team_images/shreya.jpg", "Shreya Sharma", "#", "https://www.instagram.com/shreyasharma79032_/ ", "www.linkedin.com/in/shreya-sharma-4b9378180"],
    ["team_images/diya.jpg", "Diya Ashish ", "https://www.facebook.com/diya.ashish.351", "https://www.instagram.com/diyaaashish/", "https://www.linkedin.com/in/diya-ashish-81b6b01ba"],
    ["team_images/shivam.jpg", "Shivam Middha", "https://www.facebook.com/vasuu.midha", "https://www.instagram.com/shivam_middha12", "https://www.linkedin.com/in/shivam-middha-b82129211/"],
    ["team_images/harshit.jpg", "Harshit Agarwar", "#", "https://www.instagram.com/harshit_agarwar__/", "https://www.linkedin.com/in/harshit-agarwar-3662331b9"],
    ["team_images/snigdha.jpg", "G. K.V. Snigdha", "#", "https://www.instagram.com/lunabird02/", "https://www.linkedin.com/in/snigdha-gkv-98663b1ba/"],
    ["team_images/ravneet.jpg", "Ravneet Kaur", "#", "#", "#"],
    ["team_images/khushi.jpg", "Khushi Ladha", "https://m.facebook.com/100011654823299/", "https://www.instagram.com/the.11th.letter/", "https://www.linkedin.com/in/khushi-ladha-6b360221a/"],
    ["team_images/phil.jpg", "Phil ", "https://m.facebook.com/100057238011161/", "https://www.instagram.com/philll.gif/", "https://www.linkedin.com/in/awantikadeora"],
    ["team_images/antriksh.jpg", "Antriksh Mehta", "#", "https://www.instagram.com/un_.triksh/", "https://www.linkedin.com/in/antriksh-mehta-a65804223"],
    ["team_images/hiya.jpg", "Hiya Jain ", "#", "https://www.instagram.com/_hiya.jain/", "https://www.linkedin.com/in/hiya-jain-6521b6215/"],
    ["team_images/piyush.jpg", "Piyush Verma", "#", "#", "https://www.linkedin.com/in/piyush-verma-4a7846122/"],
    ["team_images/pushkar.jpg", "Pushkar Patel", "https://www.facebook.com/pushkar.patel.739326", "https://www.instagram.com/pushkar.patel.739326/", "#"],
    ["team_images/rishabh.jpg", "Rishabh Maheshwari ", "https://www.facebook.com/rishabh.maheshwari.792", "#", "https://www.linkedin.com/in/rishabh-maheshwari-41189a224/"],
    ["team_images/vinayak.jpg", "Vinayak Sachan", "#", "#", "https://www.linkedin.com/in/vinayak-sachan-83a08121b"],
    ["team_images/yash.jpg", "Yash Sharma", "#", "#", "#"]
]
const person_img = document.querySelectorAll(".person-img");
const names = document.querySelectorAll(".name");
const fb_link = document.querySelectorAll(".fb-link");
const linkedin_link = document.querySelectorAll(".linkedin-link");
const insta_link = document.querySelectorAll(".insta-link");

for (let i = 0; i < names.length; i++) {
    person_img[i].src = data[i][0];
    names[i].innerHTML = data[i][1];
    fb_link[i].href = data[i][2];
    insta_link[i].href = data[i][3];
    linkedin_link[i].href = data[i][4];
}