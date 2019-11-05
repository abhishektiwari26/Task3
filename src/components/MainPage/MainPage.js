import React, { Component } from 'react';
import { connect } from 'react-redux';
import './mainpage.css';

class MainPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
             currentActiveIndex: null,
             isAnyRowActive: false,
             currentRowData: null
        }
    }
    
    onClickHandlerOfAdd = ()=>{
        return this.props.history.push('/add');
    }

    onClickHandlerOfEdit = (index)=>{
        if(!this.state.isAnyRowActive){
            return
        }
        this.props.updateIndexToEdit(index)
        return this.props.history.push('/edit');
    }

    onRow = (item, index)=>{
        this.setState({
            currentActiveIndex: index,
            isAnyRowActive: true,
            currentRowData: item
        })
    }

    createList = (data)=>{
        const elements = data.map((item, index) => {
            return (
                <tr key={index} onClick={() => this.onRow(item, index)} className={`${this.state.currentActiveIndex === index ? 'row-background' : null}`}>
                    <td>{item.title}</td>
                    <td>{item.length}</td>
                    <td>{item.category}</td>
                    <td>{item.author}</td>
                </tr>
            )
        })
        return elements;
    }

    render() {
        const data = this.props.data;
                     
        return (
           <>
                <div className='container-fluid'>
                    <div className='row'>
                        <h1>Courses</h1>
                    </div>
                    <div className='row'>
                        <button onClick={this.onClickHandlerOfAdd} className='btn btn-primary m-2'><i className="fa fa-plus" aria-hidden="true"></i> Add</button>
                        <button onClick={() => this.onClickHandlerOfEdit(this.state.currentActiveIndex)} className='btn btn-warning m-2'><i className="fa fa-edit" aria-hidden="true"></i> Edit</button>
                        {/* <button className='btn btn-danger m-2'><i class="fa fa-trash" aria-hidden="true"></i> Delete</button> */}
                    </div>
                    <div className='row'>
                        <table className='table table-bordered'>
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Length</th>
                                    <th>Category</th>
                                    <th>Author</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.createList(data)}
                            </tbody>
                        </table>
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
      updateIndexToEdit: (index)=>{dispatch({ type: 'UPDATE_INDEX', payload: index})}
    })
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
