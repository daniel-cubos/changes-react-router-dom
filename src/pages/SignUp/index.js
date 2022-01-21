import { useParams } from 'react-router-dom';

function SignUp() {
  const params = useParams();

  console.log(params);
  return (
    <div className="container">
      <h1>SignUp</h1>
    </div>
  );
}
export default SignUp;