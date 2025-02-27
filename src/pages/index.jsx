import {Head} from "minista";
import Header from "@/layouts/Header";

export const metadata = {
  title: 'Home',
}

export default function () {
  return (
    <>
      <Head htmlAttributes={{lang: 'en'}}/>
        <title>Streaming Vibe | Home</title>
      <Head/>
      <Header/>
    </>
  )
}
