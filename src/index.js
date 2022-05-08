import React from 'react';
import ReactDOM from 'react-dom';
import { FormBuilder, Components } from 'react-formio';
import './styles/styles.scss';
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
            custom: {
              title: 'Custom',
              weight: 2,
              components: {
                ratingCustomComp: true,
              },
            },
          },
        }}
      />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
