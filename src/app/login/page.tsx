import { login } from '../auth/actions'
export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ message?: string }>
}) {
  const params = await searchParams
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <form className="w-full max-w-md rounded-lg bg-white p-6 shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-gray-800">Login ke Aplikasi</h2>
        {params.message && (
          <div className="mb-4 rounded bg-blue-50 p-3 text-sm text-blue-700">
            {params.message}
          </div>
        )}
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
          formAction={login}
          className="w-full rounded bg-blue-600 py-2 font-semibold text-white hover:bg-blue-700 transition"
        >
          Log In
        </button>
      </form>
    </div>
  )
}