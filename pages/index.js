import cowsay from 'cowsay-browser'
import Head from 'next/head';

const img = {
  marginRight: 120,
  zIndex: -2,
}

const pre = {
  top: 170,
  left: 310,
  color: 'black',
  position: 'relative',
}

export default () => (
    <div>
    <Head>
        <title key="title">うしさん</title>
    </Head>

    <div style={{display:'flex',justifyContent:'center', margin: 0}}>
      <pre style={pre}>
        {cowsay.think ({ text: 'こんにちは' ,e: "^^", T:"∀"})}
      </pre>  
      <img style={img} src="/static/bg_natural_sougen.jpg"/>
    </div>
    </div>
  )