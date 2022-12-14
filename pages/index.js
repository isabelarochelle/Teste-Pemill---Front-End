import Head from 'next/head';
import Menu from '../components/Menu';

function Home({data}) {
    return (
        <div>
            {console.log(data)}
            <Head>
                <meta charSet="utf-8" />
                <meta name="robots" content="index, follow" />
                <meta name="description" content="Site de cadastros de empresa" />
                <meta name="author" content="Isabela Rochelle" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" href="icon.ico"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"/>
                <title>Isabela - Home</title>
            </Head>
            <Menu />

            <section className="top">
                <div className="max-width">
                    <div className="top-content">
                        <div className="text-1">
                            {data.datahome.text_one}
                        </div>
                        <div className="text-2">
                            {data.datahome.text_two}
                        </div>
                        <div className="text-3">
                            {data.datahome.text_three}
                        </div>
                        <a href={data.datahome.btn_link}>{data.datahome.btn_title}</a>
                    </div>

                </div>

            </section>

            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
            <script src="custom.js"></script>            
        </div>
    )
}

export async function getServerSideProps(){
    const response = await fetch("http://localhost:8080/")
    const data = await response.json();
    //console.log(data);

    return { props: {data}};
}

export default Home;