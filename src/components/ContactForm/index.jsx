import React from 'react'

export default class ContactForm extends React.Component {
  state = {
    selectedForm: null,
    formStep: null,
    whyContact: '',
    email: '',
    user: '',
    place: '',
  }

  handleSubmit = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'waffle-contact-form', ...this.state }),
    })
      .then(() => console.log('Success!'))
      .catch(error => alert(error))

    e.preventDefault()
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  chooseForm = e => this.setState({ selectedForm: e.target.value })

  renderForm = () => {
    let formStep
    console.log(this.state.selectedForm)
    if (this.state.selectedForm === 'forIdea') {
      formStep = <ForIdea onChangeAction={this.handleChange} />
    } else if (this.state.selectedForm === 'forCoffee') {
      formStep = <ForCoffee onChangeAction={this.handleChange} />
    } else {
      formStep = <ForWorld onChangeAction={this.handleChange} />
    }
    this.setState({ formStep })
  }

  render() {
    let formStep = this.state.formStep
    return (
      <form name="waffle-contact-form" onSubmit={this.handleSubmit}>
        <MainForm onChangeAction={this.chooseForm} />
        <button
          onClick={this.renderForm}
          type="button"
          className="btn btn--purple text-uppercase"
        >
          Next
        </button>
        {formStep ? (
          <div>
            {formStep}
            <button type="submit">Send</button>
          </div>
        ) : null}
      </form>
    )
  }
}

const MainForm = ({ onChangeAction }) => (
  <div>
    <div className="form-check">
      <label className="form-check-label">
        <input
          className="form-check-input"
          type="radio"
          name="whyContact"
          value="forIdea"
          onClick={onChangeAction}
        />
        Your amazing idea
      </label>
    </div>
    <div className="form-check">
      <label className="form-check-label">
        <input
          className="form-check-input"
          type="radio"
          name="whyContact"
          value="forCoffee"
          onClick={onChangeAction}
        />
        Meeting for a coffee
      </label>
    </div>
    <div className="form-check">
      <label className="form-check-label">
        <input
          className="form-check-input"
          type="radio"
          name="whyContact"
          value="forWorld"
          onClick={onChangeAction}
        />
        Rule the world
      </label>
    </div>
  </div>
)

const ForIdea = ({ onChangeAction }) => (
  <div className="form-group">
    <label>Email address</label>
    <input
      type="email"
      className="form-control"
      name="email"
      placeholder="Enter email"
      onChange={onChangeAction}
    />
  </div>
)

const ForCoffee = ({ onChangeAction }) => (
  <div className="form-group">
    <label>User Name</label>
    <input
      type="text"
      className="form-control"
      name="user"
      placeholder="Enter Name"
      onChange={onChangeAction}
    />
  </div>
)

const ForWorld = ({ onChangeAction }) => (
  <div className="form-group">
    <label>Place</label>
    <input
      type="text"
      className="form-control"
      name="place"
      placeholder="Enter Place"
      onChange={onChangeAction}
    />
  </div>
)

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}
