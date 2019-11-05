import React, { Component } from 'react';
import './add.css';
import { connect } from 'react-redux';

class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {},
            errors: {}
        }
    }

    onChangeHandler = (field, e)=>{
       let fields = this.state.fields;
       fields[field] = e.target.value;
       this.setState({fields});
    }

    handleValidation = ()=>{
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if(!fields["title"]){
            formIsValid = false;
            errors["title"] = "Required";
         }
         if(!fields["author"]){
            formIsValid = false;
            errors["author"] = "Required";
         }
         if(!fields["category"]){
            formIsValid = false;
            errors["category"] = "Required";
         }
         if(!fields["length"]){
            formIsValid = false;
            errors["length"] = "Required";
         }
        
        this.setState({
            errors: errors
        })
        return formIsValid;
    }

    onSubmitHandler = ()=>{
        if(this.handleValidation()){
            this.props.addNewRow(this.state.fields);
            this.props.history.push('/');
        }
    }
    
    onCancel = ()=>{
        return this.props.history.push('/');
    }

    render() {
        return (<>
            <div className='container'>
                <h1>Add</h1>
                <form>
                    <div className='form-group'>
                        <label>Title</label>
                        <input onChange={(e)=>this.onChangeHandler('title', e)} className='form-control' name='title' value={this.state.fields['title']} placeholder='Title'></input>
                        <p className='text-danger'>{this.state.errors['title']}</p>
                    </div>
                    <div className='form-group'>
                        <div>Author</div>
                            <div className='field'>
                                <select onChange={(e)=>this.onChangeHandler('author', e)} name='author' value={this.state.fields['author']} className='form-control'>
                                    <option></option>
                                    <option value='corey-house'>Corey House</option>
                                    <option value='scott-allen'>Scott Allen</option>
                                    <option value='dan-whalin'>Dan Whalin</option>
                                </select>
                            </div>
                            <p className='text-danger'>{this.state.errors['author']}</p>
                        </div>
                    <div className='form-group'>
                        <label>Category</label>
                        <input onChange={(e)=>this.onChangeHandler('category', e)} name='category' value={this.state.fields['category']} className='form-control' placeholder='Category'></input>
                        <p className='text-danger'>{this.state.errors['category']}</p>
                    </div>
                    <div className='form-group'>
                        <label>Length</label>
                        <input onChange={(e)=>this.onChangeHandler('length', e)} name='length' value={this.state.fields['length']} className='form-control' placeholder='Length'></input>
                        <p className='text-danger'>{this.state.errors['length']}</p>  
                    </div>
                </form>
                <div>
                    <button onClick={this.onSubmitHandler} type='submit' className='btn btn-primary'>
                        <i className='fa fa-paper-plane-o' area-hidden='true'></i> Submit
                    </button>
                    <button type='button' disabled className='btn btn-default btn-space bg-secondary text-white '>Clear Values</button>
                    <button onClick={this.onCancel} type='button' className='btn btn-default btn-space bg-secondary text-white '>Cancel</button>
                </div>
            </div>
            </>
        )
    }
}

const mapStateToProps = (state)=>{
    return ({
        data: state.data
    })
}

const mapDispatchToProps = (dispatch)=>{
    return ({
        addNewRow: (data)=>{dispatch({type: 'ADD_DATA', payload: data})} 
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Add);
