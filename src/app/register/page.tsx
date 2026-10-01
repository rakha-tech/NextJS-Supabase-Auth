import { signup } from '../auth/actions'
export default function RegisterPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <form className="w-full max-w-md rounded-lg bg-white p-6 shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-gray-800">Daftar Akun Baru</h2>
        
        <label className="mb-2 block text-sm font-medium text-gray-700" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mb-4 w-full rounded border border-gray-300 p-2 text-black"
        />
        <label className="mb-2 block text-sm font-medium text-gray-700" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          className="mb-6 w-full rounded border border-gray-300 p-2 text-black"
        />
        <button
          formAction={signup}
          className="w-full rounded bg-green-600 py-2 font-semibold text-white hover:bg-green-700 transition"
        >
          Sign Up
        </button>
      </form>
    </div>
  )
}