# Idea Backlog

## Refresh Spell Check ✔

[add command to refresh external dictionary contents #509](https://github.com/streetsidesoftware/vscode-spell-checker/issues/509)

## Remove Duplicate Lines ✔

Just like [In Excel](https://support.microsoft.com/en-us/office/find-and-remove-duplicates-00e35bea-b46a-4d5d-b28e-66a552dc138d)


## Fix Bare URLs

* `https://github.directory/api/ping?q=kyle` -> `[github.directory/api/ping?q=kyle](https://github.directory/api/ping?q=kyle)`
* `https://github.directory/api/ping?q=kyle` -> `<https://github.directory/api/ping?q=kyle>`


## Convert Inline Links to Reference Links

* [Convert markdown links from inline to reference](https://stackoverflow.com/q/30917399/1366033)
* [Convert markdown links to html with Pandoc](https://stackoverflow.com/q/40993488/1366033)
* [convert duplicate links to references in markdown](https://stackoverflow.com/q/61067730/1366033)
* [Convert markdown inline links to reference style links with Pandoc](https://raymii.org/s/articles/Convert_markdown_inline_links_to_reference_style_links_with_Pandoc.html)
* [Basic Syntax | Markdown Guide](https://www.markdownguide.org/basic-syntax/#links)

## Convert Stack Overflow Link to Share link

**From**: `https://stackoverflow.com/questions/30917399/convert-markdown-links-from-inline-to-reference`
**To**:   `https://stackoverflow.com/q/30917399/1366033`

## Download Remote Images

**From**: `Posts/file-name.md` > ![image Desc](https://imgur.com/asef.png)
**To**: `Assets/Posts/File-Name/image-desc.png`


## Add Images from folder

* Drag and Drop onto MD?

**From**: file: `lb-prod.png`
**To**: `[lb prod](/assets/images/lb-prod.png)`


## Close all Working Tree Files

> [Command to Close All working-tree files](https://github.com/microsoft/vscode/issues/81067)

* [For VS Code what is the accepted alternative to the deprecated TextEditor.hide() function?](https://stackoverflow.com/q/47730015/1366033)
  * [Programmatically closing textDocuments in VSCode](https://github.com/microsoft/vscode/issues/39214)
* [How do I search open editors for a file with a given extension?](https://stackoverflow.com/q/55659228/1366033)
  * [API Access to "Open Editors"](https://github.com/microsoft/vscode/issues/15178)

* (Untracked) / (Index) / (Working Tree)

## Eleventy Debug Configuration Template

[API > Debugger](https://code.visualstudio.com/api/extension-guides/debugger-extension#anatomy-of-the-package.json-of-a-debugger-extension)

```json
{
    "type": "node",
    "request": "launch",
    "name": "Launch 11ty",
    "program": "${workspaceFolder}/node_modules/@11ty/eleventy/cmd.js",
    "args": [],
    "runtimeArgs": [
        "--preserve-symlinks"
    ]
},
```


## Inline Link Title

Raw link to markdown link

**FROM**: `https://github.com/microsoft/vscode/issues/20837`
**TO**:   `[copy/paste with another theme · Issue #20837 · microsoft/vscode](https://github.com/microsoft/vscode/issues/20837)`


## Snippets

* Wrap KBD Text
* Disable Spellcheck
* Disable Markdown

## Copy with Theme

[copy/paste with another theme #20837](https://github.com/microsoft/vscode/issues/20837)

`editor.copyWithSyntaxHighlighting`

[Copy with syntax highlighting](https://code.visualstudio.com/updates/v1_10#_copy-with-syntax-highlighting) in v1.10 (Feb 2017)

**Prior Art**: [atian25/vscode-copy-syntax](https://github.com/atian25/vscode-copy-syntax)

## Add Enablement / Where Clause Checks

* Remove Duplicates should only be available when text selected
* Refresh Spell check should only be available if [**Code Spell Checker**](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) is installed

## Covert Markdown - Indented -> Fenced Code Block


From:

~~~md
<!-- language: lang-vb -->

    Dim name = "Kyle"
~~~

To:

~~~md
```vb
Dim name = "Kyle"
```
~~~

## Convert Markdown - Setext -> Atx Headers

From:

```md
Intro
------
```

To:

```md
# Intro
```

## Setup Github Workflows

## Setup Tests

