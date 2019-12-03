const movies = [
    {
        title: "Phantom Menace",
        duration: 180,
        stars: "Anakin, Qui-Gon, Obi-Wan"
    },
    {
        title: "Attack of the Clones",
        duration: 168,
        stars: "Obi-Wan, Yoda, Anakin"
    },
    {
        title: "Revenge of the Sith",
        duration: 150,
        stars: "Darth Vader, Padme, Obi-Wan"
    },
    {
        title: "A New Hope",
        duration: 120,
        stars: "Luke, Leia, Han"
    },
    {
        title: "Empire Strikes Back",
        duration: 140,
        stars: "Luke, Leia, Han, Chewbacca"
    },
]

var i = 0;
movies.forEach(function(makeSentence) {

var t = movies[i].title;
var d = movies[i].duration;
var s = movies[i].stars;
console.log(t + " lasts for " + d + " minutes. Stars: " + s + ".");
i = i + 1;
});


