import * as React from 'react'
import Routes from '../../src/constants/routes'
import Router from 'next/router'
import { AppWithAuthorization } from '../../src/components/Layout'
import { connect } from 'react-redux'

const createNewDaiko = authUser => {
  console.log(authUser)
  // TODO: API Request with Firebase IdToken
  // TODO: Navigate Created Daiko Page
  Router.push(Routes.DAIKO_DETAIL('hogehoge'))
}

const formFields = [
  {
    id: 'title',
    text: 'タイトル',
    placeholder: '代行タイトルを入力してください',
    isText: false,
  },
  {
    id: 'body',
    text: '詳細',
    placeholder:
      'ex) あなたの代わりにタピオカの行列に並びます！/私の代わりにタピオカの行列に並んでください！',
    isText: true,
  },
  {
    id: 'place',
    text: '場所',
    placeholder: 'ex) 東京/原宿のタピオカ屋さん',
    isText: false,
  },
  {
    id: 'price',
    text: '代金',
    placeholder: 'ex) 無料/スマイル/100円',
    isText: false,
  },
]

const Create = ({ authUser }) => {
  return (
    <AppWithAuthorization>
      <div className="container mx-auto h-full flex justify-center items-center mt-8">
        <div className="w-full max-w-xl">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            {formFields.map((field, key) =>
              field.isText ? (
                <div className="mb-6" key={key}>
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor={field.id}
                  >
                    {field.text}
                  </label>
                  <textarea
                    className="h-40 shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id={field.id}
                    placeholder={field.placeholder}
                  />
                  <p className="text-red-500 text-xs italic">
                    Please choose a password.
                  </p>
                </div>
              ) : (
                <div className="mb-4" key={key}>
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor={field.id}
                  >
                    {field.text}
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id={field.id}
                    type="text"
                    placeholder={field.placeholder}
                  />
                </div>
              )
            )}
            <div className="flex items-center justify-between">
              <button
                className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={() => createNewDaiko(authUser)}
              >
                作成する
              </button>
            </div>
          </form>
        </div>
      </div>
    </AppWithAuthorization>
  )
}

Create.getInitialProps = async () => {
  return {}
}

const mapStateToProps = state => ({
  authUser: state.sessionState.authUser,
})

export default connect(mapStateToProps)(Create)
