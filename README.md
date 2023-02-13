
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)

---

![logo](src/assets/logo.svg)
This project was bootstrapped with Create React App.

## Presentation

SportSee project is an application for sportive people that want to follow their daily progress through analytics dashboard.

## Prerequisites

Run the npm command will allow you to install the dependencies
npm install

- [NodeJS](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)
- [Yarn](https://yarnpkg.com/)
- [REACT](https://en.reactjs.org/)

  is recommanded to run charts correctly

- [Recharts](https://www.npmjs.com/package/recharts)
- [VsCode](https://code.visualstudio.com/download)

## Installing the app

- Clone the repo on your computer.
```bash
clone the repository : https://github.com/azizahamime/sportsee.git
```

- Package installations after cloning.
```bash
# with NPM
npm install
# with Yarn
yarn
```

- Start the application
```bash
npm run start
# or
npm start
# with Yarn
yarn start
```

- The jsodc documentation was generated by:
```bash
npm run docs
```
you can see it at directory "/docs" ,open the file "index.html" to see the full documentation about the web app. 

###  Scripts
    :One: `npm start` :command will allow you to run the application on http://localhost:8081

    The Web App calls the api on port 3000 (http://localhost:3000). Ensure the api is running by following this link: [run backend api](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard#22-launching-the-project).

    :Two: 'npm run mirage' : command will allow you to run the application on: http://localhost:8082/ and the web app calls the mocked api, we can change datas on "src/Data.js" to see the difference. 

### Test
    Once app is launched go to "profile" to see dashboards.
    you can change the userId (change number 12 by 20 (if you run the mocked api) else change the number 12 by 18 into the URL) to display other profiles saved in data base.

 




