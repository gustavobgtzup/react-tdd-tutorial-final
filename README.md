<p align="center">
	<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
		<img src="/docs/public/static/vite.svg" className="logo" alt="Vite logo" />
	</a>
	<a href="https://reactjs.org" target="_blank" rel="noreferrer">
		<img src="/docs/public/static/react.svg" className="logo react" alt="React logo" />
	</a>
</p>

<h1 align="center">React Vite Boilerplate</h1>

**React Vite Boilerplate**

# Technology stack
* [React](https://ru.reactjs.org/)
* [Vite](https://vitejs.dev/)
* [ESlint](https://eslint.org/)
* [Prettier](https://prettier.io/)

## Table of contents
1. [First start](#first-start)
2. [Formatting](#formatting)
3. [Git Workflow](#git-workflow)
4. [Design Patterns and Best Practices](#patterns)

# First start

You can use the default method for starting your project using [Node.JS and npm(yarn)](https://nodejs.org/en/)

1. If you do not have yarn installed, run
```bash
npm install -g yarn
```
2. Install dependencies
```bash
yarn
```

3. Start the project
```bash
yarn dev
```
The application is available on [http://localhost:5173](http://localhost:5173/)

# Formatting
Linters are to keep code clean. They prevent shitcode from getting into a repository.

### Using Code Formatting In The Right Way (Vscode)

To be able to use code formatting in the rigth way in this project, follow the next steps:

1. Install `eslint` and `prettier` plugins in vscode (make sure your vscode version is up-to-date).
2. Create a folder `.vscode` in the root of the project with a file `settings.json` inside of it: `mkdir -p ./.vscode && touch ./.vscode/settings.json`.
3. Add the following code inside of it:

```bash
{
    "editor.formatOnSave": false,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    }
}
```

\_Note: this is necessary to avoid that the standard vscode system apply the formatting, as eslint is linked to prettier it will format it for us instead.
--

# Git workflow

1. This repository should be spplited into master development, hotfix and feature branches
2. More detailed instructions for this git workflow can be found at: https://www.atlassian.com/br/git/tutorials/comparing-workflows/gitflow-workflow

# Patterns
As a good practice, throught the project we make use of patterns and good practices to garantee scalability and maintainability.

* [React Hooks: Compound Components](https://kentcdodds.com/blog/compound-components-with-react-hooks)
* [Composição vs Herança](https://pt-br.reactjs.org/docs/composition-vs-inheritance.html)
* [Applying SOLID To React](https://medium.com/docler-engineering/applying-solid-to-react-ca6d1ff926a4)