import React from 'react'

import { API } from "./API";

import Product from "./Product";

class Config extends React.Component {
    
    state = {
        ecomSample: []
    }

    componentDidMount() {
        API.getEntries()
            .then(
                (res) => {
                    this.setState(
                        {
                            ecomSample: res.items
                        }
                    )
                }
            )
            .catch(console.error)
    }

    render() {
        return (
            <section>
                <Product
                    product= {
                        this.state.ecomSample
                    }
                />
            </section>
        )
    }
}

export default Config


