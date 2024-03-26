/*
 * Задание: написать простой магазин на React+Typescript
 * какие шаги нужно предпринять для написания приложения?
 * товары будут храниться в проекте, в файле формата json (это "склад")
 * у каждого товара будет цвет, количество на складе, стоимость единицы товара
 * на главной странице отображаются три товара в магазине
 * товары с главной страницы можно добавлять в корзину
 * на корзине значок с количеством товаров, который изменяется, при добавлении товара в корзину
 * при клике на корзину, открывается страница с количеством добавленных товаров, их описанием, их стоимостью, и
 *  общей суммой к оплате.
 * как данные занести в контекст?
 * как данные получать из контекста?
 * */

const positiveSum = (arr) =>
  arr.filter((item) => item >= 0).reduce((acc, item) => (acc += item), 0);

console.log(positiveSum([1, -4, 7, 12]));

// Example usage:
// console.log(deleteNth([1, 2, 3, 1, 2, 1, 2, 3], 2)); // Output: [1, 2, 3, 1, 2, 3]
// console.log(deleteNth([20, 37, 20, 21], 1)); // Output: [20, 37, 21]

/*function tacofy(word) {
  const ingredients = {
    a: "beef",
    e: "beef",
    i: "beef",
    o: "beef",
    u: "beef",
    t: "tomato",
    l: "lettuce",
    c: "cheese",
    g: "guacamole",
    s: "salsa",
  };

  const recipe = [...word.toLowerCase()]
    .map((letter) => ingredients[letter])
    .filter(Boolean);
  return ["shell", ...recipe, "shell"];
}

console.log(tacofy("ogl"));*/

/*function tacofy(word) {
  const recipe = [];
  for (let i = 0; i < word.length; i += 1) {
    const letter = word.charAt(i);
    switch (letter) {
      case "t":
        recipe.push("tomato");
        break;
      case "l":
        recipe.push("lettuce");
        break;
      case "c":
        recipe.push("cheese");
        break;
      case "g":
        recipe.push("guacamole");
        break;
      case "s":
        recipe.push("salsa");
        break;
      case "a":
      case "e":
      case "i":
      case "o":
        recipe.push("beef");
        break;
    }
  }
  return ["shell", ...recipe, "shell"];
}

console.log(tacofy("ogl"));*/
