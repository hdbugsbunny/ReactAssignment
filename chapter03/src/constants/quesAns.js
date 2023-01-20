export const quesAnsData = [
  {
    quesAnsId: 1,
    question: "What is JSX?",
    answer:
      "JSX is a syntax extension for JavaScript. It allows you to write HTML-like elements in your JavaScript code, and is commonly used in React and other JavaScript libraries for building user interfaces. It is transpiled by a transpiler like babel to regular javascript.",
  },
  {
    quesAnsId: 2,
    question: "Superpowers of JSX?",
    answer: `JSX has several benefits when used in building user interfaces:- 1.It makes the code more readable and easier to understand, as it closely resembles the structure of the final rendered HTML. 2.It allows for efficient and expressive componentization, making it easy to reuse and compose components. 3.It enables the use of JavaScript expressions within HTML, allowing for dynamic rendering of content. 4.JSX is type-safe, which helps to catch errors early in the development process. 5.It allows for easy integration with other libraries and frameworks, such as React. In summary, JSX simplifies the process of building user interfaces by allowing developers to write HTML-like elements in JavaScript, making the code more readable, expressive, and maintainable.`,
  },
  {
    quesAnsId: 3,
    question:
      "Role of `type` attribute in script tag? What options can I use there?",
    answer: `The 'type' attribute in a '<script>' tag is used to specify the type of script being used. The attribute is optional, but it is considered good practice to include it. The value of the 'type' attribute should be a string that specifies the language of the script, such as "text/javascript" for JavaScript or "text/python" for Python. If the 'type' attribute is not included, the browser will assume the script is written in JavaScript. Other values you can use for type:- 1.text/javascript 2.text/coffeescript 3.text/typescript 4.text/babel 5.text/ecmascript 6.text/jsx 7.text/flow 8.text/tsx 9.text/python 10.text/ruby 11.text/perl 12.text/php Note that not all browsers may support all the above types, so you may have to check browser compatibility before using a specific type.`,
  },
];
