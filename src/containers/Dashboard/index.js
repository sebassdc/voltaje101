import React, { Component } from 'react'
import Modal from './Modal'
import { connect } from 'react-redux'
import { createNewComponent } from '../../redux/actions/components'
import { retrieveComponents } from '../../redux/actions/components'

class Dashboard extends Component {
  state = {
    mode: 'new', // 'new',  'edit'
    // components: [],
    newName: '',
    uid: '',
    modalShowed: false
  }

  componentDidMount = () => {
    this.props.dispatch(retrieveComponents())
  }

  handleChange = ({ target: { value, name} }) => {
    this.setState({ [name]: value })
  }

  modalOpenNewComponent = () => {
    this.setState({
      mode: 'new',
      modalShowed: !this.state.modalShowed
    })
  }

  modalOpenEditComponent = (uid) => {
    this.setState({
      mode: 'edit',
      modalShowed: !this.state.modalShowed
    })
  }
  modalClose = () => {
    this.setState({
      newName: '',
      uid: '',
      modalShowed: false,
    })
  }

  addComponent = () => {
    this.props.dispatch(createNewComponent({
      component: {
        name: this.state.newName,
        uid: this.state.uid
      }
    }))
    this.modalClose()
  }

  render() {
    console.log('components on dashboard', this.props.components)
    return (
      <div className='dashboard'>
        <Modal showed={this.state.modalShowed}>
          <div className='dashboard-newcomp-header'>
            <h1>
              {({
                'edit': 'Edit',
                'new': 'New',
              })[this.state.mode]} Component
            </h1>
            <button
              onClick={this.modalClose}
              className='modal-x'
              >
              X
            </button>
          </div>
          <div className='dashboard-newcomp-body'>
            <label>Nombre: </label>
            <input
              name='newName'
              placeholder='Nombre'
              value={this.state.newName}
              onChange={this.handleChange}
              />
            <label>Uid: </label>
            <input
              name='uid'
              placeholder='Uid'
              value={this.state.uid}
              onChange={this.handleChange}
              />
            <button onClick={this.addComponent}>AGREGAR</button>
          </div>
        </Modal>
        <div className='dashboard-title'>
          <h1>Dashboard</h1>
        </div>
        <div className='dashboard-body'>
          <div className='dashboard-body__container'>
            <div
              className='dashboard-component'
              onClick={this.modalOpenNewComponent}
              >
              <span>+</span>
              <h1>New component</h1>
            </div>
            {this.props.components.length > 0 &&
              this.props.components.map((e, i) =>
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

export default connect(state => ({
  components: state.components.components,
  user: state.user.user
}))(Dashboard)