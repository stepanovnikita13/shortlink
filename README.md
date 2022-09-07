<a name="readme-top"></a>
<div>
  <h3>Shortlink</h3>
  An app for minimize long link from any websites and for viewing statistics of clicks on links.
  <br />
  <br />
  <a href="https://stepanovnikita13.github.io/shortlink/">View Demo</a>
</div>
<br />
<br />

<details>
  <summary>Table of contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#build-with">Build with</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#usage">Installation</a></li>
        <ul>
           <li><a href="#github-repository">GitHub repository</a></li>
           <li><a href="#github-package">GitHub package</a></li>
           <li><a href="#docker">Docker repository</a></li>
        </ul>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## About The Project

### Build With

<ul>
  <li>React</li>
  <li>Redux-Toolkit</li>
  <li>Typescript</li>
  <li>Axios</li>
  <li>React Hook Form</li>
  <li>MUI</li>
</ul>
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

The project is based on <a href="https://nodejs.org/en/">`node v16.13.2`</a>\
You must also have installed 
<a href="https://git-scm.com/downloads" target="_blank" ><i>Git</i></a> or 
<a href="https://docs.docker.com/get-started/" target="_blank"><i>Docker</i></a> for copy app.

<!-- INSTALLATION -->
### Installation

You can start the project locally in many different ways.

<h4 name="github-repository">Clone GitHub repository</h4>

1. Open a terminal in the folder where the copy should be downloaded
2. Clone the repo
  ```sh
  git clone https://github.com/stepanovnikita13/shortlink.git
  ```
3. Install NPM packages
  ```sh
  npm install
  ```
4. And run application
  ```
  npm start
  ```

<br />
<h4 name="gitgub-package">GitHub package</h4>

1. Open a terminal
2. Install with command
  ```sh
  docker pull ghcr.io/stepanovnikita13/shortlink:latest
  ```
3. Start container
  ```sh
  docker run -d -p 3000:3000 --rm --name shortlink ghcr.io/stepanovnikita13/shortlink
  ```
4. Open <a href="http://localhost:3000" target="_blank">localhost</a> in browser

<br />
<h4 name="docker">Docker repository</h4>

1. Open a terminal
2. Install with command
  ```sh
  docker pull stepanovnikita13/shortlink
  ```
3. Start container
  ```sh
  docker run -d -p 3000:3000 --rm --name shortlink stepanovnikita13/shortlink
  ```
4. Open <a href="http://localhost:3000" target="_blank">localhost</a> in browser

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE -->
## Usage

In order to get a link, you need to follow these simple steps:
1. Paste the link into the input field on the main page
2. Click the _'squeeze'_ button
3. Click on the generated link to copy it

Also in the application it is possible to view statistics on the created links. In order to gain access, you must log in to your personal account. 
To do this, go to the authorization page _(сlick on the "login" link in the upper left corner)_. If you do not have an account, you will be prompted to register.

After successful authorization, you will have access to view statistics _(сlick on the "statistics" link in the upper left corner)_. Here you will see a table that has fields like:
<ul>
  <li>Target link - original long link</li>
  <li>Short link - minimized cool link</li>
  <li>Counter - shows how many times a short link was clicked</li>
</ul>

The table can be sorted as a whole, on the server side, or only the visible part for easier viewing. 
To sort the <b>entire table</b>, _click on the button in the upper right corner of the table_. 
To sort only the <b>visible part</b> of the table, _click on the column names_
It is possible to choose the number of displayed lines and there is a convenient switch between pages.
When you _click on a line, a short link will be copied_.

Good luck! :smile:


## Contact

Stepanov Nikita - stepanov.nikita13@gmail.com

Project Link: [https://github.com/stepanovnikita13](https://github.com/stepanovnikita13)
