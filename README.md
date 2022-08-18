# Random Password Generator

As a developer, I want to create a way to generate a completely random password via a password generator, using lowercase letters, uppercase letters, numbers and special characters. Prompts will be given to the user for their input on what characters they desire in their password as well as how long they would like their password to be.

## Purpose

Enhance security by creating a random and secure password

## Intended Application Use

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

The following image demonstrates the application functionality:

![An app window with the label Password Generator, an input field labeled Your Secure Password, and a Generate Password button.](Screen%20Shot%202022-08-18%20at%201.03.51%20AM%20(2).png)
