import type {NextPage} from 'next'
import Header from '../components/Header'
import Main from '../components/Main'
import TransactionsHistory from "../components/TransactionsHistory";

const style = {
    wrapper: 'h-screen max-h-screen h-min-screen w-screen bg-[#2D242F] text-white select-none flex flex-col justify-between',
}
const Home: NextPage = () => {
    return (
        <div className={style.wrapper}>
            <Header/>
            <Main/>
            <TransactionsHistory/>
        </div>
    )
}

export default Home
