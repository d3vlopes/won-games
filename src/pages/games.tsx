import Games from 'templates/Games'

export default function GamesPage() {
  return <Games />
}

export function getServerSideProps() {
  return {
    props: {}
  }
}
