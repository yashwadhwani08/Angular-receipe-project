export class Ingredient {
  // Normal way of declaring the properties and assigning values through constuctor

  // public name: string;
  // public amount: number;

  // constructor(name: string, amount: number) {
  //     this.name = name;
  //     this.amount = amount;
  // }

  // Alternsative way of doing the above work
  constructor(public name: string, public amount: number) {}
}
