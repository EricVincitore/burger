# burger

This app will allow the user to add an item ot the menu and devour it or already existing items.

## Overview

Welcome to the Friend-Finder app! This app will allow you to fill out a quick ten question survey to get who is most like them form the data file. All of the questions on the survey reflect how you enjoy your time or what your preferred way to relax is.

## Instructions

### Heroku Instructions

1. Navigate to the heroku page for the app using the link at the bottom of this README.    
![Heroku Link]()

2. You should be redirected to a new page with the current menu options.  
![Burger Page]()

3. Once you have navigated to this page you are able to devour burgers that are currently on the menu using the "Devour!" button to the right of each option. When an item is successfully devoured it will move tot eh right side of the web page.  
![Devour Button]()

4. You can also add to the menu by going to the submission box at the bottom of the page. Just type the name of the burger or item you would like to add to the menu and click the "Add Burger" button located below th input box.  
![Input form and Submission Button]()

5. After step 4 is successfully completed you will see the new item you added at the bottom of the menu with a devour button to the right of it. When an item is successfully devoured it will move tot eh right side of the web page.  
![New Item]()

### Git-Hub Instructions

1. After you have pulled the repository navigate to the folder in your terminal and run the following commands to install node and the required dependencies.
    * npn init -y
        * This downloads the node package.
    * npm install 
        * This will install the node package.
    * npm install express
        * This will download and install the latest version of express to the file allowing teh server to run correctly.
    * npm install express-handlebars
        * This will download and install a package that will let the web browser display the code aas a proper HTML page with the matching CSS.
    * npm install mysql
        * This will download and install the package allowing you to use and interact with the MySql database.

2. Navigate to the server.js file in your terminal and run the following command.
    node server.js
![Terminal Command]()

3. This should prompt you with a line that tells you the local host port it is running on. Copy the local host port you are using and paste it into your web browser to navigate to the starting page.
![Terminal Response]()

4. When you would like to start the survey click the button labeled "Go to Survey".  
![Starting Button](images/surveybutton.png)

5. Fill in your name and add link to an image of yourself before you start answering questions.  
![Starting Info](images/startinginfo.png)

6. Fill out all ten questions with "1" if you strongly disagree to "5" if you strongly agree.  
![Questions](images/question.png)

7. After you have answered all questions click the submit button to have a modal window appear with the name and photo of your closest match.  
![Your Match](images/yourmatch.png)

## Links

### Heroku Page



### Git-Hub Page



## Technologies Used

* HTML5
* Bootstrap
* Javascript
* Node.js
* Handlebars
* Express
* Heroku
* MySql


## Development Role

This app was developed by Eric Vincitore.