import styled from 'styled-components';

export const Container = styled.section`
	width: 100%;
	height: 100vh;
	background: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Content = styled.div`
	width: 50%;
	background: #ffffff;
`;

export const Row = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;
