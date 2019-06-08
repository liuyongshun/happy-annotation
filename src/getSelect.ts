import * as vscode from 'vscode';
let fs = require('fs');

export class GetSelect {
    carryOut() {
        vscode.languages.registerHoverProvider({ scheme: 'file', language: 'typescript'}, {
            provideHover(doc: vscode.TextDocument) {
                const { size } = fs.statSync(doc.uri.fsPath);
                return new vscode.Hover(`Size in bytes is ${size}`);
            }
        })
    }
}