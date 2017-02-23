## web-101

A simple project done to help fellow recursers get into web development

### Introduction

This is intended to be explained and then used as a way to explore how a client
side integrates with a server side, to produce something (maybe) useful.

I am not presenting here best practices, actually looks more what you would not do
in the industry, but, I believe it could be a nice way for getting people started,
provided little programming experience.

I am going to assume some level of experience in programming, what's enough for 
you to get along with your pc and progress in the use of this simple project. For
any doubts or questions feel free to open an issue.

### How to use this

#### Starting the server

Open a console and 

```bash
$ npm start
```

This will start the server, but any change you will make to it will not be picked
up, unless you

```bash
$ npm run dev
```

which will restart the server for any change you make to the project files.

Note that the server does not persist the actions you perform, so a restart, or 
a termination of the server process will result in a loss of the data you entered.

#### Seeing the client

Point your browser to `http://localhost:3000`, you should see a few HTML 
components, that will let you see, delete, create, and update contents
in the server.

#### From the console

If you like I've committed the scripts I've used to code the server, you will 
find them in the server/ folder.


### Doing something

You should now have your browser pointing at `http://localhost:3000`.

Right click on the page and choose something that reads like "inspect", you should
see a panel appearing, you will then notice a few tabs also, we are interested in:

 * Console - which shows all errors or message we log using 
 `console.log('something')`
 * Network - which shows all calls happening between the client and the server

All the buttons you see perform some actions, which are then picked up by the 
server, which in turn applies them to the data structure holding all the posts.

Get yourself familiar with the flow:

 * list all posts - you should see a `{}` appearing in the console, meaning there
 are none, and a funny image in the middle :)
 * choose a name and a description, then click the button to create a post now 
 you will have a post in your server data structure

** How would you find out how many posts you have in the server? **
