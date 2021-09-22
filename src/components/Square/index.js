import React from 'react';

class Square extends React.Component 
{
    constructor(props)
    {
        super(props);
        this.state = {
            value: null,
        }
    }
    render() 
    {
        return (
            <button 
              className="square"
              onClick={() => 
              this.setState({value: 'X'})}>
                { this.state.value }
            </button>
        );
    }
}

class Board extends React.Component 
{
    renderSquare(i) 
    {
        return <Square value={i} />;
    }
}