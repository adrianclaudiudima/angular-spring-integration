# Angular UI 

The application has been build with Angular CLI - Angular 6 with Material Design. It provides a basic functionality of CRUD operations over 
an User entity. 

# Spring Boot Backend 

The backend is built with Spring Boot 2 - WebFlux. Its main purpose is to provide an API for CRUD operations over an User entity. 
It is also used to host the Angular 6 UI Application. 

# Project purpose

The scope of this project is to show how you can serve an Angular 6 application using Spring Boot 2 - WebFlux. The backend 
is still not fully configured to support all path from Angular Application (in case of Angular routing, if Routing will not be made
using #, and you would refresh the page, the request will be intercepted by Spring (not angular) and Spring must be configured 
to forward the request to index.html and append all the rest of the request, so that the Angular routing can intercept the path
and redirect to the correct component) - this is a longer discussion for another topic :D  