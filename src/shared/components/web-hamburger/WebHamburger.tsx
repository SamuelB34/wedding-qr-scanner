import "./web-hamburger.scss"
import React from "react"

interface Props {
	onClick?: React.MouseEventHandler<HTMLLabelElement>
	checked: boolean
	dark: boolean
}

export function WebHamburger({ checked, onClick, dark }: Props) {
	return (
		<>
			<input id="checkbox" type="checkbox" checked={checked} readOnly={true} />
			<label className="toggle" onClick={onClick}>
				<div id="bar1" className={dark ? "bars__dark" : "bars"}></div>
				<div id="bar2" className={dark ? "bars__dark" : "bars"}></div>
				<div id="bar3" className={dark ? "bars__dark" : "bars"}></div>
			</label>
		</>
	)
}
