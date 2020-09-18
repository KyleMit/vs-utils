import * as vscode from 'vscode';
import { refreshCspell } from './commands/refreshCspell';
import { removeDuplicates } from './commands/removeDuplicates';

// this method is called when your extension is activated
export function activate(context: vscode.ExtensionContext) {

	// log activation
	console.log('The extension "vs-utils" is now active!');

	// add commands to activation context
	context.subscriptions.push(refreshCspell);
	context.subscriptions.push(removeDuplicates);
}
