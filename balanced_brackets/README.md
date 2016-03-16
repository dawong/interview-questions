# Balanced Brackets
Write a function that takes a string of brackets and determines whether it is balanced or not.

The method I used was:
* find every open bracket {, (, [ and store its position in a array
* iterate through every open bracket, starting from the innermost, and find a matching closing bracket
* remove the brackets and everything in between and rebuild the string
* keep going until you have empty string (valid) or leftover brackets (invalid)
