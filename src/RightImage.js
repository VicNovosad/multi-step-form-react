export default function RightImage({stage}) {
    const IMG_URL = [
        '/assets/form-stage-1.webp',
        '/assets/form-stage-2.webp',
        '/assets/form-stage-3.webp',
        '/assets/form-stage-4.webp'
    ]

    return(
        <div 
            style={{backgroundImage: `url(${IMG_URL[stage]})`}}
            className="image">
        </div>
    )
}
  