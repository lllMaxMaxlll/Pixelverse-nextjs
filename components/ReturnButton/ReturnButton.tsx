"use client";

import { useRouter } from "next/navigation";

function ReturnButton() {
	const router = useRouter();

	const handleGoBack = () => {
		router.back();
	};

	return <button onClick={handleGoBack}>Volver</button>;
}

export default ReturnButton;
