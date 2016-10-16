# Storefront

This is an exercise to build a storefront web app. 
The project was generated using Angular 2 and redux and you can see it live at: `https://tbai.github.io/storefront-bigcommerce`

## Installation

* Run `npm install -g angular-cli@1.0.0-beta.17`
* Run `npm install`

## Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). 
Before running the tests make sure you are serving the app via `ng serve`.

## Notes

I've chosen to build the application using Angular 2 and Redux. That made the code very organized and easy to read but, on the other hand, the initial setup was harder and I spent more time than expected configuring the project. 

I also decided to extend the scss version of the Skeleton css utility to use as a base to implement the project styles. The layout became responsive but not as functional as it is on the desktop version. The shopping cart, for example, won't show up on mobile sizes.  Please bear in mind that I had to implement all the css very fast so the quality is definitely not as good as it could be with some extra time.

### Known Issues

* The cart popup will go off screen if the list is too big since I did not implement any overflow control due to the lack of time.
* The number in the cart menu icon shows as the sum of all the product quantities in the cart. I decided to implement it like that in order to always have a feedback when the user clicks on Add To Cart. With some extra time, I would implement some kind of message or animation showing that the item was added to the cart and the number would be the number of products in the cart regardless of the quantities.
* It is not possible to open the cart popup or the cart page on mobile.
* Fonts and colors are similar but not exactly the same.
* No tests. I set my priority to implement all the functionalities and that damaged my capacity to write tests. The testing framework is ready and working though but there is only one "fake" test in the suite.
* I did not have time to try the app in multiple browsers, It has been tested on chrome and firefox on my linux environment but nothing other than that.
