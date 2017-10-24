# Square Toast - Client

This repo project is a web client for a simple Point of Sale (POS) system.
A second repo exists for a [corresponding database and API](https://github.com/JohnSnedden/square-toast-api)


## Background
This is my second project as part of the General Assembly [Web Development Immersive](https://generalassemb.ly/education/web-development-immersive) program.

We were given the freedom to choose what to develop as long as it met the following requirements/specifications:

#### Deployment
Be deployed online, where the rest of the world can access it.
1. Deploy client application on GH pages.
2. Deploy server application on Heroku.

#### Auth Specifications
1. Signup with email, password, and password confirmation.
1. Login with email and password.
2. Logout when logged in.
3. Change password with current and new password.
4. Give feedback to the user after each action's success or failure.

#### Client Specifications
1.  Use a front-end Javascript app to communicate with your API (both read and write) and render data that it receives in the browser.
2. Have semantically clean HTML and CSS
3. User must be able to create a new resource
4. User must be able to update a resource
5. User must be able to delete a resource
6. User must be able to view a single or multiple resource(s)
7. Give feedback to the user after each action's success or failure.

#### API Specifications
1. Create at least 4 RESTful routes for handling GET, POST, PUT/PATCH, and DELETE requests.
2. Any actions which change data must be authenticated and the data must be "owned" by the user performing the change.
3. Utilize an ORM to create a database table structure and interact with data
4. Have at least 1 resource that has a relationship to User


I chose to develop a simple POS based on my interest and experience with order processes and systems.

Earlier in my career I worked with [SAP order to cash](https://www.sap.com/products/enterprise-management-erp/order-to-cash-module.html) product which gave me a lot of exposure to that database and the associated processes.

More recently I've worked with some saas order systems such as [Shopify](https://www.shopify.com/pos), [Square](https://squareup.com/pos), and [Vend](https://www.vendhq.com/us/).
I also have an interest in the [Toast](https://pos.toasttab.com/) product.


## My Planning and Development Process, and Problem Solving Strategy
I started by putting my initial thoughts about a POS system into a [mind map](https://drive.google.com/open?id=0B_T6q5vZjOqcQTBWTDNudTFQcHc).
This helped me organize my various thoughts and from that I was able to start to conceptualize what my ERD might look like.

I then created an [ERD](https://drive.google.com/open?id=0B_T6q5vZjOqcRVF0UlotQ1gxSWM).
The ERD builds upon itself for what I thought would be five clear stages of product development.


## Wireframes
Initial low-res hand sketch wireframes can be located [here](https://photos.app.goo.gl/ENLFeQ9wKtaOLayH2)


## User Stories
I utilized a [Trello board](https://trello.com/b/WOcJ8Bqd) to keep track of my user stories, progress, and bugs/issues during initial development. After initial development is complete I will switch to using the [GitHub repo issues list](https://github.com/JohnSnedden/square-toast-client/issues) for ongoing issue management.


## Built With

* JavaScript
* jQuery
* AJAX
* Bootstrap
* Handlebars


## Unsolved Problems

* I'm not entirely happy with the lack of company component in this initial version. With the current setup multiple users can not share orders, like they might if they were working at the same food service establishment.


## Future Development

There is a lot of scope for building out this product.
To begin with I'd like to add the following resources and incorporate them into the database and API:
* Company - Enables users to belong to one or more companies, and orders to belong to a single company.
* Company authorization - Allow users to view/edit all orders for all companies they are connected to.
* Order Items - Allow each order to have multiple items.
* Products - Predefined products which can entered into orders.
* Customer - Allow orders to be associated with a customer.

Beyond the above items I have many more concepts on the initial mind map which can be assessed for product market fit and feasibility based on user feedback.
