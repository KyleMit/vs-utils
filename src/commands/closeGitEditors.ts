import * as vscode from "vscode";

let closeGitEditors = vscode.commands.registerCommand(
  "vs-utils.closeGitEditors",
  async () => {
    let firstFileName;

    while (true) {
      let editor = vscode.window.activeTextEditor;
      let editorId = editor ? (editor as any).id : ""; // 'vs.editor.ICodeEditor:1,$model14'
      let match = /ICodeEditor:(\d+)/.exec(editorId);
      let codeEditorId = match ? match[1] : "0";

      // exit if we don't have an editor or back to original
      if (!editor || editor.document.fileName === firstFileName) {
        break;
      }

      // set first editor if not set
      if (!firstFileName && codeEditorId === "1") {
        firstFileName = editor?.document.fileName;
      }

      if (codeEditorId === "3") {
        await vscode.commands.executeCommand(
          "workbench.action.closeActiveEditor"
        );
      }

      // double pass after closing?
      await vscode.commands.executeCommand("workbench.action.nextEditor");

      // vscode.commands.executeCommand("workbench.action.closeActiveEditor");
      // vscode.commands.executeCommand("workbench.action.nextEditor");

      // stop when we hit first editor
    }

    // // Get the active text editor
    // let editor = vscode.window.activeTextEditor;

    // if (!editor) {
    //     vscode.window.showInformationMessage(`no active text editor`);
    //     return;
    // }

    // let document = editor.document;
    // let selection = editor.selection;

    // // Get the word within the selection
    // let selText = document.getText(selection);

    // let lines = selText.split('\n');
    // let dedupeLines = [...new Set(lines)];
    // let dedupeText = dedupeLines.join('\n');

    // editor.edit(editBuilder => {
    //     editBuilder.replace(selection, dedupeText);
    // });

    // // build message
    // let lineCount = lines.length;
    // let finalCount = dedupeLines.length;
    // let duplicateCount = lineCount - finalCount;
    // let pluralize = (count:Number, noun:String) => `${count} ${noun}${(count !== 1 ? "s" : "")}`;

    // let msg = `Removed ${pluralize(duplicateCount, "duplicate")} of ${pluralize(lineCount, "line")}`;

    // // Display a message box to the user
    // vscode.window.showInformationMessage(msg);
  }
);

export { closeGitEditors };
