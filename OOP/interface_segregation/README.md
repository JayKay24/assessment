# The Interface Segregation Principle (ISP)

The ISP states that we **should not create big interfaces**, but instead write a series of **smaller, more specific** interfaces that are implemented by the class.

Each interface would describe an independent grouping of behavior, allowing code to depend on a small interface that provides just the required behavior. Different classes could provide the implementation of these small interfaces, without having to implement additional unrelated functionality.

The following example demonstrates the `ISP` by grouping methods into more specific interfaces that describe a number of contracts that could be implemented individually by a simple printer or simple copier, as well as by a super printer that can do everything.

## ISP violated

```Typescript
// Typescript
interface Printer {
  copyDocument();
  printDocument(document: Document);
  stapleDocument(document: Document, tray: number);
}
```

## ISP enforced

``` Typescript
// Typescript
interface Printer {
  printDocument(document: Document);
}

interface Stapler {
  stapleDocument(document: Document, tray: number);
}

interface Copier {
  copyDocument();
}

class SimplePrinter implements Printer {
  printDocument(document: Document) {
    //...
  }
}

class SuperPrinter implements Printer, Stapler, Copier {
  printDocument(document: Document) {
    //...
  }

  copyDocument() {
    //...
  }

  stapleDocument(document: Document, tray: number) {
    //...
  }
}
```

When you follow the ISP, client code is not forced to depend on methods it doesn’t intend to use. Large interfaces tend to encourage calling code that is organized in similar large chunks, whereas a series of small interfaces allows the client to implement small maintainable adapters to communicate with the interface.
