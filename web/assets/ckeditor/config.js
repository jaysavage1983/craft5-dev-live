/**
 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	config.toolbarGroups = [
		{ name: 'styles', groups: [ 'styles' ] },
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
		{ name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
		{ name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
		{ name: 'forms', groups: [ 'forms' ] },
		{ name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
		{ name: 'links', groups: [ 'links' ] },
		{ name: 'insert', groups: [ 'insert' ] },
		{ name: 'colors', groups: [ 'colors' ] },
		{ name: 'tools', groups: [ 'tools' ] },
		{ name: 'others', groups: [ 'others' ] },
		{ name: 'about', groups: [ 'about' ] }
	];

	config.removeButtons = 'NewPage,Preview,Templates,Source,PasteFromWord,Replace,Scayt,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,Link,Unlink,Anchor,Image,Flash,Table,Smiley,SpecialChar,PageBreak,Iframe,TextColor,BGColor,ShowBlocks,About,SelectAll,Find,NumberedList,BulletedList,Outdent,Indent,Blockquote,CreateDiv,Font,FontSize,Strike,Superscript,Subscript,Cut,Undo,Redo,Copy,Paste,PasteText,Styles,RemoveFormat,BidiLtr,BidiRtl,Language,JustifyLeft,JustifyCenter,JustifyRight,JustifyBlock,Format,Bold,Italic,Underline,Maximize';
};