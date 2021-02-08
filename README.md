# Frontend for teaclub application

First run the backend project and docker container as instructed on README on backend project files.

Then, to run this project, you need to have either yarn or npm installed on your system.
# Installing npm
By installing nodejs, you get npm package manager with it:
### sudo apt install nodejs

Then you can check your npm version by typing:
### npm -v

# Installing yarn
## Install via npm
It is recommended to install Yarn through the npm package manager, 
which comes bundled with Node.js when you install it on your system.

Once you have npm installed you can run the following both to install and upgrade Yarn:
### npm install --global yarn

After installing npm and/or yarn, install all the project dependencies specified in the package.json by running:
### yarn install

This creates node_modules folder to your project.

After that, in the project directory, you can start the react-admin application by running
### `yarn start` or `npm start`

This runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

You can view list of teas by giving the correct url to dataProvider object in App.js file
(this is done already, after starting the container, backend and frontend you should be able to see list of teas on http://localhost:3000) 

OBS! If you for example changed the port on your backend project, don't forget to change it on App.js LOCAL_REST_ENDPOINT 
constant as well.
