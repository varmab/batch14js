var numbers=["one","two","three"];

numbers.push("four");
numbers.unshift("zero");

numbers.pop();
numbers.shift();

var letters=["a","b","c"];

letters.forEach(function(value){
    console.log(value)
})

var movies=[
    {
        id:1,
        title:"Bahubali",
        actor:"Prabhas",
        revenue:300,
        theaters:["A","B"]
    },
    {
        id:2,
        title:"Adhurs",
        actor:"NTR",
        revenue:45,
        theaters:["B","C"]
    },
    {
        id:3,
        title:"Kushi",
        actor:"Pavan",
        revenue:15,
        theaters:["C","D"]
    }
]

//every, some, filter, map, reduce

//1. is there any movie croosed 50cr revenue?

var isAny50=movies.some(function(movie){
    return movie.revenue>=50;
})

console.log(isAny50);

//2: is all movies crossed 100cr?

var isAll100=movies.every(function(movie){
    return movie.revenue>=100;
})

console.log(isAll100);

//3: I want list of actors of all movies in array
// ["Prabhas","NTR","Pavan"]

var actors=movies.map(function(movie){
    return movie.actor;
})

console.log(actors);

//4. I want list of movies released theater B

var bMovies=movies.filter(function(movie){
    return movie.theaters.indexOf("B")!=-1;
})

console.log(bMovies);

//5. I want total revenue of all movies
var totalRevenue=movies.reduce(function(total,movie){
    return total+movie.revenue;
},0)

console.log(totalRevenue)

//6. I want all titles in one string
// "Bahubali,Adhurs,Kushi"

var titles=movies.reduce(function(titles,movie){
    if(titles=="") return movie.title;
    return titles+","+movie.title;
},'')

console.log(titles);

//7. I want a single object of all movies with title as key and
// actor as value

/*
    {
        "Bahubali":"Prabhas",
        "Adhurs":"NTR",
        "Kushi":"Pavan"
    }
*/

var titleActors=movies.reduce(function(titleActors,movie){
    titleActors[movie.title]=movie.actor;
    return titleActors;
},{})

console.log(titleActors);

//8. I want list of all theaters of all movies without any duplicates
// ["A","B","C","D"]
var allTheaters=movies.reduce(function(theaters,movie){
    movie.theaters.forEach(function(theater){
        if(theaters.includes(theater)==false){
            theaters.push(theater);
        }
    })
    return theaters;
},[])

console.log(allTheaters);


movies.sort(function(a,b){
    if(a.revenue>b.revenue) return 1;
    if(a.revenue<b.revenue) return -1;
    return 0;
})



