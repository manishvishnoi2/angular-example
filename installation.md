## Steps to Follow if you want to start from Basic

1. npm install -g @angular/cli
2. ng new Frontend
3. ng serve


Please follow readme.md for running this repo.

## To connectRest Api

1. You can create a new api service or I have already created one with api.service.ts component
2. It has shown how you can post or get data. Please use it to properly connect with blockchain backend
3. I have created a new component login, you can check login.component.ts how I imported api service file.
4. Command to create api.service.ts is : ng generate service api
5. Command to create login component is : ng generate component news
6. You can access login at : localhost:4200/login
7. run ng generate module app-routing --flat --module=app to add routing. I have already added it to the project.
8. add login module to import and exports in app-routing.module.ts
9. USe <router-outlet></router-outlet> to input your routes. I generally use it in app.component.html

You can repeat above process for another components as well.

ng-serve will start the application at port 4200.