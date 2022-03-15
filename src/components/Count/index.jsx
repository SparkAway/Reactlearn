import React, {Component} from 'react';
import './index.less'
let temp = '';
let temp2 = '';
class Count extends Component {
    // //加
    // addhandle= ()=>{
    //    const value = this.state.input_number;
    //     this.props.addnumber(value*1);
    // }
    // dechandle=()=>{
    //     const value = this.state.input_number;
    //     this.props.dec(value*1);
    // }
    // multihandle=()=>{
    //     const{value}=this.state.input_number;
    //     this.props.multi(value*1);
    // }
    // divihandle=()=>{
    //     const{value} = this.state.input_number;
    //     this.props.divi(value*1);
    // }
    getresult=()=>{
        if(this.state.do==='+'){
            const sum=this.state.input_number+this.state.input_number2;
            temp = '';
            temp2 = '';
            this.setState({input_number:sum,input_number2:'',do:''});
        }
        if(this.state.do==='-'){
            const sum = this.state.input_number-this.state.input_number2;
            temp = '';
            temp2 = '';
            this.setState({input_number:sum,input_number2:'',do:''});
        }
        if(this.state.do==='*'){
            const sum = this.state.input_number*this.state.input_number2;
            temp = '';
            temp2 = '';
            this.setState({input_number:sum,input_number2:'',do:''});
        }
        if(this.state.do==='/'){
            const sum = this.state.input_number/this.state.input_number2;
            temp = '';
            temp2 = '';
            this.setState({input_number:sum,input_number2:'',do:''});
        }
    }
    clear=()=>{
        temp = '';
        temp2 = '';
        this.setState({input_number:'0',input_number2:'',do:''});
    }
    handleInput=(value)=> {
        return ()=>{
            //没有符号的时候
            if(this.state.do===''){
                temp += value;
                this.setState({input_number: Number(temp)})
            }
            //有符号的时候
            else{
                temp2 += value;
                this.setState({input_number2:Number(temp2)})
            }
        }
    }
    handleSig=(sign)=>{
        //设置符号
        return()=>{
            this.setState({do:sign})
        }
    }
    state={
        //记录你点击的数字的
        input_number:'0',
        input_number2:'',
        do:'',
        number:[0,1,2,3,4,5,6,7,8,9]
    }
    render() {
        let number= this.state.number.map((item,index)=>{
                return (
                    <li key={item}>
                        <button onClick={this.handleInput(index)}>{item}</button>
                    </li>
                )
        })
        return (
            <div className="Count">
                <div className="Count_head">
                    <h1>{this.state.input_number} {this.state.do}&nbsp;{this.state.input_number2}</h1>
                </div>
                <div className="Count_main">
                    <div className="Count_do">
                        <button className="temp" onClick={this.handleSig('+')}>+</button>
                        <button className="temp" onClick={this.handleSig('-')}>-</button>
                        <button className="temp" onClick={this.handleSig('*')}>*</button>
                        <button className="temp" onClick={this.handleSig('/')}>/</button>
                        <button className="temp"  onClick={this.getresult}>=</button>
                        <button className="temp"  onClick={this.clear}>C</button>
                    </div>
                    <div className="number">
                       <ul>
                           {
                               number
                           }
                       </ul>
                    </div>

                </div>

            </div>
        );
    }
}

export default Count;
