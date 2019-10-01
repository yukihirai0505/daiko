import * as React from 'react'
import Head from 'next/head'
import { AppWithAuthentication } from '../../src/components/Layout'
import { getDaikoById } from '../../src/utils/api'
import { serverUrl } from '../../src/utils/api'

const DaikoDetail = props => {
  const { daiko, currentUrl } = props
  return (
    <AppWithAuthentication>
      <Head>
        <title>{daiko.title} | daiko</title>
        <meta name="description" content={daiko.body} />
        <meta name="theme-color" content="#fff" />
        <meta property="og:title" content={daiko.title} />
        <meta property="og:description" content={daiko.body} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="daiko" />
        <meta property="og:image" content={daiko.imageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="fb:app_id" content="385733339043909" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yabaiwebyasan" />
      </Head>
      <div className="bg-white pb-8 w-full pt-8">
        <div className="container mx-auto">
          <div className="text-center w-full pb-16">
            <div className="flex my-10">
              <div className="bg-white w-1/2 xs:w-full m-auto border-1  border-dashed border-gray-100 shadow-md rounded-lg overflow-hidden">
                <img
                  src={daiko.imageUrl}
                  alt=""
                  className="w-full object-cover object-center"
                />
                <div className="p-4">
                  <p className="mb-1 text-gray-900 font-semibold">
                    {daiko.title}
                  </p>

                  <span className="text-gray-700">{daiko.body}</span>
                  <br />
                  <span className="text-gray-700">場所: {daiko.place}</span>

                  <div className="mt-8 mb-3">
                    <a
                      href={`https://twitter.com/intent/tweet?text=${daiko.title}&hashtags=daiko&url=${currentUrl}`}
                      className="px-4 py-2 bg-teal-500 shadow-lg border rounded-lg text-white uppercase font-semibold tracking-wider focus:outline-none focus:shadow-outline hover:bg-teal-400 active:bg-teal-400"
                    >
                      Twitterにシェア
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <a href={`https://twitter.com/${daiko.twitterScreenName}`}>
              <button className="block bg-white text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                <span className="mr-2">
                  @{daiko.twitterScreenName}さんに直接聞いてみる
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentcolor"
                    d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"
                  ></path>
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>
    </AppWithAuthentication>
  )
}

DaikoDetail.getInitialProps = async context => {
  const props = {
    daiko: {},
    currentUrl: '',
  }
  const server = !!context.req

  if (server) {
    props.daiko = await getDaikoById({ id: context.query.id })
    console.log(context)
    props.currentUrl = `${serverUrl}${context.asPath}`
  }

  return props
}

interface Props {
  daiko
  currentUrl
}

async function mockFetchName(id) {
  return `page id is = ${id}`
}

export default DaikoDetail
