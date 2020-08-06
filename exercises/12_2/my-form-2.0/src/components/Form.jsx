import React, {Component} from 'react';
import Inputs from './FormStructure.json';
import States from './states.json';

class Form extends Component {
  constructor() {
    super();
    this.state = {};
    this.inputs = null;
  }

  sendForm = (ev) => {
    ev.preventDefault();
    console.log(ev);
  }

  mountInputs = () => {
    this.inputs = Object.keys(Inputs).map((field, key) => {
      return (
        <fieldset className="field-set" key={key} id={field}>
          {
            Inputs[field].map((input, i) => {
              switch(input.type) {
                case 'select':
                  return ( 
                    <select key={i} id={input.id} className="input" name={input.name}>
                      {
                        (input.id === 'uf') ?
                        States.map((state, j) => (<option key={j} value={state[0]}>{state[1]}</option>)) :
                        null
                      }
                    </select>
                  )
                default:
                  return ( <input key={i} id={input.id} type={input.type} className="input" name={input.name} /> )
              }
            })
          }
        </fieldset>
      )
    })
  }

  render = () => {
    this.mountInputs();
    return (
      <div className="Form">
        <form onSubmit={this.sendForm}>
            { this.inputs || (<div>Carregando</div>) }
            <input className="input" type="radio"/>
          <input type="submit" value="Envia"/>
        </form>
      </div>
    );
  }
}

export default Form;