import * as React from 'react'
import Routes from '../../src/constants/routes'
import { useRouter } from 'next/router'
import { AppWithAuthorization } from '../../src/components/Layout'
import SSR from '../SSR'

const DaikoDetail = props => {
  const router = useRouter()
  return (
    <AppWithAuthorization>
      <div className="bg-white pb-8 w-full pt-8">
        <div className="container mx-auto">
          <div className="text-center w-full pb-16">
            <p>{props.name}</p>
            <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold mt-8 py-2 px-4 rounded-full">
              Twitterにシェア
            </button>
          </div>
        </div>
      </div>
    </AppWithAuthorization>
  )
}

DaikoDetail.getInitialProps = async context => {
  const props = {
    name: '"next.js-typescript-starter-kit" from client',
  }
  const server = !!context.req

  if (server) {
    props.name = await mockFetchName(context.query.id)
  }

  return props
}

interface Props {
  name
}

async function mockFetchName(id) {
  return `page id is = ${id}`
}

export default DaikoDetail
