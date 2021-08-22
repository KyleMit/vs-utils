import * as vscode from 'vscode';


let refreshCspell = vscode.commands.registerCommand('vs-utils.fixBareUrls', () => {

    // Get the active text editor
    let editor = vscode.window.activeTextEditor;

    if (!editor) {
        vscode.window.showInformationMessage(`no active text editor`);
        return;
    }

    let document = editor.document;
    let selection = editor.selection;

    // Get the word within the selection
    let selText = document.getText(selection);

    let lines = selText.split('\n');
    let dedupeLines = [...new Set(lines)];
    let dedupeText = dedupeLines.join('\n');

    editor.edit(editBuilder => {
        editBuilder.replace(selection, dedupeText);
    });

    // build message
    let lineCount = lines.length;
    let finalCount = dedupeLines.length;
    let duplicateCount = lineCount - finalCount;
    let pluralize = (count:Number, noun:String) => `${count} ${noun}${(count !== 1 ? "s" : "")}`;

    let msg = `Removed ${pluralize(duplicateCount, "duplicate")} of ${pluralize(lineCount, "line")}`;

    // Display a message box to the user
    vscode.window.showInformationMessage(msg);


});

export { refreshCspell };
