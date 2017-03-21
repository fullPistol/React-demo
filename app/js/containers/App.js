import React, { Component } from 'react';
import 'whatwg-fetch';
import { 
    Greeter, 
    CommonFrom, 
    Nav, 
    ChannelTop, 
    RollPic 
} from '../components';


export default class App extends Component {

    state = {
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'AiyWuByWklrrUDlFignR']
    }
  

    //当组件被渲染的时候,react会调用的
    componentDidMount = () => {

        // fetch('../mork/pic.json').then(response => response.json())
        //     .then(data => {
        //         console.log(data);
        //     }).catch(e => {
        //         console.log('error');
        //     })

    }
  
    render() {
        //每个render都有一个自己的 this.state,this.props
        let { data } = this.state;

        return (

            <div className="geeter">
                <Nav />
                <ChannelTop />
                <RollPic data={data}/>
            </div>
      
        )
    }
}