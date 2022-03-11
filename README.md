# Project REST-Rant

REST-Rant is an app where users can review restaurants.

User Stories:
As a user I need there to be afilter regarding the type of food.
As a user I need to know if the restaurant does dining in,
As a user I need a list of restaruants by location so I can find a near restaurant.
As a user I need to see the restaurant in a map so I can have a better idea of where it´s located.
As a user I need the distance to the restaurant.
As a user I need to be able to read reviews so I can decide weather or not to go to this restaurant.
As a user I need to see the menu of the restaurant, so I know if I can eat there (vegetarian options).
As a user I need to be able to see some pictures of the meals they offer.
As a user I need the app to be intuitive so I can have easy access to the info.

Method	                              Path	                               Purpose
GET                                    /                                  Home page
GET	                                  /places	                          Places index page
POST	                              /places	                          Create new place
GET                                   /places/new                         Form page for creating a new place
GET                                 /places/:id                           Details about a particular place
PUT                                 /places/:id                           Update a particular place
GET                               /places/:id/edit                        Form page for editing an existing place
DELETE                             /places/:id                            Delete a particular place
POST	                           /places/:id/rant                       Create a rant (comment) about a particular place
DELETE                             /places/:id/rant/:rantId               Delete a rant (comment) about a particular place
GET                                     *                                  404 page (matches any route not defined above)
