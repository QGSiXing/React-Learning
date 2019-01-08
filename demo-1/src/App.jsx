import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeNum } from '@/actions/couter'

const stateKey = 'cout';
class App extends Component{

    handleChange = () => {
        console.log(this.props)
        let va = {
            status: 'cout',
            num: this.props.num
        } 
        this.props.handleBBB(va)
    }

    render(){
        return (
            <div>
                {this.props.num}
                <button onClick = {this.handleChange}>添加</button>
            </div>
        )
    }
    
}

const mapStateToProps = (state) => ({
    num: state[stateKey].num || 0
})
  
const mapDispatchToProps = (dispatch) => bindActionCreators({
    handleBBB: changeNum,
}, dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(App) 