import * as React from 'react'
import * as style from './style.css'
import { firebase } from './../../../functions/firebaseinit'

interface State {
  email: string
  text: string
  isLoading: boolean
}

export default class ContactForm extends React.Component<any, State> {
  constructor(props: any) {
    super(props)

    this.state = {
      email: '',
      text: '',
      isLoading: false
    }

    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleEmailChange(e: any) {
    this.setState({ email: e.target.value })
  }

  handleTextChange(e: any) {
    this.setState({ text: e.target.value })
  }

  handleSubmit(e: any) {
    this.setState({ isLoading: true })
    const sendContact = firebase.functions().httpsCallable('portfolio-contact')
    return sendContact({ email: this.state.email, text: this.state.text })
      .then(() => {
        alert('お問い合わせありがとうございました。いただいたフィードバックをもとに改善させていただきます。')
        this.setState({ isLoading: false })
        this.cleanForm()
        e.preventDefault()
      })
      .catch(() => {
        this.setState({ isLoading: false })
        e.preventDefault()
        alert('送信に失敗しました。')
      })
  }

  cleanForm() {
    this.setState({
      email: '',
      text: ''
    })
  }

  render() {
    return (
      <div className={ style.contactFormContainer }>
        <div className={ style.contactFormContainerInner }>
          <span className={ style.formLabel }>email</span>
          <input placeholder='メールアドレス' type='email' name='email' value={ this.state.email } onChange={ this.handleEmailChange } className={ style.nameForm } />
          <span className={ style.formLabel }>text <small>*必須</small></span>
          <textarea placeholder='お問い合わせ内容' name='content' value={ this.state.text } onChange={ this.handleTextChange } className={ `${style.nameForm} ${style.textForm}` } />
          <button className={ style.submitButton } disabled={ this.state.isLoading || this.state.email === '' || this.state.text === '' } onClick={ this.handleSubmit }>送信</button>
          { this.state.isLoading && <p>送信中...</p> }
        </div>
      </div>
    )
  }
}
