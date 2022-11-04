// Module 22 No practice file

// Reverse the String Method-1
const myName = "Mahfuz";
const stringReverse = (text) => {
  //   let newName = text.split("");
  //   let reversName = newName.reverse();
  //   let result = reversName.join("");

  //   one line code rather than multiple line
  return text.split("").reverse().join("");
};
// console.log(stringReverse(myName));

// Reverse the String Method-2
const stringReverseTwo = (text) => {
  let newName = "";
  for (const letter of text) {
    newName = letter + newName;
  }
  return newName;
};
// console.log(stringReverseTwo(myName));

// Wood Calculator
const woodCalculator = (chair, table, bed) => {
  let chairWood = chair * 3;
  let tableWood = table * 10;
  let bedWood = bed * 50;
  const total =
    "chair: " + chairWood + ", Tabel: " + tableWood + ", Bed: " + bedWood;
  return total;
};
// console.log(woodCalculator(10, 3, 2));

// foo bar and foobar dividable
for (let i = 1; i <= 50; i++) {
  //   console.log(i, "getting the foo i");
  if (i % 3 == 0 && i % 5 == 0) {
    // console.log("foobar");
  } else if (i % 3 == 0) {
    // console.log("foo");
  } else if (i % 5 == 0) {
    // console.log("bar");
  } else {
    // console.log(i);
  }
}

// cheapPricing filter
const phones = [
  { name: "samsung s3", price: 25000, camera: 20 },
  { name: "samsung m20", price: 20000, camera: 20 },
  { name: "oppo young", price: 14000, camera: 20 },
  { name: "huawai pro10", price: 12000, camera: 20 },
  { name: "walton sw10", price: 5000, camera: 20 },
];

const cheapPricePhone = (phones) => {
  let cheapPrice = phones[0];
  for (let phone of phones) {
    // find the cheaper price
    if (phone.price < cheapPrice.price) {
      cheapPrice = phone;
    }
  }
  console.log(cheapPrice, "getting result");
};

// cheapPricePhone(phones);

// Soaping cart total amount with price and quantity
const cartProducts = [
  { name: "Laptop", price: 25000, quantity: 1 },
  { name: "Mobile", price: 12000, quantity: 2 },
  { name: "Watch", price: 500, quantity: 4 },
  { name: "Shirt", price: 400, quantity: 5 },
  { name: "Pen", price: 10, quantity: 10 },
];
let cartAmount = 0;
for (const product of cartProducts) {
  //   console.log(product);
  let priceQuantity = product.price * product.quantity;
  cartAmount = cartAmount + priceQuantity;
}
// console.log(cartAmount);

// Animal counting function
const animalCounting = (miles) => {
  let animalFirst10Miles = 10;
  let animalSecond10Miles = 50;
  let animalThird10Miles = 100;
  if (miles <= 10) {
    const animalCount = miles * animalFirst10Miles;
    return animalCount;
  } else if (miles <= 20) {
    const first10Miles = 10 * animalFirst10Miles;
    const restMiles = miles - 10;
    const second10MilesCount = restMiles * animalSecond10Miles;
    const totalAnimal = first10Miles + second10MilesCount;
    return totalAnimal;
  } else {
    const first10Miles = 10 * animalFirst10Miles;
    const second10Miles = 10 * animalSecond10Miles;
    const restMiles = miles - 20;
    const third10MilesCount = restMiles * animalThird10Miles;
    const totalAnimal = first10Miles + second10Miles + third10MilesCount;
    return totalAnimal;
  }
};

const animalCountResult = animalCounting(31);
// console.log(animalCountResult);
