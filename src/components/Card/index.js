import React from 'react';
import { Song } from '../../models/Song';



export default class Card extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        let text = this.props.selected.includes(this.props.song) ? "Delete" : "Select";
        return (
            <div className=" card flex-column m-4 shadow p-1 length">
                
                <img src={this.props.song.cover} alt="cover" className="card-img-top" />

                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Title: <span>{this.props.song.title}</span></li>
                    <li class="list-group-item">Author: {this.props.song.author}</li>
                </ul> 
                
                

                <div className="text-center">
                    <button className="btn btn-primary mt-1" onClick={() => this.props.onSelect(this.props.song)}>{text}</button>
                </div>
            </div>
        )
    }
}