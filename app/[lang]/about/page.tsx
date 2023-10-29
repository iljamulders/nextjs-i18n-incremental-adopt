export default async function Page({ params: { lang } }: { params: { lang: string } }) {
    return <div>Current language: {lang}</div>
}
