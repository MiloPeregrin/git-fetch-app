### About the App

I made this app as a job application assignment project.

The app retrieves and displays repositories and organizations of searched GitHub users.

Used tools and techniques:

- React hooks and context for state management
- ES6 syntax including arrow functions, destructuring, and async/await
- Spinner when information is loading
- 404page and catch block for dealing with errors
- Ant design for styling
- Multiple pages with the use of react-router
- App deployed on Vercel **[DEMO](https://git-fetch-app.vercel.app/)**

### Development challenges

The biggest one for me was to get correct data for GitHub organizations because it's default API doesn't hold the HTTP link for the current org site, just API sections links.

So I made the first batch call for all data, then I had to think about how to modify the orgs data and get the wanted html_url property.

I had a little bit of difficulty with this as my first try kinda worked... but it had problems with state management and orgs appeared only after the second search when hooks already had the state from the first search. Close enough.

I remade the whole fetch block. I focused more on what is going on with fetched data and what a current state is on every step.

It was challenging and extremely fun to make it work how was intended.

### How to use it

- Write the username in the input field and click Search
- The user's profile card is loaded and the navbar with two buttons is activated
- Click on "Repositories" to show a list of HTTP links of user's repos, each link leading to its GitHub page
- Click on "Organizations" to show a list of HTTP links of user's orgs, each link leading to its GitHub page
- Click on "Github Logo" to go back to the homepage (before data fetch) / users profile card (after data fetch)

### Dependencies

Made with **create-react-app**

- **react-router-dom** for routing
- **antd** & **@ant-design/icons** for styling
- **axios** for data fetching
