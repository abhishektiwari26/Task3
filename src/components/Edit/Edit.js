import React, { Component } from 'react';
import { connect } from 'react-redux';

class Edit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fields: {},
            errors: {}
        }
    }

    componentDidMount = ()=>{
        let fields = this.state.fields;
        fields['title'] = this.props.data[this.props.indexOfDataToEdit].title
        fields['author'] = this.props.data[this.props.indexOfDataToEdit].author
        fields['length'] = this.props.data[this.props.indexOfDataToEdit].length
        fields['category'] = this.props.data[this.props.indexOfDataToEdit].category
        this.setState({
           fields: fields
        })
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

    onChangeHandler = (field, e)=>{
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({fields});
    }

    onSubmitHandler = ()=>{
        if(this.handleValidation()){
            const data = this.props.data;
            data[this.props.indexOfDataToEdit] = {...this.state.fields};
            this.props.updateData(data);
            return this.props.history.push('/');
        }  
    }

    onCancel = ()=>{
        return this.props.history.push('/');
    }

    render() {
        return (
            <>
            <div className='container'>
                <h1>Edit</h1>
                <form>
                    <div className='form-group'>
                        <label>Title</label>
                        <input onChange={(e)=>this.onChangeHandler('title', e)} className='form-control' name='title' value={this.state.fields['title']}></input>
                        <p className='text-danger'>{this.state.errors['title']}</p>
                    </div>
                    <div className='form-group'>
                        <div>Author</div>
                            <div className='field'>
                                <select onChange={(e)=>this.onChangeHandler('author', e)} className='form-control' name='author' value={this.state.fields['author']}>
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
                        <input onChange={(e)=>this.onChangeHandler('category', e)} className='form-control' name='category' value={this.state.fields['category']}></input>
                        <p className='text-danger'>{this.state.errors['category']}</p>
                    </div>
                    <div className='form-group'>
                        <label>Length</label>
                        <input onChange={(e)=>this.onChangeHandler('length', e)} className='form-control' name='length' value={this.state.fields['length']}></input>
                        <p className='text-danger'>{this.state.errors['length']}</p>  
                    </div>
                </form>
                <div>
                    <button onClick={() => this.onSubmitHandler()} type='submit' className='btn btn-primary'>
                        <i className='fa fa-paper-plane-o' area-hidden='true'></i> Submit
                    </button>
                    <button onClick={this.onCancel} type='button' className='btn btn-default btn-space bg-secondary text-white '>Cancel</button>
                </div>
            </div>
            </>
        )
    }
}

const mapStateToProps = (state)=>{
    return ({
        data: state.data,
      indexOfDataToEdit: state.indexOfDataToEdit
    })
}

const mapDispatchToProps = (dispatch)=>{
    return ({
        updateData: (data)=>{dispatch({type: 'UPDATE_DATA', payload: data})} 
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
