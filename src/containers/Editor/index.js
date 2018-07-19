import React, { Component } from 'react'

class Editor extends Component {
  state = {
    code: ''
  }
  
  handleEditorChange = ({target: { value: code }}) => {
    this.setState({code})
    console.log(code)
  }

  render() {
    return (
      <div className='editor'>
        <textarea
          className="editor-input"
          value={this.state.code}
          onChange={this.handleEditorChange}
          placeholder="Ingresa aqui tus instrucciones"
          />
      </div>
    )
  }
}

export default Editor