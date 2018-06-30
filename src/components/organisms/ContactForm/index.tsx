import * as React from 'react'
import Img from '../../atoms/Img'
import * as style from './style.css'
import { firebase } from './../../../stores/firebaseInit'

export default class ContactForm extends React.Component<any, any> {
  constructor(props: any) {
    super(props)

    this.state = { data: { value: '', email: '', title: '', content: '' } }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e: any) {
    let data = this.state.data

    switch (e.target.name) {
      default: break
      case 'name':
        data.name = e.target.value
        break
      case 'email':
        data.email = e.target.value
        break
      case 'title':
        data.title = e.target.value
        break
      case 'content':
        data.content = e.target.value
        break
    }
    this.setState({ data: data })
  }

  handleSubmit(e: any) {
    const db = firebase.firestore()
    const docRef = db.collection('contact').doc()
    docRef.set({
      name: this.state.data.name,
      email: this.state.data.email,
      title: this.state.data.title,
      content: this.state.data.content,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    this.cleanForm()
    alert('お問い合わせありがとうございました。いただいたフィードバックをもとに改善させていただきます。')
    e.preventDefault()
  }

  cleanForm() {
    this.setState({
      data:
      {
        name: '',
        email: '',
        title: '',
        content: ''
      }
    })
  }

  render() {
    return (
      <form className={style.contactFormContainer} onSubmit={this.handleSubmit}>
        <div className={style.contactFormContainerInner}>
          <label className={style.formLabel}>
            Name <small>*必須</small>
          </label>
          <input placeholder='お名前' type='text' name='name' value={this.state.data.name} onChange={this.handleChange} className={style.nameForm} />
          <label className={style.formLabel}>
            email
        </label>
          <input placeholder='メールアドレス' type='email' name='email' value={this.state.data.email} onChange={this.handleChange} className={style.nameForm} />
          <label className={style.formLabel}>
            title <small>*必須</small>
          </label>
          <input placeholder='タイトル' type='text' name='title' value={this.state.data.title} onChange={this.handleChange} className={style.nameForm} />
          <label className={style.formLabel}>
            content <small>*必須</small>
          </label>
          <input placeholder='お問い合わせ内容' type='text' name='content' value={this.state.data.content} onChange={this.handleChange} className={style.nameForm} />
          <input type='submit' value='送信' className={style.submitButton} />
        </div>
      </form>
    )
  }
}
