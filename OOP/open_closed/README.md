# Open-Closed Principle (OCP)

It is often summed up by the sentence: *software entities should be open for extension but closed for modification*. The risk of changing an existing class is that you will introduce an inadvertent change in behavior that ripples across the code that depends on the class.

The following example shows a reward card point calculation class named `RewardPointsCalculator`. The standard number of reward points is “four points per whole dollar spent in the store.” When the decision is made to offer double points to some VIP customers, instead of adding a conditional branch within the original RewardPointsCalculator class, a subclass named DoublePointsCalculator is created to deal with the new behavior.

```Typescript
// Typescript
class RewardPointsCalculator {
  getPoints(transactionValue: number) {
    // 4 points per whole dollar spent
    return Math.floor(transactionValue) * 4;
  }
}

class DoublePointsCalculator extends RewardPointsCalculator {
  getPoints(transactionValue: number) {
    const standardPoints = super.getPoints(transactionValue);
    return standardPoints * 2;
  }
}
const pointsCalculator = new DoublePointsCalculator();
alert(pointsCalculator.getPoints(100.99)); // 800
```

By following the `OCP`, a program is more likely to contain maintainable and reusable code. By avoiding rework within an existing class, you also avoid the shock waves that can echo throughout the program following a change. Code that is known to work is left untouched and new code is added to handle the new requirements.
