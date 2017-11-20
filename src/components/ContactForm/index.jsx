import React from 'react'

export default class ContactForm extends React.Component {
  state = {
    selectedForm: null,
    showStep: false,
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

  showNextStep = () => this.setState({ showStep: !this.state.showStep })

  render() {
    return (
      <form name="waffle-contact-form" onSubmit={this.handleSubmit}>
        <MainForm onChangeAction={this.chooseForm} />
        <button
          onClick={this.showNextStep}
          type="button"
          className="btn btn--purple text-uppercase"
        >
          Next
        </button>
        <ForIdea
          formValues={this.state}
          onChangeAction={this.handleChange}
          selectedForm={this.state.selectedForm}
          showForm={this.state.showStep}
        />
        <ForCoffee
          formValues={this.state}
          onChangeAction={this.handleChange}
          selectedForm={this.state.selectedForm}
          showForm={this.state.showStep}
        />
        <ForWorld
          formValues={this.state}
          onChangeAction={this.handleChange}
          selectedForm={this.state.selectedForm}
          showForm={this.state.showStep}
        />
        <div>
          <button type="submit">Send</button>
        </div>
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

const ForIdea = ({ formValues, onChangeAction, selectedForm, showForm }) => {
  const { email } = formValues
  return (
    <div
      className={`form-group ${selectedForm === 'forIdea' && showForm
        ? null
        : 'visually-hidden'}`}
    >
      <label>Email address</label>
      <input
        type="email"
        className="form-control"
        name="email"
        placeholder="Enter email"
        value={email}
        onChange={onChangeAction}
      />
    </div>
  )
}

const ForCoffee = ({ formValues, onChangeAction, selectedForm, showForm }) => {
  const { user } = formValues
  return (
    <div
      className={`form-group ${selectedForm === 'forCoffee' && showForm
        ? null
        : 'visually-hidden'}`}
    >
      <label>User Name</label>
      <input
        type="text"
        className="form-control"
        name="user"
        placeholder="Enter Name"
        value={user}
        onChange={onChangeAction}
      />
    </div>
  )
}

const ForWorld = ({ formValues, onChangeAction, selectedForm, showForm }) => {
  const { place } = formValues
  return (
    <div
      className={`form-group ${selectedForm === 'forWorld' && showForm
        ? null
        : 'visually-hidden'}`}
    >
      <label>Place</label>
      <input
        type="text"
        className="form-control"
        name="place"
        placeholder="Enter Place"
        value={place}
        onChange={onChangeAction}
      />
    </div>
  )
}

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}
