import Image from "next/image";
import Link from "next/link";
import FormGroup from "../../components/FormGroup";
import FormLayout from "../../components/FormLayout";

export default function SignUp() {
  return (
    <FormLayout title="Sign Up">
      <FormGroup
        type="email"
        placeholder="john.doe@gmail.com"
        label="Email Address"
      />
      <FormGroup placeholder="john.doe123" label="Username" />
      <FormGroup
        placeholder="Create your Awesome password"
        label="Password"
        type="password"
      />
      <button className="w-full py-3 bg-gradient-to-r from-indigo-500 to-primary rounded-md text-gray-100 mt-3">
        Sign Up
      </button>
      <button className="lg:hidden block w-full py-3 text-gray-600 rounded-md bg-gray-100 mt-3">
        🔑 Sign Up with Google
      </button>
    </FormLayout>
  );
}
