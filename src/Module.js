import React from 'react';
import {render} from 'react-dom';
import SearchForm from './SearchForm'
import UsersList from './UsersList'

class Module extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResults: []
        };
    }

    showResults(response){
        this.setState({
            searchResults: response.results
        })
    }

    search(URL){
        var _this = this;
        $.ajax({
            type: "GET",
            dataType: 'jsonp',
            url: URL,
            success: function(response){
                console.log('Response: ', response);
                /*this.showResults(response);*/
                this.setState({
                    searchResults: response
                });
                console.log('this: ', this);
                console.log('this.state.searchResults: ', this.state.searchResults);
            }.bind(this)
        });
    }

    render() {
        return (
            <div>
                <SearchForm users={this.props.users} search={this.search.bind(this)} />
                <br />
                <UsersList users={this.props.users} />
            </div>
        )
    }
}

export default Module;