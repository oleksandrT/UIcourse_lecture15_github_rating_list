import React from 'react';
import {render} from 'react-dom';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            users: props.users
        };
    }

    searchUsers(event) {
        event.preventDefault();
        let names = this.refs.names.value;
        var namesArray = names.split(/\W+/);
        //console.log(names);
        console.log('User names array: ', namesArray);
        //console.log(namesArray[0]);
        //this.props.search('http://date.jsontest.com/');
        this.props.search(namesArray);
    }
    
    render() {
        return (
            <form className="form-inline" onSubmit={this.searchUsers.bind(this)}>
                <input type="text" ref="names" placeholder="Enter users' names" className="form-control" />
                <button type="submit" className="btn btn-default">Search</button>
            </form>
        )
    }
}

export default SearchForm;