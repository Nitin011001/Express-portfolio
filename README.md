# Express-portfolio

> This Express site must include the pages from  Personal Portfolio 4 pages –  Home page, an About Me page, a Projects page, and a Contact Me page.
> It is not hosted anywher Tried alot of time on heroku 

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Setup](#setup)
* [Usage](#usage)
* [Project Status](#project-status)
* [Acknowledgements](#acknowledgements)



## General Information
- Simple Portfolio with 4 pages
- About, Contact, Project Page



## Technologies Used
- Node.js
- Express
- Handle bars
- Tailwind Css
- Html


## Features
- About Page with Resume Structure
- Contact Forms to contact me
- Project page with demonstration link


## Setup
check out the package.json file and install all the devdependencies and install node, express, express-generator globally to not having the problem with anything

## Usage
`var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { info: 'Persnal Information' });
});
// Get handler to  /About
module.exports = router;`


## Project Status
Project is:  _complete_ 

## Acknowledgements
Give credit here.
- This project was inspired by https://github.com/developedbyed/react-portofolio-with-tailwind
- This project was based on https://www.youtube.com/watch?v=k-Pi5ZMxHWY
- Only TailWind Css not React 



