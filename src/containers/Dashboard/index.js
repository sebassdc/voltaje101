import React, { Component } from 'react'
import { logOut } from '../../redux/actions/user'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class Dashboard extends Component {
  state = {
    components: [],
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        components: [
          {
            "name": "AND",
            "id": "AND",
            "uid": "AND_0",
            "n": 0,
            "type": "primitive",
            "in": [
              "ain",
              "bin"
            ],
            "out": [
              "cout"
            ],
            "operations": [
              {
                "logical_operation": "a && b",
                "out": "cout"
              }
            ]
          },
          {
            "name": "OR",
            "id": "OR",
            "uid": "OR_0",
            "n": 0,
            "type": "primitive",
            "in": [
              "ain",
              "bin"
            ],
            "out": ["cout"],
            "operations": [
              { "logical_operation": "a || b", "out": "cout" }
            ]
          },
          {
            "name": "OR",
            "id": "OR",
            "uid": "OR_0",
            "n": 0,
            "type": "primitive",
            "in": [
              "ain",
              "bin"
            ],
            "out": ["cout"],
            "operations": [
              { "logical_operation": "a || b", "out": "cout" }
            ]
          },
          {
            "name": "OR",
            "id": "OR",
            "uid": "OR_0",
            "n": 0,
            "type": "primitive",
            "in": [
              "ain",
              "bin"
            ],
            "out": ["cout"],
            "operations": [
              { "logical_operation": "a || b", "out": "cout" }
            ]
          },
        ],
      })
    }, 2000)
  }

  handleEditorChange = ({ target: { value: code } }) => {
    this.setState({ code })
    console.log(code)
  }

  render() {
    if (!this.props.user) {
      return <Redirect to='/'/>
    }

    return (
      <div className='dashboard'>
        <div className='dashboard-title'>
          <h1>Dashboard</h1>
        </div>
        <div className='dashboard-body'>
          <div className='dashboard-body__container'>
            <div className='dashboard-component'>
              <span>+</span>
              <h1>New component</h1>
            </div>
            {this.state.components.length > 0 &&
              this.state.components.map((e, i) =>
                <div key={i} className='dashboard-component'>
                  <div className='dashboard-component__header'>
                    <h1>{e.uid}</h1>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </div>
    )
  }
}

export default connect(state=> ({ user: state.user.user }))(Dashboard)