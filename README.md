## APRIZE

**APRIZE** is an ecommerce store, where you can buy goods of your choice at A1 price. <br>

![image](https://user-images.githubusercontent.com/82696858/183899506-02709856-be21-429a-ab19-33293a157245.png)


### Pages
* LogIn
* LogOut
* SignUp
* Cart
* Home
* Wishlist
* Product Listing

### Backend
* MockBee providing api's and mock backend
* MockMan for testing api's

### Functionalities

#### Landing Page
![image](https://user-images.githubusercontent.com/82696858/183900328-44512657-2eb4-4843-8aaf-92d4ccf7d61e.png)

Brief:
You can see a landing page with a list of featured categories.
* If clicked on any one of the categories I will be redirected to the product list page with the selected category.

In detail:
* On the Landing page, you could see different sections(i.e. categorySection, shopNowSection, newArrivalsSection, DiscountedProductsSection, ProductsOnSaleSection). All these sections except shopNowSection are scrollable to the left.
* Clicking on any of the category in the categorySection, takes you to the productlisting page, listing the products with the selected category.
* And so is same for the newArrivalsSection, DiscountedProductsSection, ProductsOnSaleSection.
* Clicking on shopNow would take you to the productlisting page, and will list you all the products.

#### Product Listing Page
![image](https://user-images.githubusercontent.com/82696858/183900604-fa34b013-41cb-469f-b675-d7f7c16dd9f1.png)

* you can see a product listing page where all the products are listed with a section of filters.
* you can see multiple filters on the product listing page including,
      - Sort By Price: A radio button to sort from low to high & high to low.
      - Sort By Rating: A radio button to sort 3 star & above, 4 star & above, & 5 star.
      - Sort By Discount: A radio button to sort 10% & above, 30% & above, 60% & above & 80% & above.
      - Price: Slider for price
      - Section: A checkbox with various sections according to the option selected.
      - Category: A checkbox with various categories according to the category selected.
      - Products: A checkbox with various types of products according to the type of product selected.
* You can see a button to clear filters from where I can clear all the applied filters.
* On the product cards, you can see three call-to-action buttons,
      - Add to Cart: You can click on the "Add to Cart" button which will add the item to the cart & once added shows "Added" on the product card.
      - Buy Now: Which takes you to the cart page.
      - Add to Wishlist: You can click on a "Wishlist" icon button where if you click, adds the item in the wishlist & vice-verse.

#### Cart Management
![image](https://user-images.githubusercontent.com/82696858/183900903-d4850e25-dae0-4362-873d-9fed2378a7f8.png)

![image](https://user-images.githubusercontent.com/82696858/183901273-4a438121-8ed6-4227-bb8e-f3bd9e9ed7e8.png)

![image](https://user-images.githubusercontent.com/82696858/183901416-9abec45d-8bf3-4c51-9350-8d51f523071a.png)

* From the navbar, you can navigate to the cart where all the products that you want to buy are mentioned. And the counter value of the products added in cart is shown as a badge on the cart icon on header.
* On the product card in cart,
      - you can see the quantity of a particular product.
      - you can Increase or Decrease the quantity of a particular product.
      - Remove the product from the cart
      - Add the product to the Wishlist
* You can see the price details card of the cart which will show the total price of the products with its quantity.

#### Wishlist Management
![image](https://user-images.githubusercontent.com/82696858/183901605-9cdf8e7c-2fb2-4912-a2e6-afffa7da1fbf.png)

![image](https://user-images.githubusercontent.com/82696858/183901731-26442710-afbe-4241-b0b5-d15bee103712.png)

![image](https://user-images.githubusercontent.com/82696858/183901833-92d33713-8fb5-420f-973f-1c51c9f149e7.png)

* From the navbar, you can navigate to my wishlist where all the products that you would like to buy are mentioned. And the counter value of the products wishlisted is shown as a badge on the cart icon on header.
* On the wishlisted product card,
      - You can remove the item from the wishlist
      - Add the item to the cart
* If the cart already contains that item, it's only increasing the quantity.

#### Auth Pages
* UI for auth pages has been added.

#### - SignUp Page
![image](https://user-images.githubusercontent.com/82696858/183902443-73dfe34b-13f0-49f2-98f7-47a64f141834.png)
You can see a sign-up page from where you can sign-up using my email, password.

#### - LogIn Page
![image](https://user-images.githubusercontent.com/82696858/183902759-f169899c-3642-4bc4-9e5c-0f58a1d10c3e.png)
You can see a login page from where you can log in using my email & password.

#### - LogOut Page
![image](https://user-images.githubusercontent.com/82696858/183903189-85ee7fa3-578c-4f79-a014-32e690bddefd.png)
Clicking on the logout button would log you out from the app, and would navigate you to the home page.


