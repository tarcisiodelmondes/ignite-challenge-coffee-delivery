import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
	*, *::before, *::after {
		margin: 0;
		padding: 0;
		box-sizing: inherit;
	}
			
	body {
		background: ${({ theme }) => theme["gray-100"]};
		color: ${({ theme }) => theme["gray-700"]};
		font-family: 'Roboto', 'Baloo 2', sans-serif;
		box-sizing: border-box;
		-webkit-font-smoothing: antialiased;
	}

	body, input, textarea, button {
		font-family: "Roboto", sans-serif;
		font-size: 1rem;
	}

	button {
		border: none;
		cursor: pointer;
	}

	.sr-only {
		border: 0 !important;
		clip: rect(1px, 1px, 1px, 1px) !important; 
		-webkit-clip-path: inset(50%) !important;
			clip-path: inset(50%) !important;  
		height: 1px !important;
		margin: -1px !important;
		overflow: hidden !important;
		padding: 0 !important;
		position: absolute !important;
		width: 1px !important;
		white-space: nowrap !important;          
}
`;
