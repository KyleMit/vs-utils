
import * as vscode from 'vscode';
import { parse } from 'jsonc-parser';
import { pluralize } from '../utils';

// TODO: only activate in json/jsonc file
// Clean whole file if selection not made
export const removeJsonComments = vscode.commands.registerCommand('vs-utils.removeJsonComments', () => {

    // Get the active text editor
    const editor = vscode.window.activeTextEditor;

    if (!editor) {
        vscode.window.showInformationMessage(`no active text editor`);
        return;
    }

    const document = editor.document;
    const selection = editor.selection;

    // Get the word within the selection
    const selText = document.getText(selection);
    const obj = parse(selText);
    const result = JSON.stringify(obj, null, 2);

    editor.edit(editBuilder => {
        editBuilder.replace(selection, result);
    });

    // build message
    const removedChars = Math.max(selText.length - result.length, 0);
    const msg = `Removed ${pluralize(removedChars, "character")}`;

    // Display a message box to the user
    vscode.window.showInformationMessage(msg);
});
