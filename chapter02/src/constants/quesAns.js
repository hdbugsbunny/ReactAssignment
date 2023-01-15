export const quesAnsData = [
  {
    quesAnsId: 1,
    question: "What is `NPM`?",
    answer:
      "NPM stands for Node Package Manager. It is a package manager for the JavaScript programming language. It is the default package manager for the JavaScript runtime environment Node.js. NPM allows developers to share and reuse code, and easily manage dependencies in their projects.",
  },
  {
    quesAnsId: 2,
    question: "What is `Parcel/Webpack`? Why do we need it?",
    answer:
      "Parcel and Webpack are both JavaScript bundlers. They are tools that take multiple JavaScript files and dependencies and bundle them into a single file (or a few files) that can be included in a web page. Webpack is a powerful and flexible bundler that can handle many types of assets, not just JavaScript. It also allows you to use a wide variety of plugins and loaders to customize the bundling process. Parcel, on the other hand, is a simpler and more beginner-friendly bundler. It requires less configuration and has a built-in development server and hot module replacement, making it easy to get started with. Both Parcel and Webpack are needed because they can help to optimize the performance of a web application by reducing the number of HTTP requests needed to load the application. They also allow for a more modular and organized codebase, and can improve the development experience by enabling hot-reloading and other features.",
  },
  {
    quesAnsId: 3,
    question: "What is `.parcel-cache`?",
    answer: `'.parcel-cache' is a directory that is created by the JavaScript bundler and development server Parcel, to store cached assets and information for faster rebuilds and development. It contains files such as JavaScript bundles, CSS stylesheets, and other assets that have been processed by Parcel. It is typically located in the root directory of a project using Parcel.`,
  },
  {
    quesAnsId: 4,
    question: "What is `npx`?",
    answer: `'npx' is a tool that is used to execute Node.js packages, which can be installed globally or locally. It is typically used to run command-line tools and scripts that are distributed as Node.js packages. The key difference between 'npx' and the standard 'npm' command is that 'npx' runs a package's executable, rather than installing it globally or locally, which means that you don't have to have the package installed on your system to use it, and you can use different versions of the same package in different projects.`,
  },
  {
    quesAnsId: 5,
    question: "What is difference between `dependencies` vs `devDependencies`?",
    answer: `In a Node.js project, dependencies are libraries that are required for the application to run, while devDependencies are libraries that are used during the development process, such as for building or testing the application. These libraries will not be needed at runtime and will not be included in the final package that is deployed.`,
  },
  {
    quesAnsId: 6,
    question: "What is Tree Shaking?",
    answer: `Tree shaking is a technique used by modern JavaScript bundlers such as webpack and Rollup to eliminate unused code from the final bundle. The idea behind tree shaking is that the bundler starts with the entry point of the application, and "shakes" the dependency tree by following the import statements, keeping track of the used exports and discarding the unused ones. This way, only the code that is actually being used by the application is included in the final bundle, resulting in smaller, more efficient code.`,
  },
  {
    quesAnsId: 7,
    question: "What is Hot Module Replacement?",
    answer: `Hot Module Replacement (HMR) is a feature that allows a developer to update parts of the application without having to refresh the entire page. This is particularly useful during development, as it allows developers to see the changes they made in the application immediately, without having to manually refresh the page or lose the application's state. HMR works by monitoring the files that are being updated and sending the updated module(s) to the browser, where it updates the corresponding part of the application. This way, the developer can continue working on the application without interruption, and see the changes in real time. Webpack is one of the popular module bundler which support HMR out of the box, it needs a plugin to enable it on other bundlers.`,
  },
  {
    quesAnsId: 8,
    question:
      "List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words?",
    answer: `Here are some popular features of Parcel: 1 - Automatic code splitting: Parcel can automatically split your code into smaller chunks, so that only the code needed for a specific page or component is loaded, which can improve load times. 2 - Hot module replacement: Parcel allows for real-time updates to your code without the need for a full page reload, which can speed up development and debugging. 3 - Transpiling and bundling: Parcel can automatically transpile and bundle your code, making it compatible with older browsers or JavaScript environments and reducing the number of requests needed to load your application. 4 - Built-in development server: Parcel has a built-in development server that can spin up your application locally, making it easy to test and debug without having to configure your own. 5 - Plug-in Support: Parcel have a support for lot of popular libraries and frameworks like React, Vue.js, Angular, etc. It makes it easy to get started with your preferred framework and provides a consistent development experience.`,
  },
  {
    quesAnsId: 9,
    question: "What is `.gitignore`? What should we add and not add into it?",
    answer: `.gitignore is a file that tells Git which files or directories to ignore when committing changes to a repository. It is typically used to exclude files that are specific to a particular environment or that contain sensitive information. It's common to add the following types of files and directories to .gitignore: 1 - Build artifacts: files and directories generated by a build process, such as dist/, build/, or target/. 2 - Dependencies: files and directories installed by package managers, such as node_modules/ or vendor/. 3 - Logs and temp files: files and directories created by the application or the operating system, such as logs/ or temp/. 4 - Configuration files: files and directories containing environment-specific configuration, such as .env or config/local.yml. 5 - Secret files: files and directories containing sensitive information, such as credentials or API keys. It's generally a good practice not to add the following types of files and directories to .gitignore: 1 - Source code: files and directories containing the source code of the application, such as src/ or lib/. 2 - Test files: files and directories containing the test code of the application, such as tests/ or spec/. 3 - Documentation: files and directories containing the documentation of the application, such as docs/ or README.md. 4 - Public files: files and directories that are intended to be publicly accessible, such as public/ or static/. It is also important to note that .gitignore is specific to your local machine and the ignore list will not be applied to others who clone the repository.`,
  },
  {
    quesAnsId: 10,
    question:
      "What is the difference between `package.json` and `package-lock.json`?",
    answer:
      "'package.json' is a file that contains metadata about the project, such as the project's name, version, and the dependencies it needs to run. It is used by the npm package manager to manage the project's dependencies. 'package-lock.json' is a file that is automatically generated when dependencies are added or updated in a project using npm. It locks the dependencies and their versions to the exact versions that were installed, ensuring that future installs of the project will use the same versions of the dependencies. This helps to ensure that the project is stable and reproducible.",
  },
  {
    quesAnsId: 11,
    question: "Why should I not modify `package-lock.json`?",
    answer:
      "It is not recommended to modify 'package-lock.json' manually because it is automatically generated by the npm package manager. Modifying it manually can cause inconsistencies between the versions of dependencies specified in 'package.json' and the versions that are actually installed. This can lead to unexpected behavior and potential errors in the project. If you want to update the version of a dependency, you should use npm commands like npm install or npm update to do so. These commands will update the dependency version in package.json, and automatically update 'package-lock.json' to match the new versions of dependencies. Additionally, modifying 'package-lock.json' can also cause conflicts with other developers working on the same project, if they are using different versions of dependencies. It's always a good practice to keep 'package-lock.json' untouched and let the package manager handle its updates and versioning.",
  },
  {
    quesAnsId: 12,
    question: "What is `node_modules`? Is it a good idea to push that on git?",
    answer:
      "'node_modules' is a directory that contains the packages (or modules) that are installed for a Node.js project. These packages are installed using the npm package manager, and they are typically listed in a project's 'package.json' file. It is generally not a good idea to push the 'node_modules' directory to a Git repository because it can quickly become very large and slow down the repository. Instead, it's common practice to include the 'package.json' file and a lock file (such as 'yarn.lock' or 'package-lock.json') in the repository, and then use npm or yarn to install the dependencies locally on each machine that needs to run the code.",
  },
  {
    quesAnsId: 13,
    question: "What is the `dist` folder?",
    answer: `The 'dist' folder, short for "distribution," is a directory that contains the files that are ready to be deployed to a production environment. These files are typically the result of a build process, where the source code is compiled, transpiled, and/or minified. The contents of the 'dist' folder will vary depending on the type of project and the build process used. For example, a JavaScript project might use a build tool like Webpack to bundle all of the project's dependencies into a single file and minify the code. The output of this build process would be placed in the 'dist' folder, and this is the file that would be deployed to a production environment. In general, it is recommended to not include the 'dist' folder in the version control system (such as git) as it is generated during the build process and is not necessary for development.`,
  },
  {
    quesAnsId: 14,
    question: "What is `browserslist`?",
    answer: `'browserslist' is a configuration file that is used to specify which browsers and versions a project should support. It is used by various tools such as Autoprefixer, Babel and others to determine which polyfills and other browser-specific code should be included in the final build. The 'browserslist' file is typically located in the root of a project and its content is a list of browser versions and ranges specified in a query format. The 'browserslist' file is used to ensure that the code is compatible with the browsers your users are using, and it will help to keep the size of the final build smaller by only including the polyfills and other browser-specific code that is actually needed.`,
  },
];
