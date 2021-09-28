import React, { Component } from 'react';



const list = [];

class UnControlledForm extends Component 
{
    constructor()
    {
        super();
        this.cityRef = React.createRef();
        this.provinceRef = React.createRef();
        this.populationRef = React.createRef();
    }

    onSubmit(e) 
    {
        e.preventDefault();

        const city = this.cityRef.current.value;
        const province = this.provinceRef.current.value;
        const population = this.populationRef.current.value;

        console.log(`Dati inviati! ${city}, ${province}, ${population}`);
        
    }

    render() 
    {
        return(
            <div>
                <form onSubmit={(event) => this.onSubmit(event)}>
                   <h3>Anagrafe</h3>
                   <div>
                       <label>City</label>
                       <input ref={this.cityRef}  type="text" name="city" id="city" placeholder="city"/>
                       {/* <input onChange={this.cityChangeHandler.bind(this)} type="text" name="city" id="city" placeholder="city"/> */}
                   </div>
                   <div>
                       <label>Province</label>
                       <input ref={this.provinceRef} type="text" name="province" id="province" />
                   </div>
                   <div>
                       <label>Population</label>
                       <input ref={this.populationRef} type="number" name="population" id="population" />
                   </div>
                   <div>
                       <input type="submit" value="Submit" />
                   </div>
                </form>
            </div>
        )
    }
}

export default UnControlledForm;