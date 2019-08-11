# Single Responsibility Principle (SRP)

The SRP requires that a class should have **only one reason to change**. When designing your classes, you should aim to put related features together, ensuring that they are likely to change for the same reason, and keep features apart if they will change for different reasons.

A program that follows this principle has classes that perform just a few related tasks. Such a program is likely to be highly *cohesive*.

The term **cohesion** refers to a measure of the relatedness of features within a class or module. If features are unrelated, the class has low cohesion and is likely to change for many different reasons. High cohesion results from the proper application of the SRP.

## Examples

### SRP violated

```Typescript
// Typescript
class Movie {
    private db: DataBase;
    constructor(private title: string, private year: number) {
        this.db = DataBase.connect('user:pw@mydb', ['movies']);
    }

    getTitle() {
        return this.title + ' (' + this.year + ')';
    }

    save() {
        this.db.movies.save({ title: this.title, year: this.year });
    }
}

// Movie
const movie = new Movie('The Internship', 2013);
movie.save();
```

### SRP enforced

To fix this class before it grows into a bigger problem, the two concerns can be divided between the Movie class that takes care of movie-related behavior and a MovieRepository that is responsible for storing the data.

```Typescript
// Typescript
class Movie {
    constructor(private title: string, private year: number) {
    }

    getTitle() {
        return this.title + ' (' + this.year + ')';
    }
}


class MovieRepository {
    private db: DataBase;

    constructor() {
        this.db = DataBase.connect('user:pw@mydb', ['movies']);
    }

    save(movie: Movie) {
        this.db.movies.save(JSON.stringify(movie));
    }
}
// Movie
const movie = new Movie('The Internship', 2013);
// MovieRepository
const movieRepository = new MovieRepository();
movieRepository.save(movie);
```

If features are added to the Movie class, the MovieRepository requires no changes. If you were to change your data storage device, the Movie class wouldn’t need to change.
