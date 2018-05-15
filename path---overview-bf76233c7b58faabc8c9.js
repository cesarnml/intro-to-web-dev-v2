webpackJsonp([0xa93c0e12c0aa],{478:function(e,t){e.exports={data:{markdownRemark:{html:'<p>A big part of what\'s hard up front is all the terminology people throw around when talking about programming and web development. Some of it is unavoidable due to this being a separate field of thought, study, and practice, and then some of it just people inflating their egos by using esoteric and/or academic terms to describe something that could be described in much simpler terms. Some of these words you really need to know (like HTML tags, functions, scope) and some you can just ignore (like monads and functors.) We\'ll try to differentiate that for you. But if there\'s a word you keep seeing here often or hear often in context of what you\'re studying, it\'s probably a good time to go look it up and get a good grasp on it.</p>\n<p>Let\'s fundamentally define what you\'re going to be learning in this course.</p>\n<p>You will learn everything you need to know to create your own website, from back to front. In order to do this, you will have to learn several "languages." I put languages in quotes because not all of these are technically languages but it\'s a good approximation for now. For now we\'re calling them languages. The three languages you are going to learn are HTML, CSS, and JavaScript. We will also be using some other tools like the command line and git but we\'ll get there too.</p>\n<h2 id="the-house"><a href="#the-house" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>The House</h2>\n<p>Why do you need three languages? Let\'s make the imperfect metaphor of building a house. To build a house you need tools (like your text editor, your browser, your command line.) After you have tools, you need all the building material: the 2x4s, the shingles, the dry wall, the windows: all the things you need to put together to make a house. This is the HTML, or hypertext markup langauge. However this house thus far isn\'t going to be very pretty to look and not very functional. It\'s not going to have any color or any sort of elaborate structures. It\'s going to be bland, inert, and boring. Likewise, you can a website that\'s <em>just</em> HTML but it\'s going to be a black-and-white text document with no style or interactivity.</p>\n<p>In order to arrange, style, and generally make this house more useful, you\'re going to have some blueprints. In an overly-reductive way, you could think of the blueprints as being a set of rules: this 2x4 goes here, that shingling goes on the roof, this particular wall be blue, and this window goes here. You define a bunch of rules that dictates that if some item matches this condition, then some rule is applied to it. If it is a 9x15 wall, it goes on the south side of the house. This is the CSS of your house, or the cascading style sheets. CSS is a series of rules that define that if you are an HTML thing that matches this condition, then apply some style to it. If you are the first paragraph in an article, your font size is 25px and your font color is blue.</p>\n<p>Okay, so now we have a well arranged and nice looking house. Now, being the modern age and me wanting all the gadgets, I want to install a whole slew of smart home devices. I want it so when I pull in the driveway with my smart-enabled car that the garage door opens, the lights turn on, the thermostat turns on the heat, the TV is set to continue my favorite TV show, and the smart cooker begins cooking dinner. I am adding behavior to my house; I am adding a layer of programming on top of what exists. This is like frontend, or client-side, JavaScript. It\'s adding a layer of behavior on top of your website. Do you want to pop up a message if a user clicks a button? Do you want to refresh the stock-ticker on the page so it\'s accurate? Do you want to change the picture that\'s showing on your page every few seconds? These are things you\'d typically do with JavaScript. And like all the smart home devices, having JavaScript on your page isn\'t always necessary. These website, for example, wouldn\'t need any JavaScript whatsoever because it\'s just showing information and not really interactive (links are an HTML thing, you don\'t need JavaScript for them.) It does have JavaScript because it makes it easier for me but it\'d be easy to do with zero JavaScript.</p>\n<p>Now, if I want to order delivery to my house, I have to call someone else. Someone not at my house. I\'d use my smart assistant and ask them to call a pizza place and ask them to deliver pizza to my house. The pizza place in this example would be like a backend server. One pizza place can serve many houses, and it probably only does a few things (like make pizza, salad, drinks, etc.) and deliver that to all sorts of clients. The clients in this case could be different peoples\' computers, phones, smart assitants, smart watches, smart ovens, who knows!? So one server can service many clients. In this case we\'re just worried about people\'s browsers (like Chrome, Firefox, Edge, Safari, etc.) on their computers and phones. While the frontend code (the smart house stuff) is <em>always</em> in JavaScript, the backend code can be in any number of languages: Python, Ruby, JavaScript, Java, Go, C#, etc. Today we will only be using JavaScript on both the frontend and the backend so you don\'t have to learn two languages, but just know you <em>could</em> use a different language on the backend.</p>\n<p>To recap:</p>\n<ol>\n<li>The HTML is the structure. It\'s going to contain all the text, the various images tied to the text, and it will generally group things together. Just like the drywall in your house, HTML doesn\'t do anything other than exist. It relies on other things to do things for it and to it.</li>\n<li>The CSS is the blueprint. It\'s all the rules of what goes where, what color it is, what size it is, what font it is, what the decorative background images are, Like HTML, CSS doesn\'t <em>do</em> anything, it\'s just a set of rules that describe what things go where and how they look.</li>\n<li>The frontend / client JavaScript is the smart home. It\'s all the cool pre-programmed stuff you can tell your house to do. JavaScript is what can change the HTML and CSS to react to various stimuli.</li>\n<li>The backend code (we\'ll still use JavaScript) is the pizza place. It\'s a place where we can request things from and it will send back what we ask for. Or we can send things to it, like when you upload a new photo to your social media account. One server serves many clients, just like one pizza place serves many homes.</li>\n</ol>\n<h2 id="a-note-about-this-courses-website"><a href="#a-note-about-this-courses-website" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>A Note About This Course\'s Website</h2>\n<p>In this course you\'ll see two different types of code samples. This is specific to this website and not to the web at large. The first is when it has a light yellow background and only has one section, like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-htm"><code class="language-htm">&lt;h1&gt;This is a code example. It&#39;s not editable&lt;/h1&gt;</code></pre>\n      </div>\n<p>Then there are code samples like this that have white backgrounds and are in two pieces. These are editable and you can see the results instantly! Check it out:</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>This is a code example. It is editable!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>You\'ll see these throughout. If you see one that is editable, please play with it. You\'ll learn a lot by experimentation.</p>',frontmatter:{path:"/overview",title:"Overview of What You'll Be Learning In This Course",order:1}},allMarkdownRemark:{edges:[{node:{frontmatter:{order:0,path:"/intro",title:"Introduction to the Course"}}},{node:{frontmatter:{order:1,path:"/overview",title:"Overview of What You'll Be Learning In This Course"}}},{node:{frontmatter:{order:2,path:"/tools",title:"Tools"}}},{node:{frontmatter:{order:3,path:"/basic-html",title:"Basic HTML"}}},{node:{frontmatter:{order:4,path:"/html-next-steps",title:"HTML Next Steps"}}},{node:{frontmatter:{order:5,path:"/meta-html",title:"Meta HTML"}}},{node:{frontmatter:{order:6,path:"/basic-css",title:"Basic CSS"}}},{node:{frontmatter:{order:7,path:"/selectors",title:"CSS Selectors and the Cascade"}}},{node:{frontmatter:{order:8,path:"/layout-css",title:"Layout CSS"}}},{node:{frontmatter:{order:9,path:"/css-patterns",title:"Effective Patterns for Writing CSS"}}},{node:{frontmatter:{order:10,path:"/project-html-css",title:"Project: HTML & CSS"}}},{node:{frontmatter:{order:11,path:"/programming-fundamentals",title:"Programming Fundamentals"}}},{node:{frontmatter:{order:12,path:"/functions-and-scope",title:"Functions and Scope"}}},{node:{frontmatter:{order:13,path:"/objects-and-arrays",title:"Objects and Arrays"}}},{node:{frontmatter:{order:14,path:"/dom",title:"The DOM"}}},{node:{frontmatter:{order:15,path:"/js-project",title:"JavaScript, HTML, and CSS Project"}}},{node:{frontmatter:{order:16,path:"/ajax",title:"AJAX"}}},{node:{frontmatter:{order:17,path:"/libraries",title:"Integrating with Other People's Libraries"}}},{node:{frontmatter:{order:18,path:"/git-and-bash",title:"Git and Bash"}}},{node:{frontmatter:{order:19,path:"/node",title:"Node.js"}}},{node:{frontmatter:{order:20,path:"/deploying",title:"Deploying Your App"}}},{node:{frontmatter:{order:21,path:"/final-thoughts",title:"Final Thoughts"}}}]}},pathContext:{}}}});
//# sourceMappingURL=path---overview-bf76233c7b58faabc8c9.js.map