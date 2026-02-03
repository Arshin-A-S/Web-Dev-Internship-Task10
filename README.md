# Task 10: Consuming a Public API using Fetch
In this final task, I transformed the static portfolio into a dynamic application by integrating the REST Countries API. This involved mastering asynchronous JavaScript to pull real-time data from a third-party server without page reloads.

## Key Accomplishments
* Asynchronous Flow: Implemented the async/await pattern to manage non-blocking code execution. This ensures the UI remains responsive and fluid while waiting for network responses.

* The Fetch Protocol: Successfully utilized the fetch() API to perform GET requests, handling the two-step process of resolving a promise and parsing the resulting JSON data.

* Conditional UI Rendering: Built a robust rendering engine that updates the DOM only after data is successfully retrieved.

* Error Resilience: Implemented comprehensive error handling using try...catch blocks to capture network failures and "404 Not Found" responses, providing user-friendly feedback instead of silent failures.

* UX Enhancements:

  * Loading State: Added a visual "Loader" to inform the user that their request is being processed.
  
  * Data Formatting: Used JavaScript's .toLocaleString() method to format raw population numbers into a readable format (e.g., 1,000,000).
  
  * Event Handling: Added support for the "Enter" key to improve the search experience.
