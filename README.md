# Mono-Repo

Idea of the mono-repo is to combine all development work for websites, apis and assets into a single repo to share resources and help keep identity assets inline with each other.

## Targeted Browsers

- Edge
- Chrome
- Safari
- Firefox

## Contributing

When contributing to the mono repo, please follow best coding practices and standards. Please limit the amount of `callback` and `waterfall` programing and work with `RxJs`.

Please document your code using `JsDoc` format.

- [Coding Standards and Best Practices](https://docs.microsoft.com/en-us/dotnet/visual-basic/programming-guide/program-structure/naming-conventions)
- [ES6 Arrow Functions & Lexical `this`](https://hackernoon.com/javascript-es6-arrow-functions-and-lexical-this-f2a3e2a5e8c4)
- [JsDoc](http://usejsdoc.org/)
- [GitFlow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)

## Release + Versioning

Cut a release branch off of develop with the name following the format `release/[PROJECT]/vx.x.yymms-rcx`.
Project is a simple name for the project.

The versioning follows `[MAJOR].[MINOR].[YEAR][MONTH][SPRINT_NUMBER]-rc[RELEASE_CANDIDATE]`.

Release Candidates start with 1 and increment whenever a patch is loaded to production.

Update necessary `package.json` files with the proper release versions and commit to new branch.
Merge release branch into `master` and tag the branch.
Master is then merged down into `develop` to update develop with new versions and patches.

## Resources

### Development

- [ReactJs](https://reactjs.org/docs/getting-started.html)
- [TypeScript](http://www.typescriptlang.org/docs/home.html)
- [RxJs](https://github.com/Reactive-Extensions/RxJS/tree/master/doc)

### Styles (Scss)

- [Scss](https://sass-lang.com/documentation/file.SASS_REFERENCE.html)

### Testing

- [Jasmine Testing](https://jasmine.github.io/)
- [Karma JavaScript Runner](http://karma-runner.github.io/3.0/index.html)
- [Compdoc](https://github.com/compodoc/compodoc)

### Linting

- [Prittier](https://prettier.io/)
- [TsLint](https://palantir.github.io/tslint/rules/)
- [Codelyzer](http://codelyzer.com/rules/)

### Deployment

- [Docker](https://www.docker.com/)
- [GitLab](https://docs.gitlab.com/ee/ci/yaml/README.html)

# Getting Started

## Folder Structure

The shopping cart has been divided into three folders. `./database` is the actual database, it is running MariaDB, for assessment the database files have been uploaded to GitHub. `./nodejs` runs the backend, it is running on Express + NodeJs + NestJs, for assessment all files are compiled to the dist folder and uploaded to git. `./reactjs` runs the frontend, it is running on ReactJs + Redux + RxJS, for assessment all files are compiled to the dist folder and uploaded to git.

## Install Dependencies

To install all dependencies and run full end-to-end, four `npm install` needs to be performed. 1 in the root folder to install `Prittier` in the entire repo. CD into the individual folders and run `npm install` again to install the individual dependencies for each layer of the application.

## Running Individual Layers

Each individual layer can be ran with `npm run start` in individual terminals. This allows for more rapid local development

## Bundling Individual Layers

The frontend and backend can be built with `npm run build`. This will bundle the files to corresponding `build` and `dist` folders

NodeJs is bundled to `nodejs/dist` folder. Docker container will perform a production installation of node package required by the application.
Ng is bundled to `apps/site/dist/browser` folder. As a client bundle no node packages are required for deployment.

# NOTES TO HIRING MANAGER

## Running

Simply run the command `docker-compose up` or `npm run start` from the root folder. Command will run a `docker-compose.yml` file initializing 3 images; one for MyriaDb, one for the backend Node server, and one running nginx serving up the files for the front end.

Database credentials can be found in `databases/docker-compose.yml` and `nodejs/env/.env.local` and can be access via MySql Workbench or similar applications.

Once all containers are running and database is initialized; `mygear_mariadb_b | [TIMESTAMP] 0 [Note] mysqld: ready for connections.`, simply point your web browser to `http://localhost/`.
