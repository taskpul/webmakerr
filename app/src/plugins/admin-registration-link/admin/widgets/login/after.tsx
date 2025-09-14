import { Link } from "react-router-dom"

const RegisterLink = () => {
  return (
    <div className="text-ui-fg-subtle text-center mt-4">
      <Link
        to="/register"
        className="text-ui-fg-interactive hover:text-ui-fg-interactive-hover focus-visible:text-ui-fg-interactive-hover font-medium"
      >
        Register a new admin
      </Link>
    </div>
  )
}

export default RegisterLink
