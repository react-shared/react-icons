
let React = require('react');
let IconBase = require('react-icon-base');

export default class IoFlag extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m33.3 14.2s0.9-0.1 1.7-0.4c0 1.2-0.5 2.5-0.7 2.8-2.2 3.9-7.7 9.6-14.1 6.5-5.1-2.4-7.2-2.3-9.2-1.8-0.1 0-0.1 0-0.2 0-0.3 0.1-1.2 0.4-2 0.1v-15.4c0-1.2 1-2.4 2.5-2.7 3.1-0.6 8.3-0.4 11.6 5.8 3 5.7 7.6 5.6 10.4 5.1z m-26.4-11.7c0.3 0 0.6 0.3 0.6 0.6v33.8c0 0.3-0.3 0.6-0.6 0.6h-1.3c-0.3 0-0.6-0.3-0.6-0.6v-33.8c0-0.3 0.3-0.6 0.6-0.6h1.3z"/></g>
            </IconBase>
        );
    }
}
