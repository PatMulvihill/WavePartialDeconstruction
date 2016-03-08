/** @jsx React.DOM */
'use strict';

var React = require('react');
module.exports = React.createClass({
  handleChange(e) {
    e.preventDefault();
    var text = e.target.value;
    this.props.onChange(this.props.field.key, text);
  },

  render() {
    return (

      <div className="form-group">
      <label htmlFor="amp1" className="col-sm-2 control-label">{this.props.field.name}</label>
      <div className="col-sm-10">
      <input type="text" className="form-control" onChange={this.handleChange} value={this.props.value} />
      </div>
      </div>


    );
  }

});
