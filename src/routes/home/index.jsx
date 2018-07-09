import { h } from 'preact'
import * as Layout from '~/components/layout'
import style from './style'

const Home = () => (
  <Layout.Default>
    <div class={style.home}>
      <h1>Home</h1>
      <p>This is the Home component.</p>
    </div>
  </Layout.Default>
)

export default Home
