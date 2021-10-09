### About

The app retrieves and displays the user's repositories and organizations on GitHub.

- Used hooks and context for state management
- Used ES6 syntax including arrow functions, destructuring, and async/await
- Spinner when information is loading
- 404page and try/catch block for dealing with errors
- Ant design for styling
- Multiple pages with the use of react-router
- App deployed on Vercel **[DEMO]**(https://git-fetch-app.vercel.app/)

### How to use it

- App has an input field with a button for searching GitHub users
- Write the username in the input field and click Search
- The user's profile is loaded and the navbar with two buttons is activated
- Click on "Repositories" to show users repo page with list of links to every repo
- Click on "Organizations" to show users org page with list of links returning json file with informations about the org.
- Click on "Github Logo" to go back to the homepage (before data fetch) / users profile (after data fetch)

### Dependencies

Made with **create-react-app**

- **react-router-dom** for routing
- **antd** & **@ant-design/icons** for styling
- **axios** for data fetching
