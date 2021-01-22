import Link from 'next/link'
import Image from 'next/image'

export default function CardImage(props) {
  const { href, src, label } = props

  return (
    <figure className="image">
      <Link href={href}>
        <a>
          <Image
            src={src}
            alt={label}
            layout="fill"
          />
          <div className="cover">{label}</div>
        </a>
      </Link>
    </figure>
  )
}