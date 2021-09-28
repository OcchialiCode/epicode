import React from 'react';
import { Song } from '../../models/Song';
import Card from '../Card';
import ListElement from '../ListElement';

export default class CardGrid extends React.Component 
{
    constructor(props) 
    {
        super(props)
        this.state = {
            songs: [
                new Song(1, 'Come as you are', 'Nirvana', './images/copertina-nevermind-nirvana.png'),
                new Song(2, '10 metallamenti', 'Atroci', './images/cover-atroci.jpg'),
                new Song(3, "L'erba di grace", 'Salmo', './images/cover-salmo.png'),
                new Song(4, 'left behind', 'Slipknot', './images/cover-slipknot.png'),
                new Song(5, "L'outfit è quello giusto", 'Willie Peyote', './images/cover-willie.png'),
            ],
            selected: []
        }
    }

    onSelect = song =>
    {
        const selected = [...this.state.selected];
    

        selected.indexOf(song) === -1 ? selected.push(song) : selected.splice(selected.indexOf(song), 1)

        this.setState({
            selected
        });
        
    }

    render() 
    {
        const songs = this.state.songs.map(song => <Card key={song.id} song={song} onSelect={this.onSelect} selected={this.state.selected} />);
        
                    
        const songsList = this.state.selected.map(song => <ListElement key={song.id} song={song}  />);
        return (
            <div>
                <div className="container d-flex text-center flex-wrap">
                    {songs}
                </div>
                <div className="">
                    <h4 className="text-center text-primary">Selected song</h4>
                    {songsList}
                </div>
            </div>
        );
    }
}