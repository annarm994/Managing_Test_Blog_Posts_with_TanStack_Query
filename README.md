# Managing_Test_Blog_Posts_with_TanStack_Query
Assignment 15 - Managing Test Blog Posts with TanStack Query

# My Project

This project is a React (Expo) application that demonstrates how to manage API requests for CRUD operations using TanStack Query and implement these methods in a React application.

## Objective

The objective of this project is to understand how to use TanStack Query to manage API requests for CRUD operations and implement these methods in a React (Expo) application.

## Tools and Technologies

- React (Expo): A JavaScript library for building user interfaces
- TanStack Query: A powerful library for server-state management in React applications
- JSONPlaceholder: A fake online REST API for testing and prototyping [JSONPlaceholder](https://jsonplaceholder.typicode.com/)

## Setup

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.

## Usage

To run the project, use the following command:

npx expo start

This will start the Expo development server and you can view the app on your device using Expo Go app or in a web browser.

## Features Implemented

1. Fetching Posts: Use TanStack Query to fetch all posts from JSONPlaceholder and display them in a list.
2. Creating a Post: Implement a form that allows users to submit new posts. Use TanStack Query's mutation hooks to send a POST request to create new posts.
3. Updating a Post: Add an edit option to each post in the list. Use a form to capture the updated title and body, and send a PUT request using TanStack Query's mutation hooks.
4. Patching a Post: Implement a functionality to update only the title of a post. Use PATCH method and ensure only the title is sent in the request body.
5. Deleting a Post: Add a delete button next to each post. Use TanStack Query's mutation hooks to send a DELETE request.
6. Filtering Posts by User: Add a feature to filter posts by user ID. Implement this by adding a search or filter component that modifies the fetch query based on the user ID.
