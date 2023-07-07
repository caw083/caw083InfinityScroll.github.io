### Infinity Scroll with Unsplash API
This project demonstrates the implementation of an infinity scroll feature using JavaScript and the Unsplash API. The infinity scroll technique allows for continuous loading of images as the user scrolls down the page, providing a seamless browsing experience.

#### Features
* Infinite Scrolling: The page dynamically fetches and displays additional images from the Unsplash API as the user reaches the bottom of the page.
* Lazy Loading: Images are loaded lazily, meaning that only the images visible in the viewport are loaded initially, reducing the initial page load time.
* Smooth User Experience: The infinity scroll functionality ensures that the user doesn't need to manually click a "Load More" button or navigate to a new page to view additional images.
* Responsive Design: The layout is designed to adapt to different screen sizes and devices, providing a consistent experience across desktop and mobile devices.

##### How it Works
1. The JavaScript code detects when the user has scrolled to the bottom of the page.
1. An API call is made to the Unsplash API to fetch a new set of images.
1. The retrieved images are dynamically added to the existing list of images on the page.
1. The process continues as the user scrolls further, loading more images automatically.

### Technologies Used
* JavaScript: Used to handle the scroll events, make API calls, and manipulate the DOM.
* Unsplash API: An API provided by Unsplash, a popular image sharing platform, used to fetch the images.
* HTML: The structure of the web page.
* CSS: Styling and layout of the web page.

