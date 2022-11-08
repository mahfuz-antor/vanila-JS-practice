// check the search result from the Array

// Showing the Data on the UI
const searchField = document.getElementById("searchField");
const searchResultShow = document.getElementById("searchResult");

const products = [
  { name: "Samsung Galaxy M10 mobile", price: 12000, available: "Yes" },
  { name: "Lenovo laptop", price: 45000, available: "Yes" },
  { name: "Asus MX3 laptop", price: 50000, available: "Yes" },
  { name: "LG Q9 mobile", price: 15000, available: "Yes" },
];

// showing the products Array Name
searchField.innerText = products.map((data) => data.name);
// search field matches function
const searchProducts = (products, searchItem) => {
  const searchResult = [];
  for (const product of products) {
    if (product.name.includes(searchItem)) {
      //   console.log(product, "inside condition");
      searchResult.push(product);
    }
  }
  return searchResult;
};
const getData = searchProducts(products, "laptop");
// console.log(getData.map((data) => data.name));
searchResultShow.innerHTML = getData.map((data) => data.name);

// find the odd number using while loop
let i = 0;
while (i < 19) {
  i += i % 2 == 1;
  i++;
  console.log(i, "while looping result");
}
