import {Component, ViewEncapsulation} from '@angular/core';
import {Basic} from './basic/basic';
import {Languages} from './languages/languages';
import {Modes} from './modes/modes';
import {Themes} from './themes/themes';
import {Features} from './features/features';
import {Restrictions} from './restrictions/restrictions';
import {Config} from './config/config';
import {Conversion} from './conversion/conversion';
import {ManualEditor} from './manual-editor/manual-editor';
import {Pipes} from './pipes/pipes';

@Component({
	selector: 'app-demo',
	imports: [Basic, Languages, Modes, Themes, Features, Restrictions, Config, Conversion, ManualEditor, Pipes],
	templateUrl: './demo.html',
	styleUrl: './demo.scss',
	encapsulation: ViewEncapsulation.None
})
export class Demo {

	activeTab: string = 'basics';

	tabs = [
		{id: 'basics', label: 'Basics', icon: '📅'},
		{id: 'languages', label: 'Languages', icon: '🌐'},
		{id: 'modes', label: 'Modes', icon: '🔢'},
		{id: 'themes', label: 'Themes', icon: '🎨'},
		{id: 'features', label: 'Features', icon: '✨'},
		{id: 'restrictions', label: 'Restrictions', icon: '🚫'},
		{id: 'config', label: 'Global Config', icon: '⚙️'},
		{id: 'manual', label: 'Manual Editor', icon: '🛠️'}, // NEW TAB
		{id: 'pipes', label: 'Pipes', icon: '🔧'},
		{id: 'conversion', label: 'Conversion', icon: '🔄'},
	];

	// Change active tab
	setActiveTab(tabId: string) {
		this.activeTab = tabId;
	}

}

