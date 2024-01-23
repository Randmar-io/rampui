import styled from "@emotion/styled";
import grey from "../../colors/grey";

const height = {
	"small": "var(--r-height-30)",
	"medium": "var(--r-height-40)",
	"large": "var(--r-height-50)",
}

const thickness = {
	"small": "2px",
	"medium": "2.5px",
	"large": "3px",
}

export interface ButtonLoaderProps {
	size?: "small" | "medium" | "large";
	variant?: "primary" | "secondary" | "tertiary";
}

export const ButtonLoader = styled('span') <ButtonLoaderProps>`
	height: ${({ size }) => height[size || "medium"]};
	aspect-ratio: 1/1;
	border: ${({ size }) => thickness[size || "medium"]} solid;
	border-color: ${({ variant }) => variant === "primary" ? "#fff" : grey[300]};
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
	}
`