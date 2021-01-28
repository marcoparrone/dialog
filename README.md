# dialog

Dialog material react component.

## Installation

```sh
npm install @marcoparrone/dialog
```

## Usage

```js
import {Dialog, open_dialog} from '@marcoparrone/dialog';
```

Read further for more information.

## Creating a dialog box

For creating a dialog box now you can use the Dialog react component. It accepts these properties:

 * id: a string containing an identifier for the dialog box;
 * title: a string containing the title of the dialog box;
 * actions: a component to be rendered in the footer of the dialog box: usually some button or input control. If the actions property is not set, a "close" button will be rendered in the footer of the dialog box;
 * text_clone_button: the label to use for the close button, its default is "Close".

Here is an example of a simple dialog box with just a close button:

```js
<Dialog id="about" title={this.state.text_about_title} text_close_button={this.state.text_close_button} >
  <p>{this.state.text_about_content1}
    <br />{this.state.text_about_content2}</p>
  <p>{this.state.text_about_content3}</p>
  <p>{this.state.text_about_content4}</p>
  <p>{this.state.text_about_content5}</p>
  <p>{this.state.text_about_content6}</p>
</Dialog>
```

In the above example, this.state.text_about_title contains the localized version of the "About" string, this.state.text_close_button contains the localized version of the "Close" string, this.state.text_about_contentN contain different translated messages. The result will be a dialog box with a title, its content, and a close button.

Here is an example of a more complex dialog box:

```js
<Dialog id="impexp" title={this.state.text_importexport_title}
  actions={(<span>
    <label>{this.state.text_import}
    &nbsp;
    <input type="file" onChange={e => this.importNotes(e)} className="mdc-button mdc-dialog__button" data-mdc-dialog-action="yes" /></label>
    <input type="submit" value={this.state.text_back} className="mdc-button mdc-dialog__button" data-mdc-dialog-action="yes" />
    <input type="submit" value={this.state.text_export} onClick={event => this.exportNotes()} className="mdc-button mdc-dialog__button" data-mdc-dialog-action="yes" /></span>)} >
    <p>{this.state.text_importexport_content}</p>
</Dialog>
```

In this example, this.state.text_importexport_title contains the localized version of the "Import/export" string, the actions property contains some HTML input controls with their callbacks, and finally this.state.text_importexport_content contains a localized message which examplains what the controls are meant for.

## Showing a dialog box

The dialog boxes are hidden, to show them you can use the open_dialog function.

The function accepts two parameters: a reference to some element containing the dialog box (it could be a reference to the top element of the react app), created with React.createRef(), and a string containing the id of the dialog box.

Here is an example:

```js
class NotesList extends React.Component {
...
  constructor(props) {
...
    this.notesListRef = React.createRef();
...
  render() {
...
    <AppWithTopBar refprop={this.notesListRef} lang={this.state.language} appname={this.state.text_appname}
      icons={[{label: this.state.text_add_label, icon: 'add', callback: () => this.addNote()},
              {label: this.state.text_settings_label, icon: 'settings', callback: () => open_dialog(this.notesListRef, 'settings')},
              {label: this.state.text_importexport_label, icon: 'import_export', callback: () => open_dialog(this.notesListRef, 'impexp')},
              {label: this.state.text_help_label, icon: 'help', callback: () => open_dialog(this.notesListRef, 'help')},
              {label: this.state.text_about_label, icon: 'info', callback: () =>  open_dialog(this.notesListRef, 'about')}]} >
...
```

The callback functions defined in this element will open the dialog boxes.