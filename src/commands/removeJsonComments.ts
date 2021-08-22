
import * as vscode from 'vscode';
import { parse } from 'jsonc-parser';
import { pluralize } from '../utils';

// TODO: only activate in json/jsonc file
// Clean whole file if selection not made
let removeJsonComments = vscode.commands.registerCommand('vs-utils.removeJsonComments', () => {

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
    let obj = parse(selText);
    let result = JSON.stringify(obj, null, 2);

    editor.edit(editBuilder => {
        editBuilder.replace(selection, result);
    });

    // build message
    let removedChars = Math.max(selText.length - result.length, 0);
    let msg = `Removed ${pluralize(removedChars, "character")}`;

    // Display a message box to the user
    vscode.window.showInformationMessage(msg);
});

export { removeJsonComments as removeDuplicates };
