import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const ForgotPassword = () => {
	return (
		<>
			<div className="d-flex flex-column auth-text ">
				<div>
					<h1 className="mx-auto" style={{ marginTop: '25%', fontSize: '6rem' }}>
						No Worries
					</h1>

					<div>
						<Link className="mt-3 mx-auto link-button" to={'../login'}>
							Take me back
						</Link>
					</div>
				</div>
			</div>
			<div className="auth-window">
				<Form id="form" className="m-auto">
					<h3 id="big-label">Forgot Password ?</h3>
					<h5 className="mb-4	">Please enter you’re email</h5>

					<Form.Group className="mb-3" controlId="formBasicEmail">
						<input className="field" type="email" placeholder="Email address" />
					</Form.Group>

					<Button
						variant="primary"
						type="submit"
						id="button-forgot"
						className="login-button w-100 mt-2">
						Submit
					</Button>
				</Form>
			</div>
			<div id="ellipse-1-forgot" className="ellipse"></div>
			<div id="ellipse-2-forgot" className="ellipse"></div>
		</>
	);
};
