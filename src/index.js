import React from 'react';
import ReactDOM from 'react-dom';
import { FormBuilder, Components } from 'react-formio';
import './styles.css';
import components from './Custom';

Components.setComponents(components);

function App() {
  return (
    <div className="App">
      <FormBuilder
        form={{ display: 'form' }}
        onChange={(schema) => console.log(schema)}
        options={{
          builder: {
            basic: {
              components: {
                toggleCustomComp: true,
                ratingCustomComp: true,
              },
            },
            advanced: false,
          },
        }}
      />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
