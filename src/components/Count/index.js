import React from 'react';

export default class Count extends React.Component 
{
    constructor(props) {
        super(props);

        
        // console.log(props);
        this.state = {
            count: props.start || 0
        }
    }

    componentDidMount() 
    {

    }
    render() 
    {
        return (
            <div className="container">
                <button id="btn" onClick ={(this.counter(false))}>-</button>
                <div className="count">{this.state.count}</div>
                <button id="btn" onClick = {this.counter(true)}>+</button>
            </div>
        );
    }

    // plus = () => 
    // {
        // this.setState({
    //         count: this.state.count + 1
    //     });
    // }

    // minus = () => 
    // {
    //     this.setState({
    //         count: this.state.count - 1
    //     });
    // }

    counter = (mp) => () => 
    {
        this.setState({
            count: mp ? this.state.count + 1 : this.state.count - 1
        });
    }
 
}