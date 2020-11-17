import Home from 'templates/Home'

export default function Index(props: any) {
  return <Home {...props} />
}

// getStaticProps => gera um estático em build time
// getServerSideProps => gera via ssr a cada request(não é possivel exportar os aquivos)
// getInitialProps => Mesma coisa que o getServerSideProps
export function getServerSideProps() {
  // faz a lógica

  // retorna os dados
  return {
    props: {
      heading: 'Olha eu aqui server side'
    }
  }
}
