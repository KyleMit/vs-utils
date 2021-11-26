
import * as vscode from 'vscode';
import { pluralize } from '../utils';

export const removeDuplicates = vscode.commands.registerCommand('vs-utils.removeDuplicates', () => {

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

    const lines = selText.split('\n');
    const dedupeLines = [...new Set(lines)];
    const dedupeText = dedupeLines.join('\n');

    editor.edit(editBuilder => {
        editBuilder.replace(selection, dedupeText);
    });

    // build message
    const lineCount = lines.length;
    const finalCount = dedupeLines.length;
    const duplicateCount = lineCount - finalCount;

    const msg = `Removed ${pluralize(duplicateCount, "duplicate")} of ${pluralize(lineCount, "line")}`;

    // Display a message box to the user
    vscode.window.showInformationMessage(msg);
});
