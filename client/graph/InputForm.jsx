/** @jsx React.DOM */
'use strict';

var React = require('react');
var LinkedState = require('react-addons-linked-state-mixin');
var InputField = require('./InputField');
module.exports = React.createClass({
  mixins: [LinkedState],

  getInitialState() {
    return {};
  },
  handleFieldChange(fieldId, value) {
    var newState = {};
    newState[fieldId] = value;

    this.setState(newState);
  },

  render() {
    var fields = this.props.fields.map(function(field) {

      var props = {
        key: field.key,
        onChange: this.handleFieldChange,
        value: this.state[field.key],
        field: field
      };
      return <InputField {...props}/>;
    }, this);


    return (

      < form className = "form-horizontal" > {
        fields
      } < div > {
        JSON.stringify(this.state)
      } < /div> < /form>
    );
  }
});
