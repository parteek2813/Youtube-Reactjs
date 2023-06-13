## Youtube-Reactjs

This is a React.js project that aims to provide a simplified interforce for interaction with the YouTube API. It allows us to search for videos, view video Details and watch videos directly within this application without hovering over the YouTube App :/

## Features

- Search for videos: Users can enter keywords in the search bar to find videos related to their query.It takes out the live data present over the google Youtube API and can generate any videos related to search keyword.
- Video playback: Users can watch videos directly within the application.
- Video details: Detailed information about each video, such as title, description, and view count, is displayed. We uses the live API for comments section too to give a nice looking feel!

## Technologies Used

React.js, Youtube-API, Redux, Jest for Testing , HTML, CSS, BrowserList for Compatiability, Web-vitals.

Setup
To run this project locally, follow these steps:

1. Clone the repository:

```
git clone https://github.com/parteek2813/Youtube-Reactjs.git

```

2. Install the dependencies:

```
cd Youtube-Reactjs
npm install
```

3. Obtain a YouTube API key:

- Visit the Google Developers Console.
- Create a new project or select an existing project.
- Enable the YouTube Data API v3 for your project.
- Generate an API key.

4. Set up the API key:

- Create a new file named .env in the root directory of the project.
- Add the following line to the .env file, replacing <YOUR_API_KEY> with your YouTube API key:

```
REACT_APP_YOUTUBE_API_KEY=<YOUR_API_KEY>
```

5. Start the development server:

```
npm run start
```

6. Open your web browser and visit http://localhost:3000 to access the application.

## Contributing

Contributions are welcome! If you have any ideas or suggestions, please open an issue or submit a pull request.
