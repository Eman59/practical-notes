import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>localhost:3000</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main className={styles.main}>
        <h3 className="text-center mt-3 mb-3">Practicals</h3>

        <section className="container d-flex row m-auto">
          <div className="col-md-6 mb-2">
            <div className="mb-2">
              <div className="card">
                <h5 className="text-center pt-2">Remote Sensing</h5>
                <div className="card-body d-block m-auto">
                  <Link href="/assets/rs.pdf">
                    <a
                      download="/assets/rs.pdf"
                      target="_blank"
                      rel="noOpener noReferrer"
                      className={`${styles.button} ms-2 border px-2`}
                    >
                      Download
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <div className="card">
                <h5 className="text-center pt-2">Cyber Forensics</h5>
                <div className="card-body d-block m-auto">
                  <Link href="/assets/cf.pdf">
                    <a
                      download="/assets/cf.pdf"
                      target="_blank"
                      rel="noOpener noReferrer"
                      className={`${styles.button} ms-2 border px-2`}
                    >
                      Download
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-2">
              <div className="card">
                <h5 className="text-center pt-2">BlockChain</h5>
                <div className="card-body d-block m-auto">
                  <Link href="/assets/bc.pdf">
                    <a
                      download="/assets/bc.pdf"
                      target="_blank"
                      rel="noOpener noReferrer"
                      className={`${styles.button} ms-2 border px-2`}
                    >
                      Download
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            {/* <div>
              <div className="card">
                <h5 className="text-center pt-2">Image Processing</h5>
                <div className="card-body d-block m-auto">
                  <Link href="/assets/imageProcessing.docx">
                    <a
                      download="/assets/imageProcessing.docx"
                      target="_blank"
                      rel="noOpener noReferrer"
                      className={`${styles.button} ms-2 border px-2`}
                    >
                      Download
                    </a>
                  </Link>
                </div>
              </div>
            </div> */}
          </div>
        </section>
      </main>
    </div>
  );
}
