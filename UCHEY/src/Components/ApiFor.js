import React from 'react'

const Api = ({ prop }) => {
	return (
		<div className="api text-center">
			<span><svg width="35" height="3" viewBox="0 0 35 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="34.9972" height="2.99891" rx="1.49946" fill="#6AAC32"/>
</svg>
</span>
			<h2>{prop.Title}</h2>
			<p>{prop.text}</p>
			<div></div>
		</div>
	)
}

export default Api
