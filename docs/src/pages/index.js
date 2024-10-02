import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import Layout from '@theme/Layout'
import GithubImage from '../../assets/icon/GitHub-Mark-64px 1.svg'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

export default function Home() {
  const { siteConfig } = useDocusaurusContext()

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <div className="home_container">
        <div className="home_titleBox abstract_flex_center home_abstract_title">
          <h1 align="center" className="home_abstract_title">
            🚀 RN Emoji Keyboard
          </h1>
          <h2 align="center" className="home_subtitle home_abstract_text">
            A lightweight, fully customizable emoji picker.
          </h2>
          <div className="home_textBox">
            <p align="center" className="home_text home_abstract_text">
              Designated to be user and developer friendly! 💖
            </p>
          </div>
        </div>
        <Link
          to="docs/documentation/about"
          className="home_documentationBox abstract_flex_center home_abstract_squareBtn"
        >
          <span className="home_title home_abstract_title">📄 Documentation</span>
        </Link>
        <a
          href="https://github.com/TheWidlarzGroup/rn-emoji-keyboard"
          target="_blank"
          className="home_githubBox abstract_flex_center home_abstract_squareBtn"
        >
          <GithubImage />
          <span className="home_githubTitle home_abstract_title">GitHub</span>
        </a>
      </div>
    </Layout>
  )
}
