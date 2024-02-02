import Image from 'next/image'
import styles from './page.module.css'
import { CurrentYearJSX } from './my_modules/time'
import React from 'react'

const Home = () => {
  return React.createElement(
    'main',
    { className: styles.main },
    React.createElement(
      'div',
      { className: styles.description },
      React.createElement(
        'p',
        null,
        'Get started by editing ',
        React.createElement('code', { className: styles.code }, 'src/app/page.js'),
      ),
      React.createElement(
        'div',
        null,
        React.createElement(
          'a',
          {
            href: 'https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app',
            target: '_blank',
            rel: 'noopener noreferrer',
          },
          'By ',
          React.createElement('img', {
            src: '/vercel.svg',
            alt: 'Vercel Logo',
            className: styles.vercelLogo,
            width: 100,
            height: 24,
          }),
        ),
      ),
    ),

    React.createElement(
      'div',
      { className: styles.center },
      React.createElement(
        'h2',
        null,
        "It's Working ...  ",

        React.createElement('img', {
          src: '/next.svg',
          alt: 'Next.js Logo',
          className: styles.logo,
          width: 180,
          height: 37,
        }),
      ),
    ),
    React.createElement(
      'div',
      { className: styles.grid },
      React.createElement(
        'a',
        {
          href: 'https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app',
          className: styles.card,
          target: '_blank',
          rel: 'noopener noreferrer',
        },
        React.createElement(
          'h2',
          null,
          'Watch Docs',
          React.createElement(
            'p',
            null,
            'Find more in-depth information about Next.js features and API !!! Wow',
          ),
        ),
      ),
      React.createElement(
        'a',
        {
          href: 'https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app',
          className: styles.card,
          target: '_blank',
          rel: 'noopener noreferrer',
        },
        React.createElement(
          'h2',
          null,
          'Learn',
          React.createElement(
            'p',
            null,
            'Learn about Next.js in an interactive course with --> quizzes!',
          ),
        ),
      ),
      React.createElement(
        'a',
        {
          href: 'https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app',
          className: styles.card,
          target: '_blank',
          rel: 'noopener noreferrer',
        },
        React.createElement(
          'h2',
          null,
          'Templates',
          React.createElement('p', null, 'Explore starter templates for Next.js.'),
        ),
      ),
      React.createElement(
        'a',
        {
          href: 'https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app',
          className: styles.card,
          target: '_blank',
          rel: 'noopener noreferrer',
        },
        React.createElement(
          'h2',
          null,
          'Deploy',
          React.createElement(
            'p',
            null,
            'Instantly deploy your Next.js site to a shareable URL with Vercel.',
          ),
        ),
      ),
    ),
    React.createElement('div', { className: styles.center }, `${CurrentYearJSX}`),
  )
}

export default Home
