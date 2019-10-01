import * as React from 'react'
import Routes from '../../src/constants/routes'
import Link from 'next/link'

export const Footer: React.FunctionComponent = props => (
  <footer>
    <section className="bg-white py-8 w-full">
      <div className="container mx-auto px-8">
        <div className="table w-full">
          <div className="block sm:table-cell">
            <p className="uppercase text-grey text-sm sm:mb-6">リーガル</p>
            <ul className="list-reset text-xs mb-6">
              <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                <Link href={Routes.TERMS_OF_SERVICE}>利用規約</Link>
              </li>
              <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                <Link href={Routes.PRIVACY_POLICY}>プライバシーポリシー</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <p className="text-center text-gray-500 text-xs">
      &copy;2019 daiko All rights reserved.
    </p>
  </footer>
)
