---
sidebar_position: 2
title: Development Workflow
---

# Development workflow

To get started with the project, run `yarn` in the root directory to install the required dependencies.

> The tooling has been built around [`yarn`](https://classic.yarnpkg.com/), so you'll have an easier time if you use `yarn` for development.

While developing, you can run the example app in `/example/` directory to test your changes. Any changes you make in your library's JavaScript code will be automatically reflected in the example app.

To run the example app run:

```sh
yarn example ios
```

or

```sh
yarn example android
```

Make sure your code passes TypeScript and ESLint. Run the following to verify:

```sh
yarn typescript
yarn lint
```

### Commit message convention

Please follow the [conventional commits specification](https://www.conventionalcommits.org/en) for commit messages:

- `fix`: bug fixes, e.g. fix crash due to deprecated method.
- `feat`: new features, e.g. add new method to the module.
- `refactor`: code refactor, e.g. migrate from class components to hooks.
- `docs`: changes into documentation, e.g. add usage example for the module.
- `test`: adding or updating tests, e.g. add integration tests using detox.
- `chore`: tooling changes, e.g. change CI config.

The pre-commit hooks verify that your commit message matches this format when committing.

### Sending a pull request

When you're sending a pull request:

- Prefer small pull requests focused on one change.
- Verify that linters and tests are passing.
- Review the documentation to make sure it looks good.
- Follow the pull request template when opening a pull request.
- For pull requests that change the API or implementation, please discuss with maintainers first by opening an issue.
