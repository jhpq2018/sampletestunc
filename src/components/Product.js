import React, {Component} from 'react';


const style = {
    TitleStyle:{
        fontSize:'16px',
        color:'black',
        textAlign:'center',
        padding:'5px'
    },
    ListStyle:{
        color:'black',
        fontSize:'10px',
        
    },
    PriceStyle:{
        color:'black',
        fontSize:'20px'
    }
};

class Product extends Component {
    constructor() {
        super();       
        this.state = {
            data:''
        }
    }

    componentDidMount() {
        fetch('products.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            this.setState({data:data});
        });
    }

    render () {
        const { TitleStyle } = style;

        return (
            <div>
                {
                    this.state.data.map(x => {
                        return (<div style={TitleStyle}>{x.Title}</div>)
                    })
                }
            </div>
        );
    } 
}

export default Product;