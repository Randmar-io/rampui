import styled from "@emotion/styled";

export interface ButtonLoaderProps {
	height?: number;
	thickness?: number;
	color?: string;
}

export const ButtonLoader = styled('span')<ButtonLoaderProps>((props) => {
	return (
		`
			height: ${props.height || 16}px;
			aspect-ratio: 1/1;
			border: ${props.thickness || 2}px solid ${props.color || "#FFF"};
			border-bottom-color: transparent;
			border-radius: 10px;
			display: inline-block;
			box-sizing: border-box;
			animation: rotation 0.5s linear infinite;

			@keyframes rotation {
			0% {
					transform: rotate(0deg);
			}
			100% {
					transform: rotate(360deg);
			}
		`
	)
});