(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{263:function(e,t,r){"use strict";r.r(t);var n=r(0),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"getting-started"}},[e._v("Getting Started")]),e._v(" "),r("p",[e._v("Since this is a template built upon "),r("a",{attrs:{href:"https://vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("VuePress"),r("OutboundLink")],1),e._v(", everything is wrapped up and it takes only 10 minutes to start.")]),e._v(" "),r("p",[r("strong",[e._v("As esasy as 1, 2, 3")])]),e._v(" "),r("h2",{attrs:{id:"prerequisites"}},[e._v("Prerequisites")]),e._v(" "),r("h3",{attrs:{id:"get-the-repo"}},[e._v("Get the repo")]),e._v(" "),r("p",[e._v("Download on GitHub: "),r("code",[e._v("Clone or download")]),e._v(" -> "),r("code",[e._v("Download ZIP")])]),e._v(" "),r("p",[e._v("or clone it")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("$ "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/mtobeiyf/vuepress-homepage\n")])])]),r("h3",{attrs:{id:"prepararation"}},[e._v("Prepararation")]),e._v(" "),r("ul",[r("li",[e._v("You should have "),r("a",{attrs:{href:"https://nodejs.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js"),r("OutboundLink")],1),r("strong",[e._v(">=8.0.0")]),e._v(" installed at first.")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://yarnpkg.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Yarn"),r("OutboundLink")],1),e._v(" is also needed for package management.")])]),e._v(" "),r("p",[e._v("You can check by running commands: "),r("code",[e._v("node --version")]),e._v(", "),r("code",[e._v("npm --version")]),e._v(" and "),r("code",[e._v("yarn --version")])]),e._v(" "),r("h2",{attrs:{id:"configure-and-run"}},[e._v("Configure and run")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Get into the directory")]),e._v("\n$ "),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" vuepress-homepage \n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Install dependencies")]),e._v("\n$ "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# or npm install")]),e._v("\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Run under developing")]),e._v("\n$ "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" run dev "),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# or npm run dev")]),e._v("\n")])])]),r("p",[e._v("Now open your favorite browser and go to "),r("code",[e._v("127.0.0.1:8080")]),e._v(", the demo is all set 😎")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://user-images.githubusercontent.com/5097752/39126631-798faf4a-4735-11e8-993d-6f314d4f2b55.png",alt:""}})]),e._v(" "),r("h2",{attrs:{id:"deploy"}},[e._v("Deploy")]),e._v(" "),r("p",[e._v("To generate your homepage as a static site, run:")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("$ "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" run build\n")])])]),r("p",[e._v("This will build your site under the "),r("code",[e._v("dist")]),e._v(" directory. Now you can deploy the files under "),r("code",[e._v("dist")]),e._v(" directory to any web hosts provider or your own server. If you got stuck, feel free to open an issue or search it on google.")]),e._v(" "),r("p",[e._v("There are several available free online hosts for you:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://pages.github.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub Pages"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.netlify.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Netlify"),r("OutboundLink")],1)])]),e._v(" "),r("p",[e._v("For more available instructions, have a look at the "),r("a",{attrs:{href:"https://vuepress.vuejs.org/guide/deploy.html#deploying",target:"_blank",rel:"noopener noreferrer"}},[e._v("Deploying"),r("OutboundLink")],1),e._v(" section.")]),e._v(" "),r("h3",{attrs:{id:"github-pages"}},[e._v("GitHub Pages")]),e._v(" "),r("p",[e._v("Create a repository, clone it to your local machine. And copy files in "),r("code",[e._v("dist")]),e._v(" to your local repository folder.")]),e._v(" "),r("p",[e._v("Push it to GitHub with "),r("a",{attrs:{href:"https://pages.github.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub Desktop"),r("OutboundLink")],1),e._v(" or command line and done.")]),e._v(" "),r("h3",{attrs:{id:"netlify"}},[e._v("Netlify")]),e._v(" "),r("p",[e._v("Simply rename and drag and drop your "),r("code",[e._v("dist")]),e._v(" directory to Netlify, follow the instruction and your site will all set up. Check the guide "),r("a",{attrs:{href:"https://vuepress.vuejs.org/guide/deploy.html#netlify",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("Also, you can create your own repository and copy all the files except "),r("code",[e._v(".git")]),e._v(" there. Therefore, your build command would be "),r("code",[e._v("yarn build")]),e._v(" and your public directory be "),r("code",[e._v("dist")]),e._v(". Fast and easy.")])])}),[],!1,null,null,null);t.default=o.exports}}]);