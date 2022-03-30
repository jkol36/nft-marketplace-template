import { useCallback, useEffect, useState } from "react"

const useGetLikes = ({tokenAddr, tokenId}) => {
	const [loading, setLoading] = useState(false);

	const getLikes = useCallback(async () => {
		setLoading(true)
	})
}