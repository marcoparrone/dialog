// dialog.js - Dialog material react component.

import React from 'react';

import "@material/dialog/dist/mdc.dialog.css";
import { MDCDialog } from '@material/dialog';

function open_dialog(ref, id) {
  if (ref) {
    if (ref.current) {
      const element = ref.current.querySelector('#' + id + '-dialog');
      if (element) {
        const dialog = new MDCDialog(element);
        dialog.open();
      }
    }
  }
}

class Dialog extends React.Component {
  render() {
    return React.createElement('div', {
      'className': 'mdc-dialog', 'role': 'alertdialog', 'aria-modal': 'true', 'aria-labelledby': this.props.id + '-dialog-title',
      'aria-describedby': this.props.id + '-dialog-content', 'id': this.props.id + '-dialog'
    },
      [React.createElement('div', { 'className': 'mdc-dialog__container', 'key': this.props.id + '-dialog-container' },
        React.createElement('div', { 'className': 'mdc-dialog__surface', 'key': this.props.id + '-dialog-surface' },
          [React.createElement('h2', { 'className': 'mdc-dialog__title', 'id': this.props.id + '-dialog-title', 'key': this.props.id + '-dialog-title' }, this.props.title),
          React.createElement('div', { 'className': 'mdc-dialog__content', 'id': this.props.id + '-dialog-content', 'key': this.props.id + '-dialog-content' }, this.props.children),
          React.createElement('footer', { 'className': 'mdc-dialog__actions', 'key': this.props.id + '-dialog-footer' },
            this.props.actions ? this.props.actions : React.createElement('button', { 'type': 'button', 'className': 'mdc-button mdc-dialog__button', 'data-mdc-dialog-action': 'yes' },
              React.createElement('span', { 'className': 'mdc-button__label' }, this.props.text_close_button ? this.props.text_close_button : "Close")))])),
      React.createElement('div', { 'className': 'mdc-dialog__scrim', 'key': this.props.id + '-dialog-scrim' })]);
  }
}

export { Dialog, open_dialog };