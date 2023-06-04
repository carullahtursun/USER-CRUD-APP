# User CRUD Project
This project is a web application that performs basic CRUD (Create, Read, Update, Delete) operations related to users. Users can update, view, and delete their names, email addresses, and other information.

![image](https://github.com/carullahtursun/USER_CRUD_APP/assets/62027425/fb614b8a-c281-4453-96b4-6e71789c23fd)


## Features
- Users can log in with their email addresses and passwords.
- Users can view, update, and delete added users.
- User-friendly interface is provided for error handling and displaying error messages.
- The application retrieves user data from a static userData JSON and performs validation during login.

## Installation
1. Clone this project to your computer:
  ``` bash
  git clone https://github.com/carullahtursun/USER_CRUD_APP.git
  ```
2 Install the required packages:
  ``` bash
  npm install
  ```
  
3 Start the project:
  ``` bash
  npm run dev
  ```
1. Open http://127.0.0.1:5173 in your browser to view the applicatio

## Usage
- When the application is launched, the login page opens.
- Users can log in with their email and password.
- To update a user, the user can simply click on the user's name in the list.
- To update or delete a user, the user can click on the respective buttons in the user list.
- When update or delete operations are completed, the user is shown informative messages.
## Technologies and Libraries

- React: JavaScript library for building web applications
- React Router: Used for page routing
- React Hook Form: Used for form management
- Redux: Used for application state management
- Yup: Used for schema-based validation
- Tailwind CSS: Used for UI design
