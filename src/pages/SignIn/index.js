import { useNavigate } from 'react-router-dom';

function SignIn() {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate('/test');
  }, 1000);

  return (
    <div className="container">
      <h1>SignIn</h1>
    </div>
  );
}
export default SignIn;