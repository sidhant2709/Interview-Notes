import React from 'react'

const withFetch = (WrappedComponent) => {

    class WithFetch extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                movies: []
            };
        }
        componentDidMount(){
            fetch(`https://json-faker.onrender.com/movies`)
            .then(response => response.json())
            .then((data) => {
                this.setState({movies:data.movies})
            });
        }
        render(){
            return(
                <>
                    {this.state.movies.length > 0 && (
                        <WrappedComponent movies={this.state.movies} />
                    )}
                </>
            );
        }
    };
    // It is done for easier debugging
    WithFetch.displayName = `WithFetch(${WithFetch.name})`;

    return WithFetch;
  
}

export default withFetch