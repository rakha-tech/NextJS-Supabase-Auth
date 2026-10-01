import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import { signout } from '../auth/actions'
export default async function DashboardPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) {
    redirect('/login')
  }
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-lg rounded-xl bg-white p-8 shadow-lg">
        <h1 className="mb-2 text-3xl font-bold text-gray-800">Dashboard</h1>
        <p className="mb-6 text-gray-600">Selamat datang kembali!</p>
        <div className="mb-6 rounded-lg bg-gray-50 p-4 border border-gray-200">
          <p className="text-sm font-semibold text-gray-500">ID Pengguna:</p>
          <p className="text-sm font-mono text-gray-800 break-all">{user.id}</p>
          <p className="mt-3 text-sm font-semibold text-gray-500">Email Terdaftar:</p>
          <p className="text-sm text-gray-800">{user.email}</p>
        </div>
        <form>
          <button
            formAction={signout}
            className="w-full rounded-md bg-red-600 py-2 font-medium text-white hover:bg-red-700 transition"
          >
            Logout / Keluar
          </button>
        </form>
      </div>
    </div>
  )
}