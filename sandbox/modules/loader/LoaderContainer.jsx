import React, {Component} from 'react';
import ExampleComponent from '../../components/ExampleComponent';

import Loader from 'Loader';


export default class LoaderContainer extends Component {
    render() {
        return (
            <ExampleComponent name='Loader'>
                <div className="row">
                    <div className='col-4'>
                        <Loader loading />
                    </div>
                    <div className='col-8'>
                        <pre className='light_block small'>
                            {`<Loader loading />`}
                        </pre>
                    </div>
                </div>
                <div className="row">
                    <div className='col-4'>
                        <Loader loading>
                            <div className='p32'>
                                Hello React Loader Component
                            </div>
                        </Loader>
                    </div>
                    <div className='col-8'>
                        <pre className='light_block small'>
{`<Loader loading>
    <div className='p32'>
        Hello React Loader Component
    </div>
</Loader>`}
                        </pre>
                    </div>
                </div>
            </ExampleComponent>
        );
    }
}