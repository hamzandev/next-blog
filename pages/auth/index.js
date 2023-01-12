import FormGroup from "../../components/FormGroup";
import FormLayout from "../../components/FormLayout";

export default function SignIn() {
  return (
    <FormLayout title="Sign In">
      <FormGroup
        type="email"
        placeholder="john.doe@gmail.com"
        label="Email Address"
      />
      <FormGroup
        placeholder="Enter your password"
        label="Password"
        type="password"
      />
      <button className="w-full py-3 bg-gradient-to-r from-indigo-500 to-primary rounded-md text-gray-100 mt-3">
        Sign In
      </button>
      <button className="lg:hidden block w-full py-3 text-gray-600 rounded-md bg-gray-100 mt-3">
        🔑 Sign In with Google
      </button>
    </FormLayout>
  );
}
