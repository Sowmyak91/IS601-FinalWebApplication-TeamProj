## Final Web Application - Feature 2
#### Create a login and registration process that includes email verification.  You can use a service like SendGrid to send email and you should look for a Flask Plugin to help.


<h2>Step 1:</h2> Move to the branch for feature 1.
<h2>Step 2:</h2> Install the files and open them in Pycharm
<h2>Step 3:</h2> To Set up the dockerfile, select “edit configuration” on the top and create a docker-compose config. Make sure that you select the correct docker-compose.yml and add it to the box with the same label.
![Docker](screenshots/docker.png)
<h2>Step 4:</h2> Next press the run button next to the docker compose you just created and it will start the docker container.
<h2>Step 5:</h2> Go to View -> Tool Windows -> Database. Create a database with the plus button on the window that appears. Select MySQL and under user enter root and for password enter root. The port will be 32000 and the database will be treesData. Test the connection to ensure that it works.
![dbsetting](screenshots/dbsettings.PNG)
<h2>Step 6:</h2> Run the docker compose, once deployed, navigate to Docker->compose->app->Flaskapp and click on the http server.
![startserver](screenshots/flaskapp.png)
