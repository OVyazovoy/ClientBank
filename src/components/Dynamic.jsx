import React, { Component } from 'react'

class Dynamic extends Component {
    constructor(state){
        super(state);
        console.log(state);
    }

    render() {
        return <div>
            Этот компонент загружен динамически
        </div>
    }
}

export default Dynamic
