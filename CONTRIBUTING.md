# Welcome to your VS Code Extension

If you're here, it means you're me or looking to help me - in either case - a warm hello 👋

This project was initially generated with `yo code` so look to there for some of the layout conventions

## File Structure

```none
vt-utils
├── .vscode/              # vs code editor configs
├── out/                  # typescript output
├── node_modules/         # created by npm install
├── images/               # images for reference in readme
├── src
│   ├── test/             # folder for mocha tests
│   └── extension.t       # entry point for extension
├── package.json          # manifest for extension
├── tsconfig.json         # compiler rules for typescript
├── .eslintrc.json        # style rules for js
├── .vscodeignore         # ignored files when packaging extension
├── .gitignore            # ignored files in git
├── LICENSE               # MIT license info
├── CHANGELOG.md          # release history
├── CONTRIBUTING.md       # info for local development
└── README.md             # overview of extension during installation
```

## Project Setup

Install node & npm, and setup project locally

```npm
npm install
```

## Run Project

* Press <kbd>F5</kbd> to open a new window with your extension loaded.
* Reload with <kbd>Ctrl</kbd> + <kbd>R</kbd> to reload your changes.


## Run tests

* Open the debug viewlet (`Ctrl+Shift+D` or `Cmd+Shift+D` on Mac) and from the launch configuration dropdown pick `Extension Tests`.
* Press `F5` to run the tests in a new window with your extension loaded.
* See the output of the test result in the debug console.
* Make changes to `src/test/suite/extension.test.ts` or create new test files inside the `test/suite` folder.
  * The provided test runner will only consider files matching the name pattern `**.test.ts`.
  * You can create folders inside the `test` folder to structure your tests any way you want.


## Publishing

```bash
npm install -g vsce
```

```bash
vsce login
vsce package
vsce publish minor
vsce publish
```

## Further Resources

* You can open the full set of our API when you open the file `node_modules/@types/vscode/index.d.ts`.
* Reduce the extension size and improve the startup time by [bundling your extension](https://code.visualstudio.com/api/working-with-extensions/bundling-extension).
* [Publish your extension](https://code.visualstudio.com/api/working-with-extensions/publishing-extension) on the VSCode extension marketplace.
* Automate builds by setting up [Continuous Integration](https://code.visualstudio.com/api/working-with-extensions/continuous-integration).
