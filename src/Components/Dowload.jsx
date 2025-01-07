export default function Download({link}) {
    const handleClickDownload = () => {
        const proxy = 'https://corsproxy.io/?';
        const url = proxy + link;  // Añadir el proxy al enlace

        fetch(url)
            .then((respuesta) => respuesta.blob())
            .then(file => {
                console.log(file);

                let tempUrl = URL.createObjectURL(file)
                let aTag  = document.createElement("a")
                aTag.href = tempUrl
                aTag.download = url.replace(/^.*[\\\/]/, '')
                document.body.appendChild(aTag)
                aTag.click()
                aTag.remove()
            })
            .catch((error) => console.error('Error al descargar el archivo:', error));
    }

    return (
        <button className="btn" onClick={handleClickDownload}>Descargar</button>
    );
}
