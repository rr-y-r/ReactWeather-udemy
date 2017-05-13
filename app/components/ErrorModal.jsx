import React,{Component} from 'react';
import PropTypes from 'prop-types';

export default class ErrorModal extends Component{
  static defaultProps = {
    title: 'Error'
  };

  static propTypes ={
    title : PropTypes.string,
    message: PropTypes.string.isRequired
  }

  componentDidMount(){
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  }

  render() {
    var {title, message} = this.props;
    return(
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="button hollow" data-close="">
            Okay
          </button>
        </p>
      </div>
    );
  }
}
