import styles from "./header.module.scss"
import Image from "next/image"

interface Props {
	dark: boolean
}

export const Header = ({
	dark = true,
}: Props) => {

	return (
		<div className={styles.header}>
			<Image
				src={"/logo.svg"}
				alt={"logo"}
				width={48}
				height={48}
				className={dark ? styles.header__dark : styles.header__light}
			/>
		</div>
	)
}
