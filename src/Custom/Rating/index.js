import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ReactComponent } from 'react-formio';
import settingsForm from './Rating.settingsForm';
import { EmoRating } from 'emo-rating-react';
import 'emo-rating-react/dist/index.css';

const ratingData = [
  {
    id: 1,
    text: 'Muito insatisfeito',
    icon: 'https://i.ibb.co/BPKK8Hm/terrible-icon.png',
    icon_selected: 'https://i.ibb.co/r6qN2YV/terrible-big-icon.png',
  },
  {
    id: 2,
    text: 'Insatisfeito',
    icon: 'https://i.ibb.co/9hLWPYh/bad-icon.png',
    icon_selected: 'https://i.ibb.co/71rzMSt/sad-big-icon.png',
  },
  {
    id: 3,
    text: 'Neutro',
    icon: 'https://i.ibb.co/QcGswBH/okay-icon.png',
    icon_selected: 'https://i.ibb.co/HTvbnRP/okay-big-icon.png',
  },
  {
    id: 4,
    text: 'Satisfeito',
    icon: 'https://i.ibb.co/Z8xYwcs/good-icon.png',
    icon_selected: 'https://i.ibb.co/6tf34hJ/happy-big-icon.png',
  },
  {
    id: 5,
    text: 'Muito satisfeito',
    icon: 'https://i.ibb.co/4WzvFsm/great-icon.png',
    icon_selected: 'https://i.ibb.co/rsh9BNt/great-big-icon.png',
  },
];

const defaultSelected = 3;
const size = 80;

const RatingCustomComp = class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
  }

  setValue = () => {
    this.setState(
      (prevState) => ({ value: !prevState.value }),
      () => this.props.onChange(null, this.state.value)
    );
  };

  handleOnChange = (selectedRating, e) => {
    console.log(selectedRating);
  };

  render() {
    return (
      <EmoRating
        ratingData={ratingData}
        onChange={this.handleOnChange}
        defaultSelected={defaultSelected}
        customClassName="rating"
        size={size}
      />
    );
  }
};

export default class RatingComponent extends ReactComponent {
  /**
   * This function tells the form builder about your component. It's name, icon and what group it should be in.
   *
   * @returns {{title: string, icon: string, group: string, documentation: string, weight: number, schema: *}}
   */
  static get builderInfo() {
    return {
      title: 'Rating',
      icon: 'square',
      group: 'Data',
      documentation: '',
      weight: -10,
      schema: RatingComponent.schema(),
    };
  }

  /**
   * This function is the default settings for the component. At a minimum you want to set the type to the registered
   * type of your component (i.e. when you call Components.setComponent('type', MyComponent) these types should match.
   *
   * @param sources
   * @returns {*}
   */
  static schema() {
    return ReactComponent.schema({
      type: 'ratingCustomComp',
    });
  }

  /*
   * Defines the settingsForm when editing a component in the builder.
   */
  static editForm = settingsForm;

  /**
   * This function is called when the DIV has been rendered and added to the DOM. You can now instantiate the react component.
   *
   * @param DOMElement
   * #returns ReactInstance
   */
  attachReact(element) {
    return ReactDOM.render(
      <RatingCustomComp
        component={this.component} // These are the component settings if you want to use them to render the component.
        value={this.dataValue} // The starting value of the component.
        onChange={this.updateValue} // The onChange event to call when the value changes.
      />,
      element
    );
  }

  /**
   * Automatically detach any react components.
   *
   * @param element
   */
  detachReact(element) {
    if (element) {
      ReactDOM.unmountComponentAtNode(element);
    }
  }
}
