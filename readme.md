Mongo Express Node suggestion-box-hw

Use Postman and Robo 3T to test your routes 
Use MongoDB and Mongoose and name database suggestion-hw
Use Async and Await (Don't forget the try and catch block)
Use controllers for business logic.
Remember to be inside folder and npm i*
Only .gitignore the node_modules

INSTRUCTIONS:

1. Create an express server using express-generator: express suggestion-box-hw --view=ejs. `COMPLETE`
2. Delete all view related items `COMPLETE`
3. Connect to mongodb with mongoose. Remember to name database suggestion-hw. `COMPLETE`
4. In routes folder create a suggestions folder, then create suggestionRouter.js inside suggestion folder and make sure you connect it through app.js with the path '/api/suggestions' `COMPLETE`
5. In suggestion folder, create model folder and controller folder. `COMPLETE`

6. In model folder, create a file called Suggestion.js: Build a schema for Suggestions called SuggestionSchema
- title - should be a string, lowercase, unique, required
- author - should be a string, lowercase
- suggestion - should be a string, lowercase and required
- likes - should be a number and default to 0
- anonymous - should be a boolean
- timeCreated - should be a date with default Date.now `COMPLETE`

7. In controller folder, create a file called suggestionController.js
- getAllSuggestions
- getSingleSuggestion - get one suggestion based on id using parameters
- createSuggestion- does not need id or time from user
- updateSuggestion- user can only update title and suggestion
- deleteSuggestion - suggestion deletes based on id

8. Hook it up to suggestionRouter.js

- GET /all-suggestions
- GET /single-suggestion
- POST /create-suggestion
- UPDATE /update-suggestion
- DELETE /delete-suggestion

`STEP 1` - IN TERMINAL EXPRESS SUGGESTION BOX --VIEW=EJS

`STEP 2` - NPM I

`STEP 3` - DELETE VIEWS AND PUBLIC FOLDER

`STEP 4` - DELETE PATHS IN APP.JS

`STEP 5` - UNINSTALL EJS

`STEP 6` - INSTALL MONGOOSE `npm i mongoose` IN TERMINAL

`STEP 7` - UPDATER SERVER LISTEN FUNCTION.

`STEP 8` - UPDATE ERROR MESSAGE IN APP.JS - FROM RENDER TO JSON

`STEP 9` - CREATE `suggestions` FOLDER | INSIDE FOLDER CREATE `suggestionsRouter.js`

`STEP 10` - ADD PATH IN APP.JS
```JAVASCRIPT
const suggestionsRouter = require("./routes/suggestions/suggestionsRouter");
app.use("/api/suggestions", suggestionsRouter);
```
`STEP 11` - CREATE SCHEMA

`STEP 12` - 