import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class UsersList extends React.Component {
    /* this doesnt get invoked on the server at all - this is a client side lifecycle method */
    componentDidMount() {
        console.log('inside componentDidMount for UsersList');

        this.props.fetchUsers();
    }

    render() {
        console.log('inside render for UsersList');
        return (
            <div>
                Here is a big list of users
                <ul>
                    {this.renderUsers()}
                </ul>
            </div>
        );
    }

    renderUsers() {
        console.log(`in renderUsers`);

        return this.props.users.map( (user) => {
            console.log(`i am inside renderUsers and user name is ${user.name}`);
            return <li key={user.id}>{user.name}</li>
        });
    }
}

function mapStateToProps(state) {
    console.log('inside mapToState for UsersList');

    return {users: state.users};
}

/* this is the function that provides data for this component in order for it to be rendered.
This is for server side only
*/
function loadData(store) {
    // manual call of a action creator
    // not using connect() because it communicates with the Provider.  We want to work with redux
    // before rendering anything
    return store.dispatch(fetchUsers());
}

export default connect(mapStateToProps, {fetchUsers})(UsersList);
export { loadData };
