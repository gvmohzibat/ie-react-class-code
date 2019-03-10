import React, { Component } from 'react';
import './home.scss';

export default class Home extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      title: 'عنوان صفحه',
      help: ''
    };
  }
  render() {
    const { title } = this.state;
    return (
      <div>
        <p>{title}</p>
        <button onClick={e => this.onClick(e)}>vahi</button>
      </div>
    );
  }
  onClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (event.ctrlKey) {
      this.setState((state, props) => ({ title: `${state.title} - new title` }));
    }
  }
}

interface State {
  title: string;
  help: string;
}
interface Props {}
