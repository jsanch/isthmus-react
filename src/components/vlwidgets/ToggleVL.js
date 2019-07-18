import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import carto from '@carto/carto.js';
import { storeLayers, toggleLayer } from '../../actions/actions';
import '@carto/airship-style';

class ToggleVL extends Component {

  state = {
    checked: true
  };

  componentDidMount() {
    this.setupConfig();
    this.setupChecked();
  }

  setupConfig() {
    const { checked } = this.state;
    this.widget.checked = checked
  }

  setupChecked() {
    this.widget.addEventListener('change', (event) => {
      this.setState({ checked: event.detail })
      if (event.detail === true) {
        this.props.layer.layer.show();
      } else if (event.detail === false) {
        this.props.layer.layer.hide();
      }
    })
  }

  render() {
    return (
      <div>
        <span className="as-display--block">
          <p className="as-body">{this.props.layer.name}</p>
        </span>
        <span className="as-display--block">
          <as-switch checked ref={node => { this.widget = node; }}></as-switch>
        </span>
      </div>
    );
  }

}

const mapStateToProps = state => ({
  client: state.client,
  map: state.map,
  filters: state.filters,
  layers: state.layers,
  viewport: state.viewport,
  boundingbox: state.boundingbox
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ToggleVL);