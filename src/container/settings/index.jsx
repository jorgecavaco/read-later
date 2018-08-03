import { StyleRoot, List, Actions, Btn, ResetBtn, SaveBtn } from './styled';
import React, { Component } from 'react';

/* import config */
import config from '../../config';

/* import component */
import SettingsItem from '../../components/settingsItem';

/* core */
class Settings extends Component {
  constructor(props) {
    super(props);

    this.folderName = config.title;
  }

  save() {
    this.props.updateSetting('save', this.tempSettings);

    this.props.closeSettingsPanel();
  }

  reset() {
    this.tempSettings = Object.assign({}, config);
    this.props.updateSetting('reset', this.tempSettings);
  }

  cancel() {
    this.tempSettings = Object.assign({}, this.props.settings);
    this.props.updateSetting('cancel');
    this.props.closeSettingsPanel();
  }

  getItems() {
    const items = [];

    for (let _key of Object.keys(this.tempSettings)) {
      items.push(
        <SettingsItem
          key={_key}
          name={_key}
          value={this.tempSettings[_key]}
          title={_key.replace('_', ' ').trim()}
          change={this.change.bind(this)}
        />,
      );
    }

    return items;
  }

  change(data) {
    this.tempSettings = Object.assign({}, this.tempSettings, data);
  }

  render() {
    this.tempSettings = Object.assign({}, this.props.settings);
    this.items = this.getItems();

    return (
      <StyleRoot isOpen={this.props.isOpen}>
        <header>Settings</header>
        <List>{this.items}</List>
        <Actions>
          <ResetBtn onClick={() => this.reset()}>reset</ResetBtn>
          <SaveBtn onClick={() => this.save()}>save</SaveBtn>
          <Btn onClick={() => this.cancel()}>cancel</Btn>
        </Actions>
      </StyleRoot>
    );
  }
}

export default Settings;
