import React from 'react';
import {render} from 'react-dom';
import SearchForm from './SearchForm'
import UsersList from './UsersList'

//let userNames = ['defunkt', 'GrahamCampbell', 'fabpot'];

class Module extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    showResults(response){
        this.setState({
            searchResults: response.results
        })
    }

    search(names){
        let requests = [];
        let _this = this;
        for (var i = 0; i < names.length; i++) {
            let targetUrl = 'https://api.github.com/users/' + names[i];
            requests.push($.ajax(targetUrl));
        }

        $.when.apply($, requests)
            .done(function () {
                console.log('arguments: ', arguments); //it is an array like object which can be looped
                let tempArray = [];
                $.each(arguments, function (i, data) {
                    //console.log(data);
                    let obj = data[0] || data;
                    console.log(obj);
                    console.log(obj.name);
                    tempArray.push({
                        id: obj.id,
                        name: obj.name,
                        stars: 200
                    });
                });

                console.log('tempArray: ', tempArray);

                _this.setState({
                    users: tempArray
                });
            })
            .fail(function(err, msg) {
                console.log(msg);
                console.log(err.responseText);
            });
    }

    render() {
        return (
            <div>
                <SearchForm users={this.state.users} search={this.search.bind(this)} />
                <br />
                <UsersList users={this.state.users} />
            </div>
        )
    }
}

export default Module;