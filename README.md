<div><h1>Project Credle</h1> <span align="right"><a href="https://github.com/chuangyu-hscy/-/blob/main/README.md">EN</a> / <a href="https://github.com/chuangyu-hscy/-/blob/main/doc/README.CN.md">CN</a></span></div>

<hr />

## Summary

This project is a personal technology stacking station built by two people from scratch to demonstrate our understanding of CS, IT, and DS. Although we do not know what difficulties we will encounter, we will try our best to overcome them.

---

## Git Repository Links & Deployments

| Server | Working Branch | Deployment |
| ---- | ---- | ---- |
| Back-End | shorturl.at/pzBD9 | Pending |
| Front-End | shorturl.at/mowN8 | Pending |

Access project related documentations? Check [Notion!](shorturl.at/qBIJL)

## Table of Content
- [Summary Information](#summary)
- [Git Repository Links and Deployments](#git-repository-links-and-deployments)
- [Project Members](#project-members)
- [Project Structure](#project-structure)
- [Project Main Dependencies](#project-main-depedencies)
- [Quick Start Guide](#quick-start-guide)
- [License](#license)

---

## Project Members
**rNLKJA**: https://rin.contact/
**kwitter777***: https://github.com/kwitter777

## Project Structure
```
Project Back End
    |---- __test__      # store testing scripts
    |---- config        # store api configuration files
    |---- controller    # backend routes handler
    |---- data          # store local data for server
    |---- models        # store database schema | models
    |---- public        # store public files, e.g. images
            |---- css
            |---- views 
                    |---- error 
                    |---- index
    |---- routes        # defined backend REST access routes      
```

## Main Software Dependencies
<img src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/256/square_480/nodejslogo.png" width=40 height=40 align='left'> [Node.JS](https://nodejs.org/zh-cn/) 

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC3K-0hD8O4jYTq08n2QRjl5JCQaiVMXB5vHlxmDIfRE5e-vbD1bGg5GB5trDgEar29OU&usqp=CAU" alt="nodejs logo" width=100 height=40 align='left'> [Express.JS](https://expressjs.com/zh-cn/) 

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKqvvX_EDD6iSTNVOiisKFTnn1UbWaMlSkp9hkGCk0bCI5loN1X90PaF50415A1S_uAhE&usqp=CAU" alt="mongodb logo" width=40 height=40 align='left'> MongoDB 


<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" alt="typescript logo" width=40 height=40 align='left'> [TypeScript](https://www.typescriptlang.org/)

<br />
More dependency information please check `package.json`.

## Quick Start Guide
Before start the project, please make sure that all dependent files are installed in your local machine. Also, please make sure that `node` and `npm` are install on your local machine.

``` bash
# install dependency modules / apis
npm install # this command should automatically install or dependent modules based on package.json

# add new modules
npm install -g --save-dev [MODULE NAME]

# start development SERVER with nodemon package via the command
npm start

# if this approach failed, please check nodemon installation or use node instead
node app.ts
```

## License
```
MIT License

Copyright (c) 2022 rNLKJA, kwitter777

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify and/or sell merge and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
- no business use purpose unless guarantee by the project team.
- otherwise the software is free to change.

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
