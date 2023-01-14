export const quesAnsData = [
  {
    quesAnsId: 1,
    question: "What is Emmet?",
    answer:
      "Emmet is a plugin for text editors that allows for the rapid creation of HTML and CSS code using a shorthand syntax. It can also be used with other languages that use HTML-like syntax such as XML or JSX. It can be used to write code faster, and more consistent by using abbreviations that expand into full code.",
  },
  {
    quesAnsId: 2,
    question: "Difference between a Library and Framework?",
    answer:
      "A library is a collection of pre-written code that can be used to perform specific tasks, such as reading and writing files or connecting to a database. A framework, on the other hand, is a more comprehensive set of tools that provides a structure for developing a particular type of application, such as a web application or a desktop application. A framework defines how the code should be organized and how the different components of the application should interact, whereas a library simply provides a set of pre-written functions that can be called upon as needed.",
  },
  {
    quesAnsId: 3,
    question: "What is CDN? Why do we use it?",
    answer: `A Content Delivery Network (CDN) is a system of distributed servers that deliver web content to users based on their geographic location. The goal of a CDN is to provide faster delivery of content to users by caching a copy of the content on servers that are closer to the user. This reduces the time it takes for the content to travel over the internet and improves the overall performance of the website. CDN's are used to improve the performance and availability of websites, applications and APIs. CDN's are used to cache and distribute the static assets of a website such as images, videos, javascript and css files. This way, the load on the origin server is reduced and the site loads faster for users as the assets are delivered from a server that is geographically closer to the user. CDNs also provide protection against DDoS attacks and other forms of web traffic abuse. Additionally, CDNs can also provide benefits such as SSL termination, caching, request collapsing and compression, which could improve your website performance, security, and SEO.`,
  },
  {
    quesAnsId: 4,
    question: "Why is React known as React?",
    answer: `React is known as React because it was developed and is maintained by Facebook, and the name "React" is an abbreviation of "Responsive and efficient User Interface." It is a JavaScript library that is used for building user interfaces specifically for single-page applications. It allows developers to build reusable UI components and manage the state of their application in an efficient way.`,
  },
  {
    quesAnsId: 5,
    question: "What is crossorigin in script tag?",
    answer: `The "crossorigin" attribute in a script tag is used to indicate whether or not the script should be loaded using CORS (Cross-Origin Resource Sharing). CORS is a security feature that allows a web page to make requests to a different domain than the one that served the web page. When a script tag includes the "crossorigin" attribute with a value of "anonymous", it indicates that the script should be loaded using CORS, but that no credentials (such as cookies or HTTP authentication) should be sent along with the request. This is useful when the script is hosted on a different domain, but doesn't require any authentication. If "crossorigin" attribute is not used, the browser will assume that the script should be loaded without CORS, and will not include any CORS headers in the request to the server. It's worth noting that, the "crossorigin" attribute is only used when the script is loaded from a different origin (domain) than the page that's using it, if the script is hosted on the same origin, the attribute will be ignored.`,
  },
  {
    quesAnsId: 6,
    question: "What is difference between React and ReactDOM?",
    answer: `React is a JavaScript library for building user interfaces, while ReactDOM is a package that allows React to interact with the DOM (Document Object Model) to update and render components on a web page. In other words, React is a library for building UI components, and ReactDOM is a library that helps React interact with the DOM. In most cases, React developers will use both React and ReactDOM together to build web applications.`,
  },
  {
    quesAnsId: 7,
    question:
      "What is difference between react.development.js and react.production.js files via CDN?",
    answer: `The react.development.js and react.production.js files are different versions of the React library that are optimized for different environments. The react.development.js file is a development version of React that is intended to be used during the development process. It includes extra features such as helpful error messages and additional warnings to assist developers in debugging and identifying issues. The react.production.js file is a production version of React that is optimized for performance and size. It does not include the extra features and warnings found in the development version. It is intended to be used in a production environment, where performance and size optimization is more important than debugging. You can include React in your project by using a Content Delivery Network (CDN) such as unpkg, it serves development version by default, but you can specify version like react.production.min.js. It is important to note that you should use the development version of React while you are working on your project, and switch to the production version when you are ready to deploy your app.`,
  },
  {
    quesAnsId: 8,
    question: "What is async and defer?",
    answer: `async and defer are two attributes that can be added to the <script> tag in HTML. async tells the browser to load the script asynchronously, which means that it will not block the loading of the rest of the page while the script is being loaded. This can speed up the overall loading time of the page, but it also means that the script may not be executed in the order that it appears in the HTML. defer tells the browser to load the script after the page has finished parsing, but before it fires the 'load' event. This also means that the script will be executed in the order it appears in the HTML. Use async if the script is independent and does not rely on other scripts or the page content. Use defer when you have a script that depends on other scripts.`,
  },
];
