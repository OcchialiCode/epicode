import React from 'react';

export default class ListElement extends React.Component
{
    constructor(props) 
    {
        super(props);
    }

    render() 
    {
        return (
           
            <div>
                <p className="text-center">Title: {this.props.song.title}</p>
                 <p className="text-center">Author: {this.props.song.author}</p>
            </div>
            
        )
    }
}