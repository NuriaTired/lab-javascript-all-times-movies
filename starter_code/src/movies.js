/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes (arr){
    var newMovies = arr.map(function(item){
        var num1 = 0;
        var num2 = 0;
        var newItem = Object.assign({}, item);
        if(item.duration.includes("h") && !item.duration.includes("min")){
            newItem.duration.replace("h", "");
            newItem.duration =parseInt(newItem.duration, 10) *60;
            console.log(newItem);
            return newItem;
        }
        else if(!item.duration.includes("h") && item.duration.includes("min")){
            newItem.duration.replace("min", "");
            newItem.duration =parseInt(newItem.duration, 10);
            console.log(newItem);
            return newItem;
        }
    }
}


// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
