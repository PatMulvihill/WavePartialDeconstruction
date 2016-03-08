/** @jsx React.DOM */
'use strict';

let React = require('react');
//var LinkedState = require('react-addons-linked-state-mixin');
let InputField = require('./InputField');

class InputForm extends React.Component{

  constructor(){
    super();
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.state = {};
  }

  handleFieldChange(fieldId, value) {
    var newState = {};
    newState[fieldId] = value;

    this.setState(newState);
  }

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


}

InputForm.propTypes = {
  fields: React.PropTypes.arrayOf(
    React.PropTypes.shape({
    key: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired
  }))
};

module.exports = InputForm;


// module.exports = React.createClass({
//   mixins: [LinkedState],
//
//   getInitialState() {
//     return {};
//   },
//   handleFieldChange(fieldId, value) {
//     var newState = {};
//     newState[fieldId] = value;
//
//     this.setState(newState);
//   },
//
//   render() {
//     var fields = this.props.fields.map(function(field) {
//
//       var props = {
//         key: field.key,
//         onChange: this.handleFieldChange,
//         value: this.state[field.key],
//         field: field
//       };
//       return <InputField {...props}/>;
//     }, this);
//
//
//     return (
//
//       < form className = "form-horizontal" > {
//         fields
//       } < div > {
//         JSON.stringify(this.state)
//       } < /div> < /form>
//     );
//   }
// });
