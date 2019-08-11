# Key-Value Stores

This is the simplest form of organized, persistent data storage. It's mainly used for caching.

For example, when a user requests a specific web page to a server, the server must fetch the web page’s data from the database, and use it to render the HTML it will send to the user. In high-traffic websites, with thousands of concurrent accesses, doing that becomes impossible.

To solve this problem, we use a key-value store as a caching mechanism. The key is the requested URL, and the value is the final HTML of the corresponding web page. The next time someone asks for the same URL, the already generated HTML is simply retrieved from the key-value store using the URL as key.
