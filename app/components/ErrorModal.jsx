import React,{Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';

export default class ErrorModal extends Component{
  static defaultProps = {
    title: 'Error'
  };

  static propTypes ={
    title : PropTypes.string,
    message: PropTypes.string.isRequired
  }

  componentDidMount(){
    var {title, message} = this.props;

    var modalMarkup = (
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

    var $modal = $(ReactDOMServer.renderToString(modalMarkup));
    $(ReactDOM.findDOMNode(this)).html($modal);

    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  }

  render() {
    return (
      <div>
      </div>
    );

  }
}
