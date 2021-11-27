import * as vscode from 'vscode';
import { refreshCspell, removeDuplicates, removeJsonComments } from './commands';


// this method is called when your extension is activated
export const activate = (context: vscode.ExtensionContext) => {

	// log activation
	console.log('The extension "vs-utils" is now active!');

	// add commands to activation context
	context.subscriptions.push(refreshCspell);
	context.subscriptions.push(removeDuplicates);
	context.subscriptions.push(removeJsonComments);

};
