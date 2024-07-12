function solve(input) {
    const movies = [];

    for (const line of input) {
        if (line.includes('addMovie')) {
            const movieName = line.substring(9);

            let movie = {
                    name: movieName,
                    director: '',
                    date: '',
            };

            movies.push(movie);

        } else if (line.includes('directedBy')) {
            const [movieName, director] = line.split(' directedBy ');

            for (const movie of movies) {
                if (movie.name === movieName) {
                    movie.director = director;
                };
            }; 

        } else if (line.includes('onDate')) {
            const [movieName, date] = line.split(' onDate ');

            for (const movie of movies) {
                if (movie.name === movieName) {
                    movie.date = date;
                };
            };
        };
    };

    for (const movie of movies) {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        };
    };
}

solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
    );
solve([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ]
    );