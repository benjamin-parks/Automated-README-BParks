// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  let badge = "";
  if (data.repoLicense === "MIT") {
    badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
  } 
  else if (data.repoLicense === "Mozilla Public License 2.0") {
    badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]";
  } 
  else if (data.repoLicense === "Apache 2.0") {
    badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";
  } 
  else if (data.repoLicense === "GNU General Public 3.0") {
    badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
  } 
  else if (data.repoLicense === "BSD 2-Clause License") {
    badge = "[![License](https://img.shields.io/badge/License-BSD%202--Clause-blue.svg)]";
  } 
  else if (data.repoLicense === "BSD 3-Clause License") {
    badge = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]";
  } 
  else if (data.repoLicense === "Creative Commons Zero v1.0 Universal") {
    badge = "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)]";
  } 
  else if (data.repoLicense === "Eclipse Public License 2.0") {
    badge = "[![License](https://img.shields.io/badge/License-EPL%202.0-red.svg)]";
  } 
  else if (data.repoLicense === "GNU Affero General Public License v3.0") {
    badge = "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)]";
  } 
  else if (data.repoLicense === "GNU Lesser General Public License v2.1") {
    badge = "[![License: LGPL v2.1](https://img.shields.io/badge/License-LGPL%20v2.1-blue.svg)]";
  } 
  else if (data.repoLicense === "The Unlicense") {
    badge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]";
  }
  // Add more conditions for other licenses if needed
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  let link = ""
  if (data.repoLicense === "None"){
    link = "";
  }
  else if (data.repoLicense === "MIT"){
    link = "https://opensource.org/license/mit";
  }
  else if (data.repoLicense === "Mozilla Public License 2.0"){
    link = "https://www.mozilla.org/en-US/MPL/2.0/";
  }
  else if (data.repoLicense === "Apache 2.0"){
    link = "https://www.apache.org/licenses/LICENSE-2.0";
  }
  else if (data.repoLicense === "GNU General Public 3.0"){
    link = "https://www.gnu.org/licenses/gpl-3.0.en.html";
  }
  else if (data.repoLicense === "BSD-2 Clause Simplified"){
    link = "https://opensource.org/license/bsd-2-clause";
  }
  else if (data.repoLicense === "BSD-3 Clause 'new or revised'"){
    link = "https://choosealicense.com/licenses/bsd-3-clause/";
  }
  else if (data.repoLicense === "Boost Software License"){
    link = "https://www.boost.org/users/license.html";
  }
  else if (data.repoLicense === "Creative Commons Zero 1.0 Universal"){
    link = "https://creativecommons.org/publicdomain/zero/1.0/deed.en";
  }
  else if (data.repoLicense === "Eclipse Public License 2.0"){
    link = "https://www.eclipse.org/legal/epl-2.0/";
  }
  else if (data.repoLicense === "GNU Affero General Public License 3.0"){
    link = "https://www.gnu.org/licenses/agpl-3.0.en.html";
  }
  else if (data.repoLicense === "GNU General Public License v2.0"){
    link = "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html";
  }
  else if (data.repoLicense === "GNU Lesser General Public License V2.1"){
    link = "https://www.gnu.org/licenses/old-licenses/lgpl-2.1.en.html";
  }
  else{
    link = "https://choosealicense.com/licenses/unlicense/";
  }
  return link;
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  const badge = renderLicenseBadge(data);
  const link = renderLicenseLink(data);

  return `${badge} ${link}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseSection = renderLicenseSection(data);
  return `# ${data.repoName}

## Description
${data.repoDesc}

## Table of Contents
- [Description](#Description)
- [How to Install](#How-to-Install)
- [How to Use](#How-to-Use)
- [Repo License](#Repo-License)
- [Contributions](#Contributions)
- [Tests Required](#Tests-Required)
- [Questions/Contact Me](#questionscontact-me))


## How to Install
${data.repoInstall}

## How to Use
${data.repoUsage}

## Repo License
${licenseSection}

## Contributions
${data.repoContributions}

## Tests Required
${data.repoTests}

## Questions/Contact Me
For additional support, contact me with questions through either of the following: 
Github: https://github.com/${data.githubUser}
Email: ${data.email}`;
}

module.exports = {generateMarkdown, renderLicenseBadge, renderLicenseLink, renderLicenseSection}; 
