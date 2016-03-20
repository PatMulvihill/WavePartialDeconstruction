/** @jsx React.DOM */
'use strict';

let React = require('react');
//var LinkedState = require('react-addons-linked-state-mixin');
let InputField = require('./InputField');

class InputForm extends React.Component {

  constructor() {
    super();
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.state = {};
  }

  handleFieldChange(fieldId, value) {
    //Create a new object to encapsulate state change into
    var newState = {};
    newState[fieldId] = value;
    //Pass it into the parents callback to update state
    this.props.onInputChange(newState);
  }

  render() {
    var fields = this.props.fields.map(function(field) {

      var props = {
        key: field.key,
        onChange: this.handleFieldChange,
        value: this.state[field.key],
        field: field
      };
      return <InputField {...props
      }
      />;
    }, this);


    return (

      < form className = "form-horizontal" > {
        fields
      } < div > {
      } < /div> < /form >
    );
  }


}

InputForm.propTypes = {
  fields: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      key: React.PropTypes.string.isRequired,
      name: React.PropTypes.string.isRequired
    })),
  onInputChange: React.PropTypes.func
};

module.exports = InputForm;