Namaste React Course by Akshay Saini
#Chapter 02 - Igniting Our App

Ques1 : What is npm ?
npm is a package manager, an open source repository of tools where developers share and borrow packages to develop applications and websites. npm is a tool that uses to install packages. It manages all the packages and modules for node.js. npm consist of two things :

A repository for publishing the open-source projects : A digital storage and retrieval facility.
A Command-Line-Interface(CLI) for interacting with the repository :A tool to communicate with storage facility.
Ques2 : What is Parcel/Webpack ? why do we need it ?
Parcel/Webpack are the web application bundlers.It comes with many powerful features that helps you to minify,clean and make your code compact so that it becomes production -ready and easily loadable in the browser.

Ques3 : What is .parcel-cache ?
In the current version of parcel(V2).It stores the information about the project when parcel builds it,so when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch.It is the key reason why parcel can be so fast in development mode.

Ques4 : What is npx ?
npx is npm package runner that is used to excute the command without without installing the package. When you run a package using npx, it searches for the package in the local & global registry, & then it runs the package. If the package is not installed, npx will download the package files & installs the package automatically,but it will only cache the file instead of saving it. Examples :-

npx parcel index.html = npx searches for parcel package in your environment & if not found,downloads it & then runs the command.(with index.html as entry point. you can remove index.html and put it in the source of package.json as well)
npx create-react-app my-app = It searches for parcel packages in your environment & if not found,downloads it & then creates my-app using create-react-app in current project directory.
Ques5 : What is the difference between dependencies and devDependencies ?
Dependencies - Packages required by your application in production environment. Command - npm install Eg:- React,React-Dom,Redux,babel etc

devDependencies - Packages that are only needed during development. Command - npm install -D Eg:- Parcel To save a dependency as a devDependency on installation we need to do,

npm install --save-dev
instead of just,

npm install --save
Ques6 : What is Tree Shaking ?
It is a term commonly used with JS context to describe the removal of dead code. It relies on the import and export statements to detect if code modules are exported & imported for use between JS files. In modern JS applications, we use bundlers(webpack or rollup)to automatically remove dead code when bundling multiple JS files into single files.This is important for preparing code that is production ready,for example with clean structures and minimal file size.

Ques7 : What is Hot Module Replacement ?
During development we make hundreds of changes,& most of the time we need those changes visible in the browser instantly. Hot Module Replacement(HMR)instead of reloading the whole application when it detects a change,it only replaces the modules that have been changed without reloading the application or refereshing the browser. This can significantly speed up the development as :-

It saves up development time by only updating what has changed.
It retains the state of the application which is normally lost during a full reload.
HMR is a Webpack feature,which provides two components to make HMR possible.

HMR Runtime.
HMR Server(included in webpack-dev-server as middleware).
Ques8 : List down your favourite superpowers of Parcel & describe 3 of them in your won words.
Minification : Parcel includes minifiers for Js,CSS,HTML and SVG out of the box. Minification reduces the file size of your output bundlers by removing whitespace,renaming variables to shorter names, & many other optimizations.

Image Optimizations : Reduces the size of image without affecting their quality.

Compression(Renaming variables)

Cleaning our Code

Super Fast Build

Dev Server : Parcel's builtin dev server is automatically started when you run the default parcel command,which is a shortcut for parcel server.By default, it starts a server at http://localhost:1234.

Caching : Parcel caches everything it builds to disk.If you restart the dev server,Parcel will only rebulid files that have changed since the last time it ran.So Parcel automatically tracks all the files,configuration,plugins & dev dependencies that are involved in your build & gradually invalidates the cache when something changes.

Hot reloading : when we change something on our code that parcel automatically rebuilds the changes without reloading or refreshing the browser.

Tree Shaking : In production builds, parcel statically analyzes the imports & exports of each module, & removes the unwanted code that isn't used. This is called Tree Shaking or " removal of dead code ".

Zero configuration

File watcher : Using this watcher Parcel watches every file in your project root(including all the node-modules). Based on events & metadata from these files,parcel determines which files need to be rebuilt.

installation commands:
Install:
npm install -D parcel
-D is used for development and as a development dependency.

Parcel Commands :
For development build:
npx parcel <entry_point> 
For production build :
npx parcel build <entry_point> 
Ques9 : What is .gitignore? What should we add and not add into it?
The .gitignore file is a text file that tells Git which files or folders to ignore in a project during commit to the repository. The types of files you should consider adding to a .gitignore file are any files that do not need to get committed. for example, For security, the security key files and API keys should get added to the gitignore. package-lock.json should not add into your .gitignore file. The entries in this file can also follow a matching pattern.

* is used as a wildcard match
/ is used to ignore pathnames relative to the .gitignore file
# is used to add comments to a .gitignore file
This is an example of what the .gitignore file could look like:

# Ignore Mac system files
.DS_store

# Ignore node_modules folder
node_modules

# Ignore all text files
*.txt

# Ignore files related to API keys
.env

# Ignore SASS config files
.sass-cache
Ques10 : What is the difference between package.json & package-lock.json ?
"package.json" - It is a JSON file that lives in the root directory of your project.'package.json' holds important information about the project. It contains human-readable metadata about the project(project name & description) as well as functional metadata like the package version number & a list of dependencies required by the application. This file is created as soon as npm init command is fired. This file must not be put in .gitignore file. ^ or ~ can be used in version of dependencies in package.json.

"package-lock.json" - It automatically generated when npm modifies either node_modules tree or package.json.It ensures that your project uses the exact version of its dependencies. It contains nested/transitive dependencies(dependencies of dependencies). This file should no be added to .gitignore file.

Ques11 : Why should I not modify package-lock.json ?
As the name suggests, it locks the package-lock.json file, since it contains sensitive data which are not indeed to modify. As it contains the entire tree of dependencies, modifying any of the entries which might have a dependency to that entry might get affected. This will cause inconsistency in the project.

Ques12 : what is node_module ? Is it good idea to push that on git ?
node_modules folder like a cache for the external modules that your project depends upon. When you npm install them, they are downloaded from the web and copied into the node_modules folder and Nodejs is trained to look for them there when you import them (without a specific path). Don't push node_modulesin github because it contains lots of files(more than 100 MB), it will cost you memory space.

Ques13 : What is dist folder ?
The /dist stands for distributable. The /dist folder contains the minimized version of the source code. The code which in present in /dist folder is actually the code which is used on production web applications. Along with the minified code,the /dist folder also comprises of all the compiled modules that may or may not be used with other system.

Ques14 : What is browserlists.
The browserlist field in package.json can be used to specify which browser/node.js version the application supports. The value of this object can be an array of statistics (% coverage),last version, node.js version,browser version or even unreleased versions. "browserlist" : ["last 2 versions", "> 1%", "not dead"];

Ques15 : Read about - (^)Caret & (~)Tilda.
In our pacakge.json, we can see the NPM version using three dots separated numbers the first number from the left shows the major release, the second number from left shows the minor release & the third number shows the patch release of the package. Syntax : Major.Minor.Patch

Tilde (~) notation : It is used to match the most recent patch version. Tilde ~ notation freezes the major version and minor version.AS we know patch updates are the bug fixes that's why we can say ~notation allows us to automatically accept bug fixes. Example:- The ~1.2.0 will update all the future patch udates. We have to write just ~1.2.0 & all the next patch update dependencies.For eg ,1.2.0, 1.2.1, 1.2.3, ......etc

Caret (^) notation : It is usedfor automatically updating the minor updates along with patch updates. Example:- The ^1.2.4 will update all the future minor & patch updates, for example, ^1.2.4 will automatically change the dependency to 1.x.x if any updates occurs.

Ques16 : Read about Script types in html(MDN Docs).
type attribute of the <script> tag indicates the type of script.Until HTML 4, type is a required attribute. The value of type can be any of the following :

<script type="" src="app.js"></script>
In HTML5, type attribute is not mandatory. If type attribute is not present(default), or an empty string (type="") or javascript MIME type (text/javascript or application/ecmascript), it is treated as classic "javascript" file.

<script type="module" src="app.js"></script>
If the type attribute is set module, then the code in that js file is treated as module.

<script type="importmap" src="app.js"></script>
If the type attribute is set importmap, the body of teh element contains importmap ie an JSON object using which the browser can resolve the module specifiers while importing modules.

<script type="{$anyothervalue}" src="app.js"></script>
If the type attribute contains anyother value, then the code is treated as data block and will not be processed by the browser. A valid MIME type other than Javascript MIME type (Eg: image/png or text/css) must be mentioned. All the other attributes for this type will be ignored even the src attribute