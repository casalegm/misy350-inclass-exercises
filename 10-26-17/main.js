console.log("Hello");

//arrays
let bucket_list = ["learn to fly", "go to Africa", "go to Japan"];
console.log(bucket_list[2]);

//for loop
for (let i = 0; i < bucket_list.length; i++){
  console.log(bucket_list[i]);
}

let imdb_movie_list = ["1Shawshank Redemption", "13Godfather", "23Godfather Part2", "14Dark Knight", "12 Angry Men"];
let ranker_movie_list = ["Godfather", "Shawshank Redemption", "Pulp Fiction", "Star Wars", "Forrest Gump", "Dark Knight"];

//nested loop
for (let i = 0; i < imdb_movie_list.length; i++){
  for (let j = 0; j < ranker_movie_list.length; j++){
    if (imdb_movie_list[i] == ranker_movie_list[j]){
      console.log(imdb_movie_list[i]);
    }
  }
}

//while loop
let balance = 1000;
let years = 0;

while (balance< 1000000) {
  balance += balance * 0.03;
  years ++;
}
console.log(years);

//iterators
imdb_movie_list.forEach(movie => console.log("- " + movie));

let new_list = (imdb_movie_list.filter(movie => movie.slice(0, 1) == "1"));
new_list.forEach(movie => console.log("- " + movie));
