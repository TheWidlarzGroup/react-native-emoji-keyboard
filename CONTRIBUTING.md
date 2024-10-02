# Contributing

We want this community to be friendly and respectful to each other. Please follow it in all your interactions with the project.

## Translations
It would be great if you could contribute your translations! You can do it by following this steps
*You can use `en` everywhere as reference*

* Create language file in [translation directory](/src/translation/)
*For example `en.ts`*
* Create a translation object like in other languages
  * *remember to change object name per your language*
* Import and export this file in [index.tsx file](/src/index.tsx)
* Add a new language to documentation in [README.md file](/README.md#pre-defined)

## Development workflow

To get started with the project, run `yarn` in the root directory to install the required dependencies for each package:
> While it's possible to use [`npm`](https://github.com/npm/cli), the tooling is built around [`yarn`](https://classic.yarnpkg.com/), so you'll have an easier time if you use `yarn` for development.

While developing, you can run the [example app](/example/) to test your changes. Any changes you make in your library's JavaScript code will be reflected in the example app without a rebuild.

To run the example app run:

```sh
yarn example ios
or
yarn example android
```

Make sure your code passes TypeScript and ESLint. Run the following to verify:

```sh
yarn typescript
yarn lint
```

### Commit message convention

We follow the [conventional commits specification](https://www.conventionalcommits.org/en) for our commit messages:

- `fix`: bug fixes, e.g. fix crash due to deprecated method.
- `feat`: new features, e.g. add new method to the module.
- `refactor`: code refactor, e.g. migrate from class components to hooks.
- `docs`: changes into documentation, e.g. add usage example for the module..
- `test`: adding or updating tests, e.g. add integration tests using detox.
- `chore`: tooling changes, e.g. change CI config.

Our pre-commit hooks verify that your commit message matches this format when committing.

```sh
yarn release
```

### Sending a pull request

When you're sending a pull request:
- Prefer small pull requests focused on one change.
- Verify that linters and tests are passing.
- Review the documentation to make sure it looks good.
- Follow the pull request template when opening a pull request.
- For pull requests that change the API or implementation, discuss with maintainers first by opening an issue.
