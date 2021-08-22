import * as vscode from "vscode";

let refreshCspell = vscode.commands.registerCommand(
  "vs-utils.refreshCspell",
  async () => {
    // https://github.com/streetsidesoftware/vscode-spell-checker/blob/v1.9.0/packages/client/package.json#L92
    vscode.commands.executeCommand("cSpell.disableForGlobal");
    vscode.commands.executeCommand("cSpell.enableForGlobal");

    const cmds = await vscode.commands.getCommands();
    console.log(cmds);

    // Display a message box to the user
    vscode.window.showInformationMessage("CSpell Refreshed");
  }
);

export { refreshCspell };
