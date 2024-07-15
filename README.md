# Project: Dogear

[**Live Link*]()

Dog Ear Books is a mock of an e-commerce site offering a selection books. It offers a range of titles and access to an AI recommendation system. This project was created to practice across the stack using Django, React, and Postgres. 

## Tech Stack:
-   React + Vite
-   Django
-   Postgres

### Features
- **Pagination**: Users may browse titles without an endless scroll, and easily navigate page by page. As this project was intended for practice utilizing Django, pagination has been implimented server side rather than being handled by the client. 
- **Results Filtering and Ordering**: Results may be filtered by genre and may be ordered alphabetically by Title or Author, enhancing a user's ability to search for a specific title.
- **Search**: Stock may be searched by title or author. Title search operates on 'contains' logic, so a user can find books they are lookig for based on title fragments. 
- **Recommendations**: Users may enter titles to use for AI generated recommendations using GPT. This is handled via script which finds additional data from the Google Books API.

## Attributions
- This project is solely for personal use. I do not own any of the rights for the assets used in this project.
- All book data sourced from Kaggle. Additional attributes (price, stock, images, etc.) for titles were randomly generated or found via custom web scraper. 
- Icons created by Freepik - Flaticon


Developed by **Nathaniel Rose**
