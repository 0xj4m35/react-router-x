import React, { Component } from 'react'

export const RouterContext = React.createContext('')
export default class Router extends Component {

    state = {
        path: '/'
    }

    componentDidMount() {
        window.addEventListener('popstate', () => {
            const path = window.location.pathname
            this.setState({path})
        })
    }

    componentWillUnmount() {
        window.removeEventListener('popstate')
    }

    setPath = newPath => {
        if (newPath !== this.state.path) {
            window.history.pushState({}, '', newPath) 
            this.setState({path: newPath})
        } 
    }

    render() {
        return(
            <RouterContext.Provider value={ this.setPath }>
                {
                    React.Children.map(this.props.children, child => React.cloneElement(child))
                }
            </RouterContext.Provider>
        ) 
    }
}

export class Route extends Component {
    render() {
        const { path, component } = this.props
        return path === window.location.pathname && component
    }
}

export class Link extends Component {
    render() {
        return <RouterContext.Consumer>
            {
                setPath => (
                    <a onClick={() => setPath(this.props.to)}>{this.props.children}</a> 
                )
            }
        </RouterContext.Consumer>
    }
}