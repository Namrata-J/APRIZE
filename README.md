## APRIZE

**APRIZE** is an ecommerce store, where you can buy goods of your choice at A1 price. 

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

Brief:
You can see a landing page with a list of featured categories.
* If clicked on any one of the categories I will be redirected to the product list page with the selected category.

In detail:
* On the Landing page, you could see different sections(i.e. categorySection, shopNowSection, newArrivalsSection, DiscountedProductsSection, ProductsOnSaleSection). All these sections except shopNowSection are scrollable to the left.
* Clicking on any of the category in the categorySection, takes you to the productlisting page, listing the products with the selected category.
* And so is same for the newArrivalsSection, DiscountedProductsSection, ProductsOnSaleSection.
* Clicking on shopNow would take you to the productlisting page, and will list you all the products.

#### Product Listing Page

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

* From the navbar, you can navigate to the cart where all the products that you want to buy are mentioned. And the counter value of the products added in cart is shown as a badge on the cart icon on header.
* On the product card in cart,
      - you can see the quantity of a particular product.
      - you can Increase or Decrease the quantity of a particular product.
      - Remove the product from the cart
      - Add the product to the Wishlist
* You can see the price details card of the cart which will show the total price of the products with its quantity.

#### Wishlist Management

* From the navbar, you can navigate to my wishlist where all the products that you would like to buy are mentioned. And the counter value of the products wishlisted is shown as a badge on the cart icon on header.
* On the wishlisted product card,
      - You can remove the item from the wishlist
      - Add the item to the cart
* If the cart already contains that item, it's only increasing the quantity.

#### Auth Pages
* UI for auth pages has been added.


