import React, { Component } from 'react';

export default class Register extends Component  {
   
    render() {
        return (
            <div className="register">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Sign Up</h1>
                            <p className="lead text-center">
                                Create your DevConnector account
                                 </p>
                            <form noValidate onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className='form-control form-control-lg green'
                                        placeholder="Name"
                                        name="name"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="email"
                                        className='form-control form-control-lg green'
                                        placeholder="Email Adress"
                                        name="email"
                                    />
                                    <small className="form-text text-muted">
                                        This site uses Gravatar so if you want a profile image, use
                                        a Gravatar email
                                         </small>
                                </div>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        className='form-control form-control-lg green'
                                        placeholder="password"
                                        name="password"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        className='form-control form-control-lg green'
                                        placeholder="Confirm password"
                                        name="password2"
                                    />
                                </div>
                                <input type="submit" className="btn btn-info btn-block mt-4" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}


