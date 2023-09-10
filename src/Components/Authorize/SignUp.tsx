import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import facebook from '../../Image/facebook.svg';
import github from '../../Image/github.svg';
import google from '../../Image/google.svg';

export const SignUp = () => {
	return (
		<>
			<div className="d-flex flex-column auth-text ">
				<div>
					<h1 className="mx-auto" style={{ marginTop: '25%', fontSize: '6rem' }}>
						Roll the Carpet
					</h1>

					<div>
						<Link className="mt-3 mx-auto link-button" to={'/login'}>
							Already Registered?
						</Link>
					</div>
				</div>
			</div>
			<div className="auth-window">
				<Form id="form" className="m-auto">
					<h3 id="big-label">Signup</h3>
					<h5 className="mb-4	">Just some details to get you in.</h5>
					<Form.Group className="mb-3" controlId="formBasicUsername">
						<input className="field" type="username" placeholder="Username" />
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<input className="field" type="email" placeholder="Email address" />
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
						<input className="field" type="password" placeholder="Password" />
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicPassword">
						<input className="field" type="password" placeholder="Repeat Password" />
					</Form.Group>

					<Button
						variant="primary"
						type="submit"
						id="button-signup"
						className="login-button w-100 mt-2">
						Submit
					</Button>

					<div className="mt-4" style={{ borderTop: '3px solid #4D4D4D' }}></div>
					<div className="mx-auto d-flex justify-content-center gap-3 mt-3">
						<img src={google}></img>
						<img src={github}></img>
						<img src={facebook}></img>
					</div>
				</Form>
			</div>
			<div id="ellipse-1-signup" className="ellipse"></div>
			<div id="ellipse-2-signup" className="ellipse"></div>
		</>
	);
};

export default SignUp;
