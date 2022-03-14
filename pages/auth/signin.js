import React from 'react'
import { getProviders, signIn as login } from 'next-auth/react'
import Header from '../../components/Header'
const signIn = ({ providers }) => {
  return (
    <>
      <Header />
      <div className="-mt-56 flex min-h-screen flex-col items-center justify-center py-2 px-14">
        <img className="w-80" src="https://links.papareact.com/ocw" alt="" />
        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="rounded-lg bg-blue-500 p-3 text-white"
                onClick={() => login(provider.id, { callbackUrl: '/' })}
              >
                {' '}
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: {
      providers,
    },
  }
}

export default signIn
