var randomQuestion, questions, x, y, z;

questions = {
"response_code": 0,
"results": [
{
"category": "Entertainment: Film",
"type": "multiple",
"difficulty": "easy",
"question": "What breed of dog was &#039;Marley&#039; in the film &#039;Marley &amp; Me&#039;?",
"correct_answer": "Labrador Retriever",
"incorrect_answers": [
"Golden Retriever",
"Dalmatian",
"Shiba Inu"
]
},
{
"category": "Science & Nature",
"type": "multiple",
"difficulty": "easy",
"question": "Which Apollo mission was the first one to land on the Moon?",
"correct_answer": "Apollo 11",
"incorrect_answers": [
"Apollo 10",
"Apollo 9",
"Apollo 13"
]
},
{
"category": "History",
"type": "multiple",
"difficulty": "easy",
"question": "Which one of these was not a beach landing site in the Invasion of Normandy?",
"correct_answer": "Silver",
"incorrect_answers": [
"Gold",
"Juno",
"Sword"
]
},
{
"category": "Entertainment: Music",
"type": "multiple",
"difficulty": "easy",
"question": "What is not a wind instrument?",
"correct_answer": "Viola",
"incorrect_answers": [
"Oboe",
"Trombone",
"Duduk"
]
},
{
"category": "Entertainment: Film",
"type": "multiple",
"difficulty": "easy",
"question": "Who played Deputy Marshal Samuel Gerard in the 1993 film &quot;The Fugitive&quot;?",
"correct_answer": "Tommy Lee Jones",
"incorrect_answers": [
"Harrison Ford",
"Harvey Keitel",
"Martin Landau"
]
},
{
"category": "Entertainment: Cartoon & Animations",
"type": "multiple",
"difficulty": "easy",
"question": "What was the name of the sea witch in the 1989 Disney film &quot;The Little Mermaid&quot;?",
"correct_answer": "Ursula",
"incorrect_answers": [
"Madam Mim",
"Maleficent",
"Lady Tremaine"
]
},
{
"category": "General Knowledge",
"type": "multiple",
"difficulty": "easy",
"question": "In the video-game franchise Kingdom Hearts, the main protagonist, carries a weapon with what shape?",
"correct_answer": "Key",
"incorrect_answers": [
"Sword",
"Pen",
"Cellphone"
]
},
{
"category": "General Knowledge",
"type": "multiple",
"difficulty": "easy",
"question": "In past times, what would a gentleman keep in his fob pocket?",
"correct_answer": "Watch",
"incorrect_answers": [
"Money",
"Keys",
"Notebook"
]
},
{
"category": "History",
"type": "multiple",
"difficulty": "easy",
"question": "How many manned moon landings have there been?",
"correct_answer": "6",
"incorrect_answers": [
"1",
"3",
"7"
]
},
{
"category": "Science: Computers",
"type": "multiple",
"difficulty": "easy",
"question": "What does GHz stand for?",
"correct_answer": "Gigahertz",
"incorrect_answers": [
"Gigahotz",
"Gigahetz",
"Gigahatz"
]
},
{
"category": "Science & Nature",
"type": "multiple",
"difficulty": "easy",
"question": "What is the first element on the periodic table?",
"correct_answer": "Hydrogen",
"incorrect_answers": [
"Helium",
"Oxygen",
"Lithium"
]
},
{
"category": "Entertainment: Video Games",
"type": "multiple",
"difficulty": "easy",
"question": "Which of these is NOT a player class in Team Fortress 2?",
"correct_answer": "Healer",
"incorrect_answers": [
"Demoman",
"Pyro",
"Spy"
]
},
{
"category": "Science: Computers",
"type": "multiple",
"difficulty": "easy",
"question": "HTML is what type of language?",
"correct_answer": "Markup Language",
"incorrect_answers": [
"Macro Language",
"Programming Language",
"Scripting Language"
]
},
{
"category": "Science: Computers",
"type": "multiple",
"difficulty": "easy",
"question": "What amount of bits commonly equals one byte?",
"correct_answer": "8",
"incorrect_answers": [
"1",
"2",
"64"
]
},
{
"category": "Science & Nature",
"type": "multiple",
"difficulty": "easy",
"question": "What is the powerhouse of the cell?",
"correct_answer": "Mitochondria",
"incorrect_answers": [
"Ribosome",
"Redbull",
"Nucleus"
]
},
{
"category": "Entertainment: Video Games",
"type": "multiple",
"difficulty": "easy",
"question": "Which of these is NOT a main playable character in &quot;Grand Theft Auto V&quot;?",
"correct_answer": "Lamar",
"incorrect_answers": [
"Trevor",
"Michael",
"Franklin"
]
},
{
"category": "General Knowledge",
"type": "multiple",
"difficulty": "easy",
"question": "What is the name of the Jewish New Year?",
"correct_answer": "Rosh Hashanah",
"incorrect_answers": [
"Elul",
"New Year",
"Succoss"
]
},
{
"category": "Science: Computers",
"type": "multiple",
"difficulty": "easy",
"question": "What is the most preferred image format used for logos in the Wikimedia database?",
"correct_answer": ".svg",
"incorrect_answers": [
".png",
".jpeg",
".gif"
]
},
{
"category": "Entertainment: Music",
"type": "multiple",
"difficulty": "easy",
"question": "Which famous rapper is featured in Jack &Uuml; (Skrillex and Diplo)&#039;s 2015 single called &quot;Febreze&quot;?",
"correct_answer": "2 Chainz",
"incorrect_answers": [
"Kendrick Lamar",
"Future",
"Fatman Scoop"
]
},
{
"category": "History",
"type": "multiple",
"difficulty": "easy",
"question": "Which of these countries remained neutral during World War II?",
"correct_answer": "Switzerland",
"incorrect_answers": [
"United Kingdom",
"France",
"Italy"
]
},
{
"category": "General Knowledge",
"type": "multiple",
"difficulty": "easy",
"question": "Red Vines is a brand of what type of candy?",
"correct_answer": "Licorice",
"incorrect_answers": [
"Lollipop",
"Chocolate",
"Bubblegum"
]
},
{
"category": "Entertainment: Video Games",
"type": "multiple",
"difficulty": "easy",
"question": "Which of these is NOT a playable character in the 2016 video game Overwatch?",
"correct_answer": "Invoker",
"incorrect_answers": [
"Mercy",
"Winston",
"Zenyatta"
]
},
{
"category": "Entertainment: Japanese Anime & Manga",
"type": "multiple",
"difficulty": "easy",
"question": "What is the name of the corgi in Cowboy Bebop?",
"correct_answer": "Einstein",
"incorrect_answers": [
"Edward",
"Rocket",
"Joel"
]
},
{
"category": "Science & Nature",
"type": "multiple",
"difficulty": "easy",
"question": "How many bones are in the human body?",
"correct_answer": "206",
"incorrect_answers": [
"203",
"209",
"200"
]
},
{
"category": "Science: Mathematics",
"type": "multiple",
"difficulty": "easy",
"question": "What prime number comes next after 19?",
"correct_answer": "23",
"incorrect_answers": [
"25",
"21",
"27"
]
},
{
"category": "History",
"type": "multiple",
"difficulty": "easy",
"question": "In which year did the Invasion of Kuwait by Iraq occur?",
"correct_answer": "1990",
"incorrect_answers": [
"1992",
"1988",
"1986"
]
},
{
"category": "General Knowledge",
"type": "multiple",
"difficulty": "easy",
"question": "Which of these colours is NOT featured in the logo for Google?",
"correct_answer": "Pink",
"incorrect_answers": [
"Yellow",
"Blue",
"Green"
]
},
{
"category": "Entertainment: Video Games",
"type": "multiple",
"difficulty": "easy",
"question": "Gordon Freeman is said to have burnt and destroyed what food in the break room microwave?",
"correct_answer": "Casserole",
"incorrect_answers": [
"Sub Sandwich",
"Chicken Soup",
"Pepperoni Pizza"
]
},
{
"category": "Entertainment: Japanese Anime & Manga",
"type": "multiple",
"difficulty": "easy",
"question": "Who is the main character with yellow hair in the anime Naruto?",
"correct_answer": "Naruto",
"incorrect_answers": [
"Ten Ten",
"Sasuke",
"Kakashi"
]
},
{
"category": "Vehicles",
"type": "multiple",
"difficulty": "easy",
"question": "Automobiles produced by Telsa Motors operate on which form of energy?",
"correct_answer": "Electricity",
"incorrect_answers": [
"Gasoline",
"Diesel",
"Nuclear"
]
},
{
"category": "Entertainment: Television",
"type": "multiple",
"difficulty": "easy",
"question": "Who is the main character in the show &quot;Burn Notice&quot;?",
"correct_answer": "Michael Westen",
"incorrect_answers": [
"Sam Axe",
"Fiona Glenanne",
"Madeline Westen"
]
},
{
"category": "Entertainment: Video Games",
"type": "multiple",
"difficulty": "easy",
"question": "What year was the game Dishonored released?",
"correct_answer": "2012",
"incorrect_answers": [
"2011",
"2008",
"2013"
]
},
{
"category": "Entertainment: Video Games",
"type": "multiple",
"difficulty": "easy",
"question": "In Dota 2, Wraith King was previously known as...",
"correct_answer": "Skeleton King",
"incorrect_answers": [
"Reaper King",
"Skull King",
"Hell King"
]
},
{
"category": "Entertainment: Video Games",
"type": "multiple",
"difficulty": "easy",
"question": "Who is the leader of Team Valor in Pok&eacute;mon Go?",
"correct_answer": "Candela",
"incorrect_answers": [
"Willow",
"Blanche",
"Spark"
]
},
{
"category": "Entertainment: Japanese Anime & Manga",
"type": "multiple",
"difficulty": "easy",
"question": "In &quot;Future Diary&quot;, what is the name of Yuno Gasai&#039;s Phone Diary?",
"correct_answer": "Yukiteru Diary",
"incorrect_answers": [
"Murder Diary",
"Escape Diary ",
"Justice Diary "
]
},
{
"category": "Entertainment: Books",
"type": "multiple",
"difficulty": "easy",
"question": "Who was the author of the 1954 novel, &quot;Lord of the Flies&quot;?",
"correct_answer": "William Golding",
"incorrect_answers": [
"Stephen King",
"F. Scott Fitzgerald",
"Hunter Fox"
]
},
{
"category": "Entertainment: Video Games",
"type": "multiple",
"difficulty": "easy",
"question": "In Danganronpa: Trigger Happy Havoc, what is the protagonist&#039;s name?",
"correct_answer": "Makoto Naegi",
"incorrect_answers": [
"Hajime Hinata",
"Nagito Komaeda",
"Komaru Naegi"
]
},
{
"category": "Entertainment: Video Games",
"type": "multiple",
"difficulty": "easy",
"question": "What is the maximum HP in Terraria?",
"correct_answer": "500",
"incorrect_answers": [
"400",
"1000",
"100"
]
},
{
"category": "Geography",
"type": "multiple",
"difficulty": "easy",
"question": "What is the capital of the US State of New York?",
"correct_answer": "Albany",
"incorrect_answers": [
"Buffalo",
"New York",
"Rochester"
]
},
{
"category": "Entertainment: Music",
"type": "multiple",
"difficulty": "easy",
"question": "Who was featured in the song &quot;Words&quot; by Feint? ",
"correct_answer": "Laura Brehm",
"incorrect_answers": [
"Anna Yvette ",
"Danyka Nadeau",
"Veela"
]
},
{
"category": "General Knowledge",
"type": "multiple",
"difficulty": "easy",
"question": "What do the letters of the fast food chain KFC stand for?",
"correct_answer": "Kentucky Fried Chicken",
"incorrect_answers": [
"Kentucky Fresh Cheese",
"Kibbled Freaky Cow",
"Kiwi Food Cut"
]
},
{
"category": "Science: Gadgets",
"type": "multiple",
"difficulty": "easy",
"question": "When was the Tamagotchi digital pet released?",
"correct_answer": "1996",
"incorrect_answers": [
"1989",
"1992",
"1990"
]
},
{
"category": "Entertainment: Video Games",
"type": "multiple",
"difficulty": "easy",
"question": "Which of the following names is the &quot;Mega Man&quot; Franchise known as in Japan?",
"correct_answer": "Rockman",
"incorrect_answers": [
"Paperman",
"Scissorsman",
"Mega Man"
]
},
{
"category": "Sports",
"type": "multiple",
"difficulty": "easy",
"question": "This Canadian television sportscaster is known for his &quot;Hockey Night in Canada&quot; role, a commentary show during hockey games.",
"correct_answer": "Don Cherry",
"incorrect_answers": [
"Don McKellar",
"Don Taylor ",
"Donald Sutherland"
]
},
{
"category": "Entertainment: Video Games",
"type": "multiple",
"difficulty": "easy",
"question": "Who created the indie adventure game &quot;Night in the Woods&quot;?",
"correct_answer": "Alec Holowka",
"incorrect_answers": [
"Ron Gilbert",
"Tim Schafer",
" Tommy Refenes"
]
},
{
"category": "Animals",
"type": "multiple",
"difficulty": "easy",
"question": "What is the collective noun for a group of crows?",
"correct_answer": "Murder",
"incorrect_answers": [
"Pack",
"Gaggle",
"Herd"
]
},
{
"category": "Entertainment: Japanese Anime & Manga",
"type": "multiple",
"difficulty": "easy",
"question": "In 2013, virtual pop-star Hatsune Miku had a sponsorship with which pizza chain?",
"correct_answer": "Domino&#039;s",
"incorrect_answers": [
"Papa John&#039;s",
"Pizza Hut",
"Sabarro&#039;s"
]
},
{
"category": "Entertainment: Video Games",
"type": "multiple",
"difficulty": "easy",
"question": "In the Super Smash Bros. series, which character was the first one to return to the series after being absent from a previous game?",
"correct_answer": "Dr. Mario",
"incorrect_answers": [
"Mewtwo",
"Lucas",
"Roy"
]
},
{
"category": "Celebrities",
"type": "multiple",
"difficulty": "easy",
"question": "By which name is Ramon Estevez better known as?",
"correct_answer": "Martin Sheen",
"incorrect_answers": [
"Charlie Sheen",
"Ramon Sheen",
"Emilio Estevez"

]
}
]
}
var allAnswer;
var allAnswers = [];
var iRandom = Math.floor((Math.random() * 49) + 1);
for (i in questions.results) {
  x = "<h2>" + iRandom + ". " + questions.results[iRandom].question + "</h2>";
  y = "<p>" + questions.results[iRandom].correct_answer + "</p>";
  n = "<p>" + questions.results[iRandom].incorrect_answers[0] + "</p>";
  h = "<p>" + questions.results[iRandom].incorrect_answers[1] + "</p>";
  t = "<p>" + questions.results[iRandom].incorrect_answers[2] + "</p>";
  var answers = [n , y , h , t];
    $(function() {
 $("#scramble-buttons").html($("#scramble-buttons").children().sort(function() { return 0.5 - Math.random() }));
});
  document.getElementById("demo").innerHTML = x;
  document.getElementById("test").innerHTML = answers[0];
  document.getElementById("test1").innerHTML = answers[1];
  document.getElementById("test2").innerHTML = answers[2];
  document.getElementById("test3").innerHTML = answers[3];


}
