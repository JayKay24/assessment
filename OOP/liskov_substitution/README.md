# The Liskov Substitution Principle (LSP)

The essence of this is that if you substitute a subclass for a superclass, the code that uses the class shouldn’t need to know that the substitution has taken place. If you find yourself testing the type of an object in your program, there is a high probability that you are violating the `LSP`.

## Requirements of LSP

* If the superclass has a method accepting a `Cat`, the subclass method should accept an argument of type `Cat` or `Animal`, which is the superclass for `Cat`.

* If the superclass has a method that returns an `Animal`, the subclass method should return an `Animal`, or a subclass of `Animal`, such as `Cat`.

* The subtype should throw either the same exceptions as the supertype, or exceptions that are subtypes of the supertype exceptions. The key here is that if the calling code has an exception handling block, it should not be surprised by the exception thrown by a subclass.

```Typescript
// Typescript
class ApplicationError implements Error {
  constructor(public name: string, public message: string) {}
}

throw new ApplicationError('Example Error', 'An error has occurred');
```
