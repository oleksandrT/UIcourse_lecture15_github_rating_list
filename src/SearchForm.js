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
        var namesArray = names.trim().split(/\W+/);
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