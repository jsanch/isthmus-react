import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { setNeighbourhoods } from '../../actions/actions';
import carto, { filter, source, style, layer  } from '@carto/carto.js';
import Category from '.././widgets/Category'
import Histogram from '.././widgets/Histogram'
import Formula from '.././widgets/Formula'
import Range from '.././widgets/Range'
import Export from '.././widgets/Export'
import '@carto/airship-style';

class RightBar extends Component {

  constructor(props) {
    super(props);
      this.state = {
        ...props
      }
  }

  state = {
    size: null
  };

  componentDidMount() {
    const z = `as-sidebar as-sidebar--${this.props.size} as-sidebar--right ${this.props.background}`;
    this.setState({size: z})
  }

  render() {

    return (
      <aside className={this.state.size} data-name={this.props.name}>
      <div className="as-m--24">
      <div className="as-p--16">
      {/*<Range
        before=''
        after='°F'
        title='Temperature'
        description='Temperature at the time of the accident'
        layer={this.props.layers.railaccidents.source}
        column='temp'
        step={1}
      />*/}
      </div>
      <div className="as-p--16">
      {/*<Export
        layer={this.props.layers.railaccidents.source}
        format='csv'
        filename='rail_data'
        name='Export Data'
      />*/}
      </div>
      {/*<Category
        title='State'
        description='Total damage for each railroad company in USD'
        categoryLayer={this.props.layers.railaccidents.source}
        column='state'
        operation={carto.operation.SUM}
        operationColumn='equipment_damage'
      />*/}
      <div className="as-p--16">
      {/*<Histogram
        title='Hour'
        description='Hour at the time of the accident'
        layer={this.props.layers.railaccidents.source}
        column='hour'
        bins={12}
      />*/}
      </div>
      </div>
      </aside>

    )
  }
}

const mapStateToProps = state => ({
  client: state.client,
  map: state.map,
  layers: state.layers,
  viewport: state.viewport,
  boundingbox: state.boundingbox
});

const mapDispatchToProps = dispatch => ({
  setNeighbourhoods: selected => dispatch(setNeighbourhoods(selected)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RightBar);
