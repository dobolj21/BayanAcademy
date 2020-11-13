var movies = [
    {
        title: "Harry Potter",
        hasWatched: true,
        rating: 5
    },
    {
        title: "Frozen",
        hasWatched: false,
        rating: 4.5
    },
    {
        title: "Tanging Ina Mo",
        hasWatched: false,
        rating: 5
    },
    {
        title: "John Wick",
        hasWatched: false,
        rating: 5
    },
];


movies.forEach(function(movie){
    var result ="YOu have ";
    if (movie.hasWatched){
        result += "watched";
    } else {
        result += "not seen";
    }
    result += "\"" + movie.title+"\"-";
    result += movie.rating + "stars";
    return result;
};

