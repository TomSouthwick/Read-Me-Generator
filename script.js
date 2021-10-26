var inquirer = require("inquirer");
const apacheLicense = `Copyright [yyyy] [name of copyright owner]

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.`;
const mitLicense = `Copyright <yyyy> <COPYRIGHT HOLDER>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

`;

inquirer
  .prompt([
    { name: "Title", message: "What is the title of your project?" },
    {
      name: "Description",
      message: "What is the Description of your project?",
    },
    {
      name: "Installation",
      message:
        "What code is required to run? Are there any other installation requirements?",
    },
    {
      name: "Usage",
      message: "How does an individual use your code?",
    },

    {
      name: "Contributing",
      message: "Who contributed to the Project? any Acknowledgements?",
    },
    {
      name: "Tests",
      message:
        "What testing has been setup in order to best vet the code for bugs?",
    },
    {
      name: "License",
      type: "list",
      choices: ["MIT License", "Apache 2.0 License"],
      message: "What code is required to run ",
    },
  ])
  .then((answers) => {
    let markdown = `#${answers["Title"]}

---

# Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contributing](#contributing)
5. [Test](#test)
6. [License](#license)

# Description

${answers["Description"]}

---
# Installation

\`${answers["Installation"]}\`

---
# Usage

${answers["Usage"]}

---
# Contributing

${answers["Contributing"]}

---
# Test

${answers["Test"]}

---
# License

${answers["License"]}

---`;

    console.log(markdown);

    if (answers["License"] === "MIT License") {
      markdown += mitLicense;
    } else if (answers["License"] === "Apache 2.0 License") {
      markdown += apacheLicense;
    }

    fs = require("fs");
    fs.writeFile("readme.md", markdown, function (err) {
      if (err) return console.log(err);
    });
  })
  .catch((error) => {
    console.log(error);
  });
