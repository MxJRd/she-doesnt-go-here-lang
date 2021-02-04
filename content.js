const firstHref = $("a[href^='http']").eq(0).attr("href");//this grabs our url
//var headContent = document.getElementsByTagName('head')[0].innerHTML;
const bodyContent = document.getElementsByTagName('body')[0].innerHTML;
// console.log(firstHref);


/**************************************************************************HEADER TAG LOGIC****************************************************************************/
/**************************************************************************HEADER TAG LOGIC****************************************************************************/
// const h3Content = document.getElementsByTagName('h3')[0].innerHTML;
// console.log($(`h3`));

//for loop through the array list of nodes
//save a quote to a variable inside of the for loop, so that it's redeclared upon reiteration
// string literal the quote using the replaceWith method
console.log(document.querySelectorAll("h1, h2, h3, h4, h5, h6").length)
const headerList = document.querySelectorAll("h1, h2, h3, h4, h5, h6")
const replacementQuotes = [ 'That was so fetch.', 'On Wednesdays we wear pink.', "That’s why her hair is so big. It’s full of secrets.", "If you’re from Africa, why are you white?",
"Oh my god Karen, you can’t just ask people why they’re white.", "But you’re, like, really pretty. So you agree? You think you’re really pretty?",
"I’m not like a regular mom, I’m a cool mom!", "Irregardless, ex-boyfriends are off-limits to friends. That’s just, like, the rules of feminism.", 
"Raise your hand if you have ever been personally victimized by Regina George.", "I don’t think my father, the inventor of Toaster Strudel, would be too pleased to hear about this.",
"It’s like I have ESPN or something. My breasts can always tell when it’s going to rain. Well, they can tell when it’s raining", 
"I wish we could all get along like we used to in middle school. I wish I could bake a cake filled with rainbows and smiles and everyone would eat and be happy.", 
"She doesn’t even go here!", "You wanna do something fun? You wanna go to Taco Bell?", "I can’t go to Taco Bell. I’m on an all-carb diet. God, Karen, you are so stupid!", 
"I’m sorry that people are so jealous of me, but I can’t help it that I’m popular", "Four for you Glen Coco! You go, Glen Coco!", 
"It’s not my fault you’re, like, in love with me or something!", "Grool. I meant to say cool but then I started to say great.", 
"Don’t have sex. Because you will get pregnant, and die. Don’t have sex in the missionary position, don’t have sex standing up, just…don’t do it. Promise?",
"One time she punched me in the face. It was awesome.", "You can’t sit with us!", "Gretchen, stop trying to make *fetch* happen. It’s not going to happen!", 
"Damn. I’d rather see you out there shakin’ that thang.", "Boo, you whore.", "Oh my God, the bend and snap, works every time.", 
"In the real world, Halloween is when kids dress up and beg for candy. But in girl world, Halloween is the one time of year a girl can dress like a total slut and no other girl can say anything about it", 
"You smell like a baby prostitute.", "Danny DeVito, I love your work!", "Hell, no. I did not leave the South Side for this!", "Is butter a carb?", "Get in loser, we’re going shopping.",
"The limit does not exist.", "She’s a life ruiner. She ruins people’s lives.", "I don’t need backups. I’m going to Harvard."," Whoever said orange is the new pink was seriously disturbed.",
"I’m Elle Woods and this is Bruiser Woods and we’re both Gemini vegetarians.", "Oh, I like your outfit, too, except when I dress up as a frigid b*tch, I try not to look so constipated.",
"I once had to judge a tighty-whitey contest for Lambda Kappa Pi. Trust me, I can handle anything.", "Pooh bear, just get in the car", "I’m reading about the LSATs.",
"She could use some mascara and some serious highlights, but she’s not completely unfortunate looking.", "Don’t stomp your little last season Prada shoes at me, honey.", 
"I’ve already lost my husband, I’d rather go to jail than lose my reputation.", "I’m sorry. I just hallucinated.", 
"Exercise gives you endorphins. Endorphins make you happy. Happy people just don’t shoot their husbands, they just don’t.", "This is gonna be just like senior year, except for funner!",
"For that matter, all masturbatory emissions, where his sperm was clearly not seeking an egg, could be termed reckless abandonment.", "I’ll show you how valuable Elle Woods can be.",
"Wow. Don’t you look like a walking felony.", "If I’m gonna be a senator, well I need to marry a Jackie, not a Marilyn.", "Don’t stomp your little last season Prada shoes at me, honey.",
"Do you think she woke up one morning and said, “I think I’ll go to law school today?", "If you’re going to let one stupid prick ruin your life, you’re not the girl I thought you were.",
"I’m taking the dog, dumbass!", "Could I have been any more goddamn spastic?", "Oh my God, the bend and snap, works every time.", "I know I’m a fraud! It’s not like normal women can have this ass!",
"I’ve already lost my husband, I’d rather go to jail than lose my reputation.", "Brick, where'd you get that hand grenade?",
];

headerList.forEach(elem => {
  const newRandomNumber = Math.floor(Math.random() * 60);
  elem.innerHTML = replacementQuotes[newRandomNumber];
})

let imgToChange = $('img');
const arrOfImgs = [
  "pics/reginaGeorge.jpg",
  "pics/gretchenWinters.jpg",
  "pics/karenSmithjpg.jpg",
  "pics/msNorbery.jpg",
  "pics/cadyHeron.jpg",
];

const arrOfNos = [
  "sounds/noNo.mp3",
  "/sounds/noSound.mp3",
];

imgToChange.each(function(idx) {
  const newRandomNumber = Math.floor(Math.random() * 4);
  $(this).attr('src',  chrome.runtime.getURL(arrOfImgs[newRandomNumber]));
});

let pToChange = $('p');

pToChange.each(function(idx) {
  const newRandomNumber = Math.floor(Math.random() * 360);
  $(this).attr('style', `transform: rotate(-${newRandomNumber}deg);`);
})



const audioPath1 = chrome.runtime.getURL("sounds/noSound.mp3");
const audioPath2 = chrome.runtime.getURL("sounds/noNo.mp3");

const myAudio1 = new Audio(audioPath1);
const myAudio2 = new Audio(audioPath2);
// myAudio.play();
$(document).ready(() => {
  $('a').on('click', (e) => {
    e.preventDefault();
    myAudio2.play();
  })
  history.pushState(null, null, location.href);
  history.back();
  history.forward();
  window.onpopstate = function () {
    myAudio1.play();
    history.go(1); 
  };
})


/**************************************************************************HEADER TAG LOGIC****************************************************************************/
/**************************************************************************HEADER TAG LOGIC****************************************************************************/