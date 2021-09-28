import { Component } from 'react';

const initialState = {
    city: '',
    cityTouched: false,
    province: '',
    provinceTouched: false,
    population: 0,
    populationTouched: false,

}


class ControlledForm extends Component 
{
    constructor()
    {
        super();
        this.state = initialState;
    }

    componentDidUpdate()
    {
        console.log(this.state);
    }

    cityChangeHandler(e) 
    {
        this.setState({
            city: e.target.value,
        })
    }

    cityBlurHandler() 
    {
        this.setState({
            cityTouched: true,
            provinceTouched: true,
            populationTouched: true
        })
    }

    provinceChangeHandler(e) 
    {
        this.setState({
            province: e.target.value
        })
    }

    populationChangeHandler(e) 
    {
        this.setState({
            population: e.target.value
        })
    }

    onSubmit(e) 
    {
        e.preventDefault();
        if(!this.cityIsValid() || !this.provinceIsValid() || !this.populationIsValid()){
            return;
        }

        //* ci sarà una chiamata API back-end
        console.log(`Dati inviati!! ${JSON.stringify(this.state)}`);
        this.setState(initialState)
    }

    //*VALIDATION 
    cityIsValid = () => this.state.city != '';
    provinceIsValid = () => this.state.province && this.state.province.length === 2;
    populationIsValid = () => this.state.population > 0;
    formIsValid = () => this.cityIsValid() && this.provinceIsValid() && this.populationIsValid();

    //*ERROR
    cityHasError = () =>  !this.cityIsValid() && this.state.cityTouched;
    provinceHasError = () =>  !this.provinceIsValid() && this.state.provinceTouched;
    populationHasError = () =>  !this.populationIsValid() && this.state.populationTouched;

    render() 
    {
        return(
            <div>
                <form onSubmit={(event) => this.onSubmit(event)}>
                   <h3>Anagrafe</h3>
                   <div className={`form-control ${this.cityHasError()  ? 'invalid' : ''} `}>
                       <label>City</label>
                       <input value={this.state.city} onBlur={() => this.cityBlurHandler()} onChange={(e) => this.cityChangeHandler(e)} type="text" name="city" id="city" placeholder="city"/>
                       {/* <input onChange={this.cityChangeHandler.bind(this)} type="text" name="city" id="city" placeholder="city"/> */}
                        {this.cityHasError() &&  <div className="error-text">Can't be null</div>}
                   </div>
                   
                   <div className={`form-control ${this.provinceHasError() ? 'invalid' : ''} `}>
                       <label>Province</label>
                       <input type="text" value={this.state.province} onChange={(e) => this.provinceChangeHandler(e)} name="province" id="province" />
                       {this.provinceHasError() &&  <div className="error-text">Have to be 2</div>}
                   </div>
                   
                   <div className={`form-control ${this.populationHasError() ? 'invalid' : ''} `}>
                       <label>Population</label>
                       <input type="number" value={this.state.population} onChange={(e) => this.populationChangeHandler(e)} name="population" id="population" />
                       {this.populationHasError() &&  <div className="error-text">At least 1 person</div>}
                   </div>
                   <div>
                       <input type="submit" value="Submit" />
                   </div>
                </form>
            </div>
        )
    }
}

export default ControlledForm;