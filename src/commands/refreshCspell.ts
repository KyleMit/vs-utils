import * as vscode from 'vscode';


export const refreshCspell = vscode.commands.registerCommand('vs-utils.refreshCspell', () => {

    // https://github.com/streetsidesoftware/vscode-spell-checker/blob/v1.9.0/packages/client/package.json#L92
    vscode.commands.executeCommand("cSpell.disableForGlobal");
    vscode.commands.executeCommand("cSpell.enableForGlobal");

    // Display a message box to the user
    vscode.window.showInformationMessage('CSpell Refreshed');
});

