Node.js Exam 
 
Research on how to accept multiple user input (yargs or process object)
Create a Node application that will read a text file and count all total occurrence of requested word or string.
 
Input:
- The application will accept 2 argument
- File Path
- Search string
- Case sensitive (optional, default value is false)
 
 
Output
- The application will output the total number of string found on the file specified
- The application will also update the text file and attach the result at the end of text file
- Format:
    - =============================
    - == Search String: [String specified]
    - == Total Occurrece: [Number of total string found, numeric, comma-formatted]
    - =============================
    
Validations:
- Return an error message if the file specified is not valid
 
Additional Requirements:
- Use non-blocking functions (any synchronous call will be a score deduction)
- Add NPM Script that will fire off the application, name it “npm run dev-start"
- Add nodemon as dev dependency
- Save all dependencies on package.json
- Add conditional font color to console output using "chalk".
    - Show red text if the validation fails
    - Show yellow message if there is no string found
    - Show green message if there are text/string found

 


