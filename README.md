Please create 2 web pages with the following two endpoints:

First page: list of movie/tvshow titles
https://cdn-discover.hooq.tv/v1.2/discover/feed?region=ID&page=1&perPage=20

Extract rows with type "Multi-Title-Manual-Curation". Each row shows “row_name” on top followed by a list of horizontally scrollable images (use POSTER type). Put title below each image.
The end result page is a list of rows with scrollable images with individual titles below.

Please handle pagination by changing the page=x in query when scrolling down.
On click of any image, call the following endpoint using the corresponding id: https://cdn-discover.hooq.tv/v1.2/discover/titles/:id for second page

Second page: the details of the movie
e.g. https://cdn-discover.hooq.tv/v1.2/discover/titles/e6464ce6-42c9-43ae-be23-0dd57f50add1
Show the details from the response, the layout is up to your creativity

If possible, please use react.js and pwa. You can deploy the pages anywhere, send us the url if available. Please send us the repository link and indicate in Readme file how to run locally.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Missing requirement :

- Pagination
- beautify the secound page

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
