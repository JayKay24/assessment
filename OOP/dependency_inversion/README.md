# The Dependency Inversion Principle (DIP)

The `DIP` simply states that high-level modules shouldn’t depend on low-level components, but instead depend on *abstractions*. In turn, the abstractions should not depend on details, but on yet *more abstractions*. In simple terms, you can satisfy the DIP by depending on an interface, rather than a class.

In a conventional object-oriented program, the high-level components depend on low-level components in a hierarchical structure. The coupling between components results in a rigid system that is **hard to change**, and one that **fails when changes are introduced**. It also becomes **hard to reuse** a module because it cannot be moved into a new program without also bringing along a whole series of dependencies.

## DIP violated

```Typescript
// Typescript
class Light {
  switchOn() {
    //...
  }
}
  switchOff() {
    //...
  }
}

class LightSwitch {
  private isOn = false;

  constructor(private light: Light) {}

  onPress() {
    if (this.isOn) {
      this.light.switchOff();
      this.isOn = false;
    } else {
      this.light.switchOn();
      this.isOn = true;
    }
  }
}
```

## DIP enforced

```Typescript
// Typescript
interface LightSource {
  switchOn();
  switchOff();
}

class Light implements LightSource {
  switchOn() {
    //...
  }

  switchOff() {
    //...
  }
}

class LightSwitch {
  private isOn = false;

  constructor(private light: LightSource) { }

  onPress() {
    if (this.isOn) {
        this.light.switchOff();
        this.isOn = false;
    } else {
        this.light.switchOn();
        this.isOn = true;
    }
  }
}
```

The `DIP` extends the concepts of the `OCP` and the `LSP`. By depending on abstractions, code is less tightly bound to the specific implementation details of a class. This principle has a big impact, yet it is relatively simple to follow, as all you need to do is supply an abstract class or an interface (or interfaces, bearing in mind the interface segregation principle) to depend on rather than a concrete class.
