import * as React from 'react'
import Routes from '../../src/constants/routes'
import Router from 'next/router'
import { AppWithAuthorization } from '../../src/components/Layout'
import { connect } from 'react-redux'
import { createNewDaiko } from '../../src/utils/api'
import Link from 'next/link'

const create = async (e, authUser) => {
  e.preventDefault()
  // show loading

  const idToken = await authUser.getIdToken()
  const form: any = document.getElementById('new-daiko-form')
  const title = form.title.value
  const body = form.body.value
  if (title && body) {
    const id = await createNewDaiko({
      title,
      body,
      place: form.place.value,
      idToken,
    })
    Router.push(Routes.DAIKO_DETAIL(id))
  }
}

const formFields = [
  {
    id: 'title',
    text: 'タイトル',
    placeholder: 'ex) タピオカ代行',
    isText: false,
    maxLength: 40,
    required: true,
  },
  {
    id: 'body',
    text: '詳細',
    placeholder:
      'ex) あなたの代わりにタピオカの行列に並びます！/私の代わりにタピオカの行列に並んでください！',
    isText: true,
    maxLength: 400,
    required: true,
  },
  {
    id: 'place',
    text: '場所',
    placeholder: 'ex) 東京/原宿のタピオカ屋さん',
    isText: false,
    maxLength: 10,
    required: false,
  },
  // {
  //   id: 'price',
  //   text: '対価(任意)',
  //   placeholder: 'ex) 無料/スマイル/100円',
  //   isText: false,
  // },
]

const Create = ({ authUser }) => {
  return (
    <AppWithAuthorization>
      <div className="container mx-auto h-full flex justify-center items-center mt-8">
        <div className="w-full max-w-xl">
          <form
            id="new-daiko-form"
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={e => create(e, authUser)}
          >
            {formFields.map((field, key) =>
              field.isText ? (
                <div className="mb-6" key={key}>
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor={field.id}
                  >
                    {field.text}{field.required ? '(必須)' : '(任意)'}{' '}
                    <span className="text-sm text-gray-400">
                      * {field.maxLength}文字以下
                    </span>
                  </label>
                  <textarea
                    // border-red-500
                    className="h-40 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id={field.id}
                    placeholder={field.placeholder}
                    maxLength={field.maxLength}
                    required={field.required}
                  />
                  {/*<p className="text-red-500 text-xs italic">*/}
                  {/*  Please choose a password.*/}
                  {/*</p>*/}
                </div>
              ) : (
                <div className="mb-4" key={key}>
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor={field.id}
                  >
                    {field.text}{field.required ? '(必須)' : '(任意)'}{' '}
                    <span className="text-sm text-gray-400">
                      * {field.maxLength}文字以下
                    </span>
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id={field.id}
                    type="text"
                    placeholder={field.placeholder}
                    maxLength={field.maxLength}
                    required={field.required}
                  />
                </div>
              )
            )}
            <p className="text-sm text-gray-400 mb-5">
              * 作成することにより、
              <Link href={Routes.TERMS_OF_SERVICE}>「利用規約」</Link>
              に同意したとみなされます。
            </p>
            <div className="flex items-center justify-between">
              <button
                className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
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
