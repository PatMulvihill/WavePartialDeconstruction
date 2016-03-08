/** @jsx React.DOM */
'use strict'

var React = require('react');
var LinkedState = require('react-addons-linked-state-mixin')
module.exports = React.createClass({
      mixins: [LinkedState],

      getInitialState() {
        return {
          value: ""

        }
      },


      render() {
        return (

            <div className="form-group">
              <h3>Wave 1</h3>
              <label htmlFor="amp1" className="col-sm-2 control-label">Amplitude</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" valueLink = {this.linkState('value')} />
              </div>
              <label>{this.state.value}</label>
            </div>


          );
        }

      })
