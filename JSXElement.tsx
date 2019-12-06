import * as React from './web_modules/react/react.js';
import * as ReactDOM from './web_modules/react-dom/react-dom.js';

const e = React.createElement;

export interface JSXElementProps {
}

export class JSXElement extends React.Component<JSXElementProps> {
    
    constructor(props: JSXElementProps) {
        super(props);
    }

    render() {
        return (
            <div>Hello JSX!</div>
        );
    }
};

const domContainer = document.querySelector('#main_react_container');
ReactDOM.render(e(JSXElement), domContainer);