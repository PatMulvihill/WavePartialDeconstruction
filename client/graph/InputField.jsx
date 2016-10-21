/** @jsx React.DOM */
'use strict';

let React = require('react');

class InputField extends React.Component{
  constructor(){
    super();
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    e.preventDefault();
    var text = e.target.value;
    this.props.onChange(this.props.field.key, text);
  }
  render() {
    return (

      <div className="form-group">
      <label htmlFor="amp1" className="col-sm-2 control-label">{this.props.field.name}</label>
      <div className="col-sm-2">
      <input type="text" className="form-control" onChange={this.handleChange} value={this.props.value} />
      </div>
      </div>


    );
  }
}

InputField.propTypes = {
  key: React.PropTypes.string,
  onChange: React.PropTypes.func.isRequired,
  value: React.PropTypes.string,
  field: React.PropTypes.object.isRequired
};

module.exports = InputField;
