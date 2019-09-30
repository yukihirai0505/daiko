import * as React from 'react'
import Routes from '../constants/routes'
import Router from 'next/router'

export default () => (
  <div className="bg-white pb-8 w-full pt-8">
    <div className="container mx-auto">
      <div className="text-center w-full pb-16">
        <p className="sm:text-3xl text-2xl text-black-800 pt-4 xl:w-1/2 mx-auto">
          SNSで代行を依頼/請負する
        </p>
        <button
          onClick={() => Router.push(Routes.NEW_DAIKO)}
          className="bg-teal-500 hover:bg-teal-700 text-white font-bold mt-8 py-2 px-4 rounded-full"
        >
          代行(依頼/請負)を作成
        </button>
      </div>
    </div>
  </div>
)
